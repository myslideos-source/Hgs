import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatementSection from "@/components/StatementSection";
import SolutionsSection from "@/components/SolutionsSection";
import TruckJourneySection from "@/components/TruckJourneySection";
import FuhrparkSection from "@/components/FuhrparkSection";
import TimelineSection from "@/components/TimelineSection";
import Werkstatt from "@/components/Werkstatt";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <div className="pb-16 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <StatementSection />
        <SolutionsSection />
        <TruckJourneySection />
        <FuhrparkSection />
        <TimelineSection />
        <Werkstatt />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <StructuredData />
    </div>
  );
}
