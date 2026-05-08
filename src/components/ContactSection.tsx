"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6f2ee] py-32"
    >
      {/* GLOW BACKGROUNDS */}
      <div className="absolute left-[-200px] top-[-200px] h-[420px] w-[420px] rounded-full bg-[#b49a7c]/20 blur-3xl" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[420px] w-[420px] rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b49a7c]">
            Contact
          </p>

          <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
            Parlons de votre projet
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-neutral-600">
            Décrivez-nous votre besoin. Nous vous apportons une réponse claire,
            structurée et adaptée sous 48h.
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative grid gap-10 rounded-3xl border border-black/5 bg-white/70 p-8 shadow-xl backdrop-blur-xl md:grid-cols-2 md:p-12"
        >
          {/* LEFT SIDE (VALUE) */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">
                Un accompagnement clair dès le départ
              </h3>

              <p className="text-neutral-600">
                Nous analysons votre projet, vos contraintes et vos objectifs
                afin de vous orienter vers les bonnes décisions dès le début.
              </p>
            </div>

            <div className="mt-10 space-y-4 text-sm text-neutral-500">
              <p>✔ Réponse sous 48h</p>
              <p>✔ Conseils personnalisés</p>
              <p>✔ Sans engagement</p>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                placeholder="Nom"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
              />
              <input
                placeholder="Email"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
              />
            </div>

            <textarea
              placeholder="Décrivez votre projet..."
              rows={5}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
            />

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Demander une étude
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>

          {/* INNER GLOW */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
        </motion.div>
      </div>
    </section>
  );
}