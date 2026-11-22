// src/app/api/track/route.ts
// Réception des pages vues / événements. Public, mais validé et filtré.

import { NextResponse } from "next/server";

import {
  classifySource,
  cleanString,
  hostFromUrl,
  isBot,
  parseUserAgent,
  visitorHash,
} from "@/lib/analytics";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OWN_HOSTS = ["dndconseils.fr", "localhost"];
const ALLOWED_EVENTS = new Set([
  "lead_submitted",
  "cta_click",
  "phone_click",
  "email_click",
  "quote_started",
]);

function ok() {
  // Toujours 204 : le client n'a pas à connaître le résultat.
  return new NextResponse(null, { status: 204 });
}

export async function POST(req: Request) {
  try {
    const userAgent = req.headers.get("user-agent");
    if (isBot(userAgent)) return ok();

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") return ok();

    const path = cleanString((body as Record<string, unknown>).path, 300);
    if (!path || !path.startsWith("/")) return ok();
    // Jamais de suivi de l'espace admin ni des routes techniques.
    if (path.startsWith("/admin") || path.startsWith("/api")) return ok();

    const type = (body as Record<string, unknown>).type === "event" ? "event" : "pageview";
    const eventName = cleanString((body as Record<string, unknown>).name, 50);
    if (type === "event" && (!eventName || !ALLOWED_EVENTS.has(eventName))) {
      return ok();
    }

    const referrerRaw = cleanString((body as Record<string, unknown>).referrer, 500);
    let referrerHost = hostFromUrl(referrerRaw);
    // Navigation interne ou même site : on ne la compte pas comme référent.
    if (referrerHost && OWN_HOSTS.some((h) => referrerHost!.endsWith(h))) {
      referrerHost = null;
    }

    const utmSource = cleanString((body as Record<string, unknown>).utm_source, 100);
    const utmMedium = cleanString((body as Record<string, unknown>).utm_medium, 100);
    const utmCampaign = cleanString((body as Record<string, unknown>).utm_campaign, 100);

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    const ua = parseUserAgent(userAgent!);
    const decode = (v: string | null) => {
      if (!v) return null;
      try {
        return decodeURIComponent(v);
      } catch {
        return v;
      }
    };

    const language = cleanString(
      req.headers.get("accept-language")?.split(",")[0]?.split("-")[0],
      8
    );

    const { error } = await supabaseAdmin.from("analytics_events").insert({
      event_type: type,
      event_name: type === "event" ? eventName : null,
      path,
      visitor_hash: visitorHash(ip, userAgent!),
      referrer_host: referrerHost,
      source: classifySource(referrerHost, utmSource, utmMedium),
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      // En-têtes de géolocalisation fournis par Vercel (aucune IP conservée).
      country: req.headers.get("x-vercel-ip-country"),
      region: decode(req.headers.get("x-vercel-ip-country-region")),
      city: decode(req.headers.get("x-vercel-ip-city")),
      device: ua.device,
      browser: ua.browser,
      os: ua.os,
      language,
    });

    if (error) console.error("analytics insert error:", error.message);
  } catch (err) {
    console.error("analytics track error:", err);
  }

  return ok();
}
