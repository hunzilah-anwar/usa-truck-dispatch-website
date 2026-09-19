import React from 'react';
import { TESTIMONIALS } from '../data/dispatchData';
import { IconStar, IconShieldCheck, IconTruck } from './Icons';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold shadow-sm">
            <IconStar className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Real Carrier Reviews • 4.9 / 5.0 Rating</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Trusted By Hundreds of <span className="text-[#003366]">Owner Operators</span>
          </h2>
          <p className="text-slate-600 text-base">
            Read what active truck drivers and fleet owners have to say about our aggressive rate negotiations and 24/7 reliability.
          </p>
        </div>

        {/* Testimonials Grid with Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="glass-card bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <IconStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6 font-medium">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{review.name}</h4>
                  <p className="text-[11px] text-[#003366] font-bold">{review.role}</p>
                  <p className="text-[10px] text-slate-500 font-medium">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
