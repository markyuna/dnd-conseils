// src/components/OffersSection.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const offers = [
  {
    slug: "essentiel",
    title: "Essentiel",
    price: "À partir de 99€",
    desc: "Un premier regard extérieur pour clarifier votre projet et éviter les premières erreurs.",
    features: [
      "Analyse rapide du projet",
      "Conseils personnalisés",
      "Recommandations concrètes",
    ],
    note: "Idéal pour un premier avis",
    cta: "Demander l’offre Essentiel",
  },
  {
    slug: "serenite",
    title: "Sérénité",
    price: "À partir de 249€",
    highlight: true,
    desc: "Un accompagnement structuré pour avancer avec méthode, confiance et sérénité.",
    features: [
      "Analyse complète du projet",
      "Analyse des devis et intervenants",
      "Plan d’action personnalisé",
      "Suivi par email",
    ],
    note: "Formule recommandée",
    cta: "Choisir la formule Sérénité",
  },
  {
    slug: "premium",
    title: "Premium",
    price: "À partir de 499€",
    desc: "Un accompagnement renforcé pour garder une vision claire à chaque étape du projet.",
    features: [
      "Suivi complet du projet",
      "Coordination des échanges",
      "Conseils prioritaires",
      "Accompagnement stratégique",
    ],
    note: "Pour les projets avancés",
    cta: "Demander l’offre Premium",
  },
];

export default function OffersSection() {
  return (
    <section
      id="offres"
      className="relative overflow-hidden bg-[#080706] px-4 py-24 text-white sm:px-6 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#b49a7c]/20 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:76px_76px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b49a7c]">
            Nos offres
          </p>

          <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
            Choisissez le niveau d’accompagnement
            <span className="block bg-gradient-to-r from-[#d8c4ad] via-white to-[#b49a7c] bg-clip-text text-transparent">
              adapté à votre projet.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Des formules pensées pour sécuriser vos décisions, limiter les zones
            d’incertitude et avancer avec plus de clarté.
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
                "group relative flex min-h-[560px] flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8",
                offer.highlight
                  ? "border-[#b49a7c]/70 bg-white text-[#111] shadow-[0_34px_100px_rgba(180,154,124,0.28)]"
                  : "border-white/10 bg-white/[0.055] text-white shadow-[0_24px_90px_rgba(0,0,0,0.18)] hover:border-[#b49a7c]/45 hover:bg-white/[0.075]",
              ].join(" ")}
            >
              {offer.highlight && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-2xl bg-[#a89278] px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                  Recommandé
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c] to-transparent opacity-70" />

              <div className="pt-6">
                <p
                  className={[
                    "mb-4 text-[10px] font-semibold uppercase tracking-[0.24em]",
                    offer.highlight ? "text-[#9a8065]" : "text-[#d3bea6]",
                  ].join(" ")}
                >
                  Offre 0{index + 1}
                </p>

                <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                  {offer.title}
                </h3>

                <p
                  className={[
                    "mt-4 text-4xl font-semibold tracking-[-0.04em]",
                    offer.highlight ? "text-[#9a8065]" : "text-[#d3bea6]",
                  ].join(" ")}
                >
                  {offer.price}
                </p>

                <p
                  className={[
                    "mt-6 text-base leading-7",
                    offer.highlight ? "text-black/58" : "text-white/55",
                  ].join(" ")}
                >
                  {offer.desc}
                </p>
              </div>

              <div className="mt-9 space-y-4">
                {offer.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2
                      className={[
                        "mt-0.5 h-5 w-5 shrink-0",
                        offer.highlight ? "text-[#9a8065]" : "text-[#d3bea6]",
                      ].join(" ")}
                    />

                    <span
                      className={[
                        "text-sm leading-6",
                        offer.highlight ? "text-black/68" : "text-white/68",
                      ].join(" ")}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <p
                  className={[
                    "mb-4 text-center text-xs font-medium",
                    offer.highlight ? "text-black/45" : "text-white/45",
                  ].join(" ")}
                >
                  {offer.note}
                </p>

                <Link
                  href={`/devis?offre=${offer.slug}`}
                  aria-label={`Demander l’offre ${offer.title}`}
                  className={[
                    "group/link flex w-full items-center justify-center gap-2 rounded-full border px-6 py-4 text-center text-sm font-semibold transition-all duration-300",
                    offer.highlight
                      ? "border-black/10 bg-[#111] text-white hover:bg-[#2a211b]"
                      : "border-white/15 bg-white/5 text-white hover:border-[#b49a7c]/45 hover:bg-[#b49a7c]/15",
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