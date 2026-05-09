import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      offre,
      typeProjet,
      budget,
      message,
    } = body;

    // 📩 EMAIL PARA TI
    await resend.emails.send({
      from: "DND Conseils <onboarding@resend.dev>",
      to: ["marcosparis@hotmail.fr"],
      subject: "🔥 Nouveau lead reçu",
      html: `
        <h2>Nouveau contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Offre:</strong> ${offre}</p>
        <p><strong>Projet:</strong> ${typeProjet}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 📩 EMAIL CLIENT
    await resend.emails.send({
      from: "DND Conseils <onboarding@resend.dev>",
      to: [email],
      subject: "Votre demande a bien été reçue",
      html: `
        <h2>Bonjour ${name},</h2>
        <p>Merci pour votre demande.</p>
        <p>Nous revenons vers vous sous 48h avec une première analyse.</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}