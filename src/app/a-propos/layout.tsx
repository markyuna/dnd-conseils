import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { generateSeo } from "@/lib/seo";

// La page /a-propos est un composant client : ses métadonnées sont donc
// déclarées ici. Sans ce fichier, elle héritait du titre de la page d'accueil.
const title = "À propos — Denis, conseiller travaux indépendant";
const description =
  "Découvrez DND Conseils et son fondateur Denis : 10 ans de terrain, un conseil travaux 100 % indépendant et réservé aux particuliers, sans commission ni partenariat avec des artisans.";

export const metadata: Metadata = generateSeo({
  title,
  description,
  path: "/a-propos",
  image: "/apropos/denis.webp",
  imageAlt: "Denis, fondateur de DND Conseils, conseiller indépendant en travaux",
  type: "profile",
  keywords: [
    "conseiller travaux indépendant",
    "expert rénovation particulier",
    "fondateur DND Conseils",
    "conseil travaux sans commission",
  ],
});

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/a-propos",
            name: title,
            description,
            type: "AboutPage",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "À propos", path: "/a-propos" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
