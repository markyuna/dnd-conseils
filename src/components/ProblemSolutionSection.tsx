// src/components/ProblemSolutionSection.tsx

"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";

const problems = [
  "Budget difficile à maîtriser",
  "Artisans difficiles à évaluer",
  "Retards et imprévus de chantier",
  "Décisions prises dans l’urgence",
];

const solutions = [
  "Vision claire avant de s’engager",
  "Conseils indépendants et objectifs",
  "Budget mieux anticipé",
  "Décisions plus sûres à chaque étape",
];

export default function ProblemSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f2] px-4 py-24 text-[#171412] sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-[#b49a7c]/20 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-220px] h-[520px] w-[520px] rounded-full bg-white/80 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a8065] shadow-[0_12px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4" />
            Pourquoi se faire accompagner
          </div>

          <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#111] md:text-6xl">
            Vos travaux peuvent vite
            <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
              devenir difficiles à maîtriser.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-black/55">
            Sans méthode ni regard extérieur, les choix s’enchaînent rapidement
            et peuvent entraîner des surcoûts, des retards ou des décisions
            difficiles à corriger une fois le chantier lancé.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] p-6 text-white shadow-[0_28px_85px_rgba(0,0,0,0.22)] sm:p-7"
          >
            <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-[260px] w-[260px] rounded-full bg-red-500/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />

            <div className="relative mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-red-300">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                  Situation à risque
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em]">
                  Sans accompagnement
                </h3>
              </div>
            </div>

            <div className="relative space-y-3">
              {problems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm leading-6 text-white/72 backdrop-blur-xl"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-300" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] border border-[#b49a7c]/25 bg-white/82 p-6 shadow-[0_28px_85px_rgba(180,154,124,0.16)] backdrop-blur-xl sm:p-7"
          >
            <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-[260px] w-[260px] rounded-full bg-[#b49a7c]/22 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(180,154,124,0.12),transparent_42%)]" />

            <div className="relative mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b49a7c]/20 bg-[#b49a7c]/10 text-[#9a8065]">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a8065]/70">
                  Projet cadré
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-[#111]">
                  Avec DND Conseils
                </h3>
              </div>
            </div>

            <div className="relative space-y-3">
              {solutions.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#f8f5f2]/85 px-4 py-3.5 text-sm leading-6 text-black/68"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b49a7c]" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            delay: 0.12,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#b49a7c]/25 bg-white/82 px-6 py-9 text-center shadow-[0_22px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:px-8 sm:py-11"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(180,154,124,0.13),transparent)]" />

          <p className="relative mx-auto max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#111] md:text-3xl">
            Anticiper vos choix peut vous faire économiser des milliers
            d’euros.
          </p>

          <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-black/50">
            Un accompagnement clair vous aide à décider au bon moment, avec plus
            de recul, de méthode et de sérénité.
          </p>
        </motion.div>
      </div>
    </section>
  );
}