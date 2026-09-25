import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconCheckCircle, IconAward, IconArrowRight } from './Icons';

const TABS = [
  {
    id: 'what-we-do',
    label: 'What We Do',
    title: 'Premium Independent Truck Dispatching',
    content: 'We partner directly with owner-operators and small fleets to secure top-dollar spot market and dedicated freight. Our experienced dispatchers handle all broker negotiations, carrier setup packets, credit vetting, rate confirmations, and billing so you stay focused on driving.',
    points: ['Top-tier paying spot and contract freight', 'Complete paperwork and broker packet automation', 'Direct broker credit risk verification', '24/7 dedicated personal dispatcher assigned'],
    image: '/images/dispatcher.jpg',
  },
  {
    id: 'why-better',
    label: 'Why Us',
    title: 'Built On Trust, Transparency & Results',
    content: 'Truck Dispatcher USA was created with one goal: maximizing carrier profits while eliminating back-office stress. We believe in complete transparency — a simple 5% pay-as-you-go model with no hidden fees, no contracts.',
    points: ['100% Zero Forced Dispatch — you approve every load', 'No long-term contracts or termination penalties', 'Transparent 5% pay-as-you-go pricing model', 'Direct cell phone access to your dispatcher'],
    image: '/images/dry-van.jpg',
  },
  {
    id: 'how-succeed',
    label: 'How We Succeed',
    title: 'Continuous Support & Same-Day Cash Flow',
    content: 'Through our strategic partnership with top-tier load boards and factoring companies, we minimize deadhead miles and ensure carriers receive same-day payouts. We fight for every dollar of detention, layover, and TONU.',
    points: ['Same-day freight factoring setup and funding', 'Detention and TONU reimbursement enforcement', 'Average deadhead miles reduced below 8%', 'Weekly revenue optimization reviews'],
    image: '/images/flatbed.jpg',
  }
];

export default function WhoWeAreSection() {
  const [active, setActive] = useState('what-we-do');
  const tab = TABS.find(t => t.id === active);

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[520px]">
            {TABS.map(t => (
              <img
                key={t.id}
                src={t.image}
                alt={t.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${t.id === active ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          </div>

          {/* Right — content */}
          <div className="sm:space-y-8 space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
                <IconAward className="w-4 h-4 text-amber-600" />
                <span>US Dispatch Agency</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Who <span className="text-primary-navy">We Are</span>
              </h2>
            </div>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2">
              {TABS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`sm:px-5 px-2 sm:py-2.5 py-1 rounded-full text-xs sm:text-sm font-bold transition-all ${active === t.id ? 'bg-[#003366] text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div key={active} className="space-y-5">
              <p className="text-slate-600 text-base leading-relaxed">{tab.content}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tab.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <IconCheckCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#003366] hover:bg-[#002244] text-white font-black uppercase tracking-wider text-xs rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
              >
                <span>Learn More About Us</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
