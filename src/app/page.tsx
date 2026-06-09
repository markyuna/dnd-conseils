// src/app/page.tsx

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171412]">
      <Navbar />

      <HeroSection />

      <ProblemSolutionSection />

      <ProcessSection />

      <section>
       
        <ServicesSection />
      </section>

      <OffersSection />

      <FinalCtaSection />

      <ContactSection />
    </main>
  );
}