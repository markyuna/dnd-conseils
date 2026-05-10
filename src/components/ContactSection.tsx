// src/components/ContactSection.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageSquareText,
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
    href: "/devis?type=etude",
    label: "Étude gratuite",
    title: "Demander une première analyse",
    text: "Obtenir un regard clair avant de vous engager.",
  },
  {
    href: "/devis?type=contact",
    label: "Premier échange",
    title: "Poser une question",
    text: "Échanger sur une hésitation, un besoin simple ou un doute.",
  },
  {
    href: "/devis",
    label: "Projet avancé",
    title: "Décrire mon projet complet",
    text: "Transmettre les détails pour recevoir une orientation adaptée.",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6f2ee] py-24 text-[#171412]"
    >
      <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-black/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#9c7b5d] shadow-sm backdrop-blur">
            <Sparkles size={14} />
            Contact
          </div>

          <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#111] via-[#2d241e] to-[#9a8065] bg-clip-text text-transparent">
              Vous avez un projet travaux&nbsp;?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Choisissez le bon point de départ. Votre demande sera ensuite
            centralisée dans notre formulaire sécurisé.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative overflow-hidden bg-[#171412] p-7 text-white md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(180,154,124,0.28),transparent_36%)]" />
            <div className="absolute right-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#b49a7c]/30 blur-3xl" />
            <div className="absolute bottom-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#d3bea6] shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
                  <MessageSquareText size={26} />
                </div>

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c8aa87]">
                  Un premier pas simple
                </p>

                <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-4xl">
                  Avancez avec plus de clarté avant de vous engager.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                  Un projet de rénovation implique des choix importants. Nous
                  vous aidons à cadrer vos besoins, vos priorités et vos
                  prochaines décisions.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                <ValueItem
                  icon={<Clock size={19} />}
                  title="Retour rapide"
                  text="Une première réponse sous 48h."
                />
                <ValueItem
                  icon={<ShieldCheck size={19} />}
                  title="Approche sécurisante"
                  text="Un regard extérieur pour éviter les mauvaises surprises."
                />
                <ValueItem
                  icon={<CheckCircle2 size={19} />}
                  title="Sans engagement"
                  text="Vous restez libre dans la suite de votre projet."
                />
              </div>
            </div>
          </div>

          <div className="relative p-7 md:p-10 lg:p-12">
            <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#b49a7c]/10 blur-3xl" />

            <div className="relative mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a89278]">
                Choisir mon parcours
              </p>

              <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                Comment souhaitez-vous commencer&nbsp;?
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600">
                Chaque option vous guide vers le formulaire adapté à votre
                niveau d’avancement.
              </p>
            </div>

            <div className="relative grid gap-3">
              {paths.map((path, index) => (
                <motion.div
                  key={path.href}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={path.href}
                    className="group relative flex items-center justify-between gap-5 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-5 transition duration-500 hover:-translate-y-0.5 hover:border-[#a89278]/50 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(180,154,124,0.12),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />

                    <div className="relative">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#a89278]">
                        {path.label}
                      </p>

                      <p className="font-semibold tracking-[-0.02em] text-[#111]">
                        {path.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-neutral-500">
                        {path.text}
                      </p>
                    </div>

                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171412] text-white transition duration-500 group-hover:bg-[#a89278]">
                      <ArrowRight
                        size={18}
                        className="transition duration-500 group-hover:translate-x-0.5"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3 text-xs text-neutral-500">
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
  icon: React.ReactNode;
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