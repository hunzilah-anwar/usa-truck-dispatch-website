import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheck } from './Icons';

const SERVICES = [
  {
    title: 'Direct Shippers & Dedicated Lanes',
    desc: 'Access exclusive freight from top-tier shippers before it hits public boards. High-paying dedicated routes secured for your truck.',
    image: '/images/dry-van.jpg',
  },
  {
    title: 'Elite Carrier Dispatch Program',
    desc: 'Stop competing on load boards. Get a dedicated 24/7 dispatcher, zero forced dispatch, and aggressive rate negotiation.',
    image: '/images/reefer.jpg',
  },
  {
    title: 'Same-Day Setup & Funding',
    desc: 'Submit your MC, W-9 and COI. We onboard you instantly with top brokers and enroll you in same-day factoring.',
    image: '/images/flatbed.jpg',
  },
];

export default function QuickFeaturesStrip({ onOpenQuote, onOpenLoadRequest }) {
  return (
    <section className="relative z-20 container-custom mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl shadow-xl h-72 hover:-translate-y-1 transition-transform duration-300"
          >
            <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <h3 className="text-lg font-black text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{s.desc}</p>
              <button
                onClick={i === 1 ? onOpenLoadRequest : onOpenQuote}
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Learn More</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
