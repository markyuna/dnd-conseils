"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Conseil avant travaux",
    desc: "Analyse de votre projet, estimation réaliste et identification des risques.",
  },
  {
    title: "Sélection des artisans",
    desc: "Accédez à des professionnels fiables et adaptés à votre projet.",
  },
  {
    title: "Suivi et coordination",
    desc: "Un regard expert pour éviter les erreurs et garantir la qualité.",
  },
  {
    title: "Optimisation du budget",
    desc: "Évitez les surcoûts et les mauvaises surprises.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">
            Un accompagnement à chaque étape
          </h2>
          <p className="text-neutral-600 mt-4">
            Prenez les bonnes décisions du début à la fin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-neutral-200 rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-neutral-600 mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}