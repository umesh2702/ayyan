'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConceptOverview from '@/components/ConceptOverview';
import WeddingExperience from '@/components/WeddingExperience';
import CorporateExperience from '@/components/CorporateExperience';
import LiveEventDemo from '@/components/LiveEventDemo';
import TapToDigitalFlow from '@/components/TapToDigitalFlow';
import EventLifecycle from '@/components/EventLifecycle';
import AyyanOpportunity from '@/components/AyyanOpportunity';
import EcosystemDiagram from '@/components/EcosystemDiagram';
import WhyItMatters from '@/components/WhyItMatters';
import FinalCTA from '@/components/FinalCTA';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      
      {/* Sticky Header */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Concept Overview */}
        <ConceptOverview />

        {/* 3. Wedding Experience Architecture */}
        <WeddingExperience />

        {/* 4. Corporate Event Experience & Touchpoints */}
        <CorporateExperience />

        {/* 5. ULink Live Main Interactive Split-Screen Demo */}
        <LiveEventDemo />

        {/* 6. The Physical to Digital Tap Flow */}
        <TapToDigitalFlow />

        {/* 7. Lifecycle (Before / During / After) */}
        <EventLifecycle />

        {/* 8. Ayyan Opportunity Portfolio */}
        <AyyanOpportunity />

        {/* 9. Ecosystem Architecture Diagram */}
        <EcosystemDiagram />

        {/* 10. Why This Matters */}
        <WhyItMatters />

        {/* 11. Final Call to Action */}
        <FinalCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact / Prototype Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

    </div>
  );
}
