import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EQUIPMENT_DETAILS } from '../data/dispatchData';
import { IconArrowRight, IconCheckCircle, IconTruck } from '../components/Icons';

export default function ServiceDetailPage({ onOpenQuote, onOpenOnboard }) {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Find service from dispatchData based on slug matching id
    const found = EQUIPMENT_DETAILS.find(item => item.id === slug);
    if (found) {
      setService(found);
    }
  }, [slug]);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-black text-slate-900">Service Not Found</h2>
        <Link to="/services" className="text-[#003366] underline mt-4 inline-block">Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#003366] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <Link to="/services" className="text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 inline-flex items-center gap-1">
            ← Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold rounded mb-4 border border-white/20">
                {service.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight">{service.name} Dispatch</h1>
            </div>
            <button
              onClick={onOpenOnboard}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black uppercase tracking-wider text-sm rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              Start Onboarding
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Service Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1"><IconCheckCircle className="w-5 h-5" /></span>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Specs Card */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                <IconTruck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black mb-6">Equipment Specs</h3>
              
              <div className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block mb-1">Payload</span>
                  <span className="font-semibold">{service.specs.payload}</span>
                </div>
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block mb-1">Dimensions</span>
                  <span className="font-semibold">{service.specs.dimensions}</span>
                </div>
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block mb-1">Capacity</span>
                  <span className="font-semibold">{service.specs.capacity}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block mb-1">Top Commodities</span>
                  <span className="font-semibold text-sm leading-relaxed">{service.specs.topCommodities}</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-amber-400 p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-black text-slate-900 mb-3">Need a Load Now?</h3>
              <p className="text-slate-800 text-sm mb-6 font-medium">Our dispatchers are ready to secure the highest paying lane for your truck.</p>
              <button
                onClick={onOpenQuote}
                className="w-full py-4 bg-slate-900 text-white hover:bg-slate-800 font-black uppercase tracking-wider text-xs rounded-xl transition-all shadow-md flex justify-center gap-2"
              >
                <span>Request Free Quote</span>
                <IconArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
