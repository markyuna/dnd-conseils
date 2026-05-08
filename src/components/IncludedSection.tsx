"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MonitorPlay, Video } from "lucide-react";

const items = [
  {
    title: "Une formation courte en vidéos, à votre rythme",
    desc: "Vous comprenez les étapes clés, les acteurs, les risques fréquents et les points de vigilance avant de vous engager.",
    image: "/include/01.png",
    icon: MonitorPlay,
  },
  {
    title: "Des modèles concrets, prêts à l’emploi",
    desc: "Fiches projet, grille de besoins, points de contrôle, analyse de devis et documents utiles pour structurer votre projet.",
    image: "/include/02.png",
    icon: FileText,
  },
  {
    title: "Des sessions visio pour appliquer à votre projet",
    desc: "On transforme vos idées en décisions claires, avec un accompagnement concret adapté à votre situation.",
    image: "/include/03.png",
    icon: Video,
  },
];

export default function IncludedSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf8] py-32">
      <div className="absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#b49a7c]/12 blur-3xl" />
      <div className="absolute bottom-[-240px] right-[-220px] h-[560px] w-[560px] rounded-full bg-black/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#9a8065]">
            Ce qui est inclus
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.055em] text-[#111] md:text-6xl">
            Ce que vous obtenez concrètement.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Des outils simples, des explications claires et un accompagnement
            humain pour avancer avec confiance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.06)] transition duration-500 hover:border-[#b49a7c]/40 hover:shadow-[0_32px_100px_rgba(0,0,0,0.11)]"
              >
                <div className="absolute right-[-90px] top-[-90px] h-[240px] w-[240px] rounded-full bg-[#b49a7c]/0 blur-3xl transition duration-500 group-hover:bg-[#b49a7c]/18" />

                <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-[#f6f2ee]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/80 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                    <Icon className="h-5 w-5 text-[#9a8065]" />
                  </div>

                  <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a8065] backdrop-blur-xl">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative p-4 pt-8">
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    {item.desc}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#9a8065]">
                    Inclus dans l’accompagnement
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}