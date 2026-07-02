// src/components/Footer.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const navigationLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/a-propos" },
      { label: "Demander une étude", href: "/devis" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Conseils travaux",
    links: [
      { label: "Conseil travaux", href: "/conseil-travaux" },
      {
        label: "Accompagnement rénovation",
        href: "/accompagnement-renovation",
      },
      { label: "Étude gratuite travaux", href: "/etude-gratuite-travaux" },
      { label: "Analyse devis travaux", href: "/analyse-devis-travaux" },
    ],
  },
  {
    title: "Rénovation",
    links: [
      { label: "Rénovation appartement", href: "/renovation-appartement" },
      { label: "Rénovation maison", href: "/renovation-maison" },
      { label: "Mentions légales", href: "/mentions-legales" },
      {
        label: "Politique de confidentialité",
        href: "/confidentialite",
      },
    ],
  },
];

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
          className="grid gap-12 lg:grid-cols-[1.15fr_1.4fr_0.85fr]"
        >
          <motion.div variants={fadeUp}>
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.35em] text-[#b49a7c]">
                DND Conseil
              </span>
              <ArrowUpRight className="h-4 w-4 text-[#b49a7c] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Donnez une vraie direction à vos projets de travaux.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              Conseil, accompagnement et mise en relation pour avancer avec
              clarté, confiance et sérénité avant de vous engager.
            </p>

            <Link
              href="/devis"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#080706] transition hover:-translate-y-0.5 hover:bg-[#f2e8dc]"
            >
              Demander une étude gratuite
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.nav
            variants={fadeUp}
            aria-label="Navigation du pied de page"
            className="grid gap-8 sm:grid-cols-3"
          >
            {navigationLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/35">
                  {section.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-white/58 transition hover:text-white"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.nav>

          <motion.div variants={fadeUp} className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/35">
              Contact
            </h3>

            <FooterContactLink
              icon={<Mail className="h-4 w-4" />}
              href="mailto:dndconseil75@gmail.com"
              label="dndconseil75@gmail.com"
            />

            <FooterContactLink
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

          <p className="max-w-xl leading-relaxed md:text-right">
            Conseil indépendant pour particuliers avant travaux, rénovation,
            analyse de devis et accompagnement à la décision.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterContactLink({
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