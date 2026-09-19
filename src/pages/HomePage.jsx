import React from 'react';
import HeroSlider from '../components/HeroSlider';
import QuickFeaturesStrip from '../components/QuickFeaturesStrip';
import WhoWeAreSection from '../components/WhoWeAreSection';
import DualInteractiveWidget from '../components/DualInteractiveWidget';
import CoreCapabilitiesSection from '../components/CoreCapabilitiesSection';
import WhatDoYouShipSection from '../components/WhatDoYouShipSection';
import LiveRatesTicker from '../components/LiveRatesTicker';
import RequirementsAccordion from '../components/RequirementsAccordion';
import FactoringSection from '../components/FactoringSection';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import MeetTheTeamSection from '../components/MeetTheTeamSection';
import RecentNewsSection from '../components/RecentNewsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenQuote, onOpenLoadRequest, onOpenOnboard }) {
  return (
    <div className="home-page">
      {/* 1. ThemeREX Multi-Slide Hero Slider */}
      <HeroSlider
        onOpenQuote={() => onOpenQuote()}
        onOpenLoadRequest={() => onOpenLoadRequest()}
      />

      {/* 2. ThemeREX 3 Quick Action Cards under Slider */}
      <QuickFeaturesStrip
        onOpenQuote={() => onOpenQuote()}
        onOpenLoadRequest={() => onOpenLoadRequest()}
      />

      {/* 3. ThemeREX "Who We Are" (What We Do, Why We Do It Better, How We Succeed) */}
      <WhoWeAreSection />

      {/* 4. ThemeREX Dual Widget (Get Instant Quotes + Track Your Shipments) */}
      <DualInteractiveWidget
        onOpenQuote={onOpenQuote}
      />

      {/* 5. ThemeREX Core Capabilities Grid */}
      <CoreCapabilitiesSection />

      {/* 6. ThemeREX "What Do You Ship?" Equipment Showcase */}
      <WhatDoYouShipSection
        onOpenLoadRequest={onOpenLoadRequest}
        onOpenQuote={onOpenQuote}
      />

      {/* 7. Today's Rates Board (Matching user screenshot) */}
      <LiveRatesTicker
        onOpenLoadRequest={onOpenLoadRequest}
      />

      {/* 8. Onboarding Requirements Accordion (Matching user screenshot) */}
      <RequirementsAccordion
        onOpenOnboard={onOpenOnboard}
      />

      {/* 9. Factoring & Cash Flow (Express Freight Finance) */}
      <FactoringSection
        onOpenQuote={onOpenQuote}
      />

      {/* 10. Service Plans & Pricing */}
      <PricingPlans
        onOpenQuote={onOpenQuote}
      />

      {/* 11. ThemeREX "What Our Clients Say" Testimonials */}
      <Testimonials />

      {/* 12. ThemeREX "Meet The Team" */}
      <MeetTheTeamSection />

      {/* 13. ThemeREX "Recent News" & Industry Trends */}
      <RecentNewsSection />

      {/* 14. Contact Form & Office HQ */}
      <ContactSection />
    </div>
  );
}
