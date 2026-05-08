// src/components/HeroSection.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const trustItems = [
  "Conseiller indépendant",
  "Accompagnement personnalisé",
  "Sans engagement",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f3ef] px-6 pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-180px] h-[620px] w-[620px] rounded-full bg-[#b49a7c]/20 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-180px] h-[620px] w-[620px] rounded-full bg-black/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#9a8065] shadow-sm backdrop-blur lg:mx-0"
          >
            <ShieldCheck size={16} />
            Conseil travaux indépendant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-semibold leading-[0.95] tracking-tight text-[#111] md:text-7xl lg:text-8xl"
          >
            Évitez les erreurs coûteuses
            <span className="block text-[#9a8065]">dans vos travaux.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-600 lg:mx-0"
          >
            Un accompagnement indépendant pour sécuriser votre projet, choisir
            les bons artisans et garder le contrôle sur votre budget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Link
              href="/devis?type=etude"
              className="group inline-flex items-center gap-3 rounded-full bg-[#111] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#9a8065]"
            >
              Demander une étude gratuite
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/devis"
              className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-8 py-4 text-sm font-medium text-[#111] backdrop-blur transition hover:border-[#b49a7c] hover:bg-white"
            >
              Parler de mon projet
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
            className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-neutral-600 lg:justify-start"
          >
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#9a8065]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-[#b49a7c]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-[#080706] p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.22)]">
            <div className="absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#b49a7c]/30 blur-3xl" />

            <p className="text-xs uppercase tracking-[0.35em] text-[#d3bea6]">
              Diagnostic
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight">
              Avant de signer un devis, sécurisez vos décisions.
            </h2>

            <div className="mt-10 space-y-4">
              {[
                "Analyse du projet",
                "Risques à éviter",
                "Budget mieux maîtrisé",
                "Choix des artisans",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                >
                  <span className="text-neutral-300">{item}</span>
                  <span className="text-sm text-[#d3bea6]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-white p-6 text-[#111]">
              <p className="text-3xl font-semibold">48h</p>
              <p className="mt-1 text-sm text-neutral-500">
                pour recevoir un premier retour personnalisé.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}