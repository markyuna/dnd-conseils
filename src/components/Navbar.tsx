"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";

type NavbarProps = {
  variant?: "default" | "minimal";
};

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMinimal = variant === "minimal";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      if (!menuOpen) {
        setVisible(!(currentScroll > lastScroll && currentScroll > 110));
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -90, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-0 top-0 z-50 w-full px-4 pt-3 md:px-8"
        >
          <div
            className={[
              "mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-full border px-5 transition-all duration-500 md:h-[76px] md:px-7",
              scrolled
                ? "border-black/10 bg-white/90 shadow-[0_18px_55px_rgba(0,0,0,0.10)] backdrop-blur-2xl"
                : "border-white/70 bg-white/65 shadow-[0_14px_45px_rgba(0,0,0,0.06)] backdrop-blur-xl",
            ].join(" ")}
          >
            <Link
              href="/"
              aria-label="DND Conseils - Accueil"
              className="group flex shrink-0 items-center"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="DND Conseils"
                width={150}
                height={70}
                priority
                className="h-[52px] w-auto object-contain transition duration-500 group-hover:scale-[1.03] md:h-[58px]"
              />
            </Link>

            {!isMinimal && (
              <div className="hidden items-center rounded-full border border-black/5 bg-[#f8f5f2]/80 px-2 py-1 text-sm text-black/60 shadow-inner lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 transition duration-300 hover:bg-[#1a1a1a] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2">
              {isMinimal ? (
                <Link
                  href="/"
                  className="group hidden items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/65 shadow-sm transition duration-300 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white sm:inline-flex"
                >
                  <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
                  Retour
                </Link>
              ) : (
                <Link
                  href="/devis"
                  className="group hidden items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b49a7c] lg:inline-flex"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              )}

              <button
                type="button"
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:bg-[#1a1a1a] hover:text-white lg:hidden"
              >
                {menuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-white/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-2xl lg:hidden"
              >
                {!isMinimal ? (
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-medium text-black/75 transition hover:bg-[#f3eee8]"
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4 text-black/35" />
                      </Link>
                    ))}

                    <Link
                      href="/devis"
                      onClick={() => setMenuOpen(false)}
                      className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition hover:bg-[#b49a7c]"
                    >
                      Demander un devis
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ) : (
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-4 text-sm font-semibold text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Retour à l’accueil
                  </Link>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}