"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

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
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-neutral-200"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="text-xl font-semibold tracking-wide">
              <span className="text-black">DND</span>
              <span className="text-neutral-500 text-sm ml-2">
                CONSEILS
              </span>
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
              <Link href="#">Services</Link>
              <Link href="#">Méthode</Link>
              <Link href="#">À propos</Link>
              <Link href="#">Contact</Link>
            </div>

            {/* CTA */}
            <Link
              href="#"
              className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-neutral-800 transition"
            >
              Demander un devis
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}