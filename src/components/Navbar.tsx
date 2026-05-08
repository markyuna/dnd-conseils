"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavbarProps = {
  variant?: "default" | "minimal";
};

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const isMinimal = variant === "minimal";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed left-0 top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold tracking-wide">
              <span className="text-black">DND</span>
              <span className="ml-2 text-sm text-neutral-500">CONSEILS</span>
            </Link>

            {!isMinimal && (
              <div className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
                <Link href="#services">Services</Link>
                <Link href="#methode">Méthode</Link>
                <Link href="#apropos">À propos</Link>
                <Link href="#contact">Contact</Link>
              </div>
            )}

            {isMinimal ? (
              <Link
                href="/"
                className="text-sm text-neutral-600 transition hover:text-black"
              >
                ← Retour
              </Link>
            ) : (
              <Link
                href="/devis"
                className="rounded-full bg-black px-5 py-2 text-sm text-white transition hover:bg-neutral-800"
              >
                Demander un devis
              </Link>
            )}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}