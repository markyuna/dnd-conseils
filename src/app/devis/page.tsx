// src/app/devis/page.tsx

"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquareText } from "lucide-react";
import Navbar from "@/components/Navbar";

const projectTypes = [
  "Rénovation complète",
  "Appartement",
  "Maison",
  "Extension",
];

export default function DevisPage() {
  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f6f2ee] pt-20">
        <section className="grid min-h-[calc(100vh-80px)] lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT SIDE */}
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
                Demande de devis
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
              >
                Parlez-moi de
                <br />
                votre projet.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="mt-8 max-w-md text-lg leading-8 text-neutral-400"
              >
                Chaque rénovation est unique. Remplissez ce formulaire pour que
                je puisse comprendre vos besoins et vous proposer un
                accompagnement adapté.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 grid gap-4 text-sm text-neutral-300"
              >
                {["Réponse sous 48h", "Appel découverte gratuit", "Sans engagement"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-px w-12 bg-[#b49a7c]" />
                      {item}
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </aside>

          {/* RIGHT SIDE */}
          <section className="flex items-center px-6 py-12 md:px-12 lg:px-20">
            <motion.form
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="mx-auto w-full max-w-3xl rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-10"
            >
              <div className="mb-10">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#a89278]">
                  Votre besoin
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111]">
                  Détails du projet
                </h2>
              </div>

              <div className="mb-8 flex flex-wrap gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600 transition hover:border-[#a89278] hover:bg-[#f6f2ee] hover:text-[#111]"
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Type de bien" placeholder="Maison, appartement..." />
                <Field label="Surface (m²)" placeholder="Ex : 120" />
              </div>

              <Field
                label="Lots concernés"
                placeholder="Ex : électricité, plomberie, isolation..."
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Timing souhaité" placeholder="Ex : dans 3 mois" />
                <Field label="Budget estimatif" placeholder="Ex : 50 000 €" />
              </div>

              <Field
                label="Documents existants"
                placeholder="Plans, devis, photos, diagnostic..."
              />

              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  Message
                </label>
                <textarea
                  placeholder="Décrivez votre projet..."
                  className="min-h-36 w-full resize-none border-b border-neutral-200 bg-transparent py-4 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-300 focus:border-[#a89278]"
                />
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-[#a89278] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#927b63]"
              >
                Envoyer ma demande
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

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full border-b border-neutral-200 bg-transparent py-4 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-300 focus:border-[#a89278]"
      />
    </div>
  );
}