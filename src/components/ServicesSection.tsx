"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const services = [
  {
    title: "Conseil avant travaux",
    label: "L’aide au démarrage",
    formula: "Forfait Diagnostic / Flash",
    price: "À partir de 150 € HT",
    desc: "Une session de 1h30 en visio ou sur place, accompagnée d’un compte-rendu écrit avec les points de vigilance à anticiper.",
    icon: ClipboardCheck,
    href: "/tarifs#diagnostic-flash",
  },
  {
    title: "Analyse des devis et intervenants",
    label: "La sécurité avant de signer",
    formula: "Forfait analyse de devis",
    price: "À partir de 190 € HT",
    desc: "Analyse comparative de vos devis artisans pour identifier les zones floues, les oublis, les incohérences et les risques de surcoûts.",
    icon: FileSearch,
    href: "/tarifs#analyse-devis",
  },
  {
    title: "Suivi et coordination",
    label: "Le soulagement pendant le chantier",
    formula: "Pack mensuel ou visite ponctuelle",
    price: "À partir de 120 € HT",
    desc: "Un accompagnement pendant les travaux avec visite de chantier, compte-rendu, points de contrôle et conseils pour avancer plus sereinement.",
    icon: ShieldCheck,
    href: "/tarifs#suivi-chantier",
  },
  {
    title: "Optimisation du budget",
    label: "La recherche d’économies",
    formula: "Forfait Audit Budgétaire",
    price: "À partir de 250 € HT",
    desc: "Analyse globale de votre projet, de vos devis, matériaux et priorités afin d’identifier des alternatives plus pertinentes sans perdre en qualité.",
    icon: WalletCards,
    href: "/tarifs#audit-budgetaire",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-[#f8f7f4] px-5 py-24 text-[#111111] sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[860px] -translate-x-1/2 rounded-full bg-[#a39183]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ded8d0] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b7a6b] shadow-sm">
              <BadgeCheck className="h-3.5 w-3.5" />
              Accompagnement
            </div>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#111111] md:text-6xl">
              Concrètement comment pouvons-nous vous aider ?
            </h2>
          </motion.div>

          <motion.div
            className="max-w-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-base leading-8 text-[#66615b] md:text-lg">
              À chaque projet son rythme. Choisissez uniquement l&apos;étape
              dont vous avez besoin aujourd&apos;hui pour avancer à la carte,
              ou optez pour l’un de nos packs clés en main pour un
              accompagnement complet et serein.
            </p>

            <Link
              href="/tarifs#packs"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
            >
              Voir les packs clés en main
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={service.href}
                  className="group relative block h-full overflow-hidden rounded-[28px] border border-[#dfdbd4] bg-white/85 p-7 shadow-[0_24px_80px_rgba(20,18,16,0.06)] transition duration-500 hover:-translate-y-1 hover:border-[#b3a494] hover:bg-white hover:shadow-[0_30px_90px_rgba(20,18,16,0.10)] sm:p-8"
                  aria-label={`Voir le tarif pour ${service.title}`}
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

                  <div className="mb-10 flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e1dbd3] bg-[#fbfaf8] text-[#8b7a6b] shadow-sm transition duration-500 group-hover:border-[#b3a494] group-hover:text-[#111111]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="rounded-full border border-[#ded8d0] bg-[#fbfaf8] px-3 py-1 text-[10px] font-semibold tracking-[0.24em] text-[#a1968c]">
                      {number}
                    </span>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#8b7a6b]">
                      {service.label}
                    </p>

                    <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-[#171717] transition duration-500 group-hover:text-[#8b7a6b]">
                      {service.title}
                    </h3>

                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#e6dfd8] bg-[#fbfaf8] px-3 py-1.5 text-xs font-semibold text-[#5f574f]">
                        {service.formula}
                      </span>

                      <span className="rounded-full bg-[#111111] px-3 py-1.5 text-xs font-semibold text-white">
                        {service.price}
                      </span>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-[#66615b]">
                      {service.desc}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8b7a6b] transition duration-500 group-hover:gap-3 group-hover:text-[#111111]">
                      Voir le tarif de cette étape
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}