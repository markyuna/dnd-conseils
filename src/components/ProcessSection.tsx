// src/components/ProcessSection.tsx

"use client";

import Image from "next/image";
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
    desc: "On clarifie votre projet, vos priorités, vos contraintes et les premiers points de vigilance.",
    icon: Handshake,
  },
  {
    title: "Étude du projet",
    desc: "Analyse des devis, du budget, des risques techniques et des éléments à vérifier avant décision.",
    icon: FileSearch,
  },
  {
    title: "Plan d’action",
    desc: "Vous recevez des recommandations concrètes pour avancer avec méthode et confiance.",
    icon: ClipboardList,
  },
  {
    title: "Suivi jusqu’à réalisation",
    desc: "Un accompagnement possible pendant les travaux pour garder le contrôle à chaque étape.",
    icon: Route,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="methode"
      className="relative overflow-hidden bg-[#f6f2ee] py-24"
    >
      <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/20 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[580px] w-[580px] rounded-full bg-black/5 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8065] backdrop-blur">
              Méthode
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
              <span className="bg-gradient-to-r from-[#111] via-[#9a8065] to-[#b49a7c] bg-clip-text text-transparent">
                Un processus simple pour éviter les erreurs coûteuses.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-600 lg:ml-auto">
            Chaque étape est pensée pour clarifier votre projet, sécuriser vos
            choix et avancer avec plus de sérénité.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#111] p-7 text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-8"
          >
            <Image
              src="/methode/methode.png"
              alt="Architecture minimaliste avec jeux d’ombre et de lumière"
              fill
              priority={false}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover opacity-35 mix-blend-luminosity transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(180,154,124,0.28),transparent_38%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.15),transparent,rgba(180,154,124,0.12))]" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c4ad]">
                  Le fil conducteur
                </p>

                <h3 className="mt-5 max-w-md text-3xl font-semibold tracking-[-0.055em] md:text-5xl">
                  Une vision claire avant chaque décision.
                </h3>
              </div>

              <p className="mt-10 max-w-md text-sm leading-7 text-white/70">
                L’objectif est simple : transformer un projet flou en décisions
                lisibles, avec les bons arbitrages au bon moment.
              </p>
            </div>
          </motion.div>

          <div className="relative grid gap-3">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-[#b49a7c] via-black/10 to-transparent md:block" />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/75 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#b49a7c]/45 hover:bg-white hover:shadow-[0_18px_55px_rgba(0,0,0,0.075)] md:ml-12"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(180,154,124,0.12),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />
                  <div className="absolute right-[-60px] top-[-60px] h-[160px] w-[160px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/18" />

                  <div className="relative grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-[#9a8065] shadow-sm transition duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:border-[#b49a7c]/40">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a8065] md:hidden">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <div className="mb-2 hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-black/30 md:block">
                        Étape 0{index + 1}
                      </div>

                      <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#111]">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
                        {step.desc}
                      </p>
                    </div>

                    <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#9a8065] transition duration-500 group-hover:border-[#b49a7c]/40 group-hover:bg-[#111] group-hover:text-white md:inline-flex">
                      <ArrowRight className="h-4 w-4 transition duration-500 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}