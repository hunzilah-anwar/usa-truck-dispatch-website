import React, { useState } from 'react';
import { EQUIPMENT_DETAILS } from '../data/dispatchData';
import { IconTruck, IconCheckCircle, IconArrowRight, IconShieldCheck } from './Icons';

const SERVICE_IMAGES = {
  'dry-van':    '/images/dry-van.jpg',
  'reefer':     '/images/reefer.jpg',
  'flatbed':    '/images/flatbed.jpg',
  'step-deck':  '/images/step-deck.jpg',
  'box-truck':  'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=800&auto=format&fit=crop&q=80',
  'hotshot':    '/images/hotshot.jpg',
  'power-only': '/images/dry-van.jpg',
};

export default function WhatDoYouShipSection({ onOpenLoadRequest, onOpenQuote }) {
  const [selectedId, setSelectedId] = useState('dry-van');
  const eq = EQUIPMENT_DETAILS.find(e => e.id === selectedId) || EQUIPMENT_DETAILS[0];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#003366] block mb-3">
            Equipment Types We Dispatch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            What Do You <span className="text-amber-500">Ship?</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            From temperature-sensitive produce to over-dimensional flatbed machinery — we have specialized dispatchers for every trailer type.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {EQUIPMENT_DETAILS.map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                selectedId === item.id
                  ? 'bg-primary-navy text-white border-primary-navy shadow-lg scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-primary-navy hover:text-primary-navy'
              }`}
            >
              {item.name.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Main showcase — image left, info right */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Image */}
            <div className="relative h-72 sm:h-96 lg:h-full min-h-70 overflow-hidden">
              {EQUIPMENT_DETAILS.map(item => (
                <img
                  key={item.id}
                  src={SERVICE_IMAGES[item.id]}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${item.id === selectedId ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent to-transparent" />

              {/* Rate badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="px-3 py-1.5 bg-amber-400 text-slate-900 text-xs font-black rounded-lg shadow">
                  {eq.commission} Dispatch Commission
                </span>
              </div>
            </div>

            {/* Right: Info */}
            <div className="p-4 sm:p-10 flex flex-col justify-center sm:space-y-5 space-y-2">

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{eq.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{eq.description}</p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {eq.features.slice(0, 6).map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <IconCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenLoadRequest(eq.name)}
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black uppercase tracking-wider text-xs rounded-xl shadow transition-all flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <IconTruck className="w-4 h-4" />
                  Book Loads
                </button>
                <button
                  onClick={() => onOpenQuote({ equipment: eq.name })}
                  className="px-6 py-3.5 bg-[#003366] hover:bg-[#002244] text-white font-black uppercase tracking-wider text-xs rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Get Dispatch Rate
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
