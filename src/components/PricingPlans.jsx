import React from 'react';
import { PRICING_PLANS } from '../data/dispatchData';
import { IconCheck, IconShieldCheck, IconArrowRight, IconPhone } from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function PricingPlans({ onOpenQuote }) {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold shadow-sm">
            <IconShieldCheck className="w-3.5 h-3.5" />
            <span>Transparent Service Plans • Zero Hidden Fees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Simple, Honest <span className="text-[#003366]">Pricing</span>
          </h2>
          <p className="text-slate-600 text-base">
            No forced dispatch. No upfront deposits. No cancellation penalties. We earn our percentage only when we book high-paying loads you approve.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isCourse = plan.name.includes("Course") || plan.name.includes("Academy");
            return (
              <div
                key={idx}
                className={`glass-card glass-shine rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-white to-amber-50/60 border-2 border-amber-400 shadow-xl transform lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Badge with subtle glow animation */}
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider rounded-full shadow-md whitespace-nowrap ${
                      plan.popular
                        ? 'bg-amber-400 text-slate-950 animate-pulse-glow'
                        : isCourse
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[#003366] text-white'
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div>
                  {/* Plan Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{plan.name}</h3>
                  {plan.equipmentList && (
                    <div className="text-[11px] font-bold text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-200/80 mb-3">
                      {plan.equipmentList}
                    </div>
                  )}
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">{plan.description}</p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-2 mb-5 pb-5 border-b border-slate-200">
                    <span className="text-4xl font-black text-[#003366]">{plan.rate}</span>
                    <span className="text-xs text-slate-500 uppercase font-bold">{plan.rateSubtext}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0 mt-0.5 font-bold">
                          <IconCheck className="w-3 h-3" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div>
                  {isCourse ? (
                    <a
                      href="/course"
                      className="w-full py-3.5 px-4 rounded-xl font-black uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-1.5 shadow-md bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer"
                    >
                      <span>{plan.buttonText}</span>
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenQuote({ selectedPlan: plan.name })}
                      className={`w-full py-3.5 px-4 rounded-xl font-black uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer ${
                        plan.popular
                          ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-400/30'
                          : 'bg-[#003366] hover:bg-[#002244] text-white'
                      }`}
                    >
                      <span>{plan.buttonText}</span>
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-card bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <IconShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-slate-900">100% Risk-Free Guarantee</div>
              <div className="text-xs text-slate-500">If we don't find loads that meet your rate criteria, you owe us nothing.</div>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#003366] hover:text-amber-600 whitespace-nowrap"
          >
            <IconPhone className="w-4 h-4 text-amber-500" />
            <span>Questions? Talk to a Senior Dispatcher</span>
          </a>
        </div>
      </div>
    </section>
  );
}
