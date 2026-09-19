import React, { useState } from 'react';
import { EQUIPMENT_DETAILS } from '../data/dispatchData';
import { IconTruck, IconCheckCircle, IconArrowRight, IconShieldCheck, IconDollarSign } from './Icons';

export default function WhatDoYouShipSection({ onOpenLoadRequest, onOpenQuote }) {
  const [selectedEqId, setSelectedEqId] = useState('dry-van');
  const eq = EQUIPMENT_DETAILS.find((item) => item.id === selectedEqId) || EQUIPMENT_DETAILS[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
            <IconTruck className="w-3.5 h-3.5" />
            <span>Trailer & Freight Fleet Specifications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            What Do You <span className="text-[#003366]">Ship?</span>
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            From temperature-sensitive pharmaceuticals and produce to over-dimensional flatbed machinery, we assign specialized dispatch agents for your exact trailer type.
          </p>
        </div>

        {/* Equipment Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {EQUIPMENT_DETAILS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedEqId(item.id)}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all border flex items-center gap-2 ${
                selectedEqId === item.id
                  ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md font-black'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <span>{item.name.split('(')[0].trim()}</span>
              {item.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                  selectedEqId === item.id ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Spotlight Showcase Card with Glassmorphism */}
        <div className="glass-card bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 relative h-72 sm:h-96 group">
                <img
                  src={eq.image}
                  alt={eq.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#003366] text-white px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider shadow">
                  Avg ${eq.baseRatePerMile.toFixed(2)}/mi base
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur border border-slate-200 text-slate-900 px-3 py-1.5 rounded-xl text-xs font-bold shadow flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active Capacity Available</span>
                </div>
              </div>
            </div>

            {/* Information & Technical Specs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-600">
                <IconShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Verified Carrier Capacity</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {eq.name}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {eq.description}
              </p>

              {/* Technical Specifications Matrix */}
              {eq.specs && (
                <div className="grid grid-cols-2 gap-2.5 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block">Max Payload</span>
                    <span className="font-extrabold text-slate-900">{eq.specs.payload}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block">Trailer Dimensions</span>
                    <span className="font-extrabold text-slate-900">{eq.specs.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block">Capacity / Limits</span>
                    <span className="font-extrabold text-[#003366]">{eq.specs.capacity}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block">Top Commodities</span>
                    <span className="font-extrabold text-slate-800 truncate block" title={eq.specs.topCommodities}>
                      {eq.specs.topCommodities}
                    </span>
                  </div>
                </div>
              )}

              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {eq.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="text-emerald-500 flex-shrink-0">
                      <IconCheckCircle className="w-4 h-4" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenLoadRequest(eq.name)}
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-sm transition-all flex items-center gap-2"
                >
                  <IconTruck className="w-4 h-4" />
                  <span>Book {eq.name.split('(')[0]} Loads</span>
                </button>

                <button
                  onClick={() => onOpenQuote({ equipment: eq.name })}
                  className="px-6 py-3.5 bg-[#003366] hover:bg-[#002244] text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all"
                >
                  Request Dispatch Rate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
