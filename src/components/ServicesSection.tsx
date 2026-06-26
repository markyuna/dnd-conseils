// src/components/ServicesSection.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const services = [
  {
    id: "diagnostic-flash",
    title: "Forfait Diagnostic / Flash",
    label: "Démarrage",
    duration: "Session 1h30",
    price: "150 € à 250 € HT",
    icon: ClipboardCheck,
    details: [
      "Session de 1h30 en visio ou sur place",
      "Analyse de votre situation actuelle",
      "Identification des points de vigilance",
      "Compte-rendu écrit synthétique",
    ],
    note: "Idéal pour clarifier votre projet avant de vous engager.",
  },
  {
    id: "analyse-devis",
    title: "Analyse des devis",
    label: "Avant signature",
    duration: "Jusqu'à 3 devis",
    price: "190 € à 290 € HT",
    icon: FileSearch,
    details: [
      "Analyse comparative jusqu'à 3 devis artisans",
      "Repérage des oublis et risques de surcoûts",
      "Identification des zones floues ou incohérentes",
      "Rapport écrit avec recommandations",
    ],
    note: "Pensé pour éviter les mauvaises surprises avant signature.",
  },
  {
    id: "suivi-chantier",
    title: "Suivi et coordination",
    label: "Pendant chantier",
    duration: "Ponctuel ou mensuel",
    price: "120 € à 600 € HT",
    icon: ShieldCheck,
    details: [
      "Visite de chantier ponctuelle ou pack mensuel",
      "Points de contrôle prioritaires",
      "Compte-rendu après chaque intervention",
      "Hotline conseil selon la formule choisie",
    ],
    note: "Une solution flexible pour garder le contrôle pendant les travaux.",
  },
  {
    id: "audit-budgetaire",
    title: "Audit Budgétaire",
    label: "Économies",
    duration: "Analyse globale",
    price: "250 € à 450 € HT",
    icon: WalletCards,
    details: [
      "Analyse globale du projet",
      "Étude des devis, matériaux et priorités",
      "Recherche d'alternatives plus pertinentes",
      "Recommandations pour optimiser le budget",
    ],
    note: "Objectif : économiser sans perdre en qualité.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-[#f8f7f4] px-5 py-24 text-[#111111] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#b49a7c]/18 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#111111]/8 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:76px_76px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ded8d0] bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b7a6b] shadow-sm backdrop-blur-xl">
              <BadgeCheck className="h-3.5 w-3.5" />
              Formules à la carte
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#111111] md:text-6xl">
              Une aide concrète,
              <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
                au bon moment.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base leading-8 text-[#66615b] md:text-lg">
              Choisissez l'intervention ponctuelle dont vous avez besoin
              aujourd'hui, ou optez pour un pack complet pour sécuriser votre
              projet de bout en bout.
            </p>

            <Link
              href="#offres"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(17,17,17,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
            >
              Voir les packs clés en main
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col divide-y divide-[#e8e3dc] overflow-hidden rounded-[2rem] border border-[#ded8d0] bg-white shadow-[0_24px_80px_rgba(20,18,16,0.07)]">
          {services.map((service, index) => {
            const Icon = service.icon;
            const number = String(index + 1).padStart(2, "0");
            const isOpen = openId === service.id;

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Compact row — always visible */}
                <button
                  onClick={() => toggle(service.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 px-6 py-5 text-left transition duration-300 hover:bg-[#faf8f5] sm:gap-5 sm:px-8 sm:py-6"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#e5ded6] bg-[#fbfaf8] text-[#8b7a6b] shadow-sm transition duration-300 group-hover:border-[#c7b8a8] group-hover:text-[#111111]">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Number */}
                  <span className="hidden shrink-0 text-[11px] font-semibold tracking-[0.22em] text-[#c2b8ae] sm:block">
                    {number}
                  </span>

                  {/* Title + label */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#9b8c7d]">
                      {service.label}
                    </p>
                    <h3 className="mt-0.5 text-base font-semibold tracking-[-0.03em] text-[#171717] sm:text-lg">
                      {service.title}
                    </h3>
                  </div>

                  {/* Duration */}
                  <span className="hidden shrink-0 rounded-full border border-[#e6dfd8] bg-[#fbfaf8] px-3 py-1.5 text-[11px] font-semibold text-[#7a6e64] lg:block">
                    {service.duration}
                  </span>

                  {/* Price */}
                  <div className="shrink-0 rounded-2xl bg-[#111111] px-4 py-2 text-center shadow-[0_8px_24px_rgba(17,17,17,0.16)]">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      Tarif
                    </span>
                    <span className="block text-sm font-semibold text-white">
                      {service.price}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={[
                      "h-5 w-5 shrink-0 text-[#9b8c7d] transition duration-300",
                      isOpen ? "rotate-180 text-[#111111]" : "",
                    ].join(" ")}
                  />
                </button>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#ede8e1] bg-[#faf8f5] px-6 py-7 sm:px-8">
                        {/* Details grid */}
                        <div className="grid gap-3 sm:grid-cols-2">
                          {service.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex gap-3 rounded-2xl border border-[#eee8e1] bg-white p-4 text-sm leading-6 text-[#625b53] shadow-[0_8px_24px_rgba(20,18,16,0.04)]"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8b7a6b]" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Note */}
                        <div className="mt-5 rounded-2xl border border-[#eadfd4] bg-white/80 px-5 py-4">
                          <p className="text-sm font-medium leading-7 text-[#5f574f]">
                            {service.note}
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <Link
                            href={`/devis?type=${service.id}`}
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(17,17,17,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
                          >
                            Demander cette formule
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                          <p className="text-xs font-medium text-[#8b8177]">
                            Réponse personnalisée selon votre projet.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
