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
    metaTitle: "Accompagnement rénovation pour particuliers | DND Conseils",
    description:
      "Un accompagnement indépendant pour structurer votre projet de rénovation, préparer vos échanges avec les artisans et éviter les décisions prises trop vite.",
    eyebrow: "Rénovation maîtrisée",
    h1: "Un accompagnement rénovation pensé pour les particuliers",
    intro:
      "Rénover un appartement ou une maison implique des choix techniques, budgétaires et organisationnels complexes. DND Conseils vous aide à structurer chaque étape, préparer vos échanges avec les professionnels et avancer avec méthode.",
    benefits: [
      "Structurer votre projet étape par étape avant de vous lancer",
      "Identifier les contraintes techniques à anticiper dès le départ",
      "Préparer des échanges plus efficaces avec vos artisans",
      "Garder une vision claire du budget, des priorités et des risques",
      "Recevoir un regard extérieur indépendant à chaque étape clé",
      "Éviter les décisions mal anticipées et les surcoûts évitables",
    ],
    faq: [
      {
        question: "À quel moment faut-il demander un accompagnement rénovation ?",
        answer:
          "Le plus tôt est le mieux — idéalement avant de contacter les artisans ou de signer quoi que ce soit. Cela permet d’identifier les points sensibles dès le début et de structurer le projet sur de bonnes bases.",
      },
      {
        question: "L’accompagnement est-il utile pour un petit projet ?",
        answer:
          "Oui. Même un projet limité (une salle de bain, une cuisine) peut comporter des décisions importantes sur les matériaux, les intervenants ou le séquençage. Un regard extérieur évite les oublis coûteux.",
      },
      {
        question: "DND Conseils travaille-t-il avec des artisans ou est-il vraiment indépendant ?",
        answer:
          "DND Conseils est totalement indépendant : aucune commission, aucun partenariat avec des entreprises de travaux. L’objectif est uniquement de vous aider à décider en connaissance de cause.",
      },
    ],
    keywords: [
      "accompagnement rénovation particulier",
      "aide rénovation appartement",
      "conseil rénovation indépendant",
      "accompagnement travaux maison",
      "assistance projet rénovation",
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
    metaTitle: "Analyse de devis travaux avant signature | DND Conseils",
    description:
      "Faites analyser votre devis travaux par un expert indépendant avant de signer : zones floues, oublis, incohérences et points à négocier identifiés clairement.",
    eyebrow: "Avant signature",
    h1: "Faites analyser votre devis travaux avant de signer",
    intro:
      "Un devis peut sembler complet et pourtant contenir des zones floues, des oublis ou des formulations trop vagues pour vous protéger. DND Conseils lit vos devis avec un regard technique et indépendant, et vous aide à signer en connaissance de cause.",
    benefits: [
      "Repérer les oublis et les postes sous-estimés dans le devis",
      "Identifier les formulations imprécises qui peuvent générer des litiges",
      "Comprendre ce qui est réellement inclus dans chaque ligne",
      "Comparer plusieurs devis pour choisir la meilleure offre",
      "Préparer les bonnes questions à poser à l’artisan avant signature",
      "Réduire le risque de surcoûts et de mauvaises surprises en cours de chantier",
    ],
    faq: [
      {
        question: "Combien de devis pouvez-vous analyser en même temps ?",
        answer:
          "Jusqu’à 3 devis par mission. Comparer plusieurs propositions est souvent très révélateur : des écarts de prix importants cachent souvent des différences de prestations que l’analyse permet de mettre en lumière.",
      },
      {
        question: "Que reçois-je après l’analyse ?",
        answer:
          "Un rapport écrit clair avec les points de vigilance identifiés, les questions à poser à l’entreprise et des recommandations concrètes pour sécuriser ou renégocier le devis avant signature.",
      },
      {
        question: "L’analyse est-elle utile si le devis me semble déjà clair ?",
        answer:
          "Oui. Les formulations qui semblent claires pour un non-spécialiste peuvent être floues sur le plan technique ou contractuel. Un regard extérieur permet de confirmer — ou d’invalider — cette impression.",
      },
    ],
    keywords: [
      "analyse devis travaux",
      "vérification devis artisan",
      "comparer devis rénovation",
      "expert devis travaux indépendant",
      "audit devis chantier",
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