import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase-admin";

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail =
  process.env.DND_FROM_EMAIL || "DND Conseils <onboarding@resend.dev>";

const adminEmail = process.env.DND_ADMIN_EMAIL || "dndconseils@gmail.com";

function clean(value: unknown) {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "string") return value.trim();
  if (value === null || value === undefined) return "";
  return String(value);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);

    const offre = clean(body.offre || body.offer);
    const typeProjet = clean(
      body.typeProjet || body.projectType || body.type_projet
    );

    const typeBien = clean(body.typeBien || body.type_bien);
    const surface = clean(body.surface);
    const lots = clean(body.lots);
    const timing = clean(body.timing);
    const budget = clean(body.budget);
    const documents = clean(body.documents);
    const message = clean(body.message);

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Nom et email obligatoires" },
        { status: 400 }
      );
    }

    const { error: supabaseError } = await supabaseAdmin
      .from("contact_requests")
      .insert({
        name,
        email,
        phone,
        offre,
        type_projet: typeProjet,
        type_bien: typeBien,
        surface,
        lots,
        timing,
        budget,
        documents,
        message,
      });

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);

      return NextResponse.json(
        { success: false, error: "Erreur Supabase" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      subject: "Nouveau lead reçu — DND Conseils",
      html: `
        <h2>Nouveau contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Offre :</strong> ${offre || "Non renseignée"}</p>
        <p><strong>Type de projet :</strong> ${
          typeProjet || "Non renseigné"
        }</p>
        <p><strong>Type de bien :</strong> ${typeBien || "Non renseigné"}</p>
        <p><strong>Surface :</strong> ${surface || "Non renseignée"}</p>
        <p><strong>Lots :</strong> ${lots || "Non renseignés"}</p>
        <p><strong>Timing :</strong> ${timing || "Non renseigné"}</p>
        <p><strong>Budget :</strong> ${budget || "Non renseigné"}</p>
        <p><strong>Documents :</strong> ${documents || "Aucun document"}</p>
        <p><strong>Message :</strong></p>
        <p>${message || "Aucun message"}</p>
      `,
    });

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Votre demande a bien été reçue",
      html: `
        <h2>Merci ${name},</h2>
        <p>Votre demande a bien été envoyée à DND Conseils.</p>
        <p>Nous reviendrons vers vous rapidement afin d’étudier votre projet.</p>
        <br />
        <p>L’équipe DND Conseils</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}