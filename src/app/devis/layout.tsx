import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { generateSeo } from "@/lib/seo";

const title = "Demander une étude gratuite ou un devis";
const description =
  "Décrivez votre projet de rénovation ou de travaux. DND Conseils vous répond sous 48h avec une première orientation claire et personnalisée, sans engagement.";

export const metadata: Metadata = generateSeo({
  title,
  description,
  path: "/devis",
  keywords: [
    "demande devis travaux",
    "étude gratuite rénovation",
    "devis accompagnement travaux",
    "demande conseil rénovation",
    "contact conseiller travaux",
  ],
});

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/devis",
            name: title,
            description,
            type: "ContactPage",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Demander une étude", path: "/devis" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
