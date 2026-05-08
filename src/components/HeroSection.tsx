"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-neutral-200 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-neutral-300 rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-tight"
        >
          Votre conseiller indépendant
          <br />
          <span className="text-neutral-500">
            pour vos travaux
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto"
        >
          Un accompagnement sur mesure pour sécuriser vos projets,
          optimiser votre budget et vous faire gagner du temps.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="bg-black text-white px-8 py-3 rounded-full text-sm hover:bg-neutral-800 transition">
            Demander un accompagnement
          </button>

          <button className="border border-neutral-300 px-8 py-3 rounded-full text-sm hover:bg-neutral-100 transition">
            Découvrir les services
          </button>
        </motion.div>

      </div>
    </section>
  );
}