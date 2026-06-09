// src/components/IncludedSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "Des explications claires",
    desc: "Comprendre les étapes clés, les acteurs, les risques fréquents et les points de vigilance avant de vous engager.",
    image: "/include/01.png",
  },
  {
    title: "Des supports concrets",
    desc: "Fiches projet, grille de besoins, points de contrôle, analyse de devis et documents utiles pour structurer vos décisions.",
    image: "/include/02.png",
  },
  {
    title: "Un accompagnement humain",
    desc: "Transformer vos idées en décisions claires grâce à des échanges adaptés à votre projet, votre budget et vos priorités.",
    image: "/include/03.png",
  },
];

export default function IncludedSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf8] px-4 py-24 text-[#171412] sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/12 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-220px] h-[560px] w-[560px] rounded-full bg-black/[0.04] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#111] md:text-6xl">
            Ce que vous obtenez
            <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
              concrètement.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
            Des outils simples, des explications claires et un regard extérieur
            pour avancer avec plus de confiance.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/82 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.055)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#b49a7c]/40 hover:bg-white hover:shadow-[0_32px_100px_rgba(0,0,0,0.1)]"
            >
              <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-[240px] w-[240px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/16" />

              <div className="relative h-56 overflow-hidden rounded-[1.55rem] bg-[#f6f2ee] sm:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative px-4 pb-5 pt-7">
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#111]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/58 sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}