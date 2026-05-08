"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
      <div className="absolute left-[-180px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[#b49a7c]/25 blur-3xl" />
      <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-black/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#9a8065]">
            Ils nous ont fait confiance
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.055em] text-[#111] md:text-6xl">
            Des projets mieux préparés, plus clairs et plus sereins.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Notre rôle est simple : vous aider à prendre les bonnes décisions
            avant que les erreurs ne coûtent cher.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.07)] backdrop-blur-xl transition duration-500 hover:bg-white hover:shadow-[0_32px_100px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/20" />

              <div className="relative mb-7 flex items-center justify-between">
                <div className="flex gap-1 text-[#b49a7c]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={17} fill="currentColor" />
                  ))}
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#f7f3ef]">
                  <Quote className="h-5 w-5 text-[#9a8065]" />
                </span>
              </div>

              <p className="relative text-lg leading-8 text-neutral-700">
                “{item.text}”
              </p>

              <div className="relative mt-8 border-t border-neutral-200 pt-6">
                <p className="font-semibold text-[#111]">{item.name}</p>
                <p className="mt-1 text-sm text-neutral-500">
                  {item.project}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}