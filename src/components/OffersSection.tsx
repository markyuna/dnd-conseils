// src/components/OffersSection.tsx

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const offers = [
  {
    title: "Essentiel",
    price: "À partir de 99€",
    desc: "Un premier regard expert pour clarifier votre projet et éviter les premières erreurs.",
    features: [
      "Analyse rapide du projet",
      "Conseils personnalisés",
      "Recommandations concrètes",
    ],
    cta: "Découvrir Essentiel",
  },
  {
    title: "Sérénité",
    price: "À partir de 249€",
    highlight: true,
    desc: "Un accompagnement structuré pour avancer avec méthode, confiance et sérénité.",
    features: [
      "Analyse complète du projet",
      "Aide au choix des artisans",
      "Plan d’action personnalisé",
      "Suivi par email",
    ],
    cta: "Choisir Sérénité",
  },
  {
    title: "Premium",
    price: "À partir de 499€",
    desc: "Un accompagnement renforcé pour piloter votre projet avec un regard expert.",
    features: [
      "Suivi complet du projet",
      "Coordination des intervenants",
      "Conseils prioritaires",
      "Accompagnement stratégique",
    ],
    cta: "Opter pour Premium",
  },
];

export default function OffersSection() {
  return (
    <section className="relative overflow-hidden bg-[#080706] py-32 text-white">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#b49a7c]/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#b49a7c]">
            Nos offres
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Choisissez le niveau d’accompagnement adapté à votre projet.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Des formules pensées pour sécuriser vos décisions, éviter les
            mauvaises surprises et avancer avec plus de clarté.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className={[
                "group relative flex min-h-[560px] flex-col overflow-hidden rounded-[2rem] border p-8 transition-all duration-500",
                offer.highlight
                  ? "border-[#b49a7c]/70 bg-white text-[#111] shadow-[0_30px_90px_rgba(180,154,124,0.25)]"
                  : "border-white/10 bg-white/[0.045] text-white hover:border-[#b49a7c]/50",
              ].join(" ")}
            >
              {offer.highlight && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-2xl bg-[#a89278] px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                  Recommandé
                </div>
              )}

              <div
                className={[
                  "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c] to-transparent opacity-60",
                  offer.highlight ? "opacity-100" : "",
                ].join(" ")}
              />

              <div className="pt-6">
                <h3 className="text-3xl font-semibold tracking-tight">
                  {offer.title}
                </h3>

                <p
                  className={[
                    "mt-4 text-4xl font-semibold tracking-tight",
                    offer.highlight ? "text-[#9a8065]" : "text-[#d3bea6]",
                  ].join(" ")}
                >
                  {offer.price}
                </p>

                <p
                  className={[
                    "mt-6 text-base leading-7",
                    offer.highlight ? "text-neutral-600" : "text-neutral-400",
                  ].join(" ")}
                >
                  {offer.desc}
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {offer.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className={
                        offer.highlight ? "text-[#9a8065]" : "text-[#d3bea6]"
                      }
                    />
                    <span
                      className={
                        offer.highlight ? "text-neutral-700" : "text-neutral-300"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <button
                  className={[
                    "w-full rounded-full px-6 py-4 text-sm font-medium transition-all duration-300",
                    offer.highlight
                      ? "bg-[#111] text-white hover:bg-[#9a8065]"
                      : "border border-white/15 bg-white/5 text-white hover:border-[#b49a7c] hover:bg-[#b49a7c]/15",
                  ].join(" ")}
                >
                  {offer.cta}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}