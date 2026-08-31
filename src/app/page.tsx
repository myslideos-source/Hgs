import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatementSection from "@/components/StatementSection";
import SolutionsSection from "@/components/SolutionsSection";
import FuhrparkSection from "@/components/FuhrparkSection";
import TimelineSection from "@/components/TimelineSection";
import Werkstatt from "@/components/Werkstatt";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pb-16 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <StatementSection />
        <SolutionsSection />
        <FuhrparkSection />
        <TimelineSection />
        <Werkstatt />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
