import React, { useState } from 'react';
import PricingPlans from '../components/PricingPlans';
import { IconCheckCircle, IconShieldCheck, IconDollarSign, IconArrowRight, IconPhone } from '../components/Icons';

export default function PricingPage({ onOpenQuote, onOpenOnboard }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [weeklyGross, setWeeklyGross] = useState(8500);

  const fivePercentCost = (weeklyGross * 0.05).toFixed(0);
  const sevenPercentCost = (weeklyGross * 0.07).toFixed(0);
  const estimatedGrossIncrease = (weeklyGross * 0.12).toFixed(0); // 12% boost from aggressive negotiation
  const netAddedProfit = (Number(estimatedGrossIncrease) - Number(sevenPercentCost)).toFixed(0);

  const faqs = [
    {
      q: "Are there any upfront setup costs or hidden onboarding fees?",
      a: "No! Getting onboarded with Truck Dispatcher USA is 100% free. We never charge setup fees, registration fees, or administrative dues. We only earn our small percentage when you run loads that you approved."
    },
    {
      q: "What does 'Zero Forced Dispatch' mean for my trucking company?",
      a: "Zero forced dispatch means you are always the final decision maker. If a load destination, rate, or schedule doesn't suit your business, you can decline it with zero penalties. We work for you, not the other way around."
    },
    {
      q: "Am I locked into a long-term contract?",
      a: "Absolutely not. Our standard dispatch agreement is completely month-to-month and pay-as-you-go. You can pause or stop services anytime with zero cancellation penalties."
    },
    {
      q: "How does the 5% vs 7% plan work?",
      a: "The 5% plan covers core dedicated load booking, aggressive rate negotiations, and broker packet setup. The 7% Full Service Pro plan includes all core dispatching PLUS complete factoring coordination, detention/TONU enforcement, and quarterly IFTA filing preparation."
    },
    {
      q: "Do you assist newly established MC authorities (under 6 months)?",
      a: "Yes! While some mega-brokers require 90 days, our dispatch team maintains a proprietary network of top-rated freight brokers and direct shippers that work with new motor carrier authorities from Day 1."
    },
    {
      q: "How fast can we start booking loads after submitting documents?",
      a: "Once we receive your MC Authority, W-9, and Certificate of Insurance ($1M / $100k), your dedicated dispatcher can begin booking high-paying loads within 2 to 4 hours."
    }
  ];

  return (
    <div className="pricing-page bg-white">
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <IconShieldCheck className="w-3.5 h-3.5" />
            <span>Honest & Transparent Service Plans</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Dispatch <span className="text-[#003366]">Service Plans</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Choose the service tier that fits your fleet. No forced dispatch, no upfront deposits, and no cancellation penalties.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <PricingPlans onOpenQuote={onOpenQuote} />

      {/* Interactive Carrier Take-Home ROI Calculator */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom max-w-4xl">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
              DISPATCH INVESTMENT ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              How Dispatchers Pay For Themselves
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Professional negotiation typically lifts carrier revenue by $0.30 - $0.50/mile (+12%), putting more net dollars in your pocket than self-booking.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Your Target Weekly Gross
                  </label>
                  <span className="text-2xl font-black text-[#003366]">
                    ${Number(weeklyGross).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="4000"
                  max="18000"
                  step="500"
                  value={weeklyGross}
                  onChange={(e) => setWeeklyGross(Number(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                  <span>$4,000 (Local/Short)</span>
                  <span>$8,500 (OTR Average)</span>
                  <span>$18,000 (Team / Expedited)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">5% Pay-As-You-Go</span>
                  <div className="text-xl font-black text-slate-900 mt-1">${weeklyGross ? Number(fivePercentCost).toLocaleString() : 0}</div>
                  <span className="text-[10px] text-slate-500">Per week fee</span>
                </div>
                <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl">
                  <span className="text-[11px] font-bold text-[#003366] uppercase">7% Full Service Pro</span>
                  <div className="text-xl font-black text-[#003366] mt-1">${weeklyGross ? Number(sevenPercentCost).toLocaleString() : 0}</div>
                  <span className="text-[10px] text-slate-500">All back-office included</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 bg-gradient-to-br from-slate-50 to-amber-50/40 border border-amber-200/80 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-700">
                <IconDollarSign className="w-4 h-4 text-amber-600" />
                <span>Estimated Net Value Added</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Avg +12% Rate Negotiation Lift:</span>
                  <span className="font-bold text-emerald-600">+${Number(estimatedGrossIncrease).toLocaleString()} /wk</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Less 7% Full Dispatch Service Fee:</span>
                  <span className="font-bold text-slate-700">-${Number(sevenPercentCost).toLocaleString()} /wk</span>
                </div>
                <div className="flex justify-between text-slate-900 font-extrabold pt-2 border-t border-amber-200 text-sm">
                  <span>Net Extra In Your Pocket:</span>
                  <span className="text-emerald-700 font-black">+${Number(netAddedProfit).toLocaleString()} /wk</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                Plus save 15-20 hours every week on phone negotiations, packet setups, credit checks, and detention chasing.
              </p>

              <button
                onClick={onOpenOnboard}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Start Partnering Today</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive 12-Point Comparison Table Section */}
      <section className="py-16 sm:py-20 container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
            DETAILED FEATURE COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Compare Our Service Plans Side-by-Side
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Transparent breakdown of back-office, billing, and dispatch capabilities.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-md">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-black">
                <th className="p-4 sm:p-5">Service / Feature</th>
                <th className="p-4 sm:p-5 text-center text-[#003366] bg-slate-50">5% Pay-As-You-Go</th>
                <th className="p-4 sm:p-5 text-center text-amber-700 bg-amber-50/50">
                  <div className="inline-block px-2 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-black uppercase rounded mb-1">Most Popular</div>
                  <div>7% Full Service Pro</div>
                </th>
                <th className="p-4 sm:p-5 text-center text-slate-900 bg-slate-50">Fleet Partner (4+ Trucks)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-4 font-semibold">Zero Forced Dispatch (Driver Approval)</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Dedicated 24/7 Personal Dispatcher</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Dedicated Fleet Team</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Top Rate per Mile Negotiations</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Priority Access</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Direct Shipper Contracts</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Broker Setup Packets & Insurance COIs</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Broker Credit Verification Checks</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Unlimited Priority</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Detention & TONU Enforcement ($50-$75/hr)</td>
                <td className="p-4 text-center text-slate-400">Standard Request</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Priority Collection</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Priority Collection</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Express Factoring Invoicing Submission</td>
                <td className="p-4 text-center text-slate-400">Self Upload</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Fully Managed</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Fully Managed</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Quarterly IFTA Mileage Prep Assistance</td>
                <td className="p-4 text-center text-slate-400">—</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Full Fleet Audit</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Continuous Backhaul Route Planning</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ Priority Lanes</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Dedicated Triangle Routes</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">24/7 Night & Weekend Check Calls Desk</td>
                <td className="p-4 text-center text-slate-400">Business Hours</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">✓ 24/7 On-Call</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ 24/7 Dedicated Ops</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Contract Term Lock-In</td>
                <td className="p-4 text-center text-emerald-600 font-bold">Month-to-Month</td>
                <td className="p-4 text-center text-emerald-600 font-bold bg-amber-50/20">Month-to-Month</td>
                <td className="p-4 text-center text-emerald-600 font-bold">Flexible Agreement</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Dedicated Account Executive</td>
                <td className="p-4 text-center text-slate-400">—</td>
                <td className="p-4 text-center text-slate-400 bg-amber-50/20">—</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Assigned Director</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-3xl">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Frequently Asked Questions</h3>
            <p className="text-slate-600 text-xs sm:text-sm">Click any question to view complete details about our dispatch services.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-900 hover:text-[#003366]"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transform transition-transform duration-200 flex-shrink-0 text-xs ${isOpen ? 'rotate-180 bg-amber-100 text-amber-900' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
