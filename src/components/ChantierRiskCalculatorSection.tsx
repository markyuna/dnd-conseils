// src/components/ChantierRiskCalculatorSection.tsx

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileWarning,
  Gauge,
  HelpCircle,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type AnswerValue = "yes" | "partial" | "no";

type Question = {
  id: string;
  title: string;
  description: string;
  options: {
    label: string;
    value: AnswerValue;
    risk: number;
  }[];
};

type RiskLevel = "low" | "medium" | "high";

const questions: Question[] = [
  {
    id: "devis",
    title: "Avez-vous plusieurs devis comparables ?",
    description:
      "Comparer plusieurs propositions permet de mieux comprendre les prix, les écarts et les prestations réellement incluses.",
    options: [
      { label: "Oui, plusieurs devis détaillés", value: "yes", risk: 0 },
      { label: "J’ai quelques éléments, mais ce n’est pas clair", value: "partial", risk: 1 },
      { label: "Non, un seul devis ou rien de précis", value: "no", risk: 2 },
    ],
  },
  {
    id: "details",
    title: "Les prestations sont-elles bien détaillées ?",
    description:
      "Un devis trop général peut cacher des zones floues sur les matériaux, les quantités, la préparation ou les finitions.",
    options: [
      { label: "Oui, chaque poste est clair", value: "yes", risk: 0 },
      { label: "Certains postes restent vagues", value: "partial", risk: 1 },
      { label: "Non, beaucoup de lignes sont imprécises", value: "no", risk: 2 },
    ],
  },
  {
    id: "planning",
    title: "Un planning ou délai d’intervention est-il prévu ?",
    description:
      "Sans délai clair, les travaux peuvent devenir difficiles à suivre et générer des tensions.",
    options: [
      { label: "Oui, les délais sont indiqués", value: "yes", risk: 0 },
      { label: "Il y a une estimation, mais pas de planning précis", value: "partial", risk: 1 },
      { label: "Non, rien n’est vraiment défini", value: "no", risk: 2 },
    ],
  },
  {
    id: "budget",
    title: "Votre budget inclut-il une marge pour imprévus ?",
    description:
      "Une marge de sécurité permet d’absorber les ajustements courants sans déséquilibrer tout le projet.",
    options: [
      { label: "Oui, j’ai prévu une marge", value: "yes", risk: 0 },
      { label: "Un peu, mais je ne sais pas si c’est suffisant", value: "partial", risk: 1 },
      { label: "Non, le budget est déjà très serré", value: "no", risk: 2 },
    ],
  },
  {
    id: "assurances",
    title: "Les assurances et garanties ont-elles été vérifiées ?",
    description:
      "Les garanties, assurances et responsabilités doivent être claires avant signature.",
    options: [
      { label: "Oui, tout est vérifié", value: "yes", risk: 0 },
      { label: "J’ai quelques documents, mais je ne suis pas sûr", value: "partial", risk: 1 },
      { label: "Non, je n’ai pas encore vérifié", value: "no", risk: 2 },
    ],
  },
  {
    id: "decision",
    title: "Vous sentez-vous prêt à signer ?",
    description:
      "Votre niveau de confiance est un bon indicateur : s’il reste des doutes, mieux vaut les traiter avant de s’engager.",
    options: [
      { label: "Oui, je comprends bien les enjeux", value: "yes", risk: 0 },
      { label: "J’hésite encore sur certains points", value: "partial", risk: 1 },
      { label: "Non, j’ai peur de faire une erreur", value: "no", risk: 2 },
    ],
  },
];

const riskContent: Record<
  RiskLevel,
  {
    label: string;
    title: string;
    description: string;
    badge: string;
    icon: typeof ShieldCheck;
    href: string;
    cta: string;
    tips: string[];
  }
> = {
  low: {
    label: "Risque faible",
    title: "Votre projet semble plutôt bien cadré.",
    description:
      "Les bases paraissent solides. Un dernier regard extérieur peut tout de même vous aider à confirmer vos choix avant signature.",
    badge: "Projet maîtrisé",
    icon: ShieldCheck,
    href: "/devis?type=diagnostic",
    cta: "Valider mon projet",
    tips: [
      "Relire les points contractuels",
      "Confirmer les délais",
      "Vérifier les garanties",
    ],
  },
  medium: {
    label: "Risque modéré",
    title: "Certains points méritent d’être clarifiés.",
    description:
      "Votre projet avance, mais plusieurs zones peuvent encore créer des incompréhensions : devis, budget, planning ou garanties.",
    badge: "Points à sécuriser",
    icon: ShieldAlert,
    href: "/devis?offre=analyse-devis",
    cta: "Sécuriser mon devis",
    tips: [
      "Comparer les postes importants",
      "Identifier les zones floues",
      "Préparer les bonnes questions",
    ],
  },
  high: {
    label: "Risque élevé",
    title: "Il serait préférable de faire un point avant de vous engager.",
    description:
      "Plusieurs éléments semblent insuffisamment cadrés. Un accompagnement peut vous aider à éviter les décisions prises trop vite.",
    badge: "Accompagnement recommandé",
    icon: FileWarning,
    href: "/devis?offre=pack-serenite",
    cta: "Être accompagné",
    tips: [
      "Clarifier le périmètre des travaux",
      "Analyser les devis en profondeur",
      "Revoir budget, délais et garanties",
    ],
  },
};

function getRiskLevel(score: number): RiskLevel {
  if (score <= 3) return "low";
  if (score <= 7) return "medium";
  return "high";
}

export default function ChantierRiskCalculatorSection() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const isCompleted = answeredCount === questions.length;

  const totalRisk = useMemo(
    () => Object.values(answers).reduce((total, value) => total + value, 0),
    [answers]
  );

  const progress = Math.round((answeredCount / questions.length) * 100);
  const riskLevel = getRiskLevel(totalRisk);
  const result = riskContent[riskLevel];
  const ResultIcon = result.icon;

  function handleAnswer(questionId: string, risk: number) {
    setAnswers((current) => ({
      ...current,
      [questionId]: risk,
    }));
  }

  function handleReset() {
    setAnswers({});
    setShowResult(false);
  }

  return (
    <section
      id="calculateur-risque"
      className="relative overflow-hidden bg-[#080706] px-4 py-24 text-white sm:px-6 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#b49a7c]/20 blur-3xl" />
        <div className="absolute bottom-[-220px] left-[-180px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:82px_82px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8c4ad] shadow-sm backdrop-blur">
            <Gauge className="h-4 w-4" />
            Calculateur interactif
          </div>

          <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-6xl">
            Évaluez le niveau de risque de votre projet.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
            Répondez à quelques questions simples pour identifier les points qui
            méritent d’être clarifiés avant de signer un devis ou de lancer les
            travaux.
          </p>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
            <div className="mb-3 flex items-center justify-between text-sm text-white/60">
              <span>Progression</span>
              <span>{progress}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[#d8c4ad]"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/[0.06] p-4">
                <p className="text-2xl font-semibold">{answeredCount}</p>
                <p className="mt-1 text-xs text-white/42">Réponses</p>
              </div>

              <div className="rounded-2xl bg-white/[0.06] p-4">
                <p className="text-2xl font-semibold">{questions.length}</p>
                <p className="mt-1 text-xs text-white/42">Questions</p>
              </div>

              <div className="rounded-2xl bg-white/[0.06] p-4">
                <p className="text-2xl font-semibold">{totalRisk}</p>
                <p className="mt-1 text-xs text-white/42">Score</p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-xs text-white/50">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
              <Sparkles className="h-4 w-4 text-[#d8c4ad]" />
              Résultat instantané
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
              <ShieldCheck className="h-4 w-4 text-[#d8c4ad]" />
              Sans engagement
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.2rem] bg-white/10" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.07] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-6">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  {questions.map((question, index) => {
                    const selectedRisk = answers[question.id];

                    return (
                      <div
                        key={question.id}
                        className="rounded-[1.6rem] border border-white/10 bg-[#0f0d0b]/70 p-5 sm:p-6"
                      >
                        <div className="mb-5 flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#d8c4ad]">
                            <span className="text-sm font-semibold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                              {question.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-white/52">
                              {question.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-3">
                          {question.options.map((option) => {
                            const isSelected = selectedRisk === option.risk;

                            return (
                              <button
                                key={`${question.id}-${option.value}`}
                                type="button"
                                onClick={() =>
                                  handleAnswer(question.id, option.risk)
                                }
                                className={[
                                  "group flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-left text-sm font-medium transition-all duration-300",
                                  isSelected
                                    ? "border-[#d8c4ad] bg-[#d8c4ad] text-[#15110d] shadow-lg"
                                    : "border-white/10 bg-white/[0.04] text-white/72 hover:border-[#d8c4ad]/50 hover:bg-white/[0.07] hover:text-white",
                                ].join(" ")}
                              >
                                <span>{option.label}</span>

                                <span
                                  className={[
                                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition",
                                    isSelected
                                      ? "border-[#15110d]/10 bg-[#15110d] text-white"
                                      : "border-white/10 bg-white/[0.06] text-white/60 group-hover:text-white",
                                  ].join(" ")}
                                >
                                  {isSelected ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <ArrowRight className="h-4 w-4" />
                                  )}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setShowResult(true)}
                      disabled={!isCompleted}
                      className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#15110d] transition hover:-translate-y-0.5 hover:bg-[#d8c4ad] disabled:pointer-events-none disabled:opacity-35"
                    >
                      Voir mon niveau de risque
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-6 py-4 text-sm font-semibold text-white/70 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Réinitialiser
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.96, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -18 }}
                  transition={{ duration: 0.35 }}
                  className="relative overflow-hidden rounded-[1.8rem] bg-white p-6 text-[#15110d] sm:p-8"
                >
                  <div className="pointer-events-none absolute right-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#b49a7c]/25 blur-3xl" />

                  <div className="relative">
                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#15110d] text-white shadow-xl">
                      <ResultIcon className="h-8 w-8" />
                    </div>

                    <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f7f4ee] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a6b4f]">
                      <AlertTriangle className="h-4 w-4" />
                      {result.label}
                    </p>

                    <h3 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-5xl">
                      {result.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f655d]">
                      {result.description}
                    </p>

                    <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[#f7f4ee] p-5">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6b4f]">
                            Résultat
                          </p>

                          <p className="mt-1 text-lg font-semibold text-[#15110d]">
                            {result.badge}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-sm">
                          <p className="text-xs text-[#6f655d]">Score</p>
                          <p className="text-2xl font-semibold text-[#15110d]">
                            {totalRisk}/12
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {result.tips.map((tip) => (
                          <div
                            key={tip}
                            className="rounded-2xl border border-black/5 bg-white p-4 text-sm font-medium text-[#2c2520]"
                          >
                            <CheckCircle2 className="mb-3 h-5 w-5 text-[#8a6b4f]" />
                            {tip}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-[#b49a7c]/20 bg-[#b49a7c]/10 p-4">
                      <div className="flex gap-3">
                        <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#8a6b4f]" />

                        <p className="text-sm leading-6 text-[#6f655d]">
                          Ce résultat est une première indication. Une analyse
                          personnalisée permet de vérifier les points précis de
                          votre projet et de votre devis.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={result.href}
                        className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[#15110d] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2c2520]"
                      >
                        {result.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-3 rounded-full border border-black/10 px-6 py-4 text-sm font-semibold text-[#15110d] transition hover:-translate-y-0.5 hover:border-[#b49a7c]/50 hover:bg-[#f7f4ee]"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Refaire le test
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}