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

const values = [
  {
    icon: Eye,
    title: "Transparence",
    text: "Des conseils francs, lisibles et sans discours compliqué.",
  },
  {
    icon: BadgeCheck,
    title: "Rigueur",
    text: "Une approche structurée pour réduire les zones d'incertitude.",
  },
  {
    icon: Sparkles,
    title: "Réactivité",
    text: "Des réponses rapides pour vous permettre d'avancer au bon moment.",
  },
  {
    icon: Handshake,
    title: "Indépendance",
    text: "Aucun partenariat avec des artisans. Uniquement vos intérêts.",
  },
];

const expertise = [
  {
    icon: Compass,
    number: "01",
    title: "Analyse stratégique",
    text: "Clarifier vos objectifs, vos contraintes et les décisions prioritaires avant d'engager des travaux.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Lecture chantier",
    text: "Identifier les points techniques, les risques et les incohérences pour éviter les mauvaises surprises.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Décisions sécurisées",
    text: "Vous aider à avancer avec méthode, visibilité et sérénité à chaque étape du projet.",
  },
];

const method = [
  { title: "Écouter", text: "Comprendre votre besoin réel, votre contexte, votre budget et vos priorités." },
  { title: "Analyser", text: "Étudier la faisabilité, les contraintes techniques et les points sensibles du projet." },
  { title: "Structurer", text: "Vous transmettre des conseils clairs, hiérarchisés et directement actionnables." },
  { title: "Accompagner", text: "Vous aider à prendre les bonnes décisions avant et pendant les étapes importantes." },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function AboutPage() {
  return (
    <>
      <Navbar variant="default" />

      <main className="overflow-hidden bg-[#f6f2ee] text-[#17130f]">

        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] overflow-hidden pt-28 pb-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_10%,rgba(180,154,124,0.28),transparent_40%),radial-gradient(ellipse_at_85%_5%,rgba(255,255,255,0.9),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-0 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="pb-16 lg:pb-24"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8b7a6b] shadow-sm backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5" />
                À propos
              </div>

              <h1 className="max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] md:text-5xl lg:text-6xl">
                Une expertise travaux pensée pour décider avec clarté.
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-[#6f6257]">
                DND Conseils accompagne les particuliers dans leurs projets de rénovation, d'extension et d'aménagement avec une approche humaine, indépendante et orientée résultat.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Vision terrain", "Conseil indépendant", "Approche personnalisée"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#d8cfc5] bg-white/70 px-4 py-2 text-sm font-medium text-[#4a4038] shadow-sm backdrop-blur"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#b49a7c]" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative self-end"
            >
              <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-[#b49a7c]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-t-[2.5rem] border border-white/70 border-b-0 bg-white/30 p-3 pb-0 shadow-[0_35px_100px_rgba(23,19,15,0.18)] backdrop-blur-xl">
                <div className="relative h-[480px] overflow-hidden rounded-t-[2rem] md:h-[580px]">
                  <Image
                    src="/apropos/denis.png"
                    alt="Denis — Conseiller indépendant en travaux, DND Conseils"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute inset-x-4 top-4 flex justify-end">
                    <div className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl">
                      Conseil indépendant
                    </div>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/20 bg-black/40 p-5 text-white backdrop-blur-xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">Denis — Fondateur</p>
                    <p className="mt-2 text-xl font-semibold leading-tight tracking-[-0.03em]">
                      Une vision terrain pour transformer l'incertitude en décisions claires.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SIGNATURE ── */}
        <section className="relative px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/80 p-8 shadow-[0_28px_80px_rgba(23,19,15,0.07)] backdrop-blur-xl md:p-12"
            >
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#b49a7c]/18 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c]/60 to-transparent" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9a7d5c]">
                    Une approche personnelle
                  </p>
                  <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
                    Derrière chaque projet, il y a des décisions importantes.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#6a5f54]">
                    Beaucoup de particuliers avancent dans leurs travaux sans vision suffisamment claire : choix d'artisans, budget à cadrer, décisions prises dans l'urgence ou manque de visibilité technique. Mon rôle est de vous apporter un regard extérieur, de structurer votre réflexion et de vous permettre d'avancer avec plus de sérénité, de maîtrise et de confiance.
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17130f] text-sm font-semibold text-white shadow-lg">
                      D
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#17130f]">Denis</p>
                      <p className="text-sm text-[#7a7068]">Conseiller indépendant en travaux</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex lg:shrink-0 lg:flex-col lg:gap-3">
                  {["10 ans de terrain", "100% indépendant", "Particuliers uniquement"].map((item) => (
                    <div key={item} className="rounded-2xl border border-[#e8e2da] bg-[#faf7f4] px-5 py-3 text-sm font-medium text-[#4a4038]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── EXPERTISE ── */}
        <section className="relative px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9a7d5c]">Expertise</p>
                <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.045em] md:text-4xl">
                  Un accompagnement précis, du premier doute à la bonne décision.
                </h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-[#6a5f54]">
                Une approche claire, structurée et rassurante à chaque étape de votre projet.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {expertise.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp} transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-[#e8e2da] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(23,19,15,0.1)]"
                  >
                    <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-[#b49a7c]/15 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="mb-6 block text-[11px] font-semibold tracking-[0.22em] text-[#b49a7c]">{item.number}</span>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#17130f] text-white shadow-md transition duration-300 group-hover:bg-[#b49a7c]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#6a5f54]">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── VALEURS + METHODE ── */}
        <section className="relative bg-[#17130f] px-4 py-24 text-white sm:px-6">
          <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#b49a7c]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b49a7c]">Valeurs & méthode</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] md:text-4xl">
                  Ce qui guide chaque intervention.
                </h2>
              </div>
              <p className="text-base leading-8 text-white/52 lg:text-right">
                Des principes clairs et une méthode éprouvée pour vous donner une vision utile à chaque étape.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Values */}
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={v.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-60px" }}
                      variants={fadeUp} transition={{ duration: 0.7, ease, delay: i * 0.07 }}
                      className="rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-6 backdrop-blur"
                    >
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-4.5 w-4.5 text-[#d8c4ad]" />
                      </div>
                      <h3 className="text-lg font-semibold">{v.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/55">{v.text}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Method */}
              <div className="space-y-3">
                {method.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp} transition={{ duration: 0.7, ease, delay: i * 0.07 }}
                    className="flex items-start gap-5 rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-5 backdrop-blur"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b49a7c] text-[11px] font-bold text-[#17130f]">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/55">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9a7d5c]">
              Votre projet commence ici
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.045em] md:text-4xl">
              Parlons de votre projet avec clarté.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#6a5f54]">
              Une première étude pour comprendre votre besoin, identifier les bons choix et avancer avec plus de sérénité.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/devis?type=etude"
                className="inline-flex items-center gap-2 rounded-full bg-[#17130f] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(23,19,15,0.2)] transition hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
              >
                Demander un diagnostic gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#offres"
                className="inline-flex items-center gap-2 rounded-full border border-[#17130f]/15 bg-white px-7 py-4 text-sm font-semibold text-[#17130f] shadow-sm transition hover:-translate-y-0.5"
              >
                Voir nos packs
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
