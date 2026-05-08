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
    <section className="relative overflow-hidden bg-[#f8f5f2] py-28 text-[#1a1a1a]">
      <div className="absolute left-1/2 top-[-220px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#b49a7c]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b49a7c]">
            Pourquoi se faire accompagner
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Vos travaux peuvent vite devenir une source de stress.
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/55">
            Sans accompagnement, un projet peut entraîner des surcoûts,
            des retards et des décisions difficiles à corriger.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-black/10 bg-white/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                <AlertTriangle size={22} />
              </div>
              <h3 className="text-2xl font-medium">Sans accompagnement</h3>
            </div>

            <div className="space-y-4">
              {problems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#f8f5f2] p-4 text-black/65"
                >
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-[2rem] border border-[#b49a7c]/30 bg-white p-8 text-[#1a1a1a] shadow-[0_30px_80px_rgba(180,154,124,0.18)]"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/10 p-3 text-emerald-600">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-2xl font-medium">Avec DND Conseils</h3>
            </div>

            <div className="space-y-4">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#f8f5f2] p-4 text-black/70"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-[#b49a7c]/25 bg-[#efe9e3] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <p className="text-2xl font-medium md:text-3xl">
            Un mauvais choix en travaux peut coûter des milliers d’euros.
          </p>
          <p className="mt-3 text-black/50">
            Un bon accompagnement peut vous les faire économiser.
          </p>
        </div>
      </div>
    </section>
  );
}