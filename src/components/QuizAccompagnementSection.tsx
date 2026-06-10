// src/components/QuizAccompagnementSection.tsx

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Answer = {
  label: string;
  value: string;
  scores: {
    diagnostic?: number;
    analyse?: number;
    suivi?: number;
  };
};

type Question = {
  eyebrow: string;
  title: string;
  description: string;
  answers: Answer[];
};

type ResultKey = "diagnostic" | "analyse" | "suivi";

const questions: Question[] = [
  {
    eyebrow: "Étape 01",
    title: "Où en êtes-vous dans votre projet ?",
    description:
      "Cela nous aide à comprendre si vous avez besoin d’un premier regard, d’une analyse précise ou d’un accompagnement plus complet.",
    answers: [
      {
        label: "Je réfléchis encore à mon projet",
        value: "reflexion",
        scores: { diagnostic: 3, analyse: 1 },
      },
      {
        label: "J’ai déjà reçu un ou plusieurs devis",
        value: "devis",
        scores: { analyse: 3, diagnostic: 1 },
      },
      {
        label: "Les travaux vont bientôt commencer",
        value: "avant-travaux",
        scores: { suivi: 3, analyse: 2 },
      },
      {
        label: "Les travaux sont déjà en cours",
        value: "travaux-en-cours",
        scores: { suivi: 4, analyse: 1 },
      },
    ],
  },
  {
    eyebrow: "Étape 02",
    title: "Quel est votre principal doute aujourd’hui ?",
    description:
      "Le bon accompagnement dépend surtout du point qui vous bloque ou vous fait hésiter.",
    answers: [
      {
        label: "Je veux clarifier mon budget et mes priorités",
        value: "budget",
        scores: { diagnostic: 3, analyse: 1 },
      },
      {
        label: "Je ne sais pas si les devis sont cohérents",
        value: "devis-flous",
        scores: { analyse: 4 },
      },
      {
        label: "J’ai peur des erreurs ou des mauvaises surprises",
        value: "risques",
        scores: { suivi: 3, analyse: 2 },
      },
      {
        label: "J’ai besoin d’un regard extérieur avant de décider",
        value: "regard-exterieur",
        scores: { diagnostic: 2, analyse: 2 },
      },
    ],
  },
  {
    eyebrow: "Étape 03",
    title: "Votre projet concerne plutôt...",
    description:
      "Certains projets nécessitent une lecture plus approfondie, surtout quand plusieurs corps de métier interviennent.",
    answers: [
      {
        label: "Une pièce spécifique : cuisine, salle de bain, sol...",
        value: "piece",
        scores: { diagnostic: 2, analyse: 2 },
      },
      {
        label: "Un appartement ou une maison à rénover",
        value: "renovation",
        scores: { analyse: 3, suivi: 2 },
      },
      {
        label: "Une rénovation complète",
        value: "renovation-complete",
        scores: { suivi: 4, analyse: 2 },
      },
      {
        label: "Un projet encore à définir clairement",
        value: "projet-a-definir",
        scores: { diagnostic: 4 },
      },
    ],
  },
  {
    eyebrow: "Étape 04",
    title: "Quel niveau d’accompagnement recherchez-vous ?",
    description:
      "Vous pouvez avoir besoin d’une réponse rapide ou d’un accompagnement plus structuré selon l’enjeu du projet.",
    answers: [
      {
        label: "Un échange rapide pour y voir plus clair",
        value: "rapide",
        scores: { diagnostic: 4 },
      },
      {
        label: "Une analyse structurée avant de signer",
        value: "structure",
        scores: { analyse: 4 },
      },
      {
        label: "Un suivi pour sécuriser les prochaines étapes",
        value: "suivi",
        scores: { suivi: 4 },
      },
      {
        label: "Je ne sais pas encore, je veux être conseillé",
        value: "conseille",
        scores: { diagnostic: 2, analyse: 2, suivi: 1 },
      },
    ],
  },
];

const results: Record<
  ResultKey,
  {
    icon: typeof ClipboardCheck;
    label: string;
    title: string;
    description: string;
    href: string;
    benefits: string[];
  }
> = {
  diagnostic: {
    icon: ClipboardCheck,
    label: "Recommandation",
    title: "Forfait Diagnostic / Flash",
    description:
      "Idéal pour obtenir un premier regard clair, structurer votre projet et identifier les points de vigilance avant d’aller plus loin.",
    href: "/devis?type=diagnostic",
    benefits: [
      "Clarification de votre besoin",
      "Lecture des priorités",
      "Conseils rapides et concrets",
    ],
  },
  analyse: {
    icon: FileSearch,
    label: "Recommandation",
    title: "Pack Analyse Devis",
    description:
      "Le choix le plus adapté si vous avez déjà des devis ou des propositions à comparer avant de vous engager.",
    href: "/devis?type=analyse-devis",
    benefits: [
      "Comparaison des devis",
      "Points flous identifiés",
      "Décision plus sécurisée",
    ],
  },
  suivi: {
    icon: ShieldCheck,
    label: "Recommandation",
    title: "Pack Suivi & Coordination",
    description:
      "Recommandé si les travaux approchent ou sont déjà en cours, afin de garder une vision claire et limiter les mauvaises surprises.",
    href: "/devis?type=suivi-chantier",
    benefits: [
      "Suivi des étapes clés",
      "Vision claire du chantier",
      "Anticipation des risques",
    ],
  },
};

function getBestResult(answers: Answer[]): ResultKey {
  const score = answers.reduce(
    (acc, answer) => {
      acc.diagnostic += answer.scores.diagnostic ?? 0;
      acc.analyse += answer.scores.analyse ?? 0;
      acc.suivi += answer.scores.suivi ?? 0;
      return acc;
    },
    {
      diagnostic: 0,
      analyse: 0,
      suivi: 0,
    }
  );

  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);

  return sorted[0][0] as ResultKey;
}

export default function QuizAccompagnementSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const progress = useMemo(() => {
    if (isCompleted) return 100;
    return ((currentQuestion + 1) / questions.length) * 100;
  }, [currentQuestion, isCompleted]);

  const resultKey = useMemo(
    () => getBestResult(selectedAnswers),
    [selectedAnswers]
  );

  const result = results[resultKey];
  const ResultIcon = result.icon;

  const activeQuestion = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];

  function handleAnswer(answer: Answer) {
    const nextAnswers = [...selectedAnswers];
    nextAnswers[currentQuestion] = answer;
    setSelectedAnswers(nextAnswers);
  }

  function handleNext() {
    if (!selectedAnswer) return;

    if (currentQuestion === questions.length - 1) {
      setIsCompleted(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  }

  function handlePrevious() {
    if (isCompleted) {
      setIsCompleted(false);
      setCurrentQuestion(questions.length - 1);
      return;
    }

    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  }

  function handleReset() {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  }

  return (
    <section className="relative overflow-hidden bg-[#f6f2ee] px-6 py-24 md:px-16">
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-[#080706]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b49a7c]/30 bg-white/60 px-4 py-2 text-sm font-medium text-[#6f5b45] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Orientation personnalisée
          </div>

          <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[#15110d] md:text-5xl">
            Trouvez l’accompagnement le plus adapté à votre projet.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f655d]">
            Répondez à quelques questions simples et obtenez une recommandation
            claire selon votre situation, votre niveau d’avancement et vos
            priorités.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Moins de 2 minutes",
              "Recommandation directe",
              "Sans engagement",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#15110d]/10 bg-white/60 px-4 py-4 text-sm font-medium text-[#2c2520] shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-[#8a6b4f]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.2rem] bg-[#15110d]/10" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/85 p-5 shadow-[0_30px_100px_rgba(21,17,13,0.16)] backdrop-blur md:p-7">
            <div className="mb-7">
              <div className="mb-3 flex items-center justify-between gap-4 text-sm font-medium text-[#6f655d]">
                <span>
                  {isCompleted
                    ? "Résultat personnalisé"
                    : `${currentQuestion + 1} / ${questions.length}`}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#e8ded3]">
                <motion.div
                  className="h-full rounded-full bg-[#15110d]"
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isCompleted ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="mb-7">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6b4f]">
                      {activeQuestion.eyebrow}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#15110d] md:text-3xl">
                      {activeQuestion.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-[#6f655d]">
                      {activeQuestion.description}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {activeQuestion.answers.map((answer) => {
                      const isSelected = selectedAnswer?.value === answer.value;

                      return (
                        <button
                          key={answer.value}
                          type="button"
                          onClick={() => handleAnswer(answer)}
                          className={`group flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                            isSelected
                              ? "border-[#15110d] bg-[#15110d] text-white shadow-lg"
                              : "border-[#15110d]/10 bg-white text-[#2c2520] hover:-translate-y-0.5 hover:border-[#b49a7c]/60 hover:shadow-md"
                          }`}
                        >
                          <span className="text-sm font-medium leading-6 md:text-base">
                            {answer.label}
                          </span>

                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
                              isSelected
                                ? "border-white/30 bg-white text-[#15110d]"
                                : "border-[#15110d]/15 bg-[#f6f2ee] text-[#15110d] group-hover:border-[#b49a7c]"
                            }`}
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

                  <div className="mt-7 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-[#6f655d] transition hover:text-[#15110d] disabled:pointer-events-none disabled:opacity-35"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Retour
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!selectedAnswer}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#15110d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#2c2520] disabled:pointer-events-none disabled:opacity-40"
                    >
                      {currentQuestion === questions.length - 1
                        ? "Voir ma recommandation"
                        : "Continuer"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-[1.7rem] bg-[#15110d] p-6 text-white md:p-8"
                >
                  <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-[#b49a7c]/30 blur-3xl" />

                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <ResultIcon className="h-7 w-7" />
                    </div>

                    <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
                      <BadgeCheck className="h-4 w-4" />
                      {result.label}
                    </p>

                    <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                      {result.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-8 text-white/72">
                      {result.description}
                    </p>

                    <div className="mt-7 grid gap-3">
                      {result.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm text-white/82"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d8c1a4]" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={result.href}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#15110d] transition hover:-translate-y-0.5 hover:bg-[#f6f2ee]"
                      >
                        Demander cette formule
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Refaire le quiz
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