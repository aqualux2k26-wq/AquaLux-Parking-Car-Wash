import React from "react";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../sections/HomeSection";
import { AboutSection } from "../sections/AboutSection";
import { ServicesSection } from "../sections/ServicesSection";
import { WhyUsSection } from "../sections/WhyUsSection";
import { ContactSection } from "../sections/ContactSection";
import { BookWashSection } from "../sections/BookWashSection";
import { Footer } from "../components/Footer";
import { FloatingActionButtons } from "../components/FloatingActionButtons";

export const AppContainer: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
        <BookWashSection />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};
