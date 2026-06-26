// src/lib/schema.ts

import { getAbsoluteUrl, seoConfig } from "@/lib/seo";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: getAbsoluteUrl("/logo.png"),
    description:
      "DND Conseils accompagne les particuliers avant leurs travaux de rénovation avec un regard indépendant, structuré et stratégique.",
    telephone: "+33604522405",
    email: "dndconseil75@gmail.com",
    sameAs: [],
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    image: getAbsoluteUrl(seoConfig.defaultImage),
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
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

export function faqSchema(questions: FaqItem[]) {
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