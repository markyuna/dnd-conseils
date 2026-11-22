// src/lib/analytics.ts
// Helpers serveur pour la mesure d'audience first-party (sans cookie, sans IP stockée).

import "server-only";
import { createHash } from "crypto";

const BOT_REGEX =
  /bot|crawler|spider|crawl|slurp|headless|lighthouse|pagespeed|gtmetrix|facebookexternalhit|whatsapp|preview|monitor|uptime|curl|wget|python-requests|axios|node-fetch|go-http|java\/|httpclient|vercel-screenshot/i;

export function isBot(userAgent: string | null): boolean {
  if (!userAgent) return true;
  return BOT_REGEX.test(userAgent);
}

export function parseUserAgent(ua: string) {
  const device = /ipad|tablet|playbook|silk/i.test(ua)
    ? "tablette"
    : /mobi|iphone|android/i.test(ua)
      ? "mobile"
      : "ordinateur";

  const browser = /edg\//i.test(ua)
    ? "Edge"
    : /opr\/|opera/i.test(ua)
      ? "Opera"
      : /samsungbrowser/i.test(ua)
        ? "Samsung Internet"
        : /firefox|fxios/i.test(ua)
          ? "Firefox"
          : /chrome|crios/i.test(ua)
            ? "Chrome"
            : /safari/i.test(ua)
              ? "Safari"
              : "Autre";

  const os = /windows/i.test(ua)
    ? "Windows"
    : /iphone|ipad|ipod/i.test(ua)
      ? "iOS"
      : /android/i.test(ua)
        ? "Android"
        : /mac os x|macintosh/i.test(ua)
          ? "macOS"
          : /linux/i.test(ua)
            ? "Linux"
            : "Autre";

  return { device, browser, os };
}

const SEARCH_ENGINES: Record<string, string> = {
  google: "Google",
  bing: "Bing",
  duckduckgo: "DuckDuckGo",
  qwant: "Qwant",
  ecosia: "Ecosia",
  yahoo: "Yahoo",
  brave: "Brave",
};

const SOCIALS: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  "fb.com": "Facebook",
  linkedin: "LinkedIn",
  "lnkd.in": "LinkedIn",
  "t.co": "X / Twitter",
  twitter: "X / Twitter",
  "x.com": "X / Twitter",
  youtube: "YouTube",
  tiktok: "TikTok",
  pinterest: "Pinterest",
  whatsapp: "WhatsApp",
  "l.messenger.com": "Messenger",
};

export function classifySource(
  referrerHost: string | null,
  utmSource: string | null,
  utmMedium: string | null
): string {
  const utm = utmSource?.toLowerCase();
  if (utm) {
    for (const [key, label] of [
      ...Object.entries(SEARCH_ENGINES),
      ...Object.entries(SOCIALS),
    ]) {
      if (utm.includes(key)) return label;
    }
    if (utmMedium?.toLowerCase().includes("mail")) return "Email";
    return utmSource!;
  }

  if (!referrerHost) return "Direct";
  const host = referrerHost.toLowerCase();

  for (const [key, label] of Object.entries(SEARCH_ENGINES)) {
    if (host.includes(key)) return label;
  }
  for (const [key, label] of Object.entries(SOCIALS)) {
    if (host.includes(key)) return label;
  }
  if (host.includes("mail.") || host.includes("outlook") || host.includes("gmail")) {
    return "Email";
  }
  return "Autre site";
}

// Hash quotidien : le sel change chaque jour (Europe/Paris), donc un visiteur
// n'est pas reconnaissable d'un jour à l'autre et l'IP n'est jamais stockée.
export function visitorHash(ip: string, userAgent: string): string {
  const day = new Intl.DateTimeFormat("fr-CA", {
    timeZone: "Europe/Paris",
  }).format(new Date());
  const secret =
    process.env.ANALYTICS_SALT ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "dnd-analytics";

  return createHash("sha256")
    .update(`${secret}:${day}:${ip}:${userAgent}`)
    .digest("hex")
    .slice(0, 32);
}

export function cleanString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed || null;
}

export function hostFromUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    return new URL(value).hostname.replace(/^www\./, "") || null;
  } catch {
    return null;
  }
}
