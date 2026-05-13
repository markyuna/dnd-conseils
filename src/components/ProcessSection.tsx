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
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Premier échange",
    desc: "Clarifier votre projet, vos priorités, vos contraintes et les premiers points de vigilance.",
    icon: Handshake,
  },
  {
    title: "Diagnostic du projet",
    desc: "Analyser les devis, le budget, les risques techniques et les éléments à vérifier avant de décider.",
    icon: FileSearch,
  },
  {
    title: "Plan d’action",
    desc: "Recevoir des recommandations concrètes pour avancer avec méthode, clarté et confiance.",
    icon: ClipboardList,
  },
  {
    title: "Suivi jusqu’à réalisation",
    desc: "Être accompagné pendant les travaux pour garder une vision claire à chaque étape.",
    icon: Route,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="methode"
      className="relative overflow-hidden bg-[#f6f2ee] py-28 text-[#171412]"
    >
      <div className="absolute left-[-240px] top-[-260px] h-[620px] w-[620px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
      <div className="absolute bottom-[-300px] right-[-260px] h-[640px] w-[640px] rounded-full bg-[#171412]/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:76px_76px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a8065] shadow-sm backdrop-blur-xl">
              <Sparkles size={14} />
              Méthode
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-[#111] via-[#7c654f] to-[#b49a7c] bg-clip-text text-transparent">
                Un processus clair pour éviter les décisions précipitées.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-8 text-neutral-600">
              Chaque étape est pensée pour transformer une idée encore floue en
              décisions lisibles, sécurisées et alignées avec vos priorités.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-neutral-600">
              {["Clarté", "Méthode", "Sérénité"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur"
                >
                  <ShieldCheck size={14} className="text-[#9a8065]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="group relative min-h-[560px] overflow-hidden rounded-[2.25rem] border border-white/20 bg-[#111] p-7 text-white shadow-[0_35px_110px_rgba(0,0,0,0.22)] md:p-9"
          >
            <Image
              src="/methode/methode.png"
              alt="Architecture minimaliste avec jeux d’ombre et de lumière"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover opacity-40 mix-blend-luminosity transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(180,154,124,0.36),transparent_38%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_42%,rgba(180,154,124,0.18))]" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c4ad] to-transparent" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#d8c4ad] backdrop-blur-xl">
                  <Route size={25} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c4ad]">
                  Le fil conducteur
                </p>

                <h3 className="mt-5 max-w-md text-3xl font-semibold leading-[1] tracking-[-0.055em] md:text-5xl">
                  Une vision claire avant chaque décision.
                </h3>
              </div>

              <div className="mt-12 max-w-md rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl">
                <p className="text-sm leading-7 text-white/72">
                  L’objectif est simple : vous aider à comprendre ce qui compte
                  vraiment, comparer les options et avancer avec les bons
                  arbitrages au bon moment.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative grid gap-3">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-[#b49a7c] via-black/10 to-transparent md:block" />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[1.65rem] border border-black/10 bg-white/75 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.045)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#b49a7c]/50 hover:bg-white hover:shadow-[0_28px_80px_rgba(0,0,0,0.095)] md:ml-12 md:p-6"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(180,154,124,0.13),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />
                  <div className="absolute right-[-70px] top-[-70px] h-[180px] w-[180px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/20" />

                  <div className="relative grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
                    <div className="flex items-center gap-4">
                      <span className="flex h-13 w-13 items-center justify-center rounded-2xl border border-black/10 bg-white text-[#9a8065] shadow-sm transition duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:border-[#b49a7c]/45 group-hover:bg-[#f6f2ee]">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a8065] md:hidden">
                        Étape 0{index + 1}
                      </span>
                    </div>

                    <div>
                      <div className="mb-2 hidden text-[10px] font-semibold uppercase tracking-[0.26em] text-black/30 md:block">
                        Étape 0{index + 1}
                      </div>

                      <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#111] md:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
                        {step.desc}
                      </p>
                    </div>

                    <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#9a8065] transition duration-500 group-hover:border-[#171412] group-hover:bg-[#171412] group-hover:text-white md:inline-flex">
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