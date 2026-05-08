"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-neutral-200 rounded-full blur-3xl opacity-30 top-[-150px] left-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-neutral-300 rounded-full blur-3xl opacity-20 bottom-[-150px] right-[-150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-tight"
        >
          Évitez les erreurs coûteuses
          <br />
          <span className="text-neutral-500">
            dans vos travaux
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto"
        >
          Un accompagnement indépendant pour sécuriser votre projet,
          choisir les bons artisans et garder le contrôle sur votre budget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-black text-white px-8 py-3 rounded-full text-sm hover:bg-neutral-800 transition">
            Demander une étude gratuite
          </button>

          <button className="border border-neutral-300 px-8 py-3 rounded-full text-sm hover:bg-neutral-100 transition">
            Parler de mon projet
          </button>
        </motion.div>

      </div>
    </section>
  );
}