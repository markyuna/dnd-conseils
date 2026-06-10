// src/components/TestimonialsSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileSearch,
  HelpCircle,
  Home,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const situations = [
  {
    icon: FileSearch,
    label: "Devis reçus",
    title: "Vous avez plusieurs devis très différents",
    text: "Les prix varient fortement, les prestations ne sont pas toujours comparables et vous ne savez pas quel artisan choisir.",
    result:
      "DND Conseils vous aide à lire les devis, repérer les zones floues et poser les bonnes questions avant de signer.",
    href: "/devis?offre=analyse-devis",
    cta: "Faire analyser mes devis",
  },
  {
    icon: Home,
    label: "Projet rénovation",
    title: "Vous préparez une rénovation importante",
    text: "Vous devez organiser les priorités, anticiper le budget, comprendre les étapes et éviter de lancer les travaux sans vision claire.",
    result:
      "Nous vous aidons à cadrer votre projet, identifier les points de vigilance et avancer avec une méthode plus structurée.",
    href: "/devis?offre=pack-essentiel",
    cta: "Structurer mon projet",
  },
  {
    icon: ShieldCheck,
    label: "Avant signature",
    title: "Vous hésitez avant de vous engager",
    text: "Vous sentez que certains détails ne sont pas totalement clairs : délais, garanties, matériaux, responsabilités ou conditions d’intervention.",
    result:
      "Un regard extérieur vous permet de sécuriser votre décision et de limiter les mauvaises surprises avant le démarrage.",
    href: "/devis?type=diagnostic",
    cta: "Demander un avis",
  },
];

const trustItems = [
  "Analyse indépendante",
  "Conseils concrets",
  "Décision plus sereine",
];

export default function TestimonialsSection() {
  return (
    <section
      id="situations-frequentes"
      className="relative overflow-hidden bg-[#f4f0eb] px-4 py-24 text-[#171412] sm:px-6 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-black/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#b49a7c]/25 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8a6b4f] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Situations fréquentes
          </div>

          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#111] md:text-6xl">
            Vous vous reconnaissez
            <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
              dans l’une de ces situations ?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            Chaque projet avance avec ses doutes. L’objectif est de vous aider à
            prendre du recul avant que les imprévus, les coûts ou les décisions
            rapides ne compliquent les travaux.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-medium text-[#6f655d] shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-[#8a6b4f]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10 overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.10)] backdrop-blur-xl"
        >
          <div className="relative h-[320px] overflow-hidden rounded-[2rem] sm:h-[420px] lg:h-[500px]">
            <Image
              src="/include/dnd-conseiller-clients.webp"
              alt="Conseiller indépendant accompagnant des clients autour de plans de rénovation"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#171412]/55 via-[#171412]/12 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#171412]/60 to-transparent" />

            <div className="absolute bottom-6 left-6 max-w-lg text-white sm:bottom-8 sm:left-8">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f3dfc8] backdrop-blur-xl">
                <ShieldCheck className="h-4 w-4" />
                Accompagnement humain
              </p>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Un regard extérieur pour décider avec plus de clarté.
              </h3>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {situations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white/82 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.07)] backdrop-blur-xl transition duration-500 hover:bg-white hover:shadow-[0_32px_100px_rgba(0,0,0,0.12)] sm:p-8"
              >
                <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/20" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c]/70 to-transparent" />

                <div className="relative mb-7 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#171412] text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#b49a7c]/20 bg-[#f7f3ef] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9a8065]">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {item.label}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-neutral-600">
                    {item.text}
                  </p>

                  <div className="mt-7 rounded-2xl border border-[#b49a7c]/20 bg-[#f7f3ef] p-4">
                    <div className="flex gap-3">
                      <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#9a8065]" />

                      <p className="text-sm leading-6 text-neutral-700">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-auto pt-8">
                  <Link
                    href={item.href}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#171412] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#927b63]"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}