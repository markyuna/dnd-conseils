import type { Metadata } from "next";
import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Demander une étude gratuite ou un devis",
  description:
    "Décrivez votre projet de rénovation ou de travaux. DND Conseils vous répond sous 48h avec une première orientation claire et personnalisée.",
  path: "/devis",
  keywords: [
    "demande devis travaux",
    "étude gratuite rénovation",
    "devis accompagnement travaux",
    "demande conseil rénovation",
  ],
});

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
