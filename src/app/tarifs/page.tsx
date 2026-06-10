// src/app/tarifs/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import Navbar from "@/components/Navbar";

const offers = [
  {
    id: "diagnostic-flash",
    eyebrow: "L’aide au démarrage",
    title: "Forfait Diagnostic / Flash",
    icon: ClipboardCheck,
    price: "150 € à 250 € HT",
    details: [
      "Session de 1h30 en visio ou sur place",
      "Analyse de votre situation actuelle",
      "Identification des points de vigilance",
      "Compte-rendu écrit synthétique",
    ],
    note: "Idéal pour clarifier votre projet avant de vous engager.",
  },
  {
    id: "analyse-devis",
    eyebrow: "La sécurité avant de signer",
    title: "Analyse des devis",
    icon: FileSearch,
    price: "190 € à 290 € HT",
    details: [
      "Analyse comparative jusqu’à 3 devis artisans",
      "Identification des zones floues ou incohérentes",
      "Repérage des oublis et risques de surcoûts",
      "Rapport écrit avec recommandations",
    ],
    note: "Pensé pour éviter les mauvaises surprises avant signature.",
  },
  {
    id: "suivi-chantier",
    eyebrow: "Le soulagement pendant le chantier",
    title: "Suivi et coordination",
    icon: ShieldCheck,
    price: "120 € à 600 € HT",
    details: [
      "Visite de chantier ponctuelle ou pack mensuel",
      "Compte-rendu après chaque intervention",
      "Points de contrôle prioritaires",
      "Hotline conseil selon la formule choisie",
    ],
    note: "Une solution flexible pour garder le contrôle pendant les travaux.",
  },
  {
    id: "audit-budgetaire",
    eyebrow: "La recherche d’économies",
    title: "Audit Budgétaire",
    icon: WalletCards,
    price: "250 € à 450 € HT",
    details: [
      "Analyse globale du projet",
      "Étude des devis, matériaux et priorités",
      "Recherche d’alternatives plus pertinentes",
      "Recommandations pour optimiser le budget",
    ],
    note: "Objectif : économiser sans perdre en qualité.",
  },
];

const packs = [
  {
    id: "pack-essentiel",
    title: "Pack Essentiel",
    price: "À partir de 390 € HT",
    href: "/devis?type=pack-essentiel",
    desc: "Pour démarrer avec une vision claire avant de signer ou lancer les travaux.",
    items: [
      "Diagnostic projet",
      "Analyse de 2 à 3 devis",
      "Compte-rendu écrit",
      "Recommandations prioritaires",
    ],
  },
  {
    id: "pack-serenite",
    title: "Pack Sérénité",
    price: "À partir de 790 € HT",
    href: "/devis?type=pack-serenite",
    desc: "Pour être accompagné avant et pendant les premières étapes du chantier.",
    items: [
      "Diagnostic complet",
      "Analyse des devis",
      "1 visite de chantier",
      "Compte-rendu et conseils personnalisés",
    ],
    featured: true,
  },
  {
    id: "pack-chantier",
    title: "Pack Chantier",
    price: "Sur devis",
    href: "/devis?type=pack-chantier",
    desc: "Pour un accompagnement plus complet sur la durée des travaux.",
    items: [
      "Suivi mensuel",
      "Visites de chantier",
      "Comptes-rendus réguliers",
      "Conseils et coordination",
    ],
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#111111]">
      <Navbar />

      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[#a39183]/14 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ded8d0] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b7a6b] shadow-sm">
              <BadgeCheck className="h-3.5 w-3.5" />
              Tarifs & accompagnements
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#111111] md:text-7xl">
              Une aide claire, adaptée à votre projet.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#66615b] md:text-lg">
              Choisissez une intervention ponctuelle selon votre besoin du
              moment, ou optez pour un pack clé en main afin d’être accompagné
              avec méthode, visibilité et sérénité.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#packs"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
              >
                Voir les packs clés en main
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#ded8d0] bg-white/80 px-6 py-3 text-sm font-semibold text-[#111111] transition duration-300 hover:-translate-y-0.5 hover:border-[#b3a494]"
              >
                Demander un premier échange
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={offer.id}
                id={offer.id}
                className="scroll-mt-28 rounded-[30px] border border-[#dfdbd4] bg-white/85 p-7 shadow-[0_24px_80px_rgba(20,18,16,0.06)] sm:p-8"
              >
                <div className="mb-10 flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e1dbd3] bg-[#fbfaf8] text-[#8b7a6b] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full border border-[#ded8d0] bg-[#fbfaf8] px-3 py-1 text-[10px] font-semibold tracking-[0.24em] text-[#a1968c]">
                    {number}
                  </span>
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#8b7a6b]">
                  {offer.eyebrow}
                </p>

                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#171717]">
                  {offer.title}
                </h2>

                <div className="mt-5 inline-flex rounded-full bg-[#111111] px-4 py-2 text-sm font-semibold text-white">
                  {offer.price}
                </div>

                <ul className="mt-7 space-y-3">
                  {offer.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-6 text-[#66615b]"
                    >
                      <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#8b7a6b]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 rounded-2xl border border-[#eee8e1] bg-[#fbfaf8] p-4 text-sm leading-7 text-[#5f574f]">
                  {offer.note}
                </p>

                <Link
                  href={`/devis?type=${offer.id}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8b7a6b] transition duration-300 hover:gap-3 hover:text-[#111111]"
                >
                  Demander cette formule
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section id="packs" className="scroll-mt-28 px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ded8d0] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b7a6b] shadow-sm">
              <PackageCheck className="h-3.5 w-3.5" />
              Packs clés en main
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
              Pour un accompagnement plus complet.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#66615b]">
              Les packs regroupent plusieurs étapes pour vous permettre
              d’avancer avec une vision claire, sans multiplier les décisions
              ni les interlocuteurs.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {packs.map((pack) => (
              <article
                key={pack.id}
                id={pack.id}
                className={`scroll-mt-32 relative overflow-hidden rounded-[30px] border p-7 shadow-[0_24px_80px_rgba(20,18,16,0.06)] sm:p-8 ${
                  pack.featured
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-[#dfdbd4] bg-white/85 text-[#111111]"
                }`}
              >
                {pack.featured && (
                  <div className="mb-6 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                    Recommandé
                  </div>
                )}

                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {pack.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    pack.featured ? "text-white/70" : "text-[#66615b]"
                  }`}
                >
                  {pack.desc}
                </p>

                <div
                  className={`mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                    pack.featured
                      ? "bg-white text-[#111111]"
                      : "bg-[#111111] text-white"
                  }`}
                >
                  {pack.price}
                </div>

                <ul className="mt-7 space-y-3">
                  {pack.items.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-3 text-sm leading-6 ${
                        pack.featured ? "text-white/78" : "text-[#66615b]"
                      }`}
                    >
                      <BadgeCheck
                        className={`mt-1 h-4 w-4 shrink-0 ${
                          pack.featured ? "text-white" : "text-[#8b7a6b]"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pack.href}
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition duration-300 hover:gap-3 ${
                    pack.featured ? "text-white" : "text-[#8b7a6b]"
                  }`}
                >
                  Demander ce pack
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}