// src/components/ContactSection.tsx

"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const trustItems = [
  "Réponse sous 48h",
  "Sans engagement",
  "Conseils personnalisés",
];

const paths = [
  {
    label: "Étude gratuite",
    title: "Demander une première analyse",
    text: "Obtenir un regard clair avant de vous engager dans vos travaux.",
  },
  {
    label: "Premier échange",
    title: "Poser une question",
    text: "Échanger sur une hésitation, un besoin simple ou un doute.",
  },
  {
    label: "Projet avancé",
    title: "Parler d’un projet complet",
    text: "Présenter votre situation pour recevoir une orientation adaptée.",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6f2ee] px-4 py-24 text-[#171412] sm:px-6 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-black/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9c7b5d] shadow-[0_12px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Contact
          </div>

          <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl lg:text-7xl">
            Vous avez un projet
            <span className="block bg-gradient-to-r from-[#111] via-[#7c654f] to-[#b49a7c] bg-clip-text text-transparent">
              de travaux&nbsp;?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
            Le plus simple est d’échanger directement pour comprendre votre
            besoin, votre niveau d’avancement et les premières décisions à
            sécuriser.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid overflow-hidden rounded-[2rem] border border-black/10 bg-white/78 shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative overflow-hidden bg-[#171412] p-7 text-white md:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(180,154,124,0.28),transparent_36%)]" />
            <div className="pointer-events-none absolute right-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#b49a7c]/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#d3bea6] shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
                  <MessageSquareText className="h-6 w-6" />
                </div>

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c8aa87]">
                  Un premier pas simple
                </p>

                <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-4xl">
                  Avancez avec plus de clarté avant de vous engager.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                  Un projet de rénovation implique des choix importants. DND
                  Conseils vous aide à cadrer vos besoins, vos priorités et vos
                  prochaines décisions.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                <ValueItem
                  icon={<Clock className="h-5 w-5" />}
                  title="Retour rapide"
                  text="Une première réponse sous 48h."
                />
                <ValueItem
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Approche sécurisante"
                  text="Un regard extérieur pour éviter les mauvaises surprises."
                />
                <ValueItem
                  icon={<CheckCircle2 className="h-5 w-5" />}
                  title="Sans engagement"
                  text="Vous restez libre dans la suite de votre projet."
                />
              </div>
            </div>
          </div>

          <div className="relative p-7 md:p-10 lg:p-12">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#b49a7c]/10 blur-3xl" />

            <div className="relative mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a89278]">
                Comment commencer
              </p>

              <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                Parlons de votre projet.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-black/55">
                Selon votre situation, l’échange permet d’identifier rapidement
                les points à clarifier avant de prendre une décision.
              </p>
            </div>

            <div className="relative grid gap-3">
              {paths.map((path, index) => (
                <motion.article
                  key={path.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.035)] transition duration-500 hover:-translate-y-0.5 hover:border-[#a89278]/50 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(180,154,124,0.12),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />

                  <div className="relative flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-[#f6f2ee] text-[#9a8065]">
                      <span className="text-xs font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#a89278]">
                        {path.label}
                      </p>

                      <p className="font-semibold tracking-[-0.02em] text-[#111]">
                        {path.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-black/52">
                        {path.text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="relative mt-8 rounded-[1.6rem] border border-black/10 bg-[#171412] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <p className="text-sm text-white/55">
                Pour un premier échange, contactez-nous directement :
              </p>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#d8c4ad]">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b49a7c]">
                    DND Conseils
                  </p>

                  <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-white">
                    06.04.52.24.05
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3 text-xs text-black/50">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white/80 px-4 py-2 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-black/5" />
        </motion.div>
      </div>
    </section>
  );
}

function ValueItem({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition duration-500 hover:bg-white/[0.07]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#c8aa87] transition duration-500 group-hover:bg-[#c8aa87] group-hover:text-[#171412]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-sm leading-6 text-white/55">{text}</p>
      </div>
    </div>
  );
}