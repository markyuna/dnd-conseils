"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  FileSearch,
  Handshake,
  Route,
} from "lucide-react";

const steps = [
  {
    title: "Premier échange",
    desc: "On comprend votre projet, vos priorités, vos contraintes et vos premières inquiétudes.",
    icon: Handshake,
  },
  {
    title: "Étude du projet",
    desc: "Analyse des devis, du budget, des risques techniques et des points à vérifier.",
    icon: FileSearch,
  },
  {
    title: "Plan d’action",
    desc: "Vous recevez des recommandations claires pour avancer avec les bonnes décisions.",
    icon: ClipboardList,
  },
  {
    title: "Suivi jusqu’à réalisation",
    desc: "Un accompagnement possible pendant les travaux pour garder le contrôle.",
    icon: Route,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="methode"
      className="relative overflow-hidden bg-[#f6f2ee] py-32"
    >
      {/* Background glow */}
      <div className="absolute left-[-220px] top-[-220px] h-[560px] w-[560px] rounded-full bg-[#b49a7c]/20 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[620px] w-[620px] rounded-full bg-black/5 blur-3xl" />

      {/* Grid subtle */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8065] backdrop-blur">
              Méthode
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-[#111] md:text-6xl">
              Un processus simple pour éviter les erreurs coûteuses.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:ml-auto">
            Chaque étape est pensée pour clarifier votre projet, sécuriser vos
            choix et vous aider à avancer avec plus de sérénité.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[#b49a7c] via-black/10 to-transparent lg:block" />

          <div className="grid gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid gap-6 rounded-[2rem] border border-black/10 bg-white/70 p-6 backdrop-blur-xl transition duration-500 hover:border-[#b49a7c]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:grid-cols-[0.35fr_1fr_auto] md:items-center md:p-8 lg:ml-16"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm text-[#9a8065]">
                      <Icon className="h-6 w-6" />
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8065]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#111]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="hidden h-5 w-5 text-[#9a8065] transition group-hover:translate-x-1 md:block" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}