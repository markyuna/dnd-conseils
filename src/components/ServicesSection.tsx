"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Handshake,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const services = [
  {
    title: "Conseil avant travaux",
    desc: "Analyse du projet, estimation réaliste et points de vigilance avant de vous engager.",
    icon: ClipboardCheck,
  },
  {
    title: "Sélection des artisans",
    desc: "Des professionnels adaptés à votre projet, votre budget et vos contraintes.",
    icon: Handshake,
  },
  {
    title: "Suivi et coordination",
    desc: "Un regard expert pour fluidifier les échanges et éviter les erreurs coûteuses.",
    icon: ShieldCheck,
  },
  {
    title: "Optimisation du budget",
    desc: "Des décisions plus sûres pour limiter les surcoûts et les mauvaises surprises.",
    icon: WalletCards,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/10 blur-3xl" />
      <div className="absolute bottom-[-240px] right-[-220px] h-[560px] w-[560px] rounded-full bg-black/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#9a8065]">
              <BadgeCheck className="h-4 w-4" />
              Services
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
            <span className="bg-gradient-to-r from-[#111] via-[#9a8065] to-[#b49a7c] bg-[length:200%_100%] bg-clip-text text-transparent animate-[gradientMove_6s_linear_infinite]">                Sécurisez vos travaux avec une méthode claire.
            </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-600 lg:ml-auto">
            De la première idée au choix des artisans, DND Conseils vous aide à
            anticiper les risques, comparer les options et garder le contrôle.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
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
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#fbfaf8] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.045)] transition duration-500 hover:-translate-y-1 hover:border-[#b49a7c]/45 hover:bg-white hover:shadow-[0_26px_80px_rgba(0,0,0,0.09)] md:p-7"
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(180,154,124,0.11),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />
                <div className="absolute right-[-70px] top-[-70px] h-[190px] w-[190px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/18" />

                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-[#9a8065] shadow-sm transition duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:border-[#b49a7c]/40">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-black/35">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
                      Accompagnement
                    </span>

                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#9a8065] transition duration-500 group-hover:border-[#b49a7c]/40 group-hover:bg-[#111] group-hover:text-white">
                      <ArrowRight className="h-4 w-4 transition duration-500 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}