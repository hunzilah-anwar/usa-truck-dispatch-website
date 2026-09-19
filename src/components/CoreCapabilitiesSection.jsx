import React from 'react';
import { CORE_CAPABILITIES } from '../data/dispatchData';
import { 
  IconDollarSign, 
  IconFileText, 
  IconShieldCheck, 
  IconTrendingUp, 
  IconClock, 
  IconCheckCircle 
} from './Icons';

export default function CoreCapabilitiesSection() {
  const getIcon = (name) => {
    switch (name) {
      case 'dollar': return <IconDollarSign className="w-6 h-6" />;
      case 'file': return <IconFileText className="w-6 h-6" />;
      case 'shield': return <IconShieldCheck className="w-6 h-6" />;
      case 'trending': return <IconTrendingUp className="w-6 h-6" />;
      case 'clock': return <IconClock className="w-6 h-6" />;
      case 'check': return <IconCheckCircle className="w-6 h-6" />;
      default: return <IconShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#003366] text-xs font-extrabold uppercase tracking-wider">
            <span>What Sets Us Apart</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Core <span className="text-[#003366]">Capabilities</span>
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Comprehensive back-office, dispatch, and compliance solutions engineered to help motor carriers scale their profit margins.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid (ThemeREX 6-Item Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              className="glass-card bg-white rounded-2xl p-7 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003366] group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                  {getIcon(cap.iconName)}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#003366] transition-colors">
                  {cap.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Capability #{idx + 1}</span>
                <span className="text-amber-500 font-extrabold">100% Dedicated</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
