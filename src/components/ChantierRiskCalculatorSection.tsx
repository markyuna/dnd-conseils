// src/components/ChantierRiskCalculatorSection.tsx

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileWarning,
  Gauge,
  HelpCircle,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
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
      "Comparer plusieurs propositions permet de mieux comprendre les prix et les prestations incluses.",
    options: [
      { label: "Oui, plusieurs devis détaillés", value: "yes", risk: 0 },
      { label: "J'ai quelques éléments, mais ce n'est pas clair", value: "partial", risk: 1 },
      { label: "Non, un seul devis ou rien de précis", value: "no", risk: 2 },
    ],
  },
  {
    id: "details",
    title: "Les prestations sont-elles bien détaillées ?",
    description:
      "Un devis trop général peut cacher des zones floues sur les matériaux, les quantités ou les finitions.",
    options: [
      { label: "Oui, chaque poste est clair", value: "yes", risk: 0 },
      { label: "Certains postes restent vagues", value: "partial", risk: 1 },
      { label: "Non, beaucoup de lignes sont imprécises", value: "no", risk: 2 },
    ],
  },
  {
    id: "planning",
    title: "Un planning ou délai d'intervention est-il prévu ?",
    description:
      "Sans délai clair, les travaux peuvent devenir difficiles à suivre et générer des tensions.",
    options: [
      { label: "Oui, les délais sont indiqués", value: "yes", risk: 0 },
      { label: "Il y a une estimation, mais pas de planning précis", value: "partial", risk: 1 },
      { label: "Non, rien n'est vraiment défini", value: "no", risk: 2 },
    ],
  },
  {
    id: "budget",
    title: "Votre budget inclut-il une marge pour imprévus ?",
    description:
      "Une marge de sécurité permet d'absorber les ajustements courants sans déséquilibrer le projet.",
    options: [
      { label: "Oui, j'ai prévu une marge", value: "yes", risk: 0 },
      { label: "Un peu, mais je ne sais pas si c'est suffisant", value: "partial", risk: 1 },
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
      { label: "J'ai quelques documents, mais je ne suis pas sûr", value: "partial", risk: 1 },
      { label: "Non, je n'ai pas encore vérifié", value: "no", risk: 2 },
    ],
  },
  {
    id: "decision",
    title: "Vous sentez-vous prêt à signer ?",
    description:
      "Votre niveau de confiance est un bon indicateur : s'il reste des doutes, mieux vaut les traiter avant.",
    options: [
      { label: "Oui, je comprends bien les enjeux", value: "yes", risk: 0 },
      { label: "J'hésite encore sur certains points", value: "partial", risk: 1 },
      { label: "Non, j'ai peur de faire une erreur", value: "no", risk: 2 },
    ],
  },
];

const riskContent: Record<
  RiskLevel,
  {
    label: string;
    title: string;
    description: string;
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
      "Les bases paraissent solides. Un dernier regard extérieur peut confirmer vos choix avant signature.",
    icon: ShieldCheck,
    href: "/devis?type=diagnostic",
    cta: "Valider mon projet",
    tips: ["Relire les points contractuels", "Confirmer les délais", "Vérifier les garanties"],
  },
  medium: {
    label: "Risque modéré",
    title: "Certains points méritent d'être clarifiés.",
    description:
      "Votre projet avance, mais plusieurs zones peuvent encore créer des incompréhensions.",
    icon: ShieldAlert,
    href: "/devis?offre=analyse-devis",
    cta: "Sécuriser mon devis",
    tips: ["Comparer les postes importants", "Identifier les zones floues", "Préparer les bonnes questions"],
  },
  high: {
    label: "Risque élevé",
    title: "Un point s'impose avant de vous engager.",
    description:
      "Plusieurs éléments semblent insuffisamment cadrés. Un accompagnement peut éviter les erreurs coûteuses.",
    icon: FileWarning,
    href: "/devis?offre=pack-serenite",
    cta: "Être accompagné",
    tips: ["Clarifier le périmètre des travaux", "Analyser les devis en profondeur", "Revoir budget et garanties"],
  },
};

function getRiskLevel(score: number): RiskLevel {
  if (score <= 3) return "low";
  if (score <= 7) return "medium";
  return "high";
}

export default function ChantierRiskCalculatorSection() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const totalRisk = useMemo(
    () => Object.values(answers).reduce((t, v) => t + v, 0),
    [answers]
  );

  const riskLevel = getRiskLevel(totalRisk);
  const result = riskContent[riskLevel];
  const ResultIcon = result.icon;

  const question = questions[current];
  const selectedRisk = answers[question?.id];
  const hasAnswer = selectedRisk !== undefined;
  const isLast = current === questions.length - 1;
  const progress = Math.round(((current + (hasAnswer ? 1 : 0)) / questions.length) * 100);

  function handleSelect(risk: number) {
    setAnswers((prev) => ({ ...prev, [question.id]: risk }));
  }

  function handleNext() {
    if (!hasAnswer) return;
    if (isLast) { setShowResult(true); return; }
    setCurrent((p) => p + 1);
  }

  function handlePrev() {
    if (showResult) { setShowResult(false); return; }
    if (current > 0) setCurrent((p) => p - 1);
  }

  function handleReset() {
    setCurrent(0);
    setAnswers({});
    setShowResult(false);
  }

  return (
    <section
      id="calculateur-risque"
      className="relative overflow-hidden bg-[#080706] px-4 py-20 text-white sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#b49a7c]/18 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8c4ad]">
            <Gauge className="h-3.5 w-3.5" />
            Calculateur de risque
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.045em] md:text-4xl">
            Évaluez le risque de votre projet.
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/52">
            6 questions pour identifier les points à clarifier avant de signer.
          </p>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">

          {/* Progress */}
          <div className="mb-7">
            <div className="mb-2 flex items-center justify-between text-xs text-white/40">
              <span>
                {showResult ? "Résultat" : `Question ${current + 1} / ${questions.length}`}
              </span>
              <span>{showResult ? "100" : progress}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[#d8c4ad]"
                animate={{ width: `${showResult ? 100 : progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b49a7c]">
                  Étape {String(current + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-1.5 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {question.title}
                </h3>
                <p className="mb-6 text-sm leading-6 text-white/48">
                  {question.description}
                </p>

                <div className="space-y-2.5">
                  {question.options.map((option) => {
                    const isSelected = selectedRisk === option.risk;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleSelect(option.risk)}
                        className={[
                          "group flex w-full items-center justify-between gap-4 rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-250",
                          isSelected
                            ? "border-[#d8c4ad] bg-[#d8c4ad] text-[#15110d]"
                            : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/20 hover:bg-white/[0.08] hover:text-white",
                        ].join(" ")}
                      >
                        <span>{option.label}</span>
                        <span className={[
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition",
                          isSelected
                            ? "border-[#15110d]/15 bg-[#15110d] text-white"
                            : "border-white/10 bg-white/[0.06] text-white/40 group-hover:text-white/70",
                        ].join(" ")}>
                          {isSelected
                            ? <CheckCircle2 className="h-3.5 w-3.5" />
                            : <ArrowRight className="h-3.5 w-3.5" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={current === 0}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white/40 transition hover:text-white disabled:pointer-events-none disabled:opacity-30"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Retour
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!hasAnswer}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#15110d] transition hover:-translate-y-0.5 hover:bg-[#d8c4ad] disabled:pointer-events-none disabled:opacity-30"
                  >
                    {isLast ? "Voir mon résultat" : "Suivant"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <ResultIcon className="h-5 w-5 text-[#d8c4ad]" />
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/70">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    {result.label}
                  </span>
                  <span className="ml-auto text-sm font-semibold text-white/40">
                    Score {totalRisk}/12
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                  {result.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  {result.description}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {result.tips.map((tip) => (
                    <div
                      key={tip}
                      className="rounded-2xl border border-white/8 bg-white/[0.05] p-3 text-xs leading-5 text-white/60"
                    >
                      <CheckCircle2 className="mb-2 h-4 w-4 text-[#b49a7c]" />
                      {tip}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                  <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#8a7060]" />
                  <p className="text-xs leading-6 text-white/45">
                    Ce résultat est une première indication. Une analyse personnalisée permet de vérifier les points précis de votre projet.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <Link
                    href={result.href}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#15110d] transition hover:-translate-y-0.5 hover:bg-[#d8c4ad]"
                  >
                    {result.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/60 transition hover:bg-white/8 hover:text-white"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Refaire
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
