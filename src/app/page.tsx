// src/app/page.tsx

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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171412]">
      <Navbar />

      <HeroSection />

      <ProblemSolutionSection />

      <TestimonialsSection />

      <ProcessSection />

      <QuizAccompagnementSection />

      <DevisAnalysisExampleSection />

      <ChantierRiskCalculatorSection />

      <ServicesSection />

      <OffersSection />

      <FinalCtaSection />
    </main>
  );
}