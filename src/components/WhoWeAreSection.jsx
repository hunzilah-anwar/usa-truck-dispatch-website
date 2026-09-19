import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconCheckCircle, IconShieldCheck, IconAward, IconTruck, IconArrowRight } from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function WhoWeAreSection() {
  const [activeTab, setActiveTab] = useState('what-we-do');

  const tabs = [
    {
      id: 'what-we-do',
      label: 'What We Do',
      title: 'Dedicated 24/7 Independent Truck Dispatching',
      content:
        'We partner directly with owner-operators and small fleets to secure top-dollar spot market and dedicated freight. Our experienced dispatchers handle all broker negotiations, carrier setup packets, credit vetting, rate confirmations, and billing so you stay focused on driving.',
      points: [
        'Top 5% paying spot and contract freight',
        'Complete paperwork and broker packet automation',
        'Direct broker credit risk verification',
        '24/7 dedicated personal dispatcher assigned'
      ]
    },
    {
      id: 'why-better',
      label: 'Why We Do It Better',
      title: 'Born In 2016 Out of Respect for American Truckers',
      content:
        COMPANY_DETAILS.missionStatement,
      points: [
        '100% Zero Forced Dispatch — you approve every single load',
        'No long-term contracts or hidden termination penalties',
        'Transparent 5% pay-as-you-go pricing model',
        'Personal dispatcher with direct cell phone contact'
      ]
    },
    {
      id: 'how-succeed',
      label: 'How We Succeed',
      title: 'Continuous Support & Same-Day Cash Flow Integration',
      content:
        'Through our strategic partnership with Express Freight Finance and top tier load boards, we minimize deadhead miles and ensure carriers receive same-day ACH wire payouts upon delivery. We fight for every dollar of detention, layover, and TONU.',
      points: [
        'Same-day freight factoring setup and funding',
        'Detention and TONU reimbursement enforcement',
        'Average deadhead miles reduced below 8%',
        'Weekly revenue optimization reviews'
      ]
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#003366] text-xs font-extrabold uppercase tracking-wider">
            <IconAward className="w-3.5 h-3.5 text-amber-500" />
            <span>Established 2016 • Premier US Dispatch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Who <span className="text-[#003366]">We Are</span>
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            {COMPANY_DETAILS.missionStatement}
          </p>
        </div>

        {/* 3 Tabs Header (ThemeREX Tabbed Presentation) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all border cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#003366] text-white border-[#003366] shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Box with Glassmorphism */}
        <div className="glass-card bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {currentTab.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentTab.content}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentTab.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">
                      <IconCheckCircle className="w-4 h-4" />
                    </span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="px-6 py-3.5 bg-[#003366] hover:bg-[#002244] text-white font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all shadow-sm inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Learn More About Our Team</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold uppercase tracking-wider text-xs rounded-xl transition-all inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <span>View Dispatch Services</span>
                </Link>
              </div>
            </div>

            {/* Right Image Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80"
                  alt="Truck Dispatcher USA Fleet on Highway"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">Serving All 48 Continental States</span>
                  <h4 className="text-lg font-black text-white">Over 623,000 Daily Opportunities</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
