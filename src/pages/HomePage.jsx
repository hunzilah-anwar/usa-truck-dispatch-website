import React from 'react';
import HeroSlider from '../components/HeroSlider';
import QuickFeaturesStrip from '../components/QuickFeaturesStrip';
import WhoWeAreSection from '../components/WhoWeAreSection';
import CoreCapabilitiesSection from '../components/CoreCapabilitiesSection';
import WhatDoYouShipSection from '../components/WhatDoYouShipSection';
import DispatchCourseSection from '../components/DispatchCourseSection';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';
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



      {/* 5. ThemeREX Core Capabilities Grid */}
      <CoreCapabilitiesSection />

      {/* 6. ThemeREX "What Do You Ship?" Equipment Showcase (5% & 6% Rates) */}
      <WhatDoYouShipSection
        onOpenLoadRequest={onOpenLoadRequest}
        onOpenQuote={onOpenQuote}
      />



      {/* 8. Dispatch Training Course Academy Section (New) */}
      <DispatchCourseSection />


      {/* 9. FAQs Section (Animated, Unique) */}
      <FAQSection />

      {/* 10. ThemeREX "What Our Clients Say" Testimonials */}
      <Testimonials />

      {/* 11. Contact Form & Office HQ */}
      <ContactSection />
    </div>
  );
}
