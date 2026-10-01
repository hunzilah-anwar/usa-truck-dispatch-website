import HeroSlider from '../components/HeroSlider';
import WhoWeAreSection from '../components/WhoWeAreSection';
import CoreCapabilitiesSection from '../components/CoreCapabilitiesSection';
import WhatDoYouShipSection from '../components/WhatDoYouShipSection';
import DispatchCourseSection from '../components/DispatchCourseSection';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenQuote }) {
  return (
    <div className="home-page">
      {/* 1. ThemeREX Multi-Slide Hero Slider */}
      <HeroSlider
        onOpenQuote={() => onOpenQuote()}
        onOpenLoadRequest={() => onOpenQuote()}
      />

      {/* 2. ThemeREX "Who We Are" (What We Do, Why We Do It Better, How We Succeed) */}
      <WhoWeAreSection />

      {/* 3. ThemeREX Core Capabilities Grid */}
      <CoreCapabilitiesSection />

      {/* 4. ThemeREX "What Do You Ship?" Equipment Showcase (5% & 6% Rates) */}
      <WhatDoYouShipSection
        onOpenLoadRequest={onOpenQuote}
        onOpenQuote={onOpenQuote}
      />

      {/* 5. Dispatch Training Course Academy Section (New) */}
      <DispatchCourseSection />

      {/* 6. ThemeREX "What Our Clients Say" Testimonials */}
      <Testimonials />

      {/* 7. FAQs Section (Animated, Unique) */}
      <FAQSection />

      {/* 8. Contact Form & Office HQ */}
      <ContactSection />
    </div>
  );
}
