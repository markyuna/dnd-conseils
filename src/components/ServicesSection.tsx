// src/components/ServicesSection.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const services = [
  {
    title: "Conseil avant travaux",
    label: "Démarrage",
    formula: "Diagnostic / Flash",
    price: "À partir de 150 € HT",
    desc: "Clarifier votre projet, vos priorités et les points de vigilance avant de vous engager.",
    icon: ClipboardCheck,
    href: "/tarifs#diagnostic-flash",
  },
  {
    title: "Analyse des devis",
    label: "Avant signature",
    formula: "Analyse de devis",
    price: "À partir de 190 € HT",
    desc: "Comparer les devis, repérer les zones floues et mieux comprendre ce qui est réellement inclus.",
    icon: FileSearch,
    href: "/tarifs#analyse-devis",
  },
  {
    title: "Suivi et coordination",
    label: "Pendant chantier",
    formula: "Visite ou suivi",
    price: "À partir de 120 € HT",
    desc: "Garder une vision claire pendant les travaux avec des points de contrôle et conseils réguliers.",
    icon: ShieldCheck,
    href: "/tarifs#suivi-chantier",
  },
  {
    title: "Optimisation du budget",
    label: "Économies",
    formula: "Audit budgétaire",
    price: "À partir de 250 € HT",
    desc: "Identifier les arbitrages possibles, limiter les surcoûts et préserver la qualité du projet.",
    icon: WalletCards,
    href: "/tarifs#audit-budgetaire",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-[#f8f7f4] px-5 py-24 text-[#111111] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#b49a7c]/18 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#111111]/8 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:76px_76px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ded8d0] bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b7a6b] shadow-sm backdrop-blur-xl">
              <BadgeCheck className="h-3.5 w-3.5" />
              Accompagnement
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#111111] md:text-6xl">
              Une aide concrète,
              <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
                au bon moment.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-base leading-8 text-[#66615b] md:text-lg">
              Choisissez l’étape dont vous avez besoin aujourd’hui, ou avancez
              avec un pack complet pour sécuriser votre projet de bout en bout.
            </p>

            <Link
              href="/tarifs#packs"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
            >
              Voir les packs clés en main
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={service.href}
                  aria-label={`Voir le tarif pour ${service.title}`}
                  className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.7rem] border border-black/8 bg-white/70 p-6 shadow-[0_22px_70px_rgba(20,18,16,0.07)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#b49a7c]/50 hover:bg-white/88 hover:shadow-[0_30px_90px_rgba(20,18,16,0.12)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(180,154,124,0.09),rgba(255,255,255,0.38))]" />
                  <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[240px] w-[240px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-700 group-hover:bg-[#b49a7c]/22" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c]/70 to-transparent" />

                  <div className="relative mb-8 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e1dbd3] bg-[#fbfaf8]/90 text-[#8b7a6b] shadow-sm transition duration-500 group-hover:scale-105 group-hover:border-[#b3a494] group-hover:text-[#111111]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="rounded-full border border-[#ded8d0] bg-[#fbfaf8]/80 px-3 py-1 text-[10px] font-semibold tracking-[0.24em] text-[#a1968c] backdrop-blur-xl">
                      {number}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8b7a6b]">
                      {service.label}
                    </p>

                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#171717] transition duration-500 group-hover:text-[#8b7a6b]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#66615b]">
                      {service.desc}
                    </p>

                    <div className="mt-6 space-y-2">
                      <span className="inline-flex rounded-full border border-[#e6dfd8] bg-[#fbfaf8]/80 px-3 py-1.5 text-[11px] font-semibold text-[#5f574f] backdrop-blur-xl">
                        {service.formula}
                      </span>

                      <span className="inline-flex rounded-full bg-[#111111] px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_12px_30px_rgba(17,17,17,0.16)]">
                        {service.price}
                      </span>
                    </div>

                    <div className="mt-auto pt-7">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#8b7a6b] transition duration-500 group-hover:gap-3 group-hover:text-[#111111]">
                        Voir le tarif
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}