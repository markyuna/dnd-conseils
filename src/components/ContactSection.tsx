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
    text: "Pour obtenir un regard clair avant de vous engager.",
  },
  {
    href: "/devis?type=contact",
    label: "Premier échange",
    title: "Poser une question",
    text: "Pour une hésitation, un besoin simple ou un doute.",
  },
  {
    href: "/devis",
    label: "Projet avancé",
    title: "Décrire mon projet complet",
    text: "Pour transmettre les détails et recevoir une orientation adaptée.",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6f2ee] py-32 text-[#171412]"
    >
      <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#9c7b5d] shadow-sm backdrop-blur">
            <Sparkles size={14} />
            Contact
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Vous avez un projet travaux ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Choisissez le bon point de départ. Votre demande sera ensuite
            centralisée dans notre formulaire sécurisé.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="relative grid overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative overflow-hidden bg-[#171412] p-8 text-white md:p-12">
            <div className="absolute right-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#b49a7c]/30 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#d3bea6]">
                <MessageSquareText size={26} />
              </div>

              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c8aa87]">
                Un premier pas simple
              </p>

              <h3 className="text-3xl font-semibold leading-tight">
                Avancez avec plus de clarté avant de vous engager.
              </h3>

              <p className="mt-5 leading-7 text-white/65">
                Un projet de rénovation implique des choix importants. Nous vous
                aidons à cadrer vos besoins, vos priorités et vos prochaines
                décisions.
              </p>

              <div className="mt-10 space-y-5">
                <ValueItem
                  icon={<Clock size={20} />}
                  title="Retour rapide"
                  text="Une première réponse sous 48h."
                />
                <ValueItem
                  icon={<ShieldCheck size={20} />}
                  title="Approche sécurisante"
                  text="Un regard extérieur pour éviter les mauvaises surprises."
                />
                <ValueItem
                  icon={<CheckCircle2 size={20} />}
                  title="Sans engagement"
                  text="Vous restez libre dans la suite de votre projet."
                />
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a89278]">
                Choisir mon parcours
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Comment souhaitez-vous commencer ?
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Chaque bouton vous redirige vers le formulaire complet déjà
                connecté à Appwrite et aux emails automatiques.
              </p>
            </div>

            <div className="grid gap-4">
              {paths.map((path, index) => (
                <motion.div
                  key={path.href}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={path.href}
                    className="group flex items-center justify-between gap-5 rounded-3xl border border-neutral-200 bg-white p-5 transition hover:border-[#a89278]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  >
                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-[0.24em] text-[#a89278]">
                        {path.label}
                      </p>

                      <p className="font-semibold text-[#111]">{path.title}</p>

                      <p className="mt-1 text-sm leading-6 text-neutral-500">
                        {path.text}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171412] text-white transition group-hover:bg-[#a89278]">
                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-0.5"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-neutral-500">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2"
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
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#c8aa87]">
        {icon}
      </div>

      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-sm leading-6 text-white/55">{text}</p>
      </div>
    </div>
  );
}