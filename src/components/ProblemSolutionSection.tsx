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
    <section className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
            Pourquoi se faire accompagner
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Vos travaux peuvent vite devenir une source de stress.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Sans accompagnement, un projet peut entraîner des surcoûts,
            des retards et des décisions difficiles à corriger.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-full bg-red-500/10 p-3 text-red-300">
                <AlertTriangle size={22} />
              </div>
              <h3 className="text-2xl font-medium">Sans accompagnement</h3>
            </div>

            <div className="space-y-4">
              {problems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-4 text-neutral-300"
                >
                  <span className="h-2 w-2 rounded-full bg-red-300" />
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
            className="rounded-[2rem] border border-white/10 bg-white p-8 text-black shadow-2xl"
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
                  className="flex items-center gap-3 rounded-2xl bg-neutral-100 p-4 text-neutral-700"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center">
          <p className="text-2xl font-medium md:text-3xl">
            Un mauvais choix en travaux peut coûter des milliers d’euros.
          </p>
          <p className="mt-3 text-neutral-400">
            Un bon accompagnement peut vous les faire économiser.
          </p>
        </div>
      </div>
    </section>
  );
}