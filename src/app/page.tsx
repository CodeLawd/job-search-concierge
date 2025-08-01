"use client";
import { useState } from "react";
import { ConsultationBookingSection } from "@/components/consultation-booking-section";

// Import section components
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CoreBenefits } from "@/components/sections/CoreBenefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { AboutUs } from "@/components/sections/AboutUs";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyCTA } from "@/components/sections/StickyCTA";

export default function JobSearchConcierge() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero onGetStarted={() => setIsCalendlyOpen(true)} />
      <HowItWorks />
      <CoreBenefits />
      <Testimonials />
      <ConsultationBookingSection />
      <Pricing />
      <AboutUs />
      <FAQ />
      <ContactCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}
