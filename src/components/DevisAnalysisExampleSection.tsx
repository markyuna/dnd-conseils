// src/components/DevisAnalysisExampleSection.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Euro,
  FileSearch,
  HelpCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type AnalysisPoint = {
  id: string;
  title: string;
  label: string;
  description: string;
  icon: typeof AlertTriangle;
  position: string;
};

const analysisPoints: AnalysisPoint[] = [
  {
    id: "detail",
    title: "Poste peu détaillé",
    label: "Détail insuffisant",
    description:
      "Un poste trop général peut cacher des différences importantes : qualité des matériaux, quantité prévue, préparation du support ou finitions incluses.",
    icon: FileSearch,
    position: "left-[18%] top-[31%]",
  },
  {
    id: "price",
    title: "Prix à clarifier",
    label: "Prix flou",
    description:
      "Certains montants doivent être compris dans leur contexte : main-d’œuvre incluse, fournitures comprises, conditions d’intervention ou options non précisées.",
    icon: Euro,
    position: "right-[15%] top-[43%]",
  },
  {
    id: "delay",
    title: "Délai absent",
    label: "Planning manquant",
    description:
      "Un devis sans délai clair peut créer des tensions pendant les travaux. Il est important d’identifier les dates, les étapes et les conditions de démarrage.",
    icon: Clock3,
    position: "left-[22%] bottom-[29%]",
  },
  {
    id: "guarantee",
    title: "Garantie à vérifier",
    label: "Sécurité contractuelle",
    description:
      "Assurances, garanties, mentions obligatoires et responsabilités doivent être vérifiées avant signature pour limiter les mauvaises surprises.",
    icon: ShieldCheck,
    position: "right-[17%] bottom-[20%]",
  },
];

const documentRows = [
  {
    label: "Dépose et préparation",
    detail: "Préparation support existant",
    price: "1 250 €",
    muted: false,
  },
  {
    label: "Fourniture matériaux",
    detail: "Matériaux selon disponibilité",
    price: "3 480 €",
    muted: false,
  },
  {
    label: "Pose et finitions",
    detail: "Pose complète — détails à confirmer",
    price: "4 900 €",
    muted: false,
  },
  {
    label: "Délais d’intervention",
    detail: "À définir après validation",
    price: "-",
    muted: true,
  },
  {
    label: "Garanties / assurances",
    detail: "Non précisées sur le document",
    price: "-",
    muted: true,
  },
];

export default function DevisAnalysisExampleSection() {
  const [activePointId, setActivePointId] = useState(analysisPoints[0].id);

  const activePoint =
    analysisPoints.find((point) => point.id === activePointId) ??
    analysisPoints[0];

  const ActiveIcon = activePoint.icon;

  return (
    <section
      id="exemple-analyse-devis"
      className="relative overflow-hidden bg-[#f7f4ee] px-4 py-24 text-[#171412] sm:px-6 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/20 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-180px] h-[560px] w-[560px] rounded-full bg-[#171412]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(90deg,#171412_1px,transparent_1px),linear-gradient(#171412_1px,transparent_1px)] [background-size:82px_82px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#b49a7c]/25 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8a6b4f] shadow-sm backdrop-blur">
            <FileSearch className="h-4 w-4" />
            Exemple concret
          </div>

          <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#15110d] md:text-6xl">
            Ce que l’on peut repérer dans un devis.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#6f655d] sm:text-lg">
            Un devis peut sembler clair au premier regard, mais certains points
            méritent souvent d’être vérifiés avant de signer. Cette analyse
            visuelle montre le type de vigilance que DND Conseils peut vous
            apporter.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {[
              "Identifier les zones floues",
              "Comparer avec plus de recul",
              "Poser les bonnes questions",
              "Limiter les mauvaises surprises",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/65 px-4 py-4 text-sm font-medium text-[#2c2520] shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#8a6b4f]" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/devis?offre=analyse-devis"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#15110d] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(21,17,13,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2c2520]"
            >
              Faire analyser mon devis
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/devis?type=analyse-devis"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#15110d]/10 bg-white/70 px-6 py-4 text-sm font-semibold text-[#15110d] transition duration-300 hover:-translate-y-0.5 hover:border-[#b49a7c]/50"
            >
              Voir la formule
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.2rem] bg-[#15110d]/10" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/80 p-4 shadow-[0_30px_100px_rgba(21,17,13,0.14)] backdrop-blur-xl sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1fr_0.72fr]">
              <div className="relative min-h-[560px] overflow-hidden rounded-[1.7rem] border border-black/5 bg-[#fbfaf7] p-5 shadow-inner sm:p-7">
                <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#b49a7c]/18 blur-3xl" />

                <div className="relative mb-8 flex items-start justify-between gap-4 border-b border-black/10 pb-6">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#15110d] text-white">
                      <FileSearch className="h-6 w-6" />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6b4f]">
                      Devis exemple
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#15110d]">
                      Rénovation intérieure
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-[#b49a7c]/20 bg-[#f7f4ee] px-4 py-3 text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6b4f]">
                      Total estimé
                    </p>

                    <p className="mt-1 text-xl font-semibold text-[#15110d]">
                      9 630 €
                    </p>
                  </div>
                </div>

                <div className="relative space-y-3">
                  {documentRows.map((row, index) => (
                    <div
                      key={row.label}
                      className={[
                        "grid grid-cols-[1fr_auto] gap-4 rounded-2xl border px-4 py-4 transition",
                        row.muted
                          ? "border-dashed border-[#b49a7c]/40 bg-[#f7f4ee]/70"
                          : "border-black/5 bg-white",
                      ].join(" ")}
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#15110d]">
                          {String(index + 1).padStart(2, "0")}. {row.label}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#6f655d]">
                          {row.detail}
                        </p>
                      </div>

                      <p className="text-sm font-semibold text-[#15110d]">
                        {row.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-black/5 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between text-xs text-[#6f655d]">
                    <span>Sous-total HT</span>
                    <span>8 025 €</span>
                  </div>

                  <div className="mb-3 flex items-center justify-between text-xs text-[#6f655d]">
                    <span>TVA estimée</span>
                    <span>1 605 €</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-black/10 pt-3 text-sm font-semibold text-[#15110d]">
                    <span>Total TTC</span>
                    <span>9 630 €</span>
                  </div>
                </div>

                {analysisPoints.map((point) => {
                  const PointIcon = point.icon;
                  const isActive = activePointId === point.id;

                  return (
                    <button
                      key={point.id}
                      type="button"
                      onClick={() => setActivePointId(point.id)}
                      className={[
                        "absolute z-20 flex h-12 w-12 items-center justify-center rounded-full border shadow-xl transition-all duration-300",
                        point.position,
                        isActive
                          ? "scale-110 border-[#15110d] bg-[#15110d] text-white"
                          : "border-white bg-[#b49a7c] text-white hover:scale-110 hover:bg-[#15110d]",
                      ].join(" ")}
                      aria-label={point.title}
                    >
                      <PointIcon className="h-5 w-5" />

                      <span
                        className={[
                          "absolute inset-0 rounded-full border",
                          isActive
                            ? "animate-ping border-[#15110d]"
                            : "border-[#b49a7c]",
                        ].join(" ")}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="rounded-[1.7rem] bg-[#15110d] p-5 text-white sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePoint.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full flex-col"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <ActiveIcon className="h-7 w-7 text-[#d8c4ad]" />
                    </div>

                    <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d8c4ad]">
                      <Sparkles className="h-3.5 w-3.5" />
                      Point de vigilance
                    </p>

                    <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                      {activePoint.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/68">
                      {activePoint.description}
                    </p>

                    <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex gap-3">
                        <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#d8c4ad]" />

                        <p className="text-sm leading-6 text-white/72">
                          L’objectif n’est pas de bloquer votre projet, mais de
                          vous aider à poser les bonnes questions avant de vous
                          engager.
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-8">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">
                          Analyse active
                        </p>

                        <p className="mt-2 text-sm font-medium text-white">
                          {activePoint.label}
                        </p>
                      </div>

                      <Link
                        href="/devis?offre=analyse-devis"
                        className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-sm font-semibold text-[#15110d] transition hover:-translate-y-0.5 hover:bg-[#f7f4ee]"
                      >
                        Demander une analyse
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-center text-xs text-[#6f655d]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f4ee] px-3 py-2">
                <BadgeCheck className="h-4 w-4 text-[#8a6b4f]" />
                Exemple fictif
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f4ee] px-3 py-2">
                <ShieldCheck className="h-4 w-4 text-[#8a6b4f]" />
                Aide à la décision
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f4ee] px-3 py-2">
                <AlertTriangle className="h-4 w-4 text-[#8a6b4f]" />
                Points à vérifier
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}