import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171412]">
      <Navbar />
      <div className="pt-[88px]">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
