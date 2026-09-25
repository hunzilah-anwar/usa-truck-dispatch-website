import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/dispatchData';

const SLIDES = [
  {
    id: 'dry-van',
    tab: 'Dry Van',
    tagline: 'PREMIUM FREIGHT MANAGEMENT',
    title: 'Accelerate Your Trucking Business',
    desc: 'We connect independent owner-operators and fleets with high-paying loads, reducing deadhead miles and maximizing your take-home pay. Zero forced dispatch.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&auto=format&fit=crop&q=85',
  },
  {
    id: 'reefer',
    tab: 'Reefer',
    tagline: 'DEDICATED 24/7 SUPPORT',
    title: 'We Handle The Paperwork, You Drive',
    desc: 'Stop stressing over rate confirmations, broker setups, and invoicing. Our expert dispatchers take care of the entire back-office so you can focus on the road.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&auto=format&fit=crop&q=85',
  },
  {
    id: 'flatbed',
    tab: 'Flatbed',
    tagline: 'EXPERT NEGOTIATION TEAM',
    title: 'Get The Best Rates In Any Market',
    desc: 'Leverage our proprietary network of direct shippers and top-tier brokers. We aggressively negotiate your rate-per-mile, ensuring your truck is always profitable.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&auto=format&fit=crop&q=85',
  },
  {
    id: 'hotshot',
    tab: 'Hotshot',
    tagline: 'FAST & RELIABLE DELIVERY',
    title: 'Hotshot Loads That Pay More',
    desc: 'Specialized hotshot dispatch for time-critical freight. We source premium hotshot loads with top-dollar rates and minimal deadhead on every run.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=85',
  },
];

export default function HeroSlider({ onOpenQuote, onOpenLoadRequest }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    if (idx === current || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  }, [current, animating]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full overflow-hidden select-none">

      {/* Background Images */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.tab}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay — stronger on left for readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,20,50,0.88) 0%, rgba(0,20,50,0.70) 45%, rgba(0,20,50,0.25) 100%)' }} />
        </div>
      ))}

      {/* Content — sits above images */}
      <div className="relative z-10 h-full flex flex-col justify-between">

        {/* Main content area */}
        <div className="flex-1 flex items-center">
          <div className="container-custom w-full sm:h-112.5 h-100 overflow-hidden">
            <div className="max-w-xl py-16">
              {/* Tagline */}
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4 transition-all duration-500"
                style={{ color: '#fcb900', opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'translateY(0)' }}
              >
                {slide.tagline}
              </p>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 transition-all duration-500"
                style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(12px)' : 'translateY(0)', transitionDelay: '60ms' }}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-lg transition-all duration-500"
                style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(12px)' : 'translateY(0)', transitionDelay: '120ms' }}
              >
                {slide.desc}
              </p>

              {/* CTA Button */}
              <div
                className="transition-all duration-500"
                style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(12px)' : 'translateY(0)', transitionDelay: '180ms' }}
              >
                <button
                  onClick={onOpenLoadRequest}
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-bold text-sm px-8 py-3.5 hover:bg-white hover:text-slate-900 transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tab Strip — exactly like the reference image */}
        <div className="relative z-20 w-full">
          <div className="flex">
            {SLIDES.map((s, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={s.id}
                  onClick={() => goTo(idx)}
                  className="flex-1 py-5 px-4 text-sm font-semibold tracking-wide transition-all duration-300 text-center cursor-pointer"
                  style={{
                    background: isActive ? '#0f172a' : 'rgba(0,20,50,0.72)',
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.50)',
                    borderTop: isActive ? '3px solid #fcb900' : '3px solid transparent',
                  }}
                >
                  {s.tab}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
