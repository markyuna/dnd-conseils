// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

import { getOfferLabel } from "@/lib/offers";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const fromEmail =
  process.env.DND_FROM_EMAIL || "DND Conseils <onboarding@resend.dev>";

const adminEmail = process.env.DND_ADMIN_EMAIL || "dndconseil75@gmail.com";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dndconseils.fr";

function emailShell(bodyHtml: string) {
  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DND Conseils</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f8f5f2; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f5f2;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px; width:100%; background-color:#ffffff; border:1px solid #eee2d8; border-radius:16px;">
            ${bodyHtml}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function emailHeader(eyebrow: string) {
  return `
    <tr>
      <td style="background-color:#1a1a1a; padding:32px 40px 28px; text-align:center; border-radius:16px 16px 0 0;">
        <p style="margin:0; font-size:20px; font-weight:bold; letter-spacing:3px; color:#ffffff; text-transform:uppercase; font-family: Arial, Helvetica, sans-serif;">
          DND Conseils
        </p>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:14px auto;">
          <tr>
            <td style="width:40px; height:2px; background-color:#a89278; font-size:0; line-height:0;">&nbsp;</td>
          </tr>
        </table>
        <p style="margin:0; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#a89278; font-family: Arial, Helvetica, sans-serif;">
          ${eyebrow}
        </p>
      </td>
    </tr>
  `;
}

function buildClientConfirmationEmail(safeName: string) {
  const body = `
    ${emailHeader("Demande reçue")}
    <tr>
      <td style="padding:40px 40px 24px; font-family: Arial, Helvetica, sans-serif; color:#1a1a1a;">
        <p style="margin:0 0 16px; font-size:20px; font-weight:bold;">Merci ${safeName},</p>
        <p style="margin:0; font-size:15px; line-height:24px; color:#444444;">
          Votre demande a bien été envoyée à DND Conseils. Nous reviendrons vers vous rapidement afin d’étudier votre projet et de vous proposer une première orientation claire.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 40px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f6f2ee; border-radius:12px;">
          <tr>
            <td style="padding:24px 28px;">
              <p style="margin:0 0 16px; font-size:12px; font-weight:bold; letter-spacing:1.5px; text-transform:uppercase; color:#a89278; font-family: Arial, Helvetica, sans-serif;">
                Et maintenant ?
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-bottom:14px; vertical-align:top; width:32px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="width:24px; height:24px; border-radius:50%; background-color:#1a1a1a; color:#ffffff; font-size:12px; font-weight:bold; text-align:center; line-height:24px; font-family: Arial, Helvetica, sans-serif;">1</td></tr></table>
                  </td>
                  <td style="padding-bottom:14px; padding-left:12px; vertical-align:top; font-size:14px; line-height:20px; color:#333333; font-family: Arial, Helvetica, sans-serif;">
                    Nous étudions votre projet et vos besoins.
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:14px; vertical-align:top; width:32px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="width:24px; height:24px; border-radius:50%; background-color:#1a1a1a; color:#ffffff; font-size:12px; font-weight:bold; text-align:center; line-height:24px; font-family: Arial, Helvetica, sans-serif;">2</td></tr></table>
                  </td>
                  <td style="padding-bottom:14px; padding-left:12px; vertical-align:top; font-size:14px; line-height:20px; color:#333333; font-family: Arial, Helvetica, sans-serif;">
                    Nous vous recontactons rapidement.
                  </td>
                </tr>
                <tr>
                  <td style="vertical-align:top; width:32px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="width:24px; height:24px; border-radius:50%; background-color:#1a1a1a; color:#ffffff; font-size:12px; font-weight:bold; text-align:center; line-height:24px; font-family: Arial, Helvetica, sans-serif;">3</td></tr></table>
                  </td>
                  <td style="padding-left:12px; vertical-align:top; font-size:14px; line-height:20px; color:#333333; font-family: Arial, Helvetica, sans-serif;">
                    Nous échangeons ensemble sur la suite à donner à votre projet.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 40px 40px; text-align:center; border-top:1px solid #eee2d8;">
        <p style="margin:24px 0 4px; font-size:13px; color:#666666; font-family: Arial, Helvetica, sans-serif;">
          L’équipe DND Conseils
        </p>
        <p style="margin:0; font-size:12px; font-family: Arial, Helvetica, sans-serif;">
          <a href="${siteUrl}" style="color:#a89278; text-decoration:none;">dndconseils.fr</a>
        </p>
      </td>
    </tr>
  `;

  return emailShell(body);
}

function buildAdminNotificationEmail(fields: {
  safeName: string;
  safeEmail: string;
  safePhone: string;
  safeOffer: string;
  safeRequestType: string;
  safeProjectType: string;
  safeTypeBien: string;
  safeSurface: string;
  safeLots: string;
  safeTiming: string;
  safeBudget: string;
  safeDocuments: string;
  safeMessage: string;
}) {
  const {
    safeName,
    safeEmail,
    safePhone,
    safeOffer,
    safeRequestType,
    safeProjectType,
    safeTypeBien,
    safeSurface,
    safeLots,
    safeTiming,
    safeBudget,
    safeDocuments,
    safeMessage,
  } = fields;

  const detailRows = [
    ["Offre", safeOffer],
    ["Type de demande", safeRequestType],
    ["Type de projet", safeProjectType],
    ["Type de bien", safeTypeBien],
    ["Surface", safeSurface],
    ["Lots", safeLots],
    ["Timing", safeTiming],
    ["Budget", safeBudget],
    ["Documents", safeDocuments],
  ]
    .map(([label, value], index) => {
      const rowColor = index % 2 === 0 ? "#f6f2ee" : "#ffffff";

      return `
        <tr>
          <td style="padding:12px 20px; background-color:${rowColor}; font-size:13px; font-weight:bold; color:#1a1a1a; width:160px; font-family: Arial, Helvetica, sans-serif;">
            ${label}
          </td>
          <td style="padding:12px 20px; background-color:${rowColor}; font-size:13px; color:#444444; font-family: Arial, Helvetica, sans-serif;">
            ${value}
          </td>
        </tr>
      `;
    })
    .join("");

  const body = `
    ${emailHeader("Nouveau lead")}
    <tr>
      <td style="padding:32px 40px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1a1a1a; border-radius:12px;">
          <tr>
            <td style="padding:24px 28px;">
              <p style="margin:0 0 6px; font-size:17px; font-weight:bold; color:#ffffff; font-family: Arial, Helvetica, sans-serif;">
                ${safeName}
              </p>
              <p style="margin:0 0 4px; font-size:13px; font-family: Arial, Helvetica, sans-serif;">
                <a href="mailto:${safeEmail}" style="color:#d9c8b4; text-decoration:none;">${safeEmail}</a>
              </p>
              <p style="margin:0; font-size:13px; font-family: Arial, Helvetica, sans-serif;">
                <a href="tel:${safePhone}" style="color:#d9c8b4; text-decoration:none;">${safePhone}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 40px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #eee2d8; border-radius:12px;">
          ${detailRows}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 40px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f6f2ee; border-left:3px solid #a89278; border-radius:8px;">
          <tr>
            <td style="padding:20px 24px;">
              <p style="margin:0 0 8px; font-size:12px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#a89278; font-family: Arial, Helvetica, sans-serif;">
                Message
              </p>
              <p style="margin:0; font-size:14px; line-height:22px; color:#333333; font-family: Arial, Helvetica, sans-serif;">
                ${safeMessage}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:32px 40px 40px; text-align:center;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
          <tr>
            <td style="border-radius:999px; background-color:#1a1a1a;">
              <a href="${siteUrl}/admin/leads" style="display:inline-block; padding:14px 32px; font-size:13px; font-weight:bold; color:#ffffff; text-decoration:none; letter-spacing:0.5px; font-family: Arial, Helvetica, sans-serif;">
                Voir dans l’admin
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;

  return emailShell(body);
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
          subject: `Nouveau lead reçu — ${name}`,
          html: buildAdminNotificationEmail({
            safeName,
            safeEmail,
            safePhone,
            safeOffer,
            safeRequestType,
            safeProjectType,
            safeTypeBien,
            safeSurface,
            safeLots,
            safeTiming,
            safeBudget,
            safeDocuments,
            safeMessage,
          }),
        }),

        resend.emails.send({
          from: fromEmail,
          to: [email],
          subject: "Votre demande a bien été reçue",
          html: buildClientConfirmationEmail(safeName),
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