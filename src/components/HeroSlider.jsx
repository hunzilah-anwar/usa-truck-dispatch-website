import { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES, COMPANY_DETAILS } from '../data/dispatchData';
import { IconTruck, IconArrowRight, IconPhone } from './Icons';

export default function HeroSlider({ onOpenQuote, onOpenLoadRequest }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative w-full overflow-hidden bg-slate-100 select-none"
      style={{ minHeight: '580px', maxHeight: '740px', height: '75vh' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slides */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* ThemeREX Semi-Transparent Light Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/80 to-black/40 sm:from-white/95 sm:via-white/70 sm:to-transparent"></div>
        </div>
      ))}

      {/* Content Container with Frosted Glass Panel */}
      <div className="container-custom relative z-20 h-full flex items-center justify-between py-10 sm:py-14">
        {/* Left Hero Card */}
        <div className="max-w-2xl text-left space-y-4 sm:space-y-5 text-slate-900 animate-fadeIn p-6 sm:p-9 rounded-3xl bg-white/94 backdrop-blur-xl border border-white/90 shadow-2xl">
          {/* Tagline Pill with Ping Animation */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
            <span>{slide.tagline}</span>
          </div>

          {/* Main Slide Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-primary-navy leading-tight tracking-tight">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium max-w-xl">
            {slide.subtitle}
          </p>

          {/* Slide Stat Box */}
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm font-bold text-amber-900 shadow-xs">
            <span className="text-base">⭐</span>
            <span>Verified Freight Volume: <strong className="text-primary-navy font-black">{slide.stat}</strong></span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenLoadRequest}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-md hover:shadow-amber-400/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <IconTruck className="w-4 h-4" />
              <span>{slide.buttonPrimary}</span>
            </button>

            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-primary-navy hover:bg-[#002244] text-white font-black uppercase tracking-wider text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>{slide.buttonSecondary}</span>
              <IconArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 text-primary-navy font-bold text-xs hover:text-amber-600 transition-colors ml-1 whitespace-nowrap"
            >
              <IconPhone className="w-4 h-4 text-amber-500" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Floating Badges (Desktop Only) */}
        <div className="hidden xl:flex flex-col gap-4 max-w-xs animate-fadeIn mr-8">
          <div className="glass-card glass-shine bg-white/90 p-4 rounded-2xl border border-amber-300/80 shadow-lg animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black text-lg">
                ★
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 uppercase">4.9 / 5.0 Star Rating</div>
                <div className="text-[11px] text-slate-600">850+ active owner operators</div>
              </div>
            </div>
          </div>

          <div className="glass-card glass-shine bg-white/90 p-4 rounded-2xl border border-emerald-300/80 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black text-lg">
                ✓
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 uppercase">0% Forced Dispatch</div>
                <div className="text-[11px] text-slate-600">You approve every rate & lane</div>
              </div>
            </div>
          </div>

          <div className="glass-card glass-shine bg-white/90 p-4 rounded-2xl border border-blue-200 shadow-lg animate-float" style={{ animationDelay: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary-navy flex items-center justify-center font-black text-lg">
                ⚡
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 uppercase">Same-Day Factoring</div>
                <div className="text-[11px] text-slate-600">Express Freight Finance Wire</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Sleek Navigation Controls (Dots + Prev/Next Buttons) */}
      <div className="absolute bottom-5 inset-x-0 z-30 flex items-center justify-center gap-4">
        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          className="w-8 h-8 rounded-full bg-white/90 hover:bg-amber-400 text-slate-700 hover:text-slate-950 backdrop-blur-md flex items-center justify-center transition-all shadow border border-slate-200 cursor-pointer"
          aria-label="Previous Slide"
        >
          <svg className="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-slate-300 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="w-8 h-8 rounded-full bg-white/90 hover:bg-amber-400 text-slate-700 hover:text-slate-950 backdrop-blur-md flex items-center justify-center transition-all shadow border border-slate-200 cursor-pointer"
          aria-label="Next Slide"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

