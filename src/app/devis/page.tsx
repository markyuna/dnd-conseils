// src/app/devis/page.tsx

"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import { createContactRequest } from "@/services/contact";

const projectTypes = [
  "Rénovation complète",
  "Appartement",
  "Maison",
  "Extension",
  "Local commercial",
  "Immeuble",
  "Autre",
];

const surfaces = [
  "Moins de 50 m²",
  "50 à 100 m²",
  "100 à 150 m²",
  "150 à 250 m²",
  "Plus de 250 m²",
  "Je ne sais pas encore",
];

const workLots = [
  "Électricité",
  "Plomberie",
  "Isolation",
  "Peinture",
  "Sol",
  "Menuiserie",
  "Cuisine",
  "Salle de bain",
  "Maçonnerie",
  "Toiture",
];

const timings = [
  "Dès que possible",
  "Dans 1 mois",
  "Dans 3 mois",
  "Dans 6 mois",
  "Je ne sais pas encore",
];

const budgets = [
  "Moins de 10 000 €",
  "10 000 € - 30 000 €",
  "30 000 € - 80 000 €",
  "80 000 €+",
  "À définir",
];

const documentsList = [
  "Plans",
  "Photos",
  "Devis existants",
  "Diagnostic",
  "Permis / autorisation",
  "Aucun document",
];

const formulaLabels: Record<
  string,
  {
    title: string;
    price: string;
    type: "formule" | "pack";
  }
> = {
  "diagnostic-flash": {
    title: "Forfait Diagnostic / Flash",
    price: "150 € à 250 € HT",
    type: "formule",
  },
  "analyse-devis": {
    title: "Forfait analyse de devis",
    price: "190 € à 290 € HT",
    type: "formule",
  },
  "suivi-chantier": {
    title: "Suivi et coordination",
    price: "120 € à 600 € HT",
    type: "formule",
  },
  "audit-budgetaire": {
    title: "Forfait Audit Budgétaire",
    price: "250 € à 450 € HT",
    type: "formule",
  },
  "pack-essentiel": {
    title: "Pack Essentiel",
    price: "À partir de 390 € HT",
    type: "pack",
  },
  "pack-serenite": {
    title: "Pack Sérénité",
    price: "À partir de 790 € HT",
    type: "pack",
  },
  "pack-chantier": {
    title: "Pack Chantier",
    price: "Sur devis",
    type: "pack",
  },

  // Compatibilité avec les anciens liens déjà présents dans le projet
  essentiel: {
    title: "Pack Essentiel",
    price: "À partir de 390 € HT",
    type: "pack",
  },
  serenite: {
    title: "Pack Sérénité",
    price: "À partir de 790 € HT",
    type: "pack",
  },
  premium: {
    title: "Pack Chantier",
    price: "Sur devis",
    type: "pack",
  },
};

const formulaAliases: Record<string, string> = {
  diagnostic: "diagnostic-flash",
  flash: "diagnostic-flash",
  "diagnostic-flash": "diagnostic-flash",
  "analyse-devis": "analyse-devis",
  analyse: "analyse-devis",
  "suivi-chantier": "suivi-chantier",
  suivi: "suivi-chantier",
  chantier: "suivi-chantier",
  "audit-budgetaire": "audit-budgetaire",
  audit: "audit-budgetaire",
  "pack-essentiel": "pack-essentiel",
  essentiel: "essentiel",
  "pack-serenite": "pack-serenite",
  serenite: "serenite",
  "pack-chantier": "pack-chantier",
  premium: "premium",
};

const pageContent = {
  diagnostic: {
    eyebrow: "Diagnostic gratuit",
    title: "Diagnostiquez votre projet avant de vous engager.",
    description:
      "Nous analysons votre besoin, vos contraintes et vos objectifs afin de vous orienter vers les bonnes décisions avant le lancement des travaux.",
    formEyebrow: "Demande de diagnostic",
    formTitle: "Décrivez votre besoin",
    button: "Demander mon diagnostic gratuit",
  },
  contact: {
    eyebrow: "Premier échange",
    title: "Parlez-moi de votre projet.",
    description:
      "Expliquez-moi votre situation, vos envies et vos inquiétudes. Je vous répondrai avec une première orientation claire.",
    formEyebrow: "Contact projet",
    formTitle: "Démarrons la conversation",
    button: "Envoyer mon message",
  },
  devis: {
    eyebrow: "Demande de devis",
    title: "Parlez-moi de votre projet.",
    description:
      "Chaque rénovation est unique. Remplissez ce formulaire pour que je puisse comprendre vos besoins et vous proposer un accompagnement adapté.",
    formEyebrow: "Votre besoin",
    formTitle: "Détails du projet",
    button: "Envoyer ma demande",
  },
};

type RequestType = "diagnostic" | "contact" | "devis";
type SubmitStatus = "idle" | "loading" | "success" | "error";

function toggleArrayValue(value: string, current: string[]) {
  return current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];
}

function getRequestType(type: string | null): RequestType {
  if (type === "contact") return "contact";

  if (type === "diagnostic" || type === "etude") return "diagnostic";

  return "devis";
}

function normalizeFormulaSlug(value: string | null) {
  if (!value) return "";

  const normalizedValue = formulaAliases[value] ?? value;

  return formulaLabels[normalizedValue] ? normalizedValue : "";
}

function getSelectedFormulaSlug(type: string | null, offer: string | null) {
  const offerSlug = normalizeFormulaSlug(offer);
  if (offerSlug) return offerSlug;

  const typeSlug = normalizeFormulaSlug(type);
  if (typeSlug) return typeSlug;

  return "";
}

function DevisPageContent() {
  const searchParams = useSearchParams();

  const requestType = getRequestType(searchParams.get("type"));
  const selectedFormulaSlug = getSelectedFormulaSlug(
    searchParams.get("type"),
    searchParams.get("offre")
  );

  const content = useMemo(() => pageContent[requestType], [requestType]);
  const selectedFormula = selectedFormulaSlug
    ? formulaLabels[selectedFormulaSlug]
    : null;

  const pageTitle = selectedFormula
    ? `Demander ${selectedFormula.title}`
    : content.title;

  const pageDescription = selectedFormula
    ? "Remplissez ce formulaire pour que je puisse comprendre votre situation et revenir vers vous avec une réponse adaptée à la formule sélectionnée."
    : content.description;

  const formTitle = selectedFormula
    ? selectedFormula.type === "pack"
      ? "Votre demande de pack"
      : "Votre demande de formule"
    : content.formTitle;

  const buttonLabel = selectedFormula
    ? selectedFormula.type === "pack"
      ? "Demander ce pack"
      : "Demander cette formule"
    : content.button;

  const [selectedProjectType, setSelectedProjectType] = useState<string | null>(
    null
  );
  const [selectedSurface, setSelectedSurface] = useState("");
  const [selectedLots, setSelectedLots] = useState<string[]>([]);
  const [selectedTiming, setSelectedTiming] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function resetSelections() {
    setSelectedProjectType(null);
    setSelectedSurface("");
    setSelectedLots([]);
    setSelectedTiming("");
    setSelectedBudget("");
    setSelectedDocuments([]);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const message = String(formData.get("message") ?? "").trim();

    const formulaMessage = selectedFormula
      ? `Formule sélectionnée : ${selectedFormula.title} — ${selectedFormula.price}`
      : "";

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      requestType,
      request_type: requestType,
      offer: selectedFormulaSlug,
      projectType: selectedProjectType ?? "",
      project_type: selectedProjectType ?? "",
      typeBien: "",
      type_bien: "",
      surface: selectedSurface,
      lots: selectedLots,
      timing: selectedTiming,
      budget: selectedBudget,
      documents: selectedDocuments,
      message: [formulaMessage, message].filter(Boolean).join("\n\n"),
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      await createContactRequest(payload);

      form.reset();
      resetSelections();
      setStatus("success");
    } catch (error) {
      console.error("Contact request error:", error);

      setStatus("error");
      setErrorMessage(
        "Une erreur est survenue. Votre demande n’a pas pu être envoyée. Veuillez réessayer dans quelques instants."
      );
    }
  }

  if (status === "success") {
    return (
      <>
        <Navbar variant="minimal" />

        <main className="relative min-h-screen overflow-hidden bg-[#f6f2ee] px-6 pt-20 text-[#171412]">
          <div className="absolute left-[-220px] top-[-220px] h-[560px] w-[560px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
          <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-[#171412]/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(30deg,#171412_12%,transparent_12.5%,transparent_87%,#171412_87.5%,#171412),linear-gradient(150deg,#171412_12%,transparent_12.5%,transparent_87%,#171412_87.5%,#171412)] [background-size:56px_96px]" />

          <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/80 p-8 text-center shadow-[0_40px_120px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-14"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c] to-transparent" />
              <div className="absolute left-1/2 top-[-120px] h-64 w-64 -translate-x-1/2 rounded-full bg-[#b49a7c]/20 blur-3xl" />

              <motion.div
                initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.18, type: "spring", stiffness: 140 }}
                className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#171412] text-white shadow-2xl"
              >
                <CheckCircle2 size={42} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#a89278]"
              >
                Demande reçue
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#111] md:text-6xl"
              >
                Votre projet est entre de bonnes mains.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mx-auto mt-6 max-w-xl text-base leading-8 text-neutral-600 md:text-lg"
              >
                Merci. Votre demande a bien été enregistrée. Nous vous
                recontacterons rapidement avec une première orientation claire.
              </motion.p>

              {selectedFormula && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.56 }}
                  className="mx-auto mt-8 max-w-md rounded-3xl border border-[#a89278]/20 bg-[#f6f2ee] p-5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a89278]">
                    Formule demandée
                  </p>

                  <p className="mt-2 text-base font-semibold text-[#111]">
                    {selectedFormula.title}
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    {selectedFormula.price}
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="rounded-full bg-[#171412] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#927b63]"
                >
                  Envoyer une autre demande
                </button>

                <Link
                  href="/"
                  className="rounded-full border border-neutral-200 bg-white/70 px-8 py-4 text-sm font-medium text-neutral-700 transition hover:border-[#a89278] hover:text-[#111]"
                >
                  Retour à l’accueil
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#a89278]" />
                  Données confidentielles
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#a89278]" />
                  Réponse sous 48h
                </span>
              </motion.div>
            </motion.div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f6f2ee] pt-20 text-[#171412]">
        <section className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="relative overflow-hidden bg-[#080706] px-8 py-16 text-white md:px-16 lg:flex lg:items-center">
            <div className="absolute left-[-220px] top-[-220px] h-[560px] w-[560px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
            <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(30deg,#fff_12%,transparent_12.5%,transparent_87%,#fff_87.5%,#fff),linear-gradient(150deg,#fff_12%,transparent_12.5%,transparent_87%,#fff_87.5%,#fff)] [background-size:56px_96px]" />

            <div className="relative max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-[#d3bea6] shadow-2xl backdrop-blur"
              >
                <MessageSquareText size={28} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#b49a7c]"
              >
                {selectedFormula
                  ? selectedFormula.type === "pack"
                    ? "Demande de pack"
                    : "Demande de formule"
                  : content.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
              >
                {pageTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="mt-8 max-w-md text-lg leading-8 text-neutral-400"
              >
                {pageDescription}
              </motion.p>

              {selectedFormula && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-8 rounded-3xl border border-[#b49a7c]/30 bg-[#b49a7c]/10 p-5 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d3bea6]">
                    {selectedFormula.type === "pack"
                      ? "Pack sélectionné"
                      : "Formule sélectionnée"}
                  </p>

                  <p className="mt-2 text-2xl font-semibold">
                    {selectedFormula.title}
                  </p>

                  <p className="mt-1 text-sm text-white/55">
                    {selectedFormula.price}
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="mt-12 grid gap-5 text-sm text-neutral-300"
              >
                {[
                  "Réponse sous 48h",
                  "Appel découverte gratuit",
                  "Sans engagement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-px w-12 bg-[#b49a7c]" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>
          </aside>

          <section className="relative flex items-center overflow-hidden px-6 py-12 md:px-12 lg:px-20">
            <div className="absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#b49a7c]/20 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.form
                key="devis-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ delay: 0.18, duration: 0.7 }}
                className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.10)] backdrop-blur-xl md:p-10"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c] to-transparent" />

                <div className="mb-10">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#a89278]/20 bg-[#f6f2ee] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#a89278]">
                    <Sparkles size={14} />
                    {selectedFormula
                      ? selectedFormula.type === "pack"
                        ? "Pack sélectionné"
                        : "Formule sélectionnée"
                      : content.formEyebrow}
                  </div>

                  <h2 className="text-3xl font-semibold tracking-tight text-[#111] md:text-4xl">
                    {formTitle}
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                    Sélectionnez les informations principales. Vous pourrez
                    ajouter les détails spécifiques dans le message.
                  </p>
                </div>

                {selectedFormula && (
                  <div className="mb-8 rounded-3xl border border-[#a89278]/20 bg-[#f6f2ee] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a89278]">
                      {selectedFormula.type === "pack"
                        ? "Pack demandé"
                        : "Formule demandée"}
                    </p>

                    <p className="mt-2 text-sm text-neutral-600">
                      Vous êtes sur{" "}
                      <span className="font-semibold text-[#111]">
                        {selectedFormula.title}
                      </span>{" "}
                      <span className="text-neutral-400">
                        — {selectedFormula.price}
                      </span>
                    </p>

                    <input
                      type="hidden"
                      name="offer"
                      value={selectedFormulaSlug}
                    />
                  </div>
                )}

                <FormBlock title="Vos coordonnées">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field
                      label="Nom"
                      name="name"
                      placeholder="Ex : Jean Dupont"
                      required
                    />

                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Ex : contact@email.com"
                      required
                    />
                  </div>

                  <Field
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    placeholder="Ex : 06 00 00 00 00"
                  />
                </FormBlock>

                <FormBlock title="Type de projet / bien">
                  <OptionGrid
                    options={projectTypes}
                    selected={selectedProjectType}
                    onSelect={setSelectedProjectType}
                  />
                </FormBlock>

                <FormBlock title="Surface approximative">
                  <OptionGrid
                    options={surfaces}
                    selected={selectedSurface}
                    onSelect={setSelectedSurface}
                  />
                </FormBlock>

                <FormBlock title="Lots concernés">
                  <MultiOptionGrid
                    options={workLots}
                    selected={selectedLots}
                    onToggle={(value) =>
                      setSelectedLots((current) =>
                        toggleArrayValue(value, current)
                      )
                    }
                  />
                </FormBlock>

                <FormBlock title="Timing souhaité">
                  <OptionGrid
                    options={timings}
                    selected={selectedTiming}
                    onSelect={setSelectedTiming}
                  />
                </FormBlock>

                <FormBlock title="Budget estimatif">
                  <OptionGrid
                    options={budgets}
                    selected={selectedBudget}
                    onSelect={setSelectedBudget}
                  />
                </FormBlock>

                <FormBlock title="Documents disponibles">
                  <MultiOptionGrid
                    options={documentsList}
                    selected={selectedDocuments}
                    onToggle={(value) =>
                      setSelectedDocuments((current) =>
                        toggleArrayValue(value, current)
                      )
                    }
                  />
                </FormBlock>

                <FormBlock title="Message complémentaire">
                  <Textarea
                    label="Ce que vous souhaitez préciser"
                    name="message"
                    placeholder={
                      selectedFormula
                        ? `Ajoutez ici les détails utiles pour votre demande : contexte, adresse approximative, contraintes, priorités ou questions concernant ${selectedFormula.title}...`
                        : requestType === "contact"
                          ? "Expliquez-moi votre question, vos inquiétudes ou votre besoin..."
                          : "Ajoutez ici les détails qui ne sont pas dans les choix : contraintes, priorités, état actuel, adresse approximative, informations importantes..."
                    }
                  />
                </FormBlock>

                {status === "error" && (
                  <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-[#171412] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#927b63] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      {buttonLabel}
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={15} className="text-[#a89278]" />
                    Données confidentielles
                  </span>

                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#a89278]" />
                    Réponse personnalisée
                  </span>
                </div>
              </motion.form>
            </AnimatePresence>
          </section>
        </section>
      </main>
    </>
  );
}

export default function DevisPage() {
  return (
    <Suspense fallback={null}>
      <DevisPageContent />
    </Suspense>
  );
}

function FormBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#a89278]">
        {title}
      </p>

      <div className="space-y-6">{children}</div>
    </div>
  );
}

function OptionGrid({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isSelected = selected === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={[
              "rounded-full border px-4 py-2 text-sm transition",
              isSelected
                ? "border-[#a89278] bg-[#a89278] text-white shadow-md"
                : "border-neutral-200 text-neutral-600 hover:border-[#a89278] hover:bg-[#f6f2ee] hover:text-[#111]",
            ].join(" ")}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function MultiOptionGrid({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isSelected = selected.includes(option);

        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            className={[
              "flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
              isSelected
                ? "border-[#a89278] bg-[#a89278] text-white shadow-md"
                : "border-neutral-200 text-neutral-600 hover:border-[#a89278] hover:bg-[#f6f2ee] hover:text-[#111]",
            ].join(" ")}
          >
            {isSelected && <CheckCircle2 size={14} />}
            {option}
          </button>
        );
      })}
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-neutral-200 bg-transparent py-4 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-300 focus:border-[#a89278]"
      />
    </div>
  );
}

function Textarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="min-h-36 w-full resize-none border-b border-neutral-200 bg-transparent py-4 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-300 focus:border-[#a89278]"
      />
    </div>
  );
}