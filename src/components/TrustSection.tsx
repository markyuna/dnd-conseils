"use client";

import { motion } from "framer-motion";
import { Clock3, MapPin, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    value: "48h",
    label: "Premier retour",
    icon: Clock3,
  },
  {
    value: "100%",
    label: "Indépendant",
    icon: ShieldCheck,
  },
  {
    value: "IDF",
    label: "Île-de-France",
    icon: MapPin,
  },
  {
    value: "5★",
    label: "Clair & rassurant",
    icon: Star,
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f2] py-14">
      {/* subtle glow */}
      <div className="absolute left-1/2 top-[-140px] h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-[#b49a7c]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-black/10 bg-white/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-6"
        >
          <div className="grid gap-3 md:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center gap-4 rounded-xl border border-black/5 bg-[#f8f5f2]/70 p-4 transition duration-400 hover:bg-white hover:shadow-md"
                >
                  {/* icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-[#9a8065]">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* text */}
                  <div>
                    <p className="text-lg font-semibold tracking-[-0.03em] text-[#111]">
                      {item.value}
                    </p>
                    <p className="text-xs text-black/50">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}