"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
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
];

const propertyTypes = [
  "Maison",
  "Appartement",
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

const offerLabels: Record<string, string> = {
  essentiel: "Essentiel",
  serenite: "Sérénité",
  premium: "Premium",
};

const pageContent = {
  etude: {
    eyebrow: "Étude gratuite",
    title: "Analysez votre projet avant de vous engager.",
    description:
      "Nous commençons par comprendre votre besoin, vos contraintes et vos objectifs afin de vous orienter vers les bonnes décisions.",
    formEyebrow: "Demande d’étude",
    formTitle: "Décrivez votre besoin",
    button: "Demander mon étude gratuite",
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

type SubmitStatus = "idle" | "loading" | "success" | "error";

function toggleArrayValue(value: string, current: string[]) {
  return current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];
}

function DevisPageContent() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const offer = searchParams.get("offre");

  const content = useMemo(() => {
    if (type === "etude") return pageContent.etude;
    if (type === "contact") return pageContent.contact;
    return pageContent.devis;
  }, [type]);

  const selectedOffer = offer ? offerLabels[offer] : null;

  const [selectedProjectType, setSelectedProjectType] = useState<string | null>(
    null
  );
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedSurface, setSelectedSurface] = useState("");
  const [selectedLots, setSelectedLots] = useState<string[]>([]);
  const [selectedTiming, setSelectedTiming] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function resetSelections() {
    setSelectedProjectType(null);
    setSelectedPropertyType("");
    setSelectedSurface("");
    setSelectedLots([]);
    setSelectedTiming("");
    setSelectedBudget("");
    setSelectedDocuments([]);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      offre: String(formData.get("offre") ?? "").trim(),
      typeProjet: selectedProjectType ?? "",
      typeBien: selectedPropertyType,
      surface: selectedSurface,
      lots: selectedLots.join(", "),
      timing: selectedTiming,
      budget: selectedBudget,
      documents: selectedDocuments.join(", "),
      message: String(formData.get("message") ?? "").trim(),
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      await createContactRequest(payload);

      const emailResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!emailResponse.ok) {
        throw new Error("Email sending failed");
      }

      form.reset();
      resetSelections();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        "Une erreur est survenue. Votre demande n’a pas pu être envoyée. Veuillez réessayer dans quelques instants."
      );
    }
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
                {content.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
              >
                {content.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="mt-8 max-w-md text-lg leading-8 text-neutral-400"
              >
                {content.description}
              </motion.p>

              {selectedOffer && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-8 rounded-3xl border border-[#b49a7c]/30 bg-[#b49a7c]/10 p-5 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d3bea6]">
                    Offre sélectionnée
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    {selectedOffer}
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

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.10)] backdrop-blur-xl md:p-10"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b49a7c] to-transparent" />

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[560px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#171412] text-white shadow-2xl">
                    <CheckCircle2 size={38} />
                  </div>

                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#a89278]">
                    Demande reçue
                  </p>

                  <h2 className="text-4xl font-semibold tracking-tight text-[#111]">
                    Votre projet est entre de bonnes mains.
                  </h2>

                  <p className="mt-5 max-w-md text-neutral-600">
                    Merci. Votre demande a bien été enregistrée et un email de
                    confirmation vient d’être envoyé.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 rounded-full border border-neutral-200 px-7 py-3 text-sm font-medium text-neutral-700 transition hover:border-[#a89278] hover:text-[#111]"
                  >
                    Envoyer une autre demande
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#a89278]/20 bg-[#f6f2ee] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#a89278]">
                      <Sparkles size={14} />
                      {content.formEyebrow}
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-[#111] md:text-4xl">
                      {content.formTitle}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                      Sélectionnez les informations principales. Vous pourrez
                      ajouter les détails spécifiques dans le message.
                    </p>

                    {offer && (
                      <input type="hidden" name="offre" value={offer} />
                    )}
                  </div>

                  {selectedOffer && (
                    <div className="mb-8 rounded-3xl border border-[#a89278]/20 bg-[#f6f2ee] p-5">
                      <p className="text-sm text-neutral-600">
                        Offre sélectionnée :{" "}
                        <span className="font-semibold text-[#111]">
                          {selectedOffer}
                        </span>
                      </p>
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

                  <FormBlock title="Type de projet">
                    <OptionGrid
                      options={projectTypes}
                      selected={selectedProjectType}
                      onSelect={setSelectedProjectType}
                    />
                  </FormBlock>

                  <FormBlock title="Type de bien">
                    <OptionGrid
                      options={propertyTypes}
                      selected={selectedPropertyType}
                      onSelect={setSelectedPropertyType}
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
                        type === "contact"
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
                        {content.button}
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
                </>
              )}
            </motion.form>
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