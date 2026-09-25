import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconStar, IconQuote } from './Icons';
import { TESTIMONIALS } from '../data/dispatchData';

const STATS = [
  { value: '99.4%', label: 'Carrier Satisfaction' },
  { value: '5%', label: 'Flat Dispatch Fee' },
  { value: '24/7', label: 'Dedicated Support' },
  { value: '623K+', label: 'Daily Load Opportunities' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-[#003366] text-white relative overflow-hidden">
      {/* Background image overlay */}
      <img
        src="/images/dispatcher.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="container-custom relative z-10">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-white/20">
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
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 h-full flex flex-col justify-between">
                  <div>
                    <IconQuote className="w-8 h-8 text-amber-400 mb-4" />
                    <p className="text-white text-lg leading-relaxed font-medium mb-4">"{TESTIMONIALS[current].quote}"</p>
                  </div>
                  <div className="flex items-center gap-4 pt-2 border-t border-white/20">
                    <div>
                      <h4 className="font-black text-white text-base">{TESTIMONIALS[current].name}</h4>
                      <span className="text-xs text-slate-300 font-medium">{TESTIMONIALS[current].role} · {TESTIMONIALS[current].location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
