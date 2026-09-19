import React, { useState, useEffect } from 'react';
import { TODAY_RATES } from '../data/dispatchData';
import { IconTruck, IconTrendingUp, IconClock, IconArrowRight, IconCheckCircle } from './Icons';

const MARQUEE_LANES = [
  { lane: "Chicago, IL → Atlanta, GA", eq: "Dry Van", rate: "$3.15/mi", trend: "+$0.18" },
  { lane: "Los Angeles, CA → Dallas, TX", eq: "Reefer", rate: "$3.85/mi", trend: "+$0.25" },
  { lane: "Houston, TX → Chicago, IL", eq: "Flatbed", rate: "$3.40/mi", trend: "+$0.12" },
  { lane: "Atlanta, GA → Miami, FL", eq: "Reefer", rate: "$3.95/mi", trend: "+$0.30" },
  { lane: "Elizabeth, NJ → Columbus, OH", eq: "Dry Van", rate: "$2.95/mi", trend: "+$0.15" },
  { lane: "Seattle, WA → Denver, CO", eq: "Step Deck", rate: "$3.70/mi", trend: "+$0.22" },
  { lane: "Dallas, TX → Kansas City, MO", eq: "Power Only", rate: "$2.80/mi", trend: "+$0.10" },
  { lane: "Savannah, GA → Charlotte, NC", eq: "Box Truck", rate: "$2.90/mi", trend: "+$0.14" }
];

export default function LiveRatesTicker({ onOpenLoadRequest }) {
  const [currentDateString, setCurrentDateString] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    setCurrentDateString(`${mm}-${dd}-${yyyy}`);
  }, []);

  const filterOptions = ['All', 'Dry Van', 'Reefer', 'Flatbed', 'Step Deck', 'Power Only', 'Box Truck'];

  const filteredRates = selectedFilter === 'All'
    ? TODAY_RATES
    : TODAY_RATES.filter(r => r.type.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="rates" className="py-16 sm:py-20 bg-slate-50 text-slate-900 relative border-y border-slate-200 overflow-hidden">
      {/* 1. Continuous Live Spot Rates Marquee Ticker */}
      <div className="w-full bg-white border-b border-slate-200 py-2.5 overflow-hidden mb-12 shadow-sm">
        <div className="container-custom flex items-center justify-between mb-1.5 sm:hidden">
          <span className="text-[11px] font-black uppercase text-amber-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            LIVE LANE TICKER
          </span>
        </div>
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="hidden sm:flex items-center gap-2 px-4 py-1 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-r-full shrink-0 z-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
            <span>LIVE SPOT LANES</span>
          </div>

          <div className="overflow-hidden w-full select-none">
            <div className="animate-marquee flex items-center gap-8 text-xs font-semibold whitespace-nowrap pl-4">
              {/* Duplicate array twice for seamless continuous loop */}
              {[...MARQUEE_LANES, ...MARQUEE_LANES].map((item, idx) => (
                <div key={idx} className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-900 font-bold">{item.lane}</span>
                  <span className="text-slate-500 text-[11px]">({item.eq})</span>
                  <span className="text-[#003366] font-extrabold">{item.rate}</span>
                  <span className="text-emerald-600 font-black text-[11px]">{item.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003366] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#003366] animate-pulse"></span>
            <span>Live Spot & Contract Freight Market Index</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Today's <span className="text-[#003366]">Rates</span> & Lane Volume
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Truck Dispatch in the USA for <strong className="text-slate-900">Dry Vans</strong>,{' '}
            <strong className="text-slate-900">Reefer</strong>,{' '}
            <strong className="text-slate-900">Flatbed</strong>, and{' '}
            <strong className="text-slate-900">Step Decks</strong>. We aggressively negotiate the best paying loads for your equipment.
          </p>

          {/* Date Badge matching screenshot */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-amber-100/80 border border-amber-300 text-amber-900 font-extrabold text-sm sm:text-base tracking-wider mt-1 shadow-sm">
            <span>LIVE RATE INDEX:</span>
            <span>{currentDateString || '09-14-2026'}</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === opt
                  ? 'bg-[#003366] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-400 hover:text-slate-900'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Live Rates Grid with Glass Cards & Shine Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRates.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card glass-shine bg-white rounded-2xl p-6 border ${
                item.popular ? 'border-amber-400 shadow-md ring-2 ring-amber-400/20' : 'border-slate-200 shadow-sm'
              } flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#003366] flex items-center justify-center shadow-xs">
                        <IconTruck className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-lg text-slate-900">{item.type}</h3>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">National Average Spot Rate</span>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-1 shadow-xs">
                    <IconTrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    {item.trend}
                  </span>
                </div>

                {/* Rate Number */}
                <div className="my-4 py-3.5 px-4 bg-slate-50/90 rounded-xl border border-slate-200/80 flex items-baseline justify-between shadow-xs">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[#003366]">{item.rate}</span>
                    <span className="text-xs text-slate-500 ml-1 font-semibold">{item.unit}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-semibold">Avg Weekly Gross</span>
                    <span className="text-xs font-bold text-emerald-700">{item.avgWeeklyGross}</span>
                  </div>
                </div>

                {/* Lane Info */}
                <div className="text-xs space-y-1.5 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span className="font-bold">High Volume Lanes:</span>
                  </div>
                  <p className="text-slate-700 font-medium bg-blue-50/50 p-3 rounded-xl border border-blue-100/80 leading-relaxed">
                    {item.topLanes}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenLoadRequest(item.type)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#003366] hover:bg-[#002244] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group shadow hover:shadow-md cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Find {item.type} Loads</span>
                <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black text-xl shadow-xs">
              ⚡
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">Need Custom Contract Rates or Dedicated Backhauls?</h4>
              <p className="text-xs sm:text-sm text-slate-600">Our dispatchers monitor DAT One, Truckstop.com, and direct shipper freight 24 hours a day.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenLoadRequest()}
            className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-md hover:shadow-amber-400/30 transition-all shrink-0 cursor-pointer transform hover:-translate-y-0.5"
          >
            REQUEST A LOAD
          </button>
        </div>
      </div>
    </section>
  );
}

