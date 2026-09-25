import React from 'react';
import { Link } from 'react-router-dom';
import { EQUIPMENT_DETAILS } from '../data/dispatchData';
import { IconArrowRight, IconCheckCircle } from '../components/Icons';
import CoreCapabilitiesSection from '../components/CoreCapabilitiesSection';

const SERVICE_IMAGES = {
  'dry-van': '/images/dry-van.jpg',
  'reefer': '/images/reefer.jpg',
  'flatbed': '/images/flatbed.jpg',
  'step-deck': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
  'box-truck': 'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=800&auto=format&fit=crop&q=80',
  'hotshot': '/images/hotshot.jpg',
  'power-only': 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&auto=format&fit=crop&q=80',
};

export default function ServicesPage({ onOpenQuote, onOpenLoadRequest, onOpenOnboard }) {
  return (
    <div className="services-page bg-white min-h-screen">

      {/* Hero Banner */}
      <div className="relative bg-[#003366] text-white py-24 overflow-hidden">
        <img
          src="/images/dispatcher.jpg"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 text-xs font-black uppercase tracking-widest">
            Comprehensive Freight Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Our <span className="text-amber-400">Dispatch Services</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Professional 24/7 truck dispatching. Transparent 5% rate (6% Box Truck & Hotshot). Click a service to see full details.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button onClick={onOpenOnboard} className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-xs uppercase tracking-widest rounded-lg transition-all">
              Register as Carrier
            </button>
            <button onClick={onOpenQuote} className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-widest rounded-lg border border-white/20 transition-all">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid — with generated images */}
      <section className="py-20 container-custom">
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#003366]">What We Dispatch</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Choose Your Equipment Type</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EQUIPMENT_DETAILS.map((service) => {
            const img = SERVICE_IMAGES[service.id] || '/images/dry-van.jpg';
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#003366] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={img}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-md">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#003366] transition-colors">{service.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{service.description}</p>

                  <ul className="space-y-1.5 mb-6 flex-1">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <IconCheckCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-black uppercase tracking-wider text-[#003366] group-hover:text-amber-500 transition-colors">
                    <span>View Full Details</span>
                    <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Core Capabilities */}
      <CoreCapabilitiesSection />
    </div>
  );
}
