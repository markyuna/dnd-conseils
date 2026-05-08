"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080706] text-white">
      <motion.div
        className="absolute left-1/2 top-[-180px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#b49a7c]/15 blur-3xl"
        animate={{
          opacity: [0.35, 0.75, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 px-6 py-16 md:px-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#b49a7c]">
              DND Conseil
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Donnez une vraie direction à vos projets de travaux.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              Conseil, accompagnement et mise en relation pour avancer avec
              clarté, confiance et sérénité.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/35">
              Contact
            </h3>

            <FooterLink
              icon={<Mail className="h-4 w-4" />}
              href="mailto:dndconseil75@gmail.fr"
              label="dndconseil75@gmail.fr"
            />

            <FooterLink
              icon={<Phone className="h-4 w-4" />}
              href="tel:+33604522405"
              label="+33 6 04 52 24 05"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="my-12 h-px origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 text-xs text-white/35 md:flex-row md:items-center md:justify-between"
        >
          <p>© {new Date().getFullYear()} DND Conseil. Tous droits réservés.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="transition hover:text-white">
              Confidentialité
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLink({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/70 transition hover:border-[#b49a7c]/60 hover:text-white"
    >
      <span className="flex items-center gap-3">
        <span className="text-[#b49a7c]">{icon}</span>
        {label}
      </span>

      <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
    </motion.a>
  );
}