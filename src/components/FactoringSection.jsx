import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/dispatchData';
import { IconDollarSign, IconCheckCircle, IconShieldCheck, IconMail, IconArrowRight, IconTruck } from './Icons';

export default function FactoringSection({ onOpenQuote }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.factoringEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="factoring" className="py-16 sm:py-20 bg-slate-50 text-slate-900 relative border-y border-slate-200">
      <div className="container-custom">
        <div className="glass-panel bg-gradient-to-br from-white via-blue-50/40 to-emerald-50/30 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <IconDollarSign className="w-3.5 h-3.5 text-emerald-700" />
                <span>Express Freight Finance Partnership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Apply For <span className="text-[#003366]">Factoring</span> & Never Wait 30 Days For Cash
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Our funding program helps ensure that motor carriers will have the continuous cash flow they need to keep their trucks rolling. Get funded within 24 hours of load delivery.
              </p>

              {/* Factoring Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                  <IconCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Same-Day ACH / Wire Funding</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                  <IconCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Free Unlimited Broker Credit Checks</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                  <IconCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Fuel Card Advances with Deep Discounts</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                  <IconCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Non-Recourse Factoring Protection</span>
                </div>
              </div>

              {/* Application Triggers & Direct Contact */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${COMPANY_DETAILS.factoringEmail}?subject=Factoring Application Inquiry - Truck Dispatcher USA&body=Hello Express Freight Finance,%0D%0A%0D%0AI would like to apply for freight factoring through Truck Dispatcher USA.%0D%0A%0D%0AMy MC/DOT Number:%0D%0ACompany Name:%0D%0APhone Number:%0D%0ANumber of Trucks:`}
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-sm rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <IconDollarSign className="w-4 h-4" />
                  <span>Apply For Factoring Now</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 flex items-center gap-2 transition-all shadow-sm"
                  title="Click to copy factoring email"
                >
                  <IconMail className="w-4 h-4 text-amber-500" />
                  <span>{copied ? 'Copied to Clipboard!' : COMPANY_DETAILS.factoringEmail}</span>
                </button>
              </div>
            </div>

            {/* Right Card: Factoring Breakdown Card (From screenshot) */}
            <div className="lg:col-span-5 glass-card bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <IconShieldCheck className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Express Freight Finance</h3>
                <p className="text-xs text-slate-500 mt-1">Official Freight Factoring Partner</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Advance Rate:</span>
                  <span className="font-bold text-emerald-700">Up to 98% Same Day</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Factoring Fee:</span>
                  <span className="font-bold text-slate-900">Competitive Low Rates</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Setup Time:</span>
                  <span className="font-bold text-[#003366]">24-48 Hours</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Paperwork Handling:</span>
                  <span className="font-bold text-slate-900">Uploaded by Your Dispatcher</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                We handle the rate confirmations, BOL uploads, and broker invoicing directly to your factoring company so you get paid the moment the wheels stop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
