"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const expertise = [
  {
    icon: Compass,
    title: "Analyse stratégique",
    text: "Comprendre votre projet, vos contraintes et vos priorités avant toute décision.",
  },
  {
    icon: Building2,
    title: "Vision chantier",
    text: "Anticiper les points techniques pour éviter les erreurs coûteuses.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & clarté",
    text: "Vous accompagner avec méthode, transparence et sérénité.",
  },
];

const method = [
  "Écoute de votre besoin",
  "Analyse du projet et des contraintes",
  "Conseils clairs et recommandations",
  "Accompagnement jusqu’aux bonnes décisions",
];

const values = [
  "Transparence",
  "Rigueur",
  "Réactivité",
  "Confiance",
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="minimal" />

      <main className="overflow-hidden bg-[#f6f2ee] text-[#171411]">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(180,154,124,0.28),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.9),transparent_26%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-[#8f7658] shadow-sm backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                À propos
              </div>

              <h1 className="max-w-3xl text-5xl font-light leading-[0.96] tracking-[-0.05em] text-[#171411] md:text-7xl">
                Des conseils travaux pensés pour avancer avec confiance.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
                J’accompagne les particuliers dans leurs projets de rénovation,
                d’extension ou d’aménagement avec une approche claire, humaine
                et orientée résultat.
              </p>

             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[3rem] bg-[#b49a7c]/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/30 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="relative h-[560px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/apropos/denis.png"
                    alt="Expert en conseils travaux sur chantier"
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/25 bg-white/18 p-5 text-white shadow-2xl backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/70">
                      Accompagnement sur mesure
                    </p>
                    <p className="mt-2 text-2xl font-light">
                      Une expertise terrain au service de votre projet.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRESENTATION */}
        <section className="relative px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="sticky top-28 hidden lg:block"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[#9a7d5c]">
                Notre approche
              </p>
              <h2 className="mt-4 text-4xl font-light tracking-[-0.04em]">
                Comprendre avant d’agir.
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65 }}
                className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-10"
              >
                <BadgeCheck className="mb-6 h-8 w-8 text-[#b49a7c]" />
                <h3 className="text-3xl font-light tracking-[-0.03em]">
                  Une vision claire du bâtiment
                </h3>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
                  Chaque projet mérite une lecture précise : faisabilité,
                  budget, priorités, risques, étapes clés. L’objectif est de
                  vous aider à prendre les bonnes décisions dès le départ, sans
                  perdre de temps ni avancer à l’aveugle.
                </p>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="rounded-[1.5rem] border border-black/5 bg-white/50 p-6 shadow-sm backdrop-blur-xl"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-[#9a7d5c]">
                      Valeur
                    </p>
                    <h4 className="mt-3 text-2xl font-light">{value}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="bg-white px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#9a7d5c]">
                  Expertise
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-light tracking-[-0.04em] md:text-5xl">
                  Un accompagnement précis, du premier doute à la bonne décision.
                </h2>
              </div>

              <p className="max-w-md text-neutral-500">
                Une approche premium ne signifie pas compliquée : elle signifie
                claire, structurée et rassurante.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {expertise.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group rounded-[2rem] border border-black/5 bg-[#f8f4ef] p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.10)]"
                  >
                    <div className="mb-8 flex h-13 w-13 items-center justify-center rounded-2xl bg-white shadow-sm transition group-hover:bg-[#171411] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-2xl font-light">{item.title}</h3>
                    <p className="mt-4 leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* METHODE */}
        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#9a7d5c]">
                  Méthode
                </p>
                <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] md:text-5xl">
                  Une méthode simple, lisible et efficace.
                </h2>
              </div>

              <div className="space-y-4">
                {method.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group flex items-center gap-6 rounded-[1.6rem] border border-black/5 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition hover:bg-white"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#171411] text-sm font-medium text-white transition group-hover:bg-[#b49a7c]">
                      0{index + 1}
                    </div>

                    <p className="text-lg text-neutral-700">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-10 md:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#171411] px-6 py-20 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] md:px-16">
            <p className="text-sm uppercase tracking-[0.28em] text-[#d6bf9a]">
              Votre projet commence ici
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light tracking-[-0.04em] md:text-6xl">
              Parlons de votre projet avec clarté.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-white/65">
              Une première étude pour comprendre votre besoin, identifier les
              bons choix et avancer sereinement.
            </p>

            <Link
              href="/devis?type=etude"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#171411] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d6bf9a]"
            >
              Demander une étude
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}