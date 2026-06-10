// src/app/page.tsx

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import QuizAccompagnementSection from "@/components/QuizAccompagnementSection";
import DevisAnalysisExampleSection from "@/components/DevisAnalysisExampleSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171412]">
      <Navbar />

      <HeroSection />

      <ProblemSolutionSection />

      <ProcessSection />

      <ServicesSection />

      <OffersSection />

      <QuizAccompagnementSection />

      <DevisAnalysisExampleSection />

      <FinalCtaSection />

      <ContactSection />
    </main>
  );
}