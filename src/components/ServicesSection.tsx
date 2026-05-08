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
    desc: "Analyse de votre projet, estimation réaliste et identification des risques avant de vous engager.",
    icon: ClipboardCheck,
  },
  {
    title: "Sélection des artisans",
    desc: "Accédez à des professionnels fiables, adaptés à votre projet, votre budget et vos contraintes.",
    icon: Handshake,
  },
  {
    title: "Suivi et coordination",
    desc: "Un regard expert pour éviter les erreurs, fluidifier les échanges et garantir la qualité.",
    icon: ShieldCheck,
  },
  {
    title: "Optimisation du budget",
    desc: "Évitez les surcoûts, les mauvaises surprises et les décisions prises trop vite.",
    icon: WalletCards,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-32">
      <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/10 blur-3xl" />
      <div className="absolute bottom-[-240px] right-[-220px] h-[560px] w-[560px] rounded-full bg-black/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f3ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8065]">
              <BadgeCheck className="h-4 w-4" />
              Services
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">
              Un accompagnement clair à chaque étape de vos travaux.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:ml-auto">
            De la première idée au choix des artisans, DND Conseils vous aide à
            sécuriser vos décisions, anticiper les risques et garder le contrôle
            sur votre budget.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#fbfaf8] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.05)] transition duration-500 hover:border-[#b49a7c]/40 hover:shadow-[0_28px_90px_rgba(0,0,0,0.10)]"
              >
                <div className="absolute right-[-90px] top-[-90px] h-[220px] w-[220px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/18" />

                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-[#9a8065]" />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.24em] text-neutral-300">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-10">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                    {item.desc}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#9a8065]">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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