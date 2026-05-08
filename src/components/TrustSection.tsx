"use client";

import { motion } from "framer-motion";
import { Clock3, MapPin, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    value: "48h",
    label: "pour un premier retour",
    icon: Clock3,
  },
  {
    value: "100%",
    label: "conseil indépendant",
    icon: ShieldCheck,
  },
  {
    value: "IDF",
    label: "Île-de-France",
    icon: MapPin,
  },
  {
    value: "5★",
    label: "approche claire & rassurante",
    icon: Star,
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f2] py-20">
      <div className="absolute left-1/2 top-[-180px] h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[#b49a7c]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2.25rem] border border-black/10 bg-white/75 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.07)] backdrop-blur-2xl md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-[1.75rem] border border-black/5 bg-[#f8f5f2]/80 p-6 transition duration-500 hover:-translate-y-1 hover:border-[#b49a7c]/40 hover:bg-white hover:shadow-[0_18px_55px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-[#9a8065] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="text-4xl font-semibold tracking-[-0.06em] text-[#111]">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-black/55">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}