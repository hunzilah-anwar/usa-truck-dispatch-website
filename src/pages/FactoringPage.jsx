import React, { useState } from 'react';
import FactoringSection from '../components/FactoringSection';
import { IconDollarSign, IconCheckCircle, IconShieldCheck, IconClock, IconMail, IconArrowRight } from '../components/Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function FactoringPage({ onOpenQuote }) {
  const [copied, setCopied] = useState(false);
  const [invoiceAmount, setInvoiceAmount] = useState(12500);
  const [factorFeePercent, setFactorFeePercent] = useState(2.0);
  const [advanceRatePercent, setAdvanceRatePercent] = useState(97);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.factoringEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Calculations
  const immediateAdvance = (invoiceAmount * (advanceRatePercent / 100)).toFixed(0);
  const factoringFee = (invoiceAmount * (factorFeePercent / 100)).toFixed(0);
  const reserveAmount = (invoiceAmount - immediateAdvance).toFixed(0);

  return (
    <div className="factoring-page bg-white">
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <IconDollarSign className="w-3.5 h-3.5 text-emerald-700" />
            <span>Express Freight Finance Official Partner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Apply For <span className="text-[#003366]">Freight Factoring</span> & Same-Day Cash Flow
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Our funding program helps ensure motor carriers have uninterrupted cash flow to cover diesel, insurance, and payroll. Get paid within 24 hours of delivery.
          </p>
        </div>
      </div>

      {/* Main Factoring Section Component */}
      <FactoringSection onOpenQuote={onOpenQuote} />

      {/* Interactive Invoice Cash Advance Calculator */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700 block">
              INSTANT LIQUIDITY ESTIMATOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Calculate Your Same-Day Factoring Payout
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Slide to see how much immediate cash is deposited in your account within 24 hours instead of waiting 30-45 days on broker terms.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Gross Completed Invoice Amount
                  </label>
                  <span className="text-lg font-black text-[#003366]">
                    ${Number(invoiceAmount).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="50000"
                  step="500"
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                  <span>$2,000 (1 Load)</span>
                  <span>$25,000 (Small Fleet)</span>
                  <span>$50,000 (Multi-Truck)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Advance Rate Percentage
                  </label>
                  <span className="text-base font-black text-emerald-600">
                    {advanceRatePercent}% Same Day
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[95, 97, 98].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setAdvanceRatePercent(rate)}
                      className={`py-2 text-xs font-extrabold rounded-lg border transition-all ${
                        advanceRatePercent === rate
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {rate}% Advance
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Factoring Fee Tier
                  </label>
                  <span className="text-base font-black text-slate-900">
                    {factorFeePercent}%
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1.5, 2.0, 2.5].map((fee) => (
                    <button
                      key={fee}
                      type="button"
                      onClick={() => setFactorFeePercent(fee)}
                      className={`py-2 text-xs font-extrabold rounded-lg border transition-all ${
                        factorFeePercent === fee
                          ? 'bg-[#003366] text-white border-[#003366] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {fee}% Fee
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Payout Display Breakdown */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="text-center pb-4 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Same-Day Bank Deposit (24h)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-600 mt-1">
                  ${Number(immediateAdvance).toLocaleString()}
                </div>
                <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mt-2">
                  Immediate Liquidity for Fuel & Maintenance
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Gross Freight Invoiced:</span>
                  <span className="font-bold text-slate-900">${Number(invoiceAmount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Immediate Cash Advance ({advanceRatePercent}%):</span>
                  <span className="font-bold text-emerald-600">+${Number(immediateAdvance).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Factoring Fee ({factorFeePercent}%):</span>
                  <span className="font-bold text-slate-700">-${Number(factoringFee).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium pt-2 border-t border-slate-200">
                  <span>Reserve Remaining (paid when broker clears):</span>
                  <span className="font-bold text-slate-900">${Number(reserveAmount).toLocaleString()}</span>
                </div>
              </div>

              <a
                href={`mailto:${COMPANY_DETAILS.factoringEmail}?subject=Factoring Application - Advance Calculation for $${invoiceAmount}&body=Hello Express Freight Finance,%0D%0A%0D%0AI would like to apply for freight factoring on monthly volume around $${invoiceAmount}.%0D%0A%0D%0APlease send the carrier onboarding packet.%0D%0A%0D%0ACompany Name:%0D%0AMC Number:%0D%0APhone:`}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <IconDollarSign className="w-4 h-4" />
                <span>Lock In This Advance Rate</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Factoring Works 4 Steps */}
      <section className="py-16 sm:py-20 container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            From Delivery to Direct Deposit in 4 Simple Steps
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Never stress about broker 30 to 45 day payment cycles again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 relative hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#003366] text-white font-black text-sm flex items-center justify-center shadow">
              1
            </div>
            <h3 className="text-base font-black text-slate-900">Book High-Paying Load</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your dedicated dispatcher verifies broker creditworthiness and books top $/mile freight you approve.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 relative hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#003366] text-white font-black text-sm flex items-center justify-center shadow">
              2
            </div>
            <h3 className="text-base font-black text-slate-900">Deliver Cargo</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete the shipment on time and obtain a signed Bill of Lading (BOL) or electronic proof of delivery.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 relative hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#003366] text-white font-black text-sm flex items-center justify-center shadow">
              3
            </div>
            <h3 className="text-base font-black text-slate-900">We Submit Paperwork</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your dispatcher packages the rate confirmation, signed BOL, and invoice directly to Express Freight Finance.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 relative hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow">
              4
            </div>
            <h3 className="text-base font-black text-slate-900">Get Paid Same Day</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Funds are deposited via ACH or wire directly into your bank account or fuel card within 24 hours.
            </p>
          </div>
        </div>

        {/* Comparison: Non-Recourse vs Recourse Factoring */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-emerald-300 rounded-3xl p-8 space-y-4 shadow-sm">
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-black uppercase rounded-full">
              Recommended for Carriers
            </div>
            <h3 className="text-xl font-black text-slate-900">Non-Recourse Factoring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The factoring company assumes 100% of the credit risk. If the shipper or freight broker goes bankrupt or defaults on payment after delivery, <strong>you do not have to repay the advance</strong>.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-semibold">
              <li className="flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Zero financial liability if broker defaults</span>
              </li>
              <li className="flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Full credit analysis on every broker prior to loading</span>
              </li>
              <li className="flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Protects cash reserves from bad debt</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm">
            <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-black uppercase rounded-full">
              Standard Recourse
            </div>
            <h3 className="text-xl font-black text-slate-900">Recourse Factoring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Carriers receive slightly lower upfront factor rates, but remain financially responsible if a broker fails to pay an invoice within 60-90 days.
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-slate-400">•</span>
                <span>Marginally lower factoring percentage fee</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400">•</span>
                <span>Carrier must repurchase unpaid invoices</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400">•</span>
                <span>Best suited for established fleets with direct shipper contracts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Direct Email Referral Box matching screenshot */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 via-slate-50 to-amber-50 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Official Factoring Inquiries & Direct Submissions
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Email your carrier information and factoring requests directly to our dedicated finance team:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href={`mailto:${COMPANY_DETAILS.factoringEmail}`}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-2"
            >
              <IconMail className="w-4 h-4" />
              <span>Email: {COMPANY_DETAILS.factoringEmail}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl transition-all"
            >
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
