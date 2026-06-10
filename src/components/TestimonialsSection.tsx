// src/components/TestimonialsSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
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
    title: "Plusieurs devis très différents",
    text: "Les prix varient, les prestations ne sont pas comparables et le choix devient difficile.",
    result: "Nous analysons les écarts et les zones floues avant signature.",
    href: "/devis?offre=analyse-devis",
    cta: "Analyser mes devis",
  },
  {
    icon: Home,
    label: "Projet rénovation",
    title: "Une rénovation à préparer",
    text: "Vous devez cadrer les priorités, le budget et les étapes avant de lancer les travaux.",
    result: "Nous structurons votre projet avec une méthode claire.",
    href: "/devis?offre=pack-essentiel",
    cta: "Structurer mon projet",
  },
  {
    icon: ShieldCheck,
    label: "Avant signature",
    title: "Un doute avant de vous engager",
    text: "Certains points restent flous : délais, garanties, matériaux ou responsabilités.",
    result: "Nous vous aidons à sécuriser votre décision.",
    href: "/devis?type=diagnostic",
    cta: "Demander un avis",
  },
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
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:64px_64px]" />
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
            Un accompagnement clair vous aide à prendre du recul avant que les
            imprévus, les coûts ou les décisions rapides ne compliquent votre
            projet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.6rem] border border-white/70 bg-white/60 p-3 shadow-[0_34px_110px_rgba(0,0,0,0.14)] backdrop-blur-xl"
        >
          <div className="relative min-h-[760px] overflow-hidden rounded-[2.2rem] sm:min-h-[680px] lg:min-h-[620px]">
            <Image
              src="/include/dnd-conseiller-clients.webp"
              alt="Conseiller indépendant accompagnant des clients autour de plans de rénovation"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#080706]/48" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/78 via-[#080706]/34 to-[#080706]/22" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#080706]/82 via-[#080706]/38 to-transparent" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-end px-5 py-6 sm:min-h-[680px] sm:px-8 sm:py-8 lg:min-h-[620px] lg:px-10 lg:py-10">
              <div className="mb-8 max-w-2xl text-white">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f3dfc8] backdrop-blur-xl">
                  <ShieldCheck className="h-4 w-4" />
                  Accompagnement humain
                </p>

                <h3 className="text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                  Un regard extérieur pour décider avec plus de clarté.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  Vous n’avancez plus seul face aux devis, aux choix techniques
                  et aux décisions importantes.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {situations.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ y: -6 }}
                      className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[1.7rem] border border-white/22 bg-white/58 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition duration-500 hover:bg-white/72 sm:p-6"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),rgba(255,255,255,0.08))]" />
                      <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-[220px] w-[220px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/25" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c]/80 to-transparent" />

                      <div className="relative mb-6 flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#171412] text-white shadow-lg">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-2 rounded-full border border-[#b49a7c]/20 bg-[#f7f3ef]/80 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a8065]">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          {item.label}
                        </span>
                      </div>

                      <div className="relative">
                        <h4 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#111]">
                          {item.title}
                        </h4>

                        <p className="mt-4 text-sm leading-6 text-neutral-600">
                          {item.text}
                        </p>

                        <div className="mt-5 rounded-2xl border border-[#b49a7c]/18 bg-[#f7f3ef]/50 p-3 backdrop-blur-xl">
                          <div className="flex gap-3">
                            <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#9a8065]" />

                            <p className="text-xs leading-5 text-neutral-700">
                              {item.result}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative mt-auto pt-6">
                        <Link
                          href={item.href}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171412] px-5 py-3.5 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#927b63]"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}