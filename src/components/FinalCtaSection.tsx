"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#080706] py-32 text-white">
      <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#b49a7c]/25 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#b49a7c]"
        >
          Passez à l’action
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Un projet de travaux ?
          <br />
          Ne prenez pas de risques.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400"
        >
          Des choix bien anticipés peuvent vous faire économiser des milliers d’euros. 
          Faites-vous accompagner avant de vous engager.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/devis?type=etude"
            className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-[#d3bea6]"
          >
            Demander un diagnostic gratuite
          </Link>
        </motion.div>
      </div>
    </section>
  );
}