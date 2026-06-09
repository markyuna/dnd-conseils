// src/lib/schema.ts

import { seoConfig } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DND Conseils",
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    description:
      "DND Conseils accompagne les particuliers avant leurs travaux de rénovation avec un regard indépendant, structuré et stratégique.",
    sameAs: [],
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DND Conseils",
    url: seoConfig.siteUrl,
    image: `${seoConfig.siteUrl}${seoConfig.defaultImage}`,
    description:
      "Conseil indépendant pour particuliers avant travaux de rénovation, analyse de projet, étude gratuite et accompagnement à la décision.",
    areaServed: [
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "AdministrativeArea",
        name: "Île-de-France",
      },
    ],
    serviceType: [
      "Conseil travaux",
      "Accompagnement rénovation",
      "Étude gratuite avant travaux",
      "Analyse de devis travaux",
      "Aide à la décision avant rénovation",
    ],
    priceRange: "€€",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DND Conseils",
    url: seoConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${seoConfig.siteUrl}/recherche?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: {
    name: string;
    path: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(
  questions: {
    question: string;
    answer: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}