"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Claire M.",
    project: "Rénovation appartement",
    text: "Nous avions peur de nous tromper dans le choix des artisans. L’accompagnement nous a permis d’avancer avec beaucoup plus de clarté et de sérénité.",
  },
  {
    name: "Thomas R.",
    project: "Travaux maison",
    text: "Un regard extérieur très précieux. Les conseils nous ont évité plusieurs mauvaises décisions et nous ont aidés à mieux contrôler le budget.",
  },
  {
    name: "Nadia B.",
    project: "Aménagement intérieur",
    text: "Très professionnel, clair et rassurant. On se sent accompagné, sans pression, avec des recommandations concrètes.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f0eb] py-32">
      <div className="absolute left-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#b49a7c]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#9a8065]">
            Ils nous ont fait confiance
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111] md:text-6xl">
            Des projets mieux préparés, plus clairs et plus sereins.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Notre rôle est simple : vous aider à prendre les bonnes décisions
            avant que les erreurs ne coûtent cher.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-6 flex gap-1 text-[#b49a7c]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg leading-8 text-neutral-700">
                “{item.text}”
              </p>

              <div className="mt-8 border-t border-neutral-200 pt-6">
                <p className="font-semibold text-[#111]">{item.name}</p>
                <p className="mt-1 text-sm text-neutral-500">{item.project}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}