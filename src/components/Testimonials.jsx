import React, { useState } from 'react';
import { IconStar, IconQuote } from './Icons';

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "Owner Operator · Dry Van",
    state: "Texas",
    content: "Switching to Truck Dispatcher USA was the best decision for my business. My gross went up by $1,500 weekly, and I never have to touch a broker packet again.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "Sarah L.",
    role: "Fleet Owner · Reefer",
    state: "Florida",
    content: "The transparency is real. 5% flat, zero forced dispatch. They found me dedicated lanes out of Florida that completely changed my fleet's profitability.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "David H.",
    role: "Hotshot Driver",
    state: "California",
    content: "As a hotshot, finding good freight is tough. My dispatcher fights for every cent. They even helped me get set up with factoring so I get paid the same day.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    name: "James R.",
    role: "Owner Operator · Flatbed",
    state: "Ohio",
    content: "I was skeptical at first, but after the first week my rate per mile jumped 18 cents. The brokers they deal with actually pay on time. Absolutely the real deal.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    rating: 5
  }
];

const STATS = [
  { value: '99.4%', label: 'Carrier Satisfaction' },
  { value: '5%', label: 'Flat Dispatch Fee' },
  { value: '24/7', label: 'Dedicated Support' },
  { value: '623K+', label: 'Daily Load Opportunities' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-[#003366] text-white relative overflow-hidden">
      {/* Background image overlay */}
      <img
        src="/images/dispatcher.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="container-custom relative z-10">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-white/20">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">{s.value}</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: heading */}
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">Trusted By Drivers Nationwide</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              What Our <br />Carriers Are Saying
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-md">
              Over 500+ owner-operators and fleet owners trust Truck Dispatcher USA to keep their trucks loaded, profitable, and stress-free.
            </p>

            {/* Dot navigation */}
            <div className="flex gap-3 pt-4">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'w-10 bg-amber-400' : 'w-2.5 bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: testimonial card */}
          <div className="relative min-h-[280px]">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ${i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                  <IconQuote className="w-8 h-8 text-amber-400 mb-4" />
                  <p className="text-white text-lg leading-relaxed font-medium mb-6">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-400" />
                    <div>
                      <div className="flex gap-0.5 mb-1">
                        {[...Array(t.rating)].map((_, j) => <IconStar key={j} className="w-4 h-4 text-amber-400" />)}
                      </div>
                      <h4 className="font-black text-white text-base">{t.name}</h4>
                      <span className="text-xs text-slate-300 font-medium">{t.role} · {t.state}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
