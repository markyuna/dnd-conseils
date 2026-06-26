// src/components/OffersSection.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const offers = [
  {
    slug: "essentiel",
    title: "Pack Essentiel",
    price: "À partir de 390 € HT",
    eyebrow: "Pour bien démarrer",
    desc: "Une formule claire pour structurer votre projet, analyser les premiers éléments et avancer avec une vision plus sûre.",
    features: [
      "Diagnostic projet",
      "Analyse de 2 à 3 devis",
      "Compte-rendu écrit",
      "Recommandations prioritaires",
    ],
    note: "Idéal avant de signer",
    cta: "Demander le Pack Essentiel",
    href: "/devis?offre=pack-essentiel",
    detailHref: "/tarifs#pack-essentiel",
  },
  {
    slug: "serenite",
    title: "Pack Sérénité",
    price: "À partir de 790 € HT",
    eyebrow: "Formule recommandée",
    highlight: true,
    desc: "Un accompagnement plus structuré pour sécuriser les décisions importantes avant et pendant les premières étapes du chantier.",
    features: [
      "Diagnostic complet",
      "Analyse des devis",
      "1 visite de chantier",
      "Compte-rendu et conseils personnalisés",
    ],
    note: "Le meilleur équilibre",
    cta: "Choisir le Pack Sérénité",
    href: "/devis?offre=pack-serenite",
    detailHref: "/tarifs#pack-serenite",
  },
  {
    slug: "chantier",
    title: "Pack Chantier",
    price: "Sur devis",
    eyebrow: "Accompagnement complet",
    desc: "Une solution renforcée pour garder une vision claire pendant les travaux, avec suivi, coordination et conseils réguliers.",
    features: [
      "Suivi mensuel",
      "Visites de chantier",
      "Comptes-rendus réguliers",
      "Conseils et coordination",
    ],
    note: "Pour les projets avancés",
    cta: "Demander le Pack Chantier",
    href: "/devis?offre=pack-chantier",
    detailHref: "/tarifs#pack-chantier",
  },
];

export default function OffersSection() {
  return (
    <section
      id="offres"
      className="relative isolate overflow-hidden bg-[#080706] px-4 py-24 text-white sm:px-6 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#080706]" />

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-1/2 top-[-260px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[#b49a7c]/28 blur-3xl" />
        <div className="absolute left-[12%] top-[22%] h-[420px] w-[420px] rounded-full bg-white/8 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-140px] h-[560px] w-[560px] rounded-full bg-[#d8c4ad]/16 blur-3xl" />
        <div className="absolute bottom-[10%] left-[-180px] h-[480px] w-[480px] rounded-full bg-white/7 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(216,196,173,0.18),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(180,154,124,0.12),transparent_38%),linear-gradient(180deg,rgba(8,7,6,0.1),rgba(8,7,6,0.94))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:76px_76px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="pointer-events-none absolute left-1/2 top-[-80px] -z-10 h-[260px] w-[720px] -translate-x-1/2 rounded-full bg-[#d8c4ad]/18 blur-3xl" />

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f0dac2] shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <PackageCheck className="h-3.5 w-3.5" />
            Packs clés en main
          </div>

          <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white drop-shadow-[0_18px_50px_rgba(255,255,255,0.08)] md:text-6xl">
            Un accompagnement complet,
            <span className="block bg-gradient-to-r from-[#ead6bd] via-white to-[#b49a7c] bg-clip-text text-transparent drop-shadow-[0_18px_55px_rgba(216,196,173,0.16)]">
              adapté à votre projet.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Pour aller plus loin qu’un simple conseil ponctuel, nos packs
            regroupent les étapes essentielles afin de vous aider à avancer avec
            méthode, visibilité et sérénité.
          </p>

        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "group relative flex min-h-[590px] flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8",
                offer.highlight
                  ? "border-[#d8c4ad]/80 bg-white text-[#111111] shadow-[0_34px_120px_rgba(216,196,173,0.34)]"
                  : "border-white/12 bg-white/[0.075] text-white shadow-[0_28px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl hover:border-[#d8c4ad]/55 hover:bg-white/[0.105] hover:shadow-[0_34px_120px_rgba(216,196,173,0.14)]",
              ].join(" ")}
            >
              <div
                className={[
                  "pointer-events-none absolute inset-0",
                  offer.highlight
                    ? "bg-[radial-gradient(circle_at_50%_0%,rgba(180,154,124,0.22),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.85),rgba(246,242,238,0.92))]"
                    : "bg-[radial-gradient(circle_at_50%_0%,rgba(216,196,173,0.18),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]",
                ].join(" ")}
              />

              <div
                className={[
                  "pointer-events-none absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full blur-3xl transition duration-700",
                  offer.highlight
                    ? "bg-[#b49a7c]/24"
                    : "bg-[#d8c4ad]/0 group-hover:bg-[#d8c4ad]/18",
                ].join(" ")}
              />

              <div
                className={[
                  "pointer-events-none absolute bottom-[-140px] left-[-120px] h-[280px] w-[280px] rounded-full blur-3xl transition duration-700",
                  offer.highlight
                    ? "bg-[#171412]/8"
                    : "bg-white/0 group-hover:bg-white/8",
                ].join(" ")}
              />

              {offer.highlight && (
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-2xl bg-[#a89278] px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_40px_rgba(168,146,120,0.28)]">
                  Recommandé
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#d8c4ad] to-transparent opacity-80" />

              <div className="relative z-10 pt-6">
                <div
                  className={[
                    "mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] shadow-sm backdrop-blur-xl",
                    offer.highlight
                      ? "border-black/10 bg-black/[0.035] text-[#9a8065]"
                      : "border-white/12 bg-white/[0.08] text-[#f0dac2]",
                  ].join(" ")}
                >
                  {offer.highlight ? (
                    <Sparkles className="h-3.5 w-3.5" />
                  ) : index === 0 ? (
                    <BadgeCheck className="h-3.5 w-3.5" />
                  ) : (
                    <ShieldCheck className="h-3.5 w-3.5" />
                  )}
                  {offer.eyebrow}
                </div>

                <p
                  className={[
                    "mb-4 text-[10px] font-semibold uppercase tracking-[0.24em]",
                    offer.highlight ? "text-[#9a8065]" : "text-[#f0dac2]",
                  ].join(" ")}
                >
                  Offre 0{index + 1}
                </p>

                <h3
                  className={[
                    "text-3xl font-semibold tracking-[-0.04em]",
                    offer.highlight
                      ? "text-[#111111]"
                      : "text-white drop-shadow-[0_14px_40px_rgba(255,255,255,0.08)]",
                  ].join(" ")}
                >
                  {offer.title}
                </h3>

                <p
                  className={[
                    "mt-4 text-4xl font-semibold tracking-[-0.04em]",
                    offer.highlight
                      ? "text-[#9a8065]"
                      : "bg-gradient-to-r from-[#ead6bd] via-white to-[#b49a7c] bg-clip-text text-transparent drop-shadow-[0_18px_55px_rgba(216,196,173,0.2)]",
                  ].join(" ")}
                >
                  {offer.price}
                </p>

                <p
                  className={[
                    "mt-6 text-base leading-7",
                    offer.highlight ? "text-black/62" : "text-white/68",
                  ].join(" ")}
                >
                  {offer.desc}
                </p>
              </div>

              <div className="relative z-10 mt-9 space-y-4">
                {offer.features.map((feature) => (
                  <div
                    key={feature}
                    className={[
                      "flex gap-3 rounded-2xl border px-3 py-3 backdrop-blur-xl",
                      offer.highlight
                        ? "border-black/5 bg-black/[0.025]"
                        : "border-white/8 bg-white/[0.045]",
                    ].join(" ")}
                  >
                    <CheckCircle2
                      className={[
                        "mt-0.5 h-5 w-5 shrink-0",
                        offer.highlight ? "text-[#9a8065]" : "text-[#f0dac2]",
                      ].join(" ")}
                    />

                    <span
                      className={[
                        "text-sm leading-6",
                        offer.highlight ? "text-black/70" : "text-white/76",
                      ].join(" ")}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-auto pt-10">
                <p
                  className={[
                    "mb-4 text-center text-xs font-medium",
                    offer.highlight ? "text-black/48" : "text-white/52",
                  ].join(" ")}
                >
                  {offer.note}
                </p>

                <Link
                  href={offer.href}
                  aria-label={offer.cta}
                  className={[
                    "group/link flex w-full items-center justify-center gap-2 rounded-full border px-6 py-4 text-center text-sm font-semibold shadow-lg transition-all duration-300",
                    offer.highlight
                      ? "border-black/10 bg-[#111111] text-white shadow-black/15 hover:bg-[#2a211b]"
                      : "border-white/15 bg-white/[0.08] text-white shadow-black/20 hover:border-[#d8c4ad]/55 hover:bg-[#d8c4ad]/18",
                  ].join(" ")}
                >
                  {offer.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}