// src/lib/seo.ts

import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://dnd-conseils.vercel.app";

export const seoConfig = {
  siteName: "DND Conseils",
  siteUrl,
  defaultTitle:
    "DND Conseils — Conseil indépendant avant travaux et rénovation",
  defaultDescription:
    "DND Conseils accompagne les particuliers avant leurs travaux de rénovation : analyse, conseil indépendant, étude gratuite et aide à la décision avant de s’engager.",
  defaultImage: "/images/og-dnd-conseils.jpg",
  locale: "fr_FR",
  author: "DND Conseils",
  keywords: [
    "conseil travaux",
    "conseil rénovation",
    "accompagnement travaux",
    "conseiller indépendant travaux",
    "rénovation maison",
    "rénovation appartement",
    "étude gratuite travaux",
    "devis travaux",
    "courtier travaux",
    "assistance rénovation",
    "expert travaux particulier",
    "DND Conseils",
  ],
};

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function generateSeo({
  title,
  description,
  path = "",
  image,
  keywords = [],
  noIndex = false,
}: SeoInput = {}): Metadata {
  const finalTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;

  const finalDescription = description || seoConfig.defaultDescription;
  const finalUrl = `${seoConfig.siteUrl}${path}`;
  const finalImage = `${seoConfig.siteUrl}${image || seoConfig.defaultImage}`;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [...seoConfig.keywords, ...keywords],
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.siteName,

    metadataBase: new URL(seoConfig.siteUrl),

    alternates: {
      canonical: finalUrl,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },

    openGraph: {
      type: "website",
      locale: seoConfig.locale,
      url: finalUrl,
      siteName: seoConfig.siteName,
      title: finalTitle,
      description: finalDescription,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
    },
  };
}