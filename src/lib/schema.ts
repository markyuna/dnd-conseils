// src/lib/schema.ts
//
// Données structurées schema.org (JSON-LD).
// Les entités globales (entreprise, site, fondateur) sont reliées par des `@id`
// stables afin que Google les comprenne comme un seul « graphe de connaissance ».

import { currentOfferIds, offers } from "@/lib/offers";
import { businessInfo, getAbsoluteUrl, seoConfig } from "@/lib/seo";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const schemaIds = {
  organization: `${seoConfig.siteUrl}/#organization`,
  website: `${seoConfig.siteUrl}/#website`,
  founder: `${seoConfig.siteUrl}/#founder`,
  logo: `${seoConfig.siteUrl}/#logo`,
};

function areaServedSchema() {
  return businessInfo.areaServed.map((name) => {
    if (name === "France") return { "@type": "Country", name };
    if (name === "Paris") return { "@type": "City", name };
    return { "@type": "AdministrativeArea", name };
  });
}

function offerCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    name: "Formules et packs DND Conseils",
    itemListElement: currentOfferIds.map((id) => {
      const offer = offers[id];
      const hasPrice = typeof offer.minPrice === "number";

      return {
        "@type": "Offer",
        name: offer.title,
        url: getAbsoluteUrl(`/devis?offre=${id}`),
        itemOffered: {
          "@type": "Service",
          name: offer.title,
          provider: { "@id": schemaIds.organization },
        },
        ...(hasPrice
          ? {
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                minPrice: offer.minPrice,
                ...(offer.maxPrice ? { maxPrice: offer.maxPrice } : {}),
                valueAddedTaxIncluded: false,
              },
            }
          : {}),
      };
    }),
  };
}

function organizationNode() {
  return {
    "@type": "ProfessionalService",
    "@id": schemaIds.organization,
    name: seoConfig.siteName,
    alternateName: businessInfo.legalName,
    legalName: businessInfo.legalName,
    url: seoConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": schemaIds.logo,
      url: getAbsoluteUrl("/logo.webp"),
      width: 560,
      height: 240,
      caption: seoConfig.siteName,
    },
    image: getAbsoluteUrl(seoConfig.defaultImage),
    description:
      "Conseiller travaux indépendant pour particuliers : analyse de devis, accompagnement rénovation, étude gratuite et aide à la décision avant travaux. Aucune commission, aucun partenariat avec des entreprises.",
    slogan: "Une méthode pour maîtriser vos travaux.",
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "SIREN",
      value: businessInfo.siren,
    },
    taxID: businessInfo.siren,
    founder: { "@id": schemaIds.founder },
    sameAs: businessInfo.sameAs,
    areaServed: areaServedSchema(),
    knowsLanguage: "fr",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: businessInfo.telephone,
      email: businessInfo.email,
      availableLanguage: ["French"],
      areaServed: "FR",
    },
    knowsAbout: [
      "Rénovation de maison",
      "Rénovation d'appartement",
      "Analyse de devis travaux",
      "Accompagnement de projet de rénovation",
      "Budget travaux",
      "Suivi de chantier",
    ],
    hasOfferCatalog: offerCatalogSchema(),
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": schemaIds.website,
    name: seoConfig.siteName,
    alternateName: businessInfo.legalName,
    url: seoConfig.siteUrl,
    inLanguage: seoConfig.language,
    publisher: { "@id": schemaIds.organization },
  };
}

function founderNode() {
  return {
    "@type": "Person",
    "@id": schemaIds.founder,
    name: businessInfo.founder.name,
    jobTitle: businessInfo.founder.jobTitle,
    image: getAbsoluteUrl(businessInfo.founder.image),
    url: getAbsoluteUrl("/a-propos"),
    worksFor: { "@id": schemaIds.organization },
  };
}

/** Graphe global injecté sur toutes les pages (layout racine). */
export function siteGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), founderNode()],
  };
}

type WebPageInput = {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
};

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: WebPageInput) {
  const url = getAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: seoConfig.language,
    isPartOf: { "@id": schemaIds.website },
    about: { "@id": schemaIds.organization },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: getAbsoluteUrl(seoConfig.defaultImage),
    },
    ...(type === "AboutPage" ? { mainEntity: { "@id": schemaIds.founder } } : {}),
  };
}

type ServiceInput = {
  path: string;
  name: string;
  description: string;
  serviceType: string;
};

export function serviceSchema({
  path,
  name,
  description,
  serviceType,
}: ServiceInput) {
  const url = getAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    url,
    provider: { "@id": schemaIds.organization },
    areaServed: areaServedSchema(),
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Particuliers",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: getAbsoluteUrl("/devis"),
      servicePhone: businessInfo.telephone,
    },
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
