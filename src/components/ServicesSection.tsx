// src/components/ServicesSection.tsx

"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const services = [
  {
    title: "Conseil avant travaux",
    desc: "Clarifier votre projet, vos priorités, votre budget et les points de vigilance avant de vous engager.",
    icon: ClipboardCheck,
  },
  {
    title: "Analyse des devis et intervenants",
    desc: "Comparer les propositions, identifier les zones floues et mieux comprendre ce qui est réellement inclus.",
    icon: FileSearch,
  },
  {
    title: "Suivi et coordination",
    desc: "Garder une vision claire pendant les travaux, fluidifier les échanges et anticiper les erreurs coûteuses.",
    icon: ShieldCheck,
  },
  {
    title: "Optimisation du budget",
    desc: "Prendre des décisions plus sûres pour limiter les surcoûts, les imprévus et les mauvaises surprises.",
    icon: WalletCards,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fbfaf8] px-4 pb-24 pt-4 text-[#171412] sm:px-6 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/10 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-220px] h-[560px] w-[560px] rounded-full bg-black/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 grid gap-6 border-t border-black/10 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a8065] shadow-[0_12px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <BadgeCheck className="h-4 w-4" />
              Services
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#111] md:text-6xl">
              Sécurisez vos travaux
              <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
                avec une méthode claire.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-black/55 lg:ml-auto">
            De la première idée au suivi du chantier, DND Conseils vous aide à
            anticiper les risques, comparer les options et garder le contrôle à
            chaque étape.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/82 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.055)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#b49a7c]/45 hover:bg-white hover:shadow-[0_30px_90px_rgba(0,0,0,0.09)] sm:p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(180,154,124,0.12),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />
                <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[210px] w-[210px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/16" />

                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#f8f5f2] text-[#9a8065] shadow-sm transition duration-500 group-hover:scale-105 group-hover:border-[#b49a7c]/45">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full border border-black/10 bg-[#f8f5f2]/80 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-black/35">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-black/58 sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}