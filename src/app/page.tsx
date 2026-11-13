// src/app/page.tsx

import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import QuizAccompagnementSection from "@/components/QuizAccompagnementSection";
import DevisAnalysisExampleSection from "@/components/DevisAnalysisExampleSection";
import ChantierRiskCalculatorSection from "@/components/ChantierRiskCalculatorSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/schema";
import { generateSeo, seoConfig } from "@/lib/seo";

const homeTitle = "Conseil travaux et rénovation indépendant";

export const metadata: Metadata = generateSeo({
  title: homeTitle,
  description: seoConfig.defaultDescription,
  path: "/",
  keywords: [
    "conseil travaux",
    "conseiller travaux indépendant",
    "conseil rénovation",
    "accompagnement rénovation particulier",
    "analyse devis travaux",
    "étude gratuite travaux",
    "rénovation appartement",
    "rénovation maison",
    "conseil travaux Île-de-France",
    "conseil travaux Seine-et-Marne",
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171412]">
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: `${homeTitle} | ${seoConfig.siteName}`,
          description: seoConfig.defaultDescription,
        })}
      />

      <Navbar />

      <HeroSection />

      <ProblemSolutionSection />

      <TestimonialsSection />

      <ProcessSection />

      <ServicesSection />

      <OffersSection />

      <QuizAccompagnementSection />

      <DevisAnalysisExampleSection />

      <ChantierRiskCalculatorSection />

      <FinalCtaSection />

      <ContactSection />
    </main>
  );
}