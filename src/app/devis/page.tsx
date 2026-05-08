"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquareText } from "lucide-react";
import Navbar from "@/components/Navbar";

const projectTypes = [
  "Rénovation complète",
  "Appartement",
  "Maison",
  "Extension",
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

  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f6f2ee] pt-20">
        <section className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="relative overflow-hidden bg-[#080706] px-8 py-16 text-white md:px-16 lg:flex lg:items-center">
            <div className="absolute left-[-180px] top-[-180px] h-[480px] w-[480px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
            <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(30deg,#fff_12%,transparent_12.5%,transparent_87%,#fff_87.5%,#fff),linear-gradient(150deg,#fff_12%,transparent_12.5%,transparent_87%,#fff_87.5%,#fff),linear-gradient(30deg,#fff_12%,transparent_12.5%,transparent_87%,#fff_87.5%,#fff),linear-gradient(150deg,#fff_12%,transparent_12.5%,transparent_87%,#fff_87.5%,#fff)] [background-position:0_0,0_0,24px_42px,24px_42px] [background-size:48px_84px]" />

            <div className="relative max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#d3bea6]"
              >
                <MessageSquareText size={26} />
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
                  className="mt-8 rounded-2xl border border-[#b49a7c]/30 bg-[#b49a7c]/10 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d3bea6]">
                    Offre sélectionnée
                  </p>
                  <p className="mt-2 text-2xl font-semibold">{selectedOffer}</p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="mt-12 grid gap-4 text-sm text-neutral-300"
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

          <section className="flex items-center px-6 py-12 md:px-12 lg:px-20">
            <motion.form
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="mx-auto w-full max-w-3xl rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-10"
            >
              <div className="mb-10">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a89278]">
                  {content.formEyebrow}
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111]">
                  {content.formTitle}
                </h2>

                {selectedOffer && (
                  <input type="hidden" name="offre" value={selectedOffer} />
                )}
              </div>

              {selectedOffer && (
                <div className="mb-8 rounded-2xl border border-[#a89278]/20 bg-[#f6f2ee] p-4">
                  <p className="text-sm text-neutral-600">
                    Vous avez sélectionné l’offre{" "}
                    <span className="font-semibold text-[#111]">
                      {selectedOffer}
                    </span>
                    .
                  </p>
                </div>
              )}

              <div className="mb-8 flex flex-wrap gap-3">
                {projectTypes.map((projectType) => {
                  const isSelected = selectedProjectType === projectType;

                  return (
                    <button
                      key={projectType}
                      type="button"
                      onClick={() => setSelectedProjectType(projectType)}
                      className={[
                        "rounded-full border px-4 py-2 text-sm transition",
                        isSelected
                          ? "border-[#a89278] bg-[#a89278] text-white"
                          : "border-neutral-200 text-neutral-600 hover:border-[#a89278] hover:bg-[#f6f2ee] hover:text-[#111]",
                      ].join(" ")}
                    >
                      {projectType}
                    </button>
                  );
                })}

                {selectedProjectType && (
                  <input
                    type="hidden"
                    name="typeProjet"
                    value={selectedProjectType}
                  />
                )}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Type de bien"
                  name="typeBien"
                  placeholder="Maison, appartement..."
                />
                <Field
                  label="Surface (m²)"
                  name="surface"
                  placeholder="Ex : 120"
                />
              </div>

              <Field
                label="Lots concernés"
                name="lots"
                placeholder="Ex : électricité, plomberie, isolation..."
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Timing souhaité"
                  name="timing"
                  placeholder="Ex : dans 3 mois"
                />
                <Field
                  label="Budget estimatif"
                  name="budget"
                  placeholder="Ex : 50 000 €"
                />
              </div>

              <Field
                label="Documents existants"
                name="documents"
                placeholder="Plans, devis, photos, diagnostic..."
              />

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder={
                    type === "contact"
                      ? "Expliquez-moi votre projet, vos questions ou vos inquiétudes..."
                      : "Décrivez votre projet..."
                  }
                  className="min-h-36 w-full resize-none border-b border-neutral-200 bg-transparent py-4 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-300 focus:border-[#a89278]"
                />
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-[#a89278] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#927b63]"
              >
                {content.button}
                <ArrowRight size={18} />
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#a89278]" />
                  Données confidentielles
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#a89278]" />
                  Réponse personnalisée
                </span>
              </div>
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

function Field({
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

      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full border-b border-neutral-200 bg-transparent py-4 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-300 focus:border-[#a89278]"
      />
    </div>
  );
}