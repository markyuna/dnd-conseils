// src/components/HelpBot.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  LifeBuoy,
  Mail,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  cta?: { label: string; href: string };
};

const faqItems: FaqItem[] = [
  {
    id: "tarifs",
    question: "Quels sont vos tarifs ?",
    answer:
      "Trois formules : le Pack Essentiel à partir de 390 € HT (diagnostic et analyse de devis), le Pack Sérénité à partir de 790 € HT (diagnostic complet et visite de chantier), et le Pack Chantier sur devis pour un suivi complet jusqu'à la réalisation.",
    cta: { label: "Voir les packs", href: "/#offres" },
  },
  {
    id: "etude-gratuite",
    question: "L'étude initiale est-elle gratuite ?",
    answer:
      "Oui. Le premier échange et une première analyse de votre projet sont gratuits et sans engagement, pour vous aider à voir clair avant de vous engager.",
    cta: { label: "Demander mon étude gratuite", href: "/devis" },
  },
  {
    id: "deroulement",
    question: "Comment se déroule l'accompagnement ?",
    answer:
      "En 4 étapes : premier échange pour clarifier votre projet, diagnostic (devis, budget, points de vigilance), plan d'action avec des recommandations concrètes, puis un suivi jusqu'à la réalisation des travaux.",
    cta: { label: "Découvrir la méthode", href: "/#methode" },
  },
  {
    id: "engagement",
    question: "Suis-je engagé après un premier échange ?",
    answer:
      "Non, aucun engagement. Vous restez entièrement libre de la suite à donner à votre projet après notre échange.",
  },
  {
    id: "contact",
    question: "Comment vous contacter ?",
    answer:
      "Par téléphone au 06 04 52 24 05, par email à dndconseil75@gmail.com, ou via notre formulaire — nous répondons sous 2h ouvrées.",
    cta: { label: "Ouvrir le formulaire de contact", href: "/#contact" },
  },
];

export default function HelpBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItem = faqItems.find((item) => item.id === activeId) ?? null;

  function close() {
    setIsOpen(false);
    setActiveId(null);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Aide DND Conseils"
            className="flex max-h-[70vh] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
          >
            <div className="flex shrink-0 items-center justify-between bg-[#17130f] px-5 py-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b49a7c]/20 text-[#d8c4ad]">
                  <LifeBuoy className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold tracking-[-0.01em]">
                  Un doute ? On répond.
                </span>
              </div>

              <button
                type="button"
                onClick={close}
                aria-label="Fermer l'aide"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              {activeItem ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a8065] transition hover:text-[#17130f]"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Retour aux questions
                  </button>

                  <p className="text-base font-semibold tracking-[-0.02em] text-[#17130f]">
                    {activeItem.question}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-black/62">
                    {activeItem.answer}
                  </p>

                  {activeItem.cta && (
                    <Link
                      href={activeItem.cta.href}
                      onClick={close}
                      className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#17130f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2a211b]"
                    >
                      {activeItem.cta.label}
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              ) : (
                <div>
                  <p className="mb-4 text-xs font-medium text-black/50">
                    Choisissez une question pour obtenir une réponse rapide.
                  </p>

                  <div className="space-y-2">
                    {faqItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        className="w-full rounded-2xl border border-black/10 bg-[#f6f2ee] px-4 py-3 text-left text-sm font-medium text-[#17130f] transition hover:border-[#b49a7c]/60 hover:bg-white"
                      >
                        {item.question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="shrink-0 border-t border-black/10 bg-[#f6f2ee] px-5 py-4">
              <p className="mb-3 text-xs text-black/50">
                Pas de réponse à votre question ?
              </p>

              <div className="flex flex-wrap gap-2">
                <a
                  href="tel:+33604522405"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-[#17130f] transition hover:border-[#b49a7c]/60"
                >
                  <Phone className="h-3.5 w-3.5 text-[#9a8065]" />
                  06 04 52 24 05
                </a>

                <a
                  href="mailto:dndconseil75@gmail.com"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-[#17130f] transition hover:border-[#b49a7c]/60"
                >
                  <Mail className="h-3.5 w-3.5 text-[#9a8065]" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fermer l'aide" : "Ouvrir l'aide"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#17130f] text-[#d8c4ad] shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition hover:bg-[#2a211b]"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </motion.button>
    </div>
  );
}
