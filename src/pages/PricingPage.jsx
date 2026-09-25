import React, { useState } from 'react';
import PricingPlans from '../components/PricingPlans';
import { IconShieldCheck } from '../components/Icons';

const faqs = [
  {
    q: "Are there any setup costs or hidden fees?",
    a: "No. Onboarding with Truck Dispatcher USA is 100% free. We only earn our percentage when we book loads you approve and you get paid — no setup fees, no registration dues, ever."
  },
  {
    q: "How does the 5% vs 6% commission work?",
    a: "The 5% rate covers standard Class 8 equipment: Dry Van, Reefer, Flatbed, Step Deck, and Power Only. The 6% rate applies to expedited equipment: 26' Box Truck and 40' Hotshot. You only pay per approved load."
  },
  {
    q: "Am I locked into a contract?",
    a: "Absolutely not. All plans are month-to-month and pay-as-you-go. Pause or cancel anytime with zero penalties."
  },
];

export default function PricingPage({ onOpenQuote, onOpenOnboard }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pricing-page bg-white">

      {/* Header */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <IconShieldCheck className="w-3.5 h-3.5" />
            <span>Transparent Service Plans</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Dispatch <span className="text-[#003366]">Service Plans</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
            Simple, honest pricing. No forced dispatch, no upfront deposits, no cancellation penalties.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <PricingPlans onOpenQuote={onOpenQuote} />

      {/* FAQ */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm text-slate-900 hover:text-[#003366]"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-100 text-amber-900' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
