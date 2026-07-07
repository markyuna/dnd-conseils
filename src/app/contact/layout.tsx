import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Contact — DND Conseils",
  description:
    "Contactez DND Conseils pour parler de votre projet de travaux. Réponse sous 2h ouvrées, sans engagement. Échangez avec un expert en rénovation.",
  path: "/contact",
  keywords: [
    "contact DND Conseils",
    "conseil travaux contact",
    "parler projet rénovation",
    "accompagnement travaux contact",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
