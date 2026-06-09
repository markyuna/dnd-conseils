// src/components/FinalCtaSection.tsx

"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#080706] px-4 py-24 text-white sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#b49a7c]/25 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-180px] h-[480px] w-[480px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:76px_76px]" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d8c4ad] backdrop-blur-xl"
        >
          <ShieldCheck className="h-4 w-4" />
          Passez à l’action
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            delay: 0.08,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl"
        >
          Un projet de travaux ?
          <span className="block bg-gradient-to-r from-[#d8c4ad] via-white to-[#b49a7c] bg-clip-text text-transparent">
            Avancez avec plus de sérénité.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            delay: 0.16,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
        >
          Des choix bien anticipés peuvent vous faire économiser des milliers
          d’euros. Faites-vous accompagner avant de vous engager.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            delay: 0.24,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-10 max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6"
        >
          <p className="text-sm font-medium text-white/55">
            Pour un premier échange, contactez-nous directement :
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#d8c4ad]">
              <Phone className="h-5 w-5" />
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b49a7c]">
                DND Conseils
              </p>

              <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-white">
                06.04.52.24.05
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}