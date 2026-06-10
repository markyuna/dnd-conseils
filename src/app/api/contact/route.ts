// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const fromEmail =
  process.env.DND_FROM_EMAIL || "DND Conseils <onboarding@resend.dev>";

const adminEmail = process.env.DND_ADMIN_EMAIL || "dndconseils@gmail.com";

function clean(value: unknown) {
  if (Array.isArray(value)) return value.map(String).join(", ");
  if (typeof value === "string") return value.trim();
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function normalizeDocuments(value: unknown) {
  if (!value) return "";

  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim())
      .filter(Boolean)
      .join(", ");
  }

  if (typeof value === "string") {
    return value.trim();
  }

  return String(value).trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getOfferLabel(offer: string) {
  const labels: Record<string, string> = {
    essentiel: "Essentiel — À partir de 99€",
    serenite: "Sérénité — À partir de 249€",
    premium: "Premium — À partir de 499€",

    "diagnostic-flash": "Forfait Diagnostic / Flash",
    "analyse-devis": "Analyse des devis",
    "suivi-chantier": "Suivi et coordination",
    "audit-budgetaire": "Audit Budgétaire",

    "pack-essentiel": "Pack Essentiel",
    "pack-serenite": "Pack Sérénité",
    "pack-chantier": "Pack Chantier",
  };

  return labels[offer] || offer || "Non renseignée";
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Requête invalide" },
        { status: 400 }
      );
    }

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);

    const offer = clean(body.offer || body.offre);
    const requestType = clean(body.request_type || body.requestType || "devis");

    const projectType = clean(
      body.project_type ||
        body.projectType ||
        body.typeProjet ||
        body.type_projet
    );

    const typeBien = clean(body.type_bien || body.typeBien);
    const surface = clean(body.surface);
    const lots = clean(body.lots);
    const timing = clean(body.timing);
    const budget = clean(body.budget);
    const documents = normalizeDocuments(body.documents);
    const message = clean(body.message);

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Nom et email obligatoires" },
        { status: 400 }
      );
    }

    const { data: lead, error: supabaseError } = await supabaseAdmin
      .from("contact_requests")
      .insert({
        name,
        email,
        phone,
        request_type: requestType,
        offer,
        project_type: projectType,
        type_bien: typeBien,
        surface,
        lots,
        timing,
        budget,
        documents,
        message,
        status: "new",
      })
      .select("id")
      .single();

    if (supabaseError) {
      console.error("Supabase contact_requests insert error:", supabaseError);

      return NextResponse.json(
        {
          success: false,
          error: "Erreur lors de l’enregistrement de la demande",
          details: supabaseError.message,
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Non renseigné");
    const safeOffer = escapeHtml(getOfferLabel(offer));
    const safeRequestType = escapeHtml(requestType || "Non renseigné");
    const safeProjectType = escapeHtml(projectType || "Non renseigné");
    const safeTypeBien = escapeHtml(typeBien || "Non renseigné");
    const safeSurface = escapeHtml(surface || "Non renseignée");
    const safeLots = escapeHtml(lots || "Non renseignés");
    const safeTiming = escapeHtml(timing || "Non renseigné");
    const safeBudget = escapeHtml(budget || "Non renseigné");
    const safeDocuments = escapeHtml(documents || "Aucun document");
    const safeMessage = escapeHtml(message || "Aucun message");

    if (resend) {
      const emailResults = await Promise.allSettled([
        resend.emails.send({
          from: fromEmail,
          to: [adminEmail],
          subject: "Nouveau lead reçu — DND Conseils",
          html: `
            <h2>Nouveau contact</h2>
            <p><strong>Nom :</strong> ${safeName}</p>
            <p><strong>Email :</strong> ${safeEmail}</p>
            <p><strong>Téléphone :</strong> ${safePhone}</p>
            <p><strong>Offre :</strong> ${safeOffer}</p>
            <p><strong>Type de demande :</strong> ${safeRequestType}</p>
            <p><strong>Type de projet :</strong> ${safeProjectType}</p>
            <p><strong>Type de bien :</strong> ${safeTypeBien}</p>
            <p><strong>Surface :</strong> ${safeSurface}</p>
            <p><strong>Lots :</strong> ${safeLots}</p>
            <p><strong>Timing :</strong> ${safeTiming}</p>
            <p><strong>Budget :</strong> ${safeBudget}</p>
            <p><strong>Documents :</strong> ${safeDocuments}</p>
            <p><strong>Message :</strong></p>
            <p>${safeMessage}</p>
          `,
        }),

        resend.emails.send({
          from: fromEmail,
          to: [email],
          subject: "Votre demande a bien été reçue",
          html: `
            <h2>Merci ${safeName},</h2>
            <p>Votre demande a bien été envoyée à DND Conseils.</p>
            <p>Nous reviendrons vers vous rapidement afin d’étudier votre projet.</p>
            <br />
            <p>L’équipe DND Conseils</p>
          `,
        }),
      ]);

      emailResults.forEach((result, index) => {
        if (result.status === "rejected") {
          console.error(
            index === 0
              ? "Erreur email admin Resend:"
              : "Erreur email client Resend:",
            result.reason
          );
        }
      });
    } else {
      console.warn("RESEND_API_KEY manquante — emails non envoyés.");
    }

    return NextResponse.json({
      success: true,
      leadId: lead.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}