"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const trustItems = [
  "Conseiller indépendant",
  "Accompagnement personnalisé",
  "Sans engagement",
];

const imageSets = [
  {
    avant: "/avant-apres/set1-avant.png",
    apres: "/avant-apres/set1-apres.png",
  },
  {
    avant: "/avant-apres/set2-avant.png",
    apres: "/avant-apres/set2-apres.png",
  },
  {
    avant: "/avant-apres/set3-avant.png",
    apres: "/avant-apres/set3-apres.png",
  },
];

export default function HeroSection() {
  const [sliderPosition, setSliderPosition] = useState(48);
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const introTimeout = window.setTimeout(() => {
      setSliderPosition(66);
    }, 850);

    return () => window.clearTimeout(introTimeout);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
      setSliderPosition(34);

      window.setTimeout(() => {
        setSliderPosition(68);
      }, 350);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const handleMove = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 8), 92);

    setSliderPosition(percent);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f5f2] px-4 pb-20 pt-32 text-[#1a1a1a] sm:px-6 lg:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-240px] top-[-260px] h-[680px] w-[680px] rounded-full bg-[#b49a7c]/20 blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-240px] h-[700px] w-[700px] rounded-full bg-[#efe1d4] blur-3xl" />
        <div className="absolute left-1/2 top-24 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#111_1px,transparent_1px),linear-gradient(#111_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/75 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a8065] shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl lg:mx-0"
          >
            <ShieldCheck className="h-4 w-4" />
            Conseil travaux indépendant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#111] sm:text-5xl md:text-6xl lg:mx-0 lg:text-[5.65rem]"
          >
            Notre méthode,
            <span className="block bg-gradient-to-r from-[#8f7358] via-[#b49a7c] to-[#5f4937] bg-clip-text text-transparent">
              l’esprit tranquille.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.24,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-black/55 sm:text-lg lg:mx-0"
          >
            Notre méthode, c’est l’assurance d’un travail de qualité au juste
            prix, avec l’esprit tranquille à chaque étape de votre projet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.38,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            <Link
              href="/devis?type=etude"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#1a1a1a] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#b49a7c] to-[#8b7259] opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="relative">Demander une étude gratuite</span>
              <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/devis?type=contact"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-8 py-4 text-sm font-semibold text-[#111] shadow-[0_12px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#b49a7c] hover:bg-white"
            >
              Parler de mon projet
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.6 }}
            className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-black/55 lg:justify-start"
          >
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#9a8065]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.28,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[680px] lg:max-w-none"
        >
          <div className="absolute -inset-10 rounded-[3.5rem] bg-[#b49a7c]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-[0_45px_120px_rgba(0,0,0,0.13)] backdrop-blur-2xl sm:rounded-[2.75rem] sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,154,124,0.26),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.7),transparent_36%)]" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-4 px-1 sm:px-2">
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#111] sm:text-3xl">
                  Visualisez le potentiel.
                </h2>

                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f8f5f2] shadow-sm sm:inline-flex">
                  <Sparkles className="h-5 w-5 text-[#9a8065]" />
                </span>
              </div>

              <div
                role="slider"
                aria-label="Comparaison avant après"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPosition)}
                tabIndex={0}
                onMouseMove={(event) =>
                  handleMove(event.clientX, event.currentTarget)
                }
                onClick={(event) =>
                  handleMove(event.clientX, event.currentTarget)
                }
                onTouchStart={(event) =>
                  handleMove(event.touches[0].clientX, event.currentTarget)
                }
                onTouchMove={(event) =>
                  handleMove(event.touches[0].clientX, event.currentTarget)
                }
                className="group relative h-[430px] cursor-ew-resize touch-pan-y overflow-hidden rounded-[1.7rem] bg-[#ddd2c8] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)] sm:h-[500px] sm:rounded-[2.2rem] lg:h-[560px]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSet}
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={imageSets[currentSet].apres}
                      alt="Projet après rénovation"
                      fill
                      priority={currentSet === 0}
                      className="object-cover"
                      sizes="(min-width: 1024px) 48vw, 100vw"
                    />

                    <div
                      className="absolute inset-y-0 left-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <Image
                        src={imageSets[currentSet].avant}
                        alt="Projet avant rénovation"
                        fill
                        priority={currentSet === 0}
                        className="max-w-none object-cover"
                        sizes="(min-width: 1024px) 48vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-black/18" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute left-4 top-4 z-30 rounded-full border border-white/35 bg-black/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl sm:left-5 sm:top-5 sm:text-xs">
                  Avant
                </div>

                <div className="absolute right-4 top-4 z-30 rounded-full border border-white/45 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a] backdrop-blur-xl sm:right-5 sm:top-5 sm:text-xs">
                  Après
                </div>

                <div
                  className="absolute inset-y-0 z-30 w-[2px]"
                  style={{
                    left: `${sliderPosition}%`,
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255,255,255,0.95), transparent)",
                    boxShadow: "0 0 30px rgba(255,255,255,0.75)",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[#1a1a1a] shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:h-14 sm:w-14"
                  >
                    <span className="text-base font-semibold sm:text-lg">
                      ↔
                    </span>
                  </motion.div>
                </div>

                <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-2">
                  {imageSets.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Voir le projet ${index + 1}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        setCurrentSet(index);
                        setSliderPosition(66);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSet
                          ? "w-7 bg-white"
                          : "w-3 bg-white/45 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 px-2 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-black/35 sm:text-xs">
                Glissez pour comparer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}