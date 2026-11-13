// src/lib/offers.ts
// Single source of truth for offer/pack pricing, shared between the
// /devis page (form + prefill) and the contact API (admin email label).

export type OfferType = "formule" | "pack";

export type Offer = {
  title: string;
  price: string;
  type: OfferType;
  /** Prix HT numériques, utilisés pour les données structurées (JSON-LD). */
  minPrice?: number;
  maxPrice?: number;
};

export const offers: Record<string, Offer> = {
  "diagnostic-flash": {
    title: "Forfait Diagnostic / Flash",
    price: "150 € à 250 € HT",
    type: "formule",
    minPrice: 150,
    maxPrice: 250,
  },
  "analyse-devis": {
    title: "Analyse des devis",
    price: "190 € à 290 € HT",
    type: "formule",
    minPrice: 190,
    maxPrice: 290,
  },
  "suivi-chantier": {
    title: "Suivi et coordination",
    price: "120 € à 600 € HT",
    type: "formule",
    minPrice: 120,
    maxPrice: 600,
  },
  "audit-budgetaire": {
    title: "Forfait Audit Budgétaire",
    price: "250 € à 450 € HT",
    type: "formule",
    minPrice: 250,
    maxPrice: 450,
  },
  "pack-essentiel": {
    title: "Pack Essentiel",
    price: "À partir de 390 € HT",
    type: "pack",
    minPrice: 390,
  },
  "pack-serenite": {
    title: "Pack Sérénité",
    price: "À partir de 790 € HT",
    type: "pack",
    minPrice: 790,
  },
  "pack-chantier": {
    title: "Pack Chantier",
    price: "Sur devis",
    type: "pack",
  },

  // Compatibilité avec les anciens liens déjà présents dans le projet
  essentiel: {
    title: "Pack Essentiel",
    price: "À partir de 390 € HT",
    type: "pack",
    minPrice: 390,
  },
  serenite: {
    title: "Pack Sérénité",
    price: "À partir de 790 € HT",
    type: "pack",
    minPrice: 790,
  },
  premium: {
    title: "Pack Chantier",
    price: "Sur devis",
    type: "pack",
  },
};

/** Offres actuelles (sans les alias de compatibilité). */
export const currentOfferIds = [
  "diagnostic-flash",
  "analyse-devis",
  "suivi-chantier",
  "audit-budgetaire",
  "pack-essentiel",
  "pack-serenite",
  "pack-chantier",
] as const;

export function getOfferLabel(offer: string): string {
  const found = offers[offer];
  if (!found) return offer || "Non renseignée";

  return `${found.title} — ${found.price}`;
}
