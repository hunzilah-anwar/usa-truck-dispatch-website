import React from 'react';
import { Link } from 'react-router-dom';
import { IconTruck, IconUsers, IconClock, IconArrowRight, IconShieldCheck } from './Icons';

export default function QuickFeaturesStrip({ onOpenQuote, onOpenLoadRequest }) {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-16 container-custom mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Shippers & Brokers */}
        <div className="glass-card bg-white/95 p-7 border-t-4 border-[#003366] rounded-2xl shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-all">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003366] flex items-center justify-center font-black">
              <IconTruck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Shippers & Brokers</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide credit-vetted, reliable carrier capacity for all 48 continental states. Fast tracking, verified insurance, and on-time delivery.
            </p>
          </div>
          <div className="pt-6">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#003366] hover:text-amber-500 transition-colors cursor-pointer"
            >
              <span>Request Vetted Capacity</span>
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Carriers & Owner Operators (Amber Highlight) */}
        <div className="glass-card bg-gradient-to-br from-amber-400 to-amber-500 p-7 border-t-4 border-amber-600 rounded-2xl shadow-lg flex flex-col justify-between text-slate-950 hover:-translate-y-1 transition-all">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-black shadow-sm">
              <IconUsers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-950">Carriers & Owner Operators</h3>
            <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed">
              Get assigned your personal dedicated 24/7 dispatcher. 0% forced dispatch, aggressive rate negotiation, and weekly earnings from $8,500+.
            </p>
          </div>
          <div className="pt-6">
            <button
              onClick={onOpenLoadRequest}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-950 hover:text-white transition-colors cursor-pointer"
            >
              <span>Book High Paying Loads</span>
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 3: 24-Hour Onboarding (Clean Light Frosted Glass) */}
        <div className="glass-card bg-white/95 p-7 border-t-4 border-blue-600 rounded-2xl shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-all">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
              <IconClock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">24-Hour Quick Onboarding</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Have your MC authority, W-9, and insurance certificate ready? Complete our fast registration and start rolling loads today.
            </p>
          </div>
          <div className="pt-6">
            <Link
              to="/register"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#003366] hover:text-amber-500 transition-colors"
            >
              <span>Start Carrier Registration</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
