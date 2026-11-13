// src/lib/seo.ts

import type { Metadata } from "next";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.dndconseils.fr";

const siteUrl = rawSiteUrl.replace(/\/$/, "");

function normalizePath(path: string) {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${siteUrl}${normalizePath(pathOrUrl)}`;
}

function uniqueKeywords(keywords: string[]) {
  return Array.from(new Set(keywords.map((keyword) => keyword.trim()))).filter(
    Boolean
  );
}

export const seoConfig = {
  siteName: "DND Conseils",
  siteUrl,
  defaultTitle:
    "DND Conseils — Conseil travaux et rénovation indépendant",
  defaultDescription:
    "Conseiller travaux indépendant pour particuliers en Île-de-France et à distance : analyse de devis, accompagnement rénovation et étude gratuite avant de vous engager.",
  defaultImage: "/images/og-dnd-conseils.jpg",
  locale: "fr_FR",
  language: "fr-FR",
  themeColor: "#17130f",
  backgroundColor: "#f6f2ee",
  author: "DND Conseils",
  brandKeywords: ["DND Conseils", "DND Conseil"],
};

/**
 * Coordonnées et informations légales de l'entreprise.
 * Source unique pour les données structurées (JSON-LD) — doivent rester
 * identiques aux mentions légales et au footer (cohérence NAP pour le SEO local).
 */
export const businessInfo = {
  legalName: "DND CONSEIL",
  siren: "132529637",
  telephone: "+33604522405",
  email: "dndconseil75@gmail.com",
  founder: {
    name: "Denis Nouaille-Degorce",
    jobTitle: "Fondateur — Conseiller indépendant en travaux",
    image: "/apropos/denis.webp",
  },
  address: {
    streetAddress: "134 Route de Glandelles",
    postalCode: "77167",
    addressLocality: "Bagneaux-sur-Loing",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: ["Paris", "Seine-et-Marne", "Île-de-France", "France"],
  sameAs: ["https://www.instagram.com/dnd_conseil/"],
};

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "article" | "profile";
};

/**
 * Métadonnées racine (app/layout.tsx). Volontairement SANS `alternates.canonical` :
 * un canonical défini dans le layout serait hérité par toutes les pages qui
 * n'en définissent pas, et les ferait pointer vers la page d'accueil.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.defaultDescription,
  applicationName: seoConfig.siteName,
  authors: [{ name: seoConfig.author, url: seoConfig.siteUrl }],
  creator: seoConfig.author,
  publisher: seoConfig.siteName,
  category: "Conseil travaux et rénovation",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
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
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: seoConfig.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [seoConfig.defaultImage],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export function generateSeo({
  title,
  description,
  path = "",
  image,
  imageAlt,
  keywords = [],
  noIndex = false,
  type = "website",
}: SeoInput = {}): Metadata {
  const finalTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;

  const finalDescription = description || seoConfig.defaultDescription;
  const finalUrl = absoluteUrl(path);
  const finalImage = absoluteUrl(image || seoConfig.defaultImage);

  return {
    // `absolute` : le titre est déjà suffixé ici, on ignore le template du layout.
    title: { absolute: finalTitle },
    description: finalDescription,

    keywords: uniqueKeywords([...keywords, ...seoConfig.brandKeywords]),

    alternates: {
      canonical: finalUrl,
    },

    // Pages non indexées : on laisse Google suivre les liens (follow) pour ne
    // pas couper la circulation du « jus » SEO interne. Pour les pages
    // indexables, la clé est omise afin d'hériter des robots du layout racine
    // (une valeur `undefined` explicite écraserait celle-ci).
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: {
              index: false,
              follow: true,
            },
          },
        }
      : {}),

    openGraph: {
      type,
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
          alt: imageAlt || finalTitle,
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

export function getAbsoluteUrl(pathOrUrl: string) {
  return absoluteUrl(pathOrUrl);
}
