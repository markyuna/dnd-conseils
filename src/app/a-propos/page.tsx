"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Compass,
  Eye,
  Handshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const expertise = [
  {
    icon: Compass,
    title: "Analyse stratégique",
    text: "Clarifier vos objectifs, vos contraintes et les décisions prioritaires avant d’engager des travaux.",
  },
  {
    icon: Building2,
    title: "Lecture chantier",
    text: "Identifier les points techniques, les risques et les incohérences pour éviter les mauvaises surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Décisions sécurisées",
    text: "Vous aider à avancer avec méthode, visibilité et sérénité à chaque étape du projet.",
  },
];

const method = [
  {
    title: "Écouter",
    text: "Comprendre votre besoin réel, votre contexte, votre budget et vos priorités.",
  },
  {
    title: "Analyser",
    text: "Étudier la faisabilité, les contraintes techniques et les points sensibles du projet.",
  },
  {
    title: "Structurer",
    text: "Vous transmettre des conseils clairs, hiérarchisés et directement actionnables.",
  },
  {
    title: "Accompagner",
    text: "Vous aider à prendre les bonnes décisions avant et pendant les étapes importantes.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Transparence",
    text: "Des conseils francs, lisibles et sans discours compliqué.",
  },
  {
    icon: BadgeCheck,
    title: "Rigueur",
    text: "Une approche structurée pour réduire les zones d’incertitude.",
  },
  {
    icon: Sparkles,
    title: "Réactivité",
    text: "Des réponses rapides pour vous permettre d’avancer au bon moment.",
  },
  {
    icon: Handshake,
    title: "Confiance",
    text: "Un accompagnement humain, indépendant et orienté vers vos intérêts.",
  },
];

const stats = [
  "Vision terrain",
  "Conseils indépendants",
  "Approche personnalisée",
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="default" />

      <main className="overflow-hidden bg-[#f6f2ee] text-[#171411]">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(180,154,124,0.32),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.95),transparent_28%),linear-gradient(135deg,#f6f2ee_0%,#efe6dc_100%)]" />
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f6f2ee] to-transparent" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#8f7658] shadow-sm backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                À propos
              </div>

              <h1 className="max-w-3xl text-4xl font-light leading-[1.02] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                Une expertise travaux pensée pour décider avec clarté.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                DND Conseils accompagne les particuliers dans leurs projets de
                rénovation, d’extension et d’aménagement avec une approche
                humaine, indépendante et orientée résultat.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/5 bg-white/50 px-4 py-4 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-xl"
                  >
                    <CheckCircle2 className="mb-2 h-4 w-4 text-[#b49a7c]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[3.5rem] bg-[#b49a7c]/25 blur-3xl" />

              <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white/35 p-3 shadow-[0_35px_100px_rgba(23,20,17,0.2)] backdrop-blur-xl">
                <div className="relative h-[520px] overflow-hidden rounded-[2.35rem] md:h-[620px]">
                  <Image
                    src="/apropos/denis.png"
                    alt="Expert en conseils travaux sur chantier"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute inset-x-5 top-5 flex justify-end">
                    <div className="rounded-full border border-white/25 bg-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                      Conseil indépendant
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.8rem] border border-white/25 bg-white/18 p-6 text-white shadow-2xl backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                      Accompagnement sur mesure
                    </p>
                    <p className="mt-3 max-w-md text-2xl font-light leading-tight md:text-3xl">
                      Une vision terrain pour transformer l’incertitude en
                      décisions claires.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SIGNATURE */}
        <section className="relative px-6 py-20 md:px-10">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/70 p-8 shadow-[0_30px_90px_rgba(23,20,17,0.06)] backdrop-blur-xl md:p-14"
            >
              <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#b49a7c]/20 blur-3xl" />

              <div className="relative">
                <p className="text-sm uppercase tracking-[0.28em] text-[#9a7d5c]">
                  Une approche personnelle
                </p>

                <h2 className="mt-5 max-w-3xl text-3xl font-light leading-tight tracking-[-0.04em] md:text-4xl">
                  Derrière chaque projet, il y a des décisions importantes.
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Beaucoup de particuliers avancent dans leurs travaux sans
                  vision claire : mauvais choix d’artisans, budget mal anticipé,
                  décisions prises trop vite ou manque de recul technique.
                </p>

                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  Mon rôle est de vous apporter un regard extérieur, de
                  structurer votre réflexion et de vous permettre d’avancer avec
                  plus de sérénité, de maîtrise et de confiance.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171411] text-sm font-medium text-white">
                    D
                  </div>

                  <div>
                    <p className="text-sm font-medium">Denis</p>
                    <p className="text-sm text-neutral-500">
                      Conseiller indépendant en travaux
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRESENTATION */}
        <section className="relative px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
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

              <h2 className="mt-4 text-5xl font-light leading-[0.98] tracking-[-0.05em]">
                Comprendre.
                <br />
                Prioriser.
                <br />
                Sécuriser.
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/75 p-8 shadow-[0_28px_80px_rgba(23,20,17,0.08)] backdrop-blur-xl md:p-12"
              >
                <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#b49a7c]/20 blur-3xl" />

                <BadgeCheck className="mb-7 h-9 w-9 text-[#b49a7c]" />

                <h3 className="max-w-3xl text-4xl font-light tracking-[-0.04em]">
                  Une lecture claire du bâtiment avant de vous engager.
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
                  Un projet travaux comporte souvent beaucoup de zones floues :
                  budget, artisans, matériaux, délais, faisabilité, priorités.
                  L’objectif est de vous apporter un regard extérieur pour
                  comprendre les vrais enjeux et avancer sans subir votre
                  projet.
                </p>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.55, delay: index * 0.08 }}
                      className="group rounded-[2rem] border border-black/5 bg-white/55 p-7 shadow-sm backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_rgba(23,20,17,0.08)]"
                    >
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#171411] text-white transition duration-300 group-hover:bg-[#b49a7c]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h4 className="text-2xl font-light">{value.title}</h4>
                      <p className="mt-3 leading-7 text-neutral-600">
                        {value.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="relative bg-white px-6 py-28 md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(180,154,124,0.14),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#9a7d5c]">
                  Expertise
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight tracking-[-0.05em] md:text-6xl">
                  Un accompagnement précis, du premier doute à la bonne décision.
                </h2>
              </div>

              <p className="max-w-md text-lg leading-8 text-neutral-500">
                Une approche premium ne signifie pas compliquée. Elle signifie
                claire, structurée, rassurante et utile.
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
                    className="group relative overflow-hidden rounded-[2.25rem] border border-black/5 bg-[#f8f4ef] p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_85px_rgba(23,20,17,0.12)]"
                  >
                    <div className="absolute right-[-70px] top-[-70px] h-44 w-44 rounded-full bg-[#b49a7c]/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative mb-9 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition duration-300 group-hover:bg-[#171411] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="relative text-2xl font-light">
                      {item.title}
                    </h3>

                    <p className="relative mt-4 leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* METHODE */}
        <section className="relative px-6 py-28 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#9a7d5c]">
                Méthode
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-light leading-tight tracking-[-0.05em] md:text-6xl">
                Une méthode simple, lisible et efficace.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-neutral-600">
                Chaque étape sert un objectif : vous donner une vision plus
                claire, réduire les risques et faciliter vos choix.
              </p>
            </div>

            <div className="space-y-4">
              {method.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group grid gap-5 rounded-[2rem] border border-black/5 bg-white/65 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:bg-white hover:shadow-[0_22px_70px_rgba(23,20,17,0.08)] sm:grid-cols-[72px_1fr]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#171411] text-sm font-medium text-white transition group-hover:bg-[#b49a7c]">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-light">{step.title}</h3>
                    <p className="mt-2 leading-7 text-neutral-600">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-12 md:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#171411] px-6 py-20 text-center text-white shadow-[0_35px_100px_rgba(23,20,17,0.28)] md:px-16">
            <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#b49a7c]/25 blur-3xl" />
            <div className="absolute bottom-[-140px] right-[-100px] h-96 w-96 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d6bf9a]">
                Votre projet commence ici
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight tracking-[-0.05em] md:text-6xl">
                Parlons de votre projet avec clarté.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/65">
                Une première étude pour comprendre votre besoin, identifier les
                bons choix et avancer avec plus de sérénité.
              </p>

              <Link
                href="/devis?type=etude"
                className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#171411] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d6bf9a]"
              >
                Demander une étude
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}