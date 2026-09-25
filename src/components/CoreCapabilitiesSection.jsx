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
      case 'dollar': return <IconDollarSign className="w-8 h-8" />;
      case 'file': return <IconFileText className="w-8 h-8" />;
      case 'shield': return <IconShieldCheck className="w-8 h-8" />;
      case 'trending': return <IconTrendingUp className="w-8 h-8" />;
      case 'clock': return <IconClock className="w-8 h-8" />;
      case 'check': return <IconCheckCircle className="w-8 h-8" />;
      default: return <IconShieldCheck className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-primary-navy block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Our Core Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We go beyond standard dispatching. We offer comprehensive back-office solutions engineered to scale your fleet and boost your profit margins automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              className="bg-white border border-slate-200 rounded-2xl sm:p-8 p-4 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary-navy flex items-center justify-center mb-6 group-hover:bg-[#003366] group-hover:text-white transition-colors">
                {getIcon(cap.iconName)}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                {cap.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
