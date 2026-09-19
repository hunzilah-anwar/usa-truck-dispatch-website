import React, { useState } from 'react';
import { ONBOARDING_REQUIREMENTS, COMPANY_DETAILS } from '../data/dispatchData';
import { IconPlus, IconMinus, IconFileText, IconCheckCircle, IconArrowRight, IconShieldCheck } from './Icons';

export default function RequirementsAccordion({ onOpenOnboard }) {
  const [openIds, setOpenIds] = useState(['req-1']);

  const toggleAccordion = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="requirements" className="py-16 sm:py-20 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="container-custom">
        {/* Header from screenshot media_1789804933416.jpg */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003366] text-xs font-bold shadow-sm">
            <IconFileText className="w-3.5 h-3.5" />
            <span>Fast Carrier Onboarding (Under 24 Hours)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 uppercase">
            WHAT DOES TRUCKS DISPATCH SERVICES NEED FROM ME TO GET STARTED?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Getting set up with our dedicated dispatch desk is quick and straightforward. Have these 5 standard carrier documents ready and we can book your first load today.
          </p>
        </div>

        {/* Accordion List with Glass Cards */}
        <div className="max-w-3xl mx-auto space-y-3.5 mb-14">
          {ONBOARDING_REQUIREMENTS.map((req) => {
            const isOpen = openIds.includes(req.id);
            return (
              <div
                key={req.id}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-amber-400 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Accordion Button matching screenshot style with (+) icon */}
                <button
                  onClick={() => toggleAccordion(req.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-amber-500 font-black text-xl">
                      {isOpen ? '−' : '+'}
                    </span>
                    <span className="font-extrabold text-sm sm:text-base text-slate-900">
                      {req.title}
                    </span>
                  </div>

                  <span className={`p-1.5 rounded-full text-xs font-bold ${isOpen ? 'bg-amber-100 text-amber-900' : 'text-slate-400'}`}>
                    {isOpen ? <IconMinus className="w-4 h-4" /> : <IconPlus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-700 text-xs sm:text-sm border-t border-slate-100 space-y-3 animate-fadeIn">
                    <p className="font-semibold text-amber-800">{req.summary}</p>
                    <p className="leading-relaxed text-slate-600">{req.detail}</p>
                    <div className="flex items-center gap-2 text-xs text-emerald-700 pt-1 font-medium">
                      <IconCheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Standard industry requirement — 100% confidential & secure</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Onboarding Card (Light Frosted Glass) */}
        <div className="glass-panel bg-gradient-to-r from-blue-50 via-white to-amber-50 border border-blue-200 rounded-3xl p-8 max-w-3xl mx-auto text-center space-y-5 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-[#003366] flex items-center justify-center mx-auto shadow-sm">
            <IconShieldCheck className="w-6 h-6" />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Have Your Carrier Packet Ready?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
              Submit your MC permit and insurance information now. Our carrier setup specialist will verify your profile and assign your personal dispatcher immediately.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenOnboard}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow transition-all flex items-center gap-2"
            >
              <span>Submit Carrier Documents Online</span>
              <IconArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`mailto:${COMPANY_DETAILS.email}?subject=New Carrier Onboarding Documents - Truck Dispatcher USA&body=Attached are my carrier onboarding documents (MC Authority, W-9, Certificate of Insurance, and CDL).%0D%0A%0D%0ACompany Name:%0D%0AMC Number:%0D%0APhone Number:`}
              className="px-6 py-3.5 bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm"
            >
              <IconFileText className="w-4 h-4 text-amber-400" />
              <span>Email Documents Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
