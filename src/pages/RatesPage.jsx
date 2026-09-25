import React from 'react';

import RevenueCalculator from '../components/RevenueCalculator';
import { IconTrendingUp, IconTruck, IconCheckCircle, IconDollarSign } from '../components/Icons';

export default function RatesPage({ onOpenLoadRequest, onOpenQuote }) {
  return (
    <div className="rates-page bg-white">
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <IconTrendingUp className="w-3.5 h-3.5 text-amber-600" />
            <span>Real-Time Freight Market Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Today's <span className="text-[#003366]">Rates</span> & Commission Index
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Transparent dispatching for Dry Van (5%), Reefer (5%), Flatbed (5%), Step Deck (5%), Power Only (5%), and Box Truck & Hotshot (6%). We negotiate top $/mile with zero forced dispatch.
          </p>
        </div>
      </div>



      {/* Regional Lane Economics Matrix */}
      <section className="py-16 sm:py-20 container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">REGIONAL SPOT INDEX</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Regional Freight Corridors & Outbound Rates</h2>
          <p className="text-sm sm:text-base text-slate-600">
            Current load-to-truck ratios and average broker paying rates across the 5 primary US freight zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Midwest */}
          <div className="glass-card glass-shine bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-lg text-slate-900">Midwest Freight Zone</h3>
              <span className="px-2.5 py-1 text-[11px] font-black uppercase rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                High Volume
              </span>
            </div>
            <p className="text-xs text-slate-600">Key Hubs: Chicago, IL • Indianapolis, IN • Columbus, OH • Detroit, MI</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="font-semibold text-slate-700">Dry Van Spot:</span>
                <span className="font-black text-[#003366]">$3.10 - $3.45 / mi</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="font-semibold text-slate-700">Reefer Spot:</span>
                <span className="font-black text-[#003366]">$3.65 - $4.10 / mi</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-700">Flatbed Spot:</span>
                <span className="font-black text-[#003366]">$3.25 - $3.75 / mi</span>
              </div>
            </div>
            <button
              onClick={() => onOpenLoadRequest('Midwest')}
              className="w-full py-2.5 bg-slate-100 hover:bg-[#003366] hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all"
            >
              View Midwest Loads
            </button>
          </div>

          {/* Southeast */}
          <div className="glass-card glass-shine bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-lg text-slate-900">Southeast Freight Zone</h3>
              <span className="px-2.5 py-1 text-[11px] font-black uppercase rounded bg-blue-50 text-[#003366] border border-blue-200">
                Balanced
              </span>
            </div>
            <p className="text-xs text-slate-600">Key Hubs: Atlanta, GA • Charlotte, NC • Savannah Port • Jacksonville, FL</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="font-semibold text-slate-700">Dry Van Spot:</span>
                <span className="font-black text-[#003366]">$2.95 - $3.30 / mi</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="font-semibold text-slate-700">Reefer Spot:</span>
                <span className="font-black text-[#003366]">$3.80 - $4.35 / mi</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-700">Flatbed Spot:</span>
                <span className="font-black text-[#003366]">$3.15 - $3.60 / mi</span>
              </div>
            </div>
            <button
              onClick={() => onOpenLoadRequest('Southeast')}
              className="w-full py-2.5 bg-slate-100 hover:bg-[#003366] hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all"
            >
              View Southeast Loads
            </button>
          </div>

          {/* Texas / South Central */}
          <div className="glass-card glass-shine bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-lg text-slate-900">Texas & South Central</h3>
              <span className="px-2.5 py-1 text-[11px] font-black uppercase rounded bg-amber-50 text-amber-800 border border-amber-200">
                Oil & Cross-Border
              </span>
            </div>
            <p className="text-xs text-slate-600">Key Hubs: Dallas-Fort Worth • Houston Port • Laredo Border • San Antonio</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="font-semibold text-slate-700">Dry Van Spot:</span>
                <span className="font-black text-[#003366]">$2.85 - $3.25 / mi</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="font-semibold text-slate-700">Reefer Spot:</span>
                <span className="font-black text-[#003366]">$3.55 - $4.05 / mi</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-700">Flatbed Spot:</span>
                <span className="font-black text-[#003366]">$3.45 - $3.95 / mi</span>
              </div>
            </div>
            <button
              onClick={() => onOpenLoadRequest('Texas')}
              className="w-full py-2.5 bg-slate-100 hover:bg-[#003366] hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all"
            >
              View Texas Loads
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Revenue Calculator */}
      <RevenueCalculator onOpenQuote={onOpenQuote} />
    </div>
  );
}
