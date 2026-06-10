// src/app/tarifs/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
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
    highlight: "Clarifier avant de décider",
    duration: "Session 1h30",
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
    highlight: "Signer avec plus de sécurité",
    duration: "Jusqu’à 3 devis",
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
    highlight: "Garder le contrôle",
    duration: "Ponctuel ou mensuel",
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
    highlight: "Optimiser sans perdre en qualité",
    duration: "Analyse globale",
    details: [
      "Analyse globale du projet",
      "Étude des devis, matériaux et priorités",
      "Recherche d’alternatives plus pertinentes",
      "Recommandations pour optimiser le budget",
    ],
    note: "Objectif : économiser sans perdre en qualité.",
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
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={offer.id}
                id={offer.id}
                className="group relative scroll-mt-28 overflow-hidden rounded-[34px] border border-[#ded8d0] bg-white p-6 shadow-[0_24px_80px_rgba(20,18,16,0.07)] transition duration-500 hover:-translate-y-1 hover:border-[#b9ab9b] hover:shadow-[0_34px_100px_rgba(20,18,16,0.12)] sm:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(163,145,131,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.86),rgba(248,247,244,0.56))]" />
                <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#a39183]/10 blur-3xl transition duration-500 group-hover:bg-[#a39183]/20" />

                <div className="relative">
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e5ded6] bg-[#fbfaf8] text-[#8b7a6b] shadow-[0_16px_40px_rgba(20,18,16,0.08)] transition duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:border-[#c7b8a8] group-hover:bg-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b8c7d]">
                          Formule
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#171717]">
                          {offer.duration}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full border border-[#ded8d0] bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.24em] text-[#9b8c7d] shadow-sm">
                      {number}
                    </span>
                  </div>

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#eadfd4] bg-[#f8f4ef] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b7a6b]">
                    <Sparkles className="h-3.5 w-3.5" />
                    {offer.eyebrow}
                  </div>

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <h2 className="max-w-md text-2xl font-semibold tracking-[-0.045em] text-[#171717] md:text-3xl">
                        {offer.title}
                      </h2>

                      <p className="mt-3 max-w-md text-sm font-medium leading-7 text-[#70675f]">
                        {offer.highlight}
                      </p>
                    </div>

                    <div className="inline-flex w-fit flex-col rounded-3xl border border-[#201f1d]/10 bg-[#111111] px-5 py-4 text-white shadow-[0_18px_45px_rgba(17,17,17,0.18)]">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
                        Tarif
                      </span>
                      <span className="mt-1 text-base font-semibold">
                        {offer.price}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {offer.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex gap-3 rounded-2xl border border-[#eee8e1] bg-white/70 p-4 text-sm leading-6 text-[#625b53] shadow-[0_12px_35px_rgba(20,18,16,0.04)]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b7a6b]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-3xl border border-[#eadfd4] bg-[#fbfaf8]/90 p-5">
                    <p className="text-sm font-medium leading-7 text-[#5f574f]">
                      {offer.note}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href={`/devis?type=${offer.id}`}
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(17,17,17,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
                    >
                      Demander cette formule
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <p className="text-xs font-medium leading-6 text-[#8b8177]">
                      Réponse personnalisée selon votre projet.
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}