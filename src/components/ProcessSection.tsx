"use client";

import { motion } from "framer-motion";

const steps = [
  "Premier échange",
  "Étude du projet",
  "Mise en place",
  "Suivi jusqu'à réalisation",
];

export default function ProcessSection() {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold mb-16">
          Une méthode simple et efficace
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-neutral-400 mb-3">
                0{i + 1}
              </div>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}