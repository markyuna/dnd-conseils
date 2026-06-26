// src/app/tarifs/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import Navbar from "@/components/Navbar";

type PriceOption = { label: string; value: string };

type Offer = {
  id: string;
  eyebrow: string;
  title: string;
  icon: typeof ClipboardCheck;
  price: string | null;
  priceNote?: string;
  priceOptions?: PriceOption[];
  highlight: string;
  duration: string;
  details: string[];
  note: string;
};

const offers: Offer[] = [
  {
    id: "diagnostic-flash",
    eyebrow: "L'aide au démarrage",
    title: "Forfait Diagnostic / Flash",
    icon: ClipboardCheck,
    price: "150 € à 250 € HT",
    priceNote: "Selon visio ou déplacement sur place.",
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
    priceNote: "Pack de 3 devis — env. 80 € par devis supplémentaire.",
    highlight: "Signer avec plus de sécurité",
    duration: "Jusqu'à 3 devis",
    details: [
      "Analyse comparative jusqu'à 3 devis artisans",
      "Identification des zones floues ou incohérentes",
      "Repérage des oublis et risques de surcoûts",
      "Rapport écrit avec recommandations",
    ],
    note: "Pour moins de 300 €, éviter de se faire arnaquer sur des milliers.",
  },
  {
    id: "suivi-chantier",
    eyebrow: "Le soulagement pendant le chantier",
    title: "Suivi et coordination",
    icon: ShieldCheck,
    price: null,
    priceOptions: [
      { label: "À la visite", value: "120 € à 180 € HT" },
      { label: "Abonnement mensuel", value: "300 € à 600 € HT / mois" },
    ],
    highlight: "Garder le contrôle, étape par étape",
    duration: "Ponctuel ou mensuel",
    details: [
      "Visite de chantier avec compte-rendu écrit",
      "Points de contrôle prioritaires à chaque passage",
      "Hotline téléphonique pour rassurer entre les visites",
      "2 visites / mois en formule abonnement",
    ],
    note: "Ponctuel pour un besoin précis, mensuel pour sécuriser tout le chantier.",
  },
  {
    id: "audit-budgetaire",
    eyebrow: "La recherche d'économies",
    title: "Audit Budgétaire",
    icon: WalletCards,
    price: "250 € à 450 € HT",
    priceNote: "Forfait fixe — recommandations remises par écrit.",
    highlight: "Optimiser sans perdre en qualité",
    duration: "Analyse globale",
    details: [
      "Analyse globale du projet (matériaux, devis, planning)",
      "Identification d'alternatives moins chères",
      "Repérage des postes à risques de surcoût",
      "Recommandations écrites avec priorités",
    ],
    note: "Peut être ajouté à tout moment, avant ou pendant les travaux.",
  },
];

type PackItem = {
  id: string;
  eyebrow: string;
  title: string;
  price: string;
  priceNote?: string;
  highlighted: boolean;
  includes: { name: string; note: string }[];
  benefits: string[];
  note: string;
  cta: string;
  href: string;
};

const packs: PackItem[] = [
  {
    id: "pack-essentiel",
    eyebrow: "Pour bien démarrer",
    title: "Pack Essentiel",
    price: "À partir de 390 € HT",
    highlighted: false,
    includes: [
      { name: "Forfait Diagnostic / Flash", note: "session 1h30 + compte-rendu" },
      { name: "Analyse des devis", note: "jusqu'à 3 devis artisans" },
    ],
    benefits: [
      "Clarification complète de votre projet",
      "Vérification des devis avant signature",
      "Rapport écrit avec recommandations",
      "Un accompagnement, deux étapes clés",
    ],
    note: "Idéal pour sécuriser le démarrage de votre projet.",
    cta: "Choisir ce pack",
    href: "/devis?offre=pack-essentiel",
  },
  {
    id: "pack-serenite",
    eyebrow: "Formule recommandée",
    title: "Pack Sérénité",
    price: "À partir de 790 € HT",
    highlighted: true,
    includes: [
      { name: "Forfait Diagnostic / Flash", note: "session 1h30 + compte-rendu" },
      { name: "Analyse des devis", note: "jusqu'à 3 devis artisans" },
      { name: "1 visite de chantier", note: "compte-rendu + points de contrôle" },
    ],
    benefits: [
      "Accompagnement de la décision aux premiers travaux",
      "Vérification des devis + suivi du démarrage",
      "Un interlocuteur unique sur 3 étapes clés",
      "Rapport complet à chaque intervention",
    ],
    note: "Le meilleur équilibre entre suivi et maîtrise du projet.",
    cta: "Choisir ce pack",
    href: "/devis?offre=pack-serenite",
  },
  {
    id: "pack-chantier",
    eyebrow: "Accompagnement complet",
    title: "Pack Chantier",
    price: "Sur devis",
    priceNote: "Tarif selon la durée et la complexité du chantier.",
    highlighted: false,
    includes: [
      { name: "Suivi mensuel (2 visites / mois)", note: "compte-rendu après chaque visite" },
      { name: "Hotline téléphonique", note: "pour rassurer entre les passages" },
      { name: "Coordination des intervenants", note: "suivi des délais et des artisans" },
    ],
    benefits: [
      "Vision continue sur tout le déroulement du chantier",
      "Réaction rapide en cas de problème ou retard",
      "Interlocuteur dédié pendant toute la durée",
      "Comptes-rendus réguliers pour ne rien manquer",
    ],
    note: "Pour les projets en cours qui nécessitent un suivi régulier.",
    cta: "Demander un devis",
    href: "/devis?offre=pack-chantier",
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#111111]">
      <Navbar />

      {/* Hero */}
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
              Choisissez une formule ponctuelle selon votre besoin du moment, ou
              optez pour un pack clé en main combinant plusieurs formules à un
              tarif avantageux.
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

      {/* Formules individuelles */}
      <section className="px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8b7a6b]">
              Formules à la carte
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#111111] md:text-4xl">
              Vous savez ce dont vous avez besoin ? Choisissez la bonne formule.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
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

                      {/* Prix simple */}
                      {offer.price && (
                        <div className="inline-flex w-fit flex-col rounded-3xl border border-[#201f1d]/10 bg-[#111111] px-5 py-4 text-white shadow-[0_18px_45px_rgba(17,17,17,0.18)]">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
                            Tarif
                          </span>
                          <span className="mt-1 text-base font-semibold">
                            {offer.price}
                          </span>
                          {offer.priceNote && (
                            <span className="mt-1 text-[10px] leading-4 text-white/45">
                              {offer.priceNote}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Deux options de prix (suivi-chantier) */}
                      {offer.priceOptions && (
                        <div className="flex flex-col gap-2">
                          {offer.priceOptions.map((opt) => (
                            <div
                              key={opt.label}
                              className="inline-flex w-fit items-center gap-3 rounded-2xl border border-[#201f1d]/10 bg-[#111111] px-4 py-3 text-white shadow-[0_12px_30px_rgba(17,17,17,0.14)]"
                            >
                              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                                {opt.label}
                              </span>
                              <span className="text-sm font-semibold">
                                {opt.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
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
        </div>
      </section>

      {/* Packs clés en main */}
      <section
        id="packs"
        className="relative scroll-mt-24 overflow-hidden bg-[#111111] px-5 py-24 text-white sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#b49a7c]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-200px] right-[-160px] h-[480px] w-[480px] rounded-full bg-[#d8c4ad]/12 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f0dac2]">
              <PackageCheck className="h-3.5 w-3.5" />
              Packs clés en main
            </div>

            <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-5xl">
              Plusieurs formules combinées.{" "}
              <span className="bg-gradient-to-r from-[#ead6bd] via-white to-[#b49a7c] bg-clip-text text-transparent">
                Un seul tarif.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">
              Vous ne savez pas par où commencer ? Les packs regroupent les
              formules les plus utiles selon votre situation, pour un
              accompagnement structuré de bout en bout.
            </p>

            {/* Encart "Pourquoi un pack ?" */}
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0dac2]">
                Pourquoi un pack ?
              </p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Acheter les formules séparément demande de savoir exactement ce
                dont vous avez besoin. Un pack vous évite ce choix : les étapes
                essentielles sont déjà sélectionnées, dans le bon ordre, pour
                votre type de projet.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <article
                key={pack.id}
                id={pack.id}
                className={[
                  "group relative flex scroll-mt-28 flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8",
                  pack.highlighted
                    ? "border-[#d8c4ad]/80 bg-white text-[#111111] shadow-[0_34px_120px_rgba(216,196,173,0.28)]"
                    : "border-white/10 bg-white/[0.06] text-white shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl hover:border-[#d8c4ad]/40 hover:bg-white/[0.09]",
                ].join(" ")}
              >
                {pack.highlighted && (
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-2xl bg-[#a89278] px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg">
                    Recommandé
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c4ad] to-transparent opacity-70" />

                <div className={pack.highlighted ? "pt-6" : ""}>
                  <div
                    className={[
                      "mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em]",
                      pack.highlighted
                        ? "border-black/10 bg-black/[0.03] text-[#9a8065]"
                        : "border-white/12 bg-white/[0.07] text-[#f0dac2]",
                    ].join(" ")}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    {pack.eyebrow}
                  </div>

                  <h3
                    className={[
                      "text-2xl font-semibold tracking-[-0.04em]",
                      pack.highlighted ? "text-[#111111]" : "text-white",
                    ].join(" ")}
                  >
                    {pack.title}
                  </h3>

                  <p
                    className={[
                      "mt-3 text-3xl font-semibold tracking-[-0.04em]",
                      pack.highlighted
                        ? "text-[#9a8065]"
                        : "bg-gradient-to-r from-[#ead6bd] via-white to-[#b49a7c] bg-clip-text text-transparent",
                    ].join(" ")}
                  >
                    {pack.price}
                  </p>

                  {pack.priceNote && (
                    <p
                      className={[
                        "mt-1 text-xs leading-5",
                        pack.highlighted ? "text-black/40" : "text-white/45",
                      ].join(" ")}
                    >
                      {pack.priceNote}
                    </p>
                  )}
                </div>

                {/* Ce pack inclut */}
                <div className="mt-6">
                  <p
                    className={[
                      "mb-2 text-[10px] font-semibold uppercase tracking-[0.24em]",
                      pack.highlighted ? "text-[#9a8065]" : "text-[#f0dac2]",
                    ].join(" ")}
                  >
                    Ce pack inclut
                  </p>
                  <div className="space-y-2">
                    {pack.includes.map((item) => (
                      <div
                        key={item.name}
                        className={[
                          "rounded-xl border px-3 py-2.5",
                          pack.highlighted
                            ? "border-[#c8b89a]/30 bg-[#f9f6f2]"
                            : "border-[#f0dac2]/12 bg-[#f0dac2]/[0.05]",
                        ].join(" ")}
                      >
                        <p
                          className={[
                            "text-xs font-semibold",
                            pack.highlighted ? "text-[#111111]" : "text-white",
                          ].join(" ")}
                        >
                          {item.name}
                        </p>
                        <p
                          className={[
                            "text-[11px] leading-4",
                            pack.highlighted
                              ? "text-black/45"
                              : "text-white/50",
                          ].join(" ")}
                        >
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ce que ça vous apporte */}
                <div className="mt-5 flex-1 space-y-2">
                  {pack.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={[
                          "mt-0.5 h-3.5 w-3.5 shrink-0",
                          pack.highlighted ? "text-[#9a8065]" : "text-[#f0dac2]",
                        ].join(" ")}
                      />
                      <span
                        className={[
                          "text-xs leading-5",
                          pack.highlighted ? "text-black/60" : "text-white/65",
                        ].join(" ")}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <p
                    className={[
                      "mb-3 text-center text-xs font-medium",
                      pack.highlighted ? "text-black/40" : "text-white/42",
                    ].join(" ")}
                  >
                    {pack.note}
                  </p>
                  <Link
                    href={pack.href}
                    className={[
                      "flex w-full items-center justify-center gap-2 rounded-full border px-6 py-4 text-sm font-semibold transition-all duration-300",
                      pack.highlighted
                        ? "border-black/10 bg-[#111111] text-white hover:bg-[#2a211b]"
                        : "border-white/14 bg-white/[0.07] text-white hover:border-[#d8c4ad]/50 hover:bg-white/[0.14]",
                    ].join(" ")}
                  >
                    {pack.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-white/50">
              Tous les tarifs sont indiqués hors taxes.{" "}
              <Link
                href="/devis"
                className="font-medium text-white/75 underline underline-offset-4 hover:text-white"
              >
                Contactez-nous
              </Link>{" "}
              pour un premier échange sans engagement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
