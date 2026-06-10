// src/components/ProcessSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
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
    desc: "Nous clarifions votre projet, vos priorités, vos contraintes et les premiers points de vigilance.",
    icon: Handshake,
  },
  {
    title: "Diagnostic du projet",
    desc: "Nous analysons les devis, le budget, les risques techniques et les éléments à vérifier avant de décider.",
    icon: FileSearch,
  },
  {
    title: "Plan d’action",
    desc: "Vous recevez des recommandations concrètes pour avancer avec méthode, clarté et confiance.",
    icon: ClipboardList,
  },
  {
    title: "Suivi jusqu’à réalisation",
    desc: "Vous gardez une vision claire pendant les travaux, avec un accompagnement adapté à chaque étape.",
    icon: Route,
  },
];

const values = ["Clarté", "Méthode", "Sérénité"];

export default function ProcessSection() {
  return (
    <section
      id="methode"
      className="relative overflow-hidden bg-[#f6f2ee] px-4 py-24 text-[#171412] sm:px-6 lg:py-28"
    >
      <Image
        src="/include/dnd-plans-materiaux.webp"
        alt=""
        fill
        aria-hidden="true"
        priority={false}
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 scale-105 object-cover opacity-70 blur-[0.5px]"
      />

      <div className="pointer-events-none absolute inset-0 z-10 bg-[#f6f2ee]/38" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#f6f2ee]/82 via-[#f6f2ee]/20 to-[#f6f2ee]/82" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#f6f2ee]/68 via-transparent to-[#f6f2ee]/58" />

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-[-260px] top-[-280px] h-[620px] w-[620px] rounded-full bg-[#b49a7c]/18 blur-3xl" />
        <div className="absolute bottom-[-300px] right-[-260px] h-[660px] w-[660px] rounded-full bg-white/55 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[#171412]/5 blur-3xl" />
      </div>

      <div className="relative z-20 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a8065] shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Méthode
          </div>

          <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#111] md:text-6xl">
            Un processus clair pour éviter
            <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
              les décisions précipitées.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60">
            Chaque étape est pensée pour transformer une idée encore floue en
            décisions lisibles, sécurisées et alignées avec vos priorités.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs font-medium text-black/58">
            {values.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl"
              >
                <ShieldCheck className="h-4 w-4 text-[#9a8065]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#b49a7c]/45 to-transparent lg:block" />

          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/76 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#b49a7c]/55 hover:bg-white/86 hover:shadow-[0_34px_100px_rgba(0,0,0,0.16)] sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.55),rgba(180,154,124,0.12),rgba(255,255,255,0.25))]" />
                  <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-[220px] w-[220px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/20" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c]/60 to-transparent" />

                  <div className="relative">
                    <div className="mb-6 flex items-start justify-between gap-5">
                      <div className="flex items-center gap-4">
                        <span className="flex h-13 w-13 items-center justify-center rounded-2xl border border-black/10 bg-[#f8f5f2]/90 text-[#9a8065] shadow-sm transition duration-500 group-hover:scale-105 group-hover:border-[#b49a7c]/45">
                          <Icon className="h-5 w-5" />
                        </span>

                        <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#9a8065]">
                          Étape 0{index + 1}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#111]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-black/62">
                      {step.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/70 bg-white/72 px-6 py-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:px-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.45),rgba(180,154,124,0.13),rgba(255,255,255,0.25))]" />

          <p className="relative mx-auto max-w-3xl text-xl font-semibold leading-tight tracking-[-0.035em] text-[#111] md:text-2xl">
            L’objectif : vous aider à comprendre ce qui compte vraiment,
            comparer les options et avancer avec les bons arbitrages.
          </p>
        </motion.div>
      </div>
    </section>
  );
}