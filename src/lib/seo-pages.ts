// src/lib/seo-pages.ts

export type SeoServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  benefits: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  keywords: string[];
};

export const seoServicePages: SeoServicePage[] = [
  {
    slug: "conseil-travaux",
    title: "Conseil travaux",
    metaTitle: "Conseil travaux indépendant avant de vous engager",
    description:
      "Bénéficiez d’un regard indépendant avant vos travaux pour clarifier vos choix, anticiper les risques et avancer avec plus de sérénité.",
    eyebrow: "Conseil indépendant",
    h1: "Conseil travaux avant de vous engager",
    intro:
      "Avant de signer un devis ou de lancer un chantier, DND Conseils vous aide à prendre du recul, comprendre les enjeux et sécuriser vos décisions.",
    benefits: [
      "Comprendre les risques avant de commencer",
      "Clarifier les priorités de votre projet",
      "Éviter les décisions prises trop vite",
      "Comparer les options avec un regard extérieur",
    ],
    faq: [
      {
        question: "Pourquoi demander un conseil avant travaux ?",
        answer:
          "Un conseil avant travaux permet d’identifier les points sensibles, les incohérences et les décisions importantes avant de s’engager financièrement.",
      },
      {
        question: "DND Conseils remplace-t-il un artisan ?",
        answer:
          "Non. DND Conseils apporte un regard indépendant pour vous aider à mieux comprendre votre projet et dialoguer plus sereinement avec les professionnels.",
      },
    ],
    keywords: [
      "conseil travaux",
      "conseiller travaux indépendant",
      "accompagnement avant travaux",
    ],
  },
  {
    slug: "accompagnement-renovation",
    title: "Accompagnement rénovation",
    metaTitle: "Accompagnement rénovation pour particuliers",
    description:
      "Un accompagnement clair et indépendant pour mieux préparer votre projet de rénovation, structurer vos choix et éviter les mauvaises surprises.",
    eyebrow: "Rénovation maîtrisée",
    h1: "Accompagnement rénovation pour particuliers",
    intro:
      "Rénover un appartement ou une maison demande des décisions importantes. DND Conseils vous accompagne pour avancer avec méthode, visibilité et confiance.",
    benefits: [
      "Structurer votre projet étape par étape",
      "Mieux comprendre les contraintes techniques",
      "Préparer les échanges avec les artisans",
      "Garder une vision claire du budget et des priorités",
    ],
    faq: [
      {
        question: "À quel moment contacter DND Conseils ?",
        answer:
          "Idéalement avant de signer un devis ou de lancer les travaux, afin d’avoir une vision claire des points à vérifier.",
      },
      {
        question: "L’accompagnement concerne-t-il les petits projets ?",
        answer:
          "Oui. Même un projet simple peut bénéficier d’un regard extérieur pour éviter les oublis ou les décisions mal anticipées.",
      },
    ],
    keywords: [
      "accompagnement rénovation",
      "rénovation appartement",
      "rénovation maison",
    ],
  },
  {
    slug: "analyse-devis-travaux",
    title: "Analyse de devis travaux",
    metaTitle: "Analyse de devis travaux avant signature",
    description:
      "Faites analyser votre devis travaux avant de vous engager afin de mieux comprendre les prestations, les zones floues et les points à clarifier.",
    eyebrow: "Avant signature",
    h1: "Analyse de devis travaux avant engagement",
    intro:
      "Un devis travaux peut contenir des éléments techniques difficiles à interpréter. DND Conseils vous aide à y voir plus clair avant de prendre une décision.",
    benefits: [
      "Identifier les éléments manquants ou imprécis",
      "Comprendre les prestations proposées",
      "Préparer les bonnes questions à poser",
      "Limiter les risques de mauvaises surprises",
    ],
    faq: [
      {
        question: "Puis-je envoyer plusieurs devis ?",
        answer:
          "Oui. Comparer plusieurs devis permet souvent de mieux comprendre les différences de prix, de méthode et de niveau de prestation.",
      },
      {
        question: "L’analyse garantit-elle le prix final du chantier ?",
        answer:
          "Non. Elle permet de mieux comprendre le devis et les risques potentiels, mais le prix final dépend du chantier, des entreprises et des aléas techniques.",
      },
    ],
    keywords: [
      "analyse devis travaux",
      "comparer devis travaux",
      "devis rénovation",
    ],
  },
];