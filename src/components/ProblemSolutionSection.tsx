"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  "Budget mal estimé",
  "Artisans peu fiables",
  "Retards de chantier",
  "Mauvaises décisions techniques",
];

const solutions = [
  "Vision claire du projet",
  "Conseils indépendants",
  "Meilleur contrôle du budget",
  "Décisions sécurisées",
];

export default function ProblemSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f2] py-24 text-[#1a1a1a]">
      {/* glow */}
      <div className="absolute left-1/2 top-[-200px] h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-[#b49a7c]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b49a7c]">
            Pourquoi se faire accompagner
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            <span className="bg-gradient-to-r from-[#111] via-[#9a8065] to-[#b49a7c] bg-clip-text text-transparent">
              Vos travaux peuvent vite devenir un problème.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-black/55">
            Sans méthode ni accompagnement, les erreurs coûtent cher et sont
            souvent difficiles à corriger une fois le chantier lancé.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* PROBLEMS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#111] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            {/* subtle glow */}
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-red-500/10 blur-3xl" />

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-3 text-red-400">
                <AlertTriangle size={20} />
              </div>
              <h3 className="text-lg font-medium tracking-tight">
                Sans accompagnement
              </h3>
            </div>

            <div className="space-y-3">
              {problems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SOLUTIONS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] border border-[#b49a7c]/30 bg-white p-6 shadow-[0_30px_80px_rgba(180,154,124,0.18)]"
          >
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#b49a7c]/20 blur-3xl" />

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-[#b49a7c]/10 p-3 text-[#9a8065]">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-medium tracking-tight">
                Avec DND Conseils
              </h3>
            </div>

            <div className="space-y-3">
              {solutions.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-[#f8f5f2] px-4 py-3 text-sm text-black/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b49a7c]" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* IMPACT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#b49a7c]/30 bg-white px-8 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(180,154,124,0.12),transparent)]" />

          <p className="relative text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            Un mauvais choix peut coûter des milliers d’euros.
          </p>

          <p className="relative mt-3 text-sm text-black/50">
            Un bon accompagnement vous permet de les éviter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}