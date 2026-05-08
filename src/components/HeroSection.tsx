"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const trustItems = [
  "Conseiller indépendant",
  "Accompagnement personnalisé",
  "Sans engagement",
];

const diagnosticItems = [
  "Analyse du projet",
  "Risques à éviter",
  "Budget mieux maîtrisé",
  "Choix des artisans",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f5f2] px-4 pb-20 pt-32 text-[#1a1a1a] sm:px-6 lg:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-240px] top-[-260px] h-[680px] w-[680px] rounded-full bg-[#b49a7c]/20 blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-240px] h-[700px] w-[700px] rounded-full bg-[#efe1d4] blur-3xl" />
        <div className="absolute left-1/2 top-24 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/75 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="relative text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a8065] shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl lg:mx-0"
          >
            <ShieldCheck className="h-4 w-4" />
            Conseil travaux indépendant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-[#111] sm:text-6xl md:text-7xl lg:mx-0 lg:text-[7.15rem]"
          >
            Évitez les erreurs coûteuses
            <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
              dans vos travaux.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.24,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-black/55 sm:text-lg lg:mx-0"
          >
            Un accompagnement indépendant pour sécuriser votre projet, choisir
            les bons artisans et garder le contrôle sur votre budget avant de
            vous engager.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.38,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            <Link
              href="/devis?type=etude"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#1a1a1a] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#b49a7c] to-[#8b7259] opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="relative">Demander une étude gratuite</span>
              <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/devis?type=contact"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-8 py-4 text-sm font-semibold text-[#111] shadow-[0_12px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#b49a7c] hover:bg-white"
            >
              Parler de mon projet
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.6 }}
            className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-black/55 lg:justify-start"
          >
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#9a8065]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.28,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 rounded-[3.5rem] bg-[#b49a7c]/18 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-white/72 p-8 text-[#1a1a1a] shadow-[0_45px_120px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,154,124,0.22),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.65),transparent_35%)]" />
            <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#b49a7c]/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.38em] text-[#9a8065]">
                  Diagnostic
                </p>

                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#f8f5f2] shadow-sm">
                  <ClipboardCheck className="h-5 w-5 text-[#9a8065]" />
                </span>
              </div>

              <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.04em]">
                Avant de signer un devis, sécurisez vos décisions.
              </h2>

              <div className="mt-9 space-y-3">
                {diagnosticItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + index * 0.08 }}
                    className="group flex items-center justify-between rounded-2xl border border-black/10 bg-[#f8f5f2]/75 p-4 backdrop-blur transition duration-300 hover:border-[#b49a7c]/45 hover:bg-white"
                  >
                    <span className="inline-flex items-center gap-3 text-black/65">
                      <BadgeCheck className="h-4 w-4 text-[#9a8065]" />
                      {item}
                    </span>

                    <span className="text-xs font-medium tracking-[0.2em] text-[#9a8065]">
                      0{index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-[0.82fr_1.18fr] gap-3">
                <div className="rounded-3xl bg-[#1a1a1a] p-6 text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                  <p className="text-4xl font-semibold tracking-[-0.06em]">
                    48h
                  </p>
                  <p className="mt-2 text-sm leading-5 text-white/55">
                    premier retour personnalisé
                  </p>
                </div>

                <div className="rounded-3xl border border-black/10 bg-[#efe9e3] p-6">
                  <Sparkles className="h-5 w-5 text-[#9a8065]" />
                  <p className="mt-4 text-sm leading-6 text-black/60">
                    Une lecture claire du projet avant travaux, avec les points
                    sensibles à vérifier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}