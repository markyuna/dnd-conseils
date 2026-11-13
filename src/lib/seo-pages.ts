// src/lib/seo-pages.ts

import { offers } from "@/lib/offers";

export type SeoContentSection = {
  heading: string;
  paragraphs: string[];
};

export type SeoServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  benefits: string[];
  /** Type de service schema.org (`serviceType`). */
  serviceType: string;
  /** Contenu éditorial détaillé (sections H2) — essentiel pour le référencement. */
  sections: SeoContentSection[];
  /** Date de dernière mise à jour du contenu (ISO, utilisée par le sitemap). */
  updatedAt: string;
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
    serviceType: "Conseil travaux indépendant",
    updatedAt: "2026-11-13",
    sections: [
      {
        heading: "Pourquoi faire appel à un conseiller travaux indépendant ?",
        paragraphs: [
          "Un projet de travaux engage souvent des sommes importantes, pour une maison ou un appartement que l’on habite. Pourtant, la plupart des décisions se prennent seul, face à des devis difficiles à comparer et à des artisans qui défendent naturellement leur propre solution. Un conseiller travaux indépendant apporte ce qui manque le plus à ce moment-là : un regard extérieur, technique et sans intérêt commercial.",
          "DND Conseils ne vend pas de travaux, ne perçoit aucune commission et n’a aucun partenariat avec des entreprises. Notre seul objectif est de vous aider à comprendre votre projet, à identifier les points sensibles et à décider en connaissance de cause.",
        ],
      },
      {
        heading: "Ce que couvre un conseil avant travaux",
        paragraphs: [
          "Selon votre situation, le conseil porte sur la cohérence globale du projet, l’ordre des interventions, les postes à risque (électricité, plomberie, isolation, ventilation, structure), la lecture des devis ou l’estimation réaliste du budget. Nous vous aidons aussi à préparer vos rendez-vous avec les artisans : quelles questions poser, quels engagements obtenir par écrit, quelles garanties vérifier.",
          `Pour un premier cadrage, le Forfait Diagnostic / Flash (${offers["diagnostic-flash"].price}) prend la forme d’une session d’1h30 en visio ou sur place, suivie d’un compte-rendu écrit synthétique avec les points de vigilance identifiés.`,
        ],
      },
      {
        heading: "Comment se déroule l’accompagnement",
        paragraphs: [
          "Tout commence par un premier échange pour comprendre votre projet, vos priorités et vos contraintes. Nous analysons ensuite les éléments disponibles — photos, plans, devis, budget — puis nous vous remettons un plan d’action clair, avec des recommandations hiérarchisées et directement actionnables.",
          "Si vous le souhaitez, l’accompagnement peut se poursuivre pendant le chantier pour garder une vision claire aux étapes clés. Vous restez décisionnaire à chaque instant : notre rôle est de sécuriser vos choix, pas de les faire à votre place.",
        ],
      },
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
    serviceType: "Accompagnement de projet de rénovation",
    updatedAt: "2026-11-13",
    sections: [
      {
        heading: "Un accompagnement rénovation de A à Z, à votre rythme",
        paragraphs: [
          "Rénover, c’est enchaîner des dizaines de décisions : définir le périmètre, fixer un budget, choisir les matériaux, consulter des entreprises, planifier les interventions, gérer les imprévus. Sans méthode, ces décisions se prennent dans l’urgence et les surcoûts s’accumulent. L’accompagnement DND Conseils vous donne une structure claire pour avancer étape par étape.",
          "Nous intervenons là où vous en avez besoin : en amont pour cadrer le projet, au moment de choisir les artisans, ou pendant les travaux pour garder le contrôle. L’accompagnement s’adapte aussi bien à une rénovation complète qu’à un projet ciblé comme une cuisine ou une salle de bain.",
        ],
      },
      {
        heading: "Des formules adaptées à chaque projet",
        paragraphs: [
          `Le Pack Essentiel (${offers["pack-essentiel"].price}) permet de structurer le projet, d’analyser les premiers éléments et d’obtenir des recommandations prioritaires. Le Pack Sérénité (${offers["pack-serenite"].price}) offre un accompagnement plus complet pour sécuriser les décisions importantes avant et pendant les premières étapes du chantier.`,
          "Pour les projets plus lourds, le Pack Chantier propose un suivi renforcé avec coordination et conseils réguliers pendant les travaux. Chaque formule est précisée lors du premier échange, en fonction de votre projet réel.",
        ],
      },
      {
        heading: "Pourquoi l’indépendance change tout",
        paragraphs: [
          "Un accompagnement n’a de valeur que s’il est réellement neutre. DND Conseils ne touche aucune commission sur les travaux et ne recommande aucune entreprise en échange d’une rémunération. Les conseils que vous recevez sont donc uniquement guidés par votre intérêt : budget maîtrisé, qualité d’exécution et tranquillité d’esprit.",
        ],
      },
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
    serviceType: "Étude préalable de projet de travaux",
    updatedAt: "2026-11-13",
    sections: [
      {
        heading: "Une première analyse de votre projet, sans engagement",
        paragraphs: [
          "Avant de payer un accompagnement, il est normal de vouloir savoir s’il vous sera utile. L’étude gratuite sert exactement à cela : faire un premier point sur votre projet, repérer les sujets qui méritent votre attention et vous indiquer les prochaines étapes possibles.",
          "Il suffit de décrire votre projet via le formulaire de demande. Vous recevez une réponse sous 48h avec une première orientation claire et personnalisée. Vous restez libre de vous arrêter là ou d’aller plus loin.",
        ],
      },
      {
        heading: "Quels éléments transmettre ?",
        paragraphs: [
          "Plus les informations sont précises, plus l’orientation est pertinente. Vous pouvez joindre une description du projet, le type de bien (maison ou appartement), la surface, les lots concernés, votre budget estimé, votre calendrier, ainsi que des photos, des plans ou des devis déjà reçus.",
          "Pas de panique si votre dossier est incomplet : l’étude sert aussi à identifier les informations manquantes et les vérifications à prévoir avant d’aller plus loin.",
        ],
      },
      {
        heading: "Et après l’étude gratuite ?",
        paragraphs: [
          `Si votre projet nécessite une analyse plus poussée, nous vous proposons la formule la plus adaptée : un Forfait Diagnostic / Flash (${offers["diagnostic-flash"].price}) pour clarifier la situation, une analyse de devis (${offers["analyse-devis"].price}) avant signature, ou un pack d’accompagnement complet. Les tarifs sont annoncés à l’avance, sans surprise.`,
        ],
      },
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
    serviceType: "Analyse et vérification de devis travaux",
    updatedAt: "2026-11-13",
    sections: [
      {
        heading: "Ce que nous vérifions dans un devis travaux",
        paragraphs: [
          "Un devis est un document contractuel : ce qui n’y figure pas sera difficile à obtenir ensuite. Nous vérifions la précision des descriptions (marques, références, quantités, surfaces), la présence de tous les postes nécessaires, la cohérence des prix, les conditions de paiement, les délais annoncés et les mentions relatives aux assurances et garanties.",
          "Nous repérons également les formulations vagues du type « fourniture et pose selon besoin » ou « reprise si nécessaire », qui ouvrent la porte aux suppléments en cours de chantier.",
        ],
      },
      {
        heading: "Comparer plusieurs devis d’artisans",
        paragraphs: [
          "Deux devis pour le même projet peuvent présenter des écarts de prix très importants. Ces écarts s’expliquent rarement par la seule marge de l’entreprise : ils traduisent souvent des différences de prestations, de matériaux ou de postes inclus. Notre analyse comparative remet les devis sur une base comparable pour que vous choisissiez en connaissance de cause, et pas seulement sur le prix final.",
          `La formule Analyse des devis (${offers["analyse-devis"].price}) permet de comparer jusqu’à 3 devis d’artisans, avec repérage des oublis et des risques de surcoûts, identification des zones floues et un rapport écrit avec nos recommandations.`,
        ],
      },
      {
        heading: "Négocier et sécuriser avant de signer",
        paragraphs: [
          "À l’issue de l’analyse, vous disposez d’une liste précise de questions à poser et de points à faire préciser ou corriger par l’entreprise. Vous abordez la discussion avec des arguments concrets, ce qui facilite la renégociation et réduit fortement le risque de litige pendant le chantier.",
        ],
      },
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
    serviceType: "Conseil en rénovation d’appartement",
    updatedAt: "2026-11-13",
    sections: [
      {
        heading: "Les spécificités d’une rénovation d’appartement",
        paragraphs: [
          "Rénover un appartement, c’est composer avec des contraintes qu’on ne rencontre pas en maison : règlement de copropriété, autorisations éventuelles pour toucher aux parties communes ou aux murs porteurs, horaires de travaux, accès limités, évacuation des gravats, et voisins à préserver. Ces contraintes ont un impact direct sur le planning et sur le budget.",
          "Les réseaux (électricité, plomberie, ventilation) sont souvent anciens et imbriqués avec ceux de l’immeuble. Les anticiper dès le départ évite de découvrir en cours de chantier des travaux non prévus au devis.",
        ],
      },
      {
        heading: "Avant d’acheter un appartement à rénover",
        paragraphs: [
          "Un regard extérieur avant l’achat vous aide à estimer l’ampleur réelle des travaux, à repérer les points à vérifier lors des visites et à intégrer un budget travaux réaliste dans votre plan de financement. C’est souvent à ce moment-là qu’un conseil indépendant apporte le plus de valeur.",
        ],
      },
      {
        heading: "Cuisine, salle de bain ou rénovation complète",
        paragraphs: [
          "Qu’il s’agisse d’une pièce ou de l’appartement entier, nous vous aidons à prioriser les interventions, à choisir l’ordre des travaux et à comprendre les devis reçus. Le Forfait Audit Budgétaire permet notamment d’étudier devis, matériaux et priorités pour optimiser le budget sans sacrifier la qualité.",
          "Le premier échange peut se faire à distance, à partir de photos, de plans ou de devis : nul besoin d’attendre une visite pour obtenir une première lecture de votre projet.",
        ],
      },
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
    serviceType: "Conseil en rénovation de maison",
    updatedAt: "2026-11-13",
    sections: [
      {
        heading: "Rénover une maison : une vision globale indispensable",
        paragraphs: [
          "Dans une maison, les postes de travaux sont liés entre eux : la toiture conditionne l’isolation, l’isolation conditionne le chauffage et la ventilation, et l’ordre des interventions conditionne le coût final. Traiter chaque poste séparément, au fil des devis reçus, conduit souvent à refaire certaines choses deux fois.",
          "Nous vous aidons à construire une vision d’ensemble du projet, à définir les priorités et à planifier les travaux dans le bon ordre, en fonction de votre budget et de votre calendrier.",
        ],
      },
      {
        heading: "Les postes à anticiper",
        paragraphs: [
          "Structure, toiture, humidité, isolation, menuiseries, électricité, plomberie, chauffage : ce sont les postes les plus coûteux et ceux où les mauvaises surprises sont les plus fréquentes. Les identifier tôt permet de sécuriser le budget, de prévoir une marge pour les imprévus et de consulter les bons corps de métier.",
        ],
      },
      {
        heading: "Un accompagnement avant et pendant les travaux",
        paragraphs: [
          `Avant le chantier, nous analysons votre projet et vos devis pour sécuriser vos choix. Pendant les travaux, la formule Suivi et coordination (${offers["suivi-chantier"].price}) propose une visite de chantier ponctuelle ou un pack mensuel, avec des points de contrôle prioritaires et un compte-rendu après chaque intervention.`,
          "Vous gardez ainsi une vision claire de l’avancement, des décisions à prendre et des points à faire corriger par les entreprises.",
        ],
      },
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

/**
 * Pages liées, choisies de façon circulaire à partir de la page courante :
 * chaque page de service reçoit ainsi le même nombre de liens internes.
 */
export function getRelatedServicePages(slug: string, count = 3) {
  const index = seoServicePages.findIndex((page) => page.slug === slug);
  if (index === -1) return seoServicePages.slice(0, count);

  return Array.from(
    { length: Math.min(count, seoServicePages.length - 1) },
    (_, offset) =>
      seoServicePages[(index + offset + 1) % seoServicePages.length]
  );
}