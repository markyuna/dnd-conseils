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
      {
        question: "Quand faut-il demander un conseil travaux ?",
        answer:
          "Le meilleur moment est avant de signer un devis, de choisir une entreprise ou de lancer le chantier. Cela permet d’anticiper les points sensibles dès le départ.",
      },
    ],
    keywords: [
      "conseil travaux",
      "conseiller travaux indépendant",
      "accompagnement avant travaux",
      "conseil rénovation",
      "aide travaux particulier",
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
      {
        question: "L’accompagnement rénovation est-il adapté aux particuliers ?",
        answer:
          "Oui. DND Conseils s’adresse aux particuliers qui souhaitent mieux comprendre leur projet, comparer leurs options et prendre des décisions plus sûres.",
      },
    ],
    keywords: [
      "accompagnement rénovation",
      "rénovation appartement",
      "rénovation maison",
      "conseil rénovation particulier",
      "assistance rénovation",
    ],
  },
  {
    slug: "etude-gratuite-travaux",
    title: "Étude gratuite travaux",
    metaTitle: "Étude gratuite travaux avant rénovation",
    description:
      "Demandez une première étude gratuite pour clarifier votre projet de travaux, identifier les priorités et mieux préparer vos décisions avant de vous engager.",
    eyebrow: "Première analyse offerte",
    h1: "Étude gratuite avant vos travaux",
    intro:
      "Vous avez un projet de rénovation, un devis à comprendre ou une décision importante à prendre ? DND Conseils vous propose une première analyse gratuite pour poser les bases avec clarté.",
    benefits: [
      "Faire un premier point sur votre projet",
      "Identifier les informations importantes à vérifier",
      "Comprendre les prochaines étapes possibles",
      "Avancer avec une première vision plus claire",
    ],
    faq: [
      {
        question: "L’étude gratuite est-elle vraiment sans engagement ?",
        answer:
          "Oui. Cette première analyse permet de comprendre votre besoin et de vous orienter, sans obligation de poursuivre ensuite.",
      },
      {
        question: "Que faut-il envoyer pour une étude gratuite ?",
        answer:
          "Vous pouvez envoyer une description de votre projet, des photos, un devis ou toute information utile pour mieux comprendre votre situation.",
      },
      {
        question: "L’étude gratuite remplace-t-elle un diagnostic technique complet ?",
        answer:
          "Non. Elle permet une première lecture du projet et des points de vigilance, mais ne remplace pas une expertise technique approfondie sur site.",
      },
    ],
    keywords: [
      "étude gratuite travaux",
      "étude gratuite rénovation",
      "analyse projet travaux",
      "devis travaux gratuit",
      "conseil travaux gratuit",
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
      {
        question: "Pourquoi faire analyser un devis travaux ?",
        answer:
          "Cela permet de repérer les zones floues, les oublis possibles, les formulations imprécises et les points à clarifier avant de signer.",
      },
    ],
    keywords: [
      "analyse devis travaux",
      "comparer devis travaux",
      "devis rénovation",
      "vérification devis travaux",
      "avis devis travaux",
    ],
  },
  {
    slug: "renovation-appartement",
    title: "Rénovation appartement",
    metaTitle: "Conseil pour rénovation d’appartement",
    description:
      "Préparez votre rénovation d’appartement avec un accompagnement indépendant pour clarifier le budget, les devis, les priorités et les points de vigilance.",
    eyebrow: "Appartement",
    h1: "Conseil pour rénovation d’appartement",
    intro:
      "La rénovation d’un appartement implique souvent des contraintes d’espace, de copropriété, de budget et de coordination. DND Conseils vous aide à mieux préparer chaque décision.",
    benefits: [
      "Clarifier les priorités de rénovation",
      "Anticiper les contraintes liées à l’appartement",
      "Mieux comprendre les devis proposés",
      "Sécuriser les décisions avant de lancer les travaux",
    ],
    faq: [
      {
        question: "DND Conseils peut-il m’aider avant d’acheter un appartement à rénover ?",
        answer:
          "Oui. Un regard extérieur peut vous aider à mieux évaluer les travaux potentiels, les priorités et les points à vérifier avant de vous engager.",
      },
      {
        question: "Quels sont les points sensibles dans une rénovation d’appartement ?",
        answer:
          "Les points fréquents concernent le budget, les délais, la copropriété, l’électricité, la plomberie, l’isolation, la ventilation et la coordination des intervenants.",
      },
      {
        question: "Puis-je demander conseil avec seulement des photos ?",
        answer:
          "Oui. Des photos, plans, devis ou descriptions permettent déjà de faire une première lecture du projet et des points de vigilance.",
      },
    ],
    keywords: [
      "rénovation appartement",
      "conseil rénovation appartement",
      "travaux appartement",
      "devis rénovation appartement",
      "accompagnement travaux appartement",
    ],
  },
  {
    slug: "renovation-maison",
    title: "Rénovation maison",
    metaTitle: "Conseil pour rénovation de maison",
    description:
      "Bénéficiez d’un accompagnement indépendant pour préparer votre rénovation de maison, analyser vos choix, comprendre les devis et anticiper les risques.",
    eyebrow: "Maison",
    h1: "Conseil pour rénovation de maison",
    intro:
      "Rénover une maison demande une vision globale : budget, structure, isolation, pièces techniques, choix des artisans et priorités. DND Conseils vous aide à avancer avec plus de méthode.",
    benefits: [
      "Avoir une vision globale du projet",
      "Prioriser les travaux importants",
      "Anticiper les postes coûteux ou sensibles",
      "Mieux dialoguer avec les artisans et entreprises",
    ],
    faq: [
      {
        question: "Pourquoi se faire accompagner pour rénover une maison ?",
        answer:
          "Une maison comporte souvent plusieurs postes de travaux liés entre eux. Un accompagnement permet de mieux organiser les priorités et d’éviter les décisions isolées.",
      },
      {
        question: "DND Conseils intervient-il pendant les travaux ?",
        answer:
          "Selon le besoin, DND Conseils peut vous aider à garder une vision claire, à préparer les échanges et à suivre les décisions importantes.",
      },
      {
        question: "Puis-je demander une analyse avant de choisir les artisans ?",
        answer:
          "Oui. C’est même recommandé afin de mieux préparer les questions, comprendre les devis et choisir avec plus de recul.",
      },
    ],
    keywords: [
      "rénovation maison",
      "conseil rénovation maison",
      "travaux maison",
      "devis rénovation maison",
      "accompagnement travaux maison",
    ],
  },
];

export function getSeoServicePage(slug: string) {
  return seoServicePages.find((page) => page.slug === slug);
}