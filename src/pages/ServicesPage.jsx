import React from 'react';
import WhatDoYouShipSection from '../components/WhatDoYouShipSection';
import CoreCapabilitiesSection from '../components/CoreCapabilitiesSection';
import { IconCheckCircle, IconTruck, IconShieldCheck, IconDollarSign, IconClock, IconFileText, IconArrowRight } from '../components/Icons';

export default function ServicesPage({ onOpenQuote, onOpenLoadRequest, onOpenOnboard }) {
  return (
    <div className="services-page bg-white">
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Comprehensive Freight Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Our <span className="text-[#003366]">Services</span> & Coverage
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Full-service freight dispatch, aggressive rate negotiation, and complete administrative back-office management for owner operators and carrier fleets.
          </p>
        </div>
      </div>

      {/* Equipment Showcase */}
      <WhatDoYouShipSection
        onOpenLoadRequest={onOpenLoadRequest}
        onOpenQuote={onOpenQuote}
      />

      {/* Core Capabilities */}
      <CoreCapabilitiesSection />

      {/* 6-Step End-to-End Dispatch Lifecycle Workflow */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              The 6-Step End-to-End Freight Dispatch Lifecycle
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From broker negotiation to verified same-day deposit, here is how our dispatch team protects your time and income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Market Scan & Rate Negotiation',
                desc: 'We analyze DAT One, Truckstop Pro, and direct shipper freight corridors to negotiate top $/mile above national averages.'
              },
              {
                step: '02',
                title: 'Broker Verification & Carrier Approval',
                desc: 'We verify broker credit scores and days-to-pay. You give the final green light—zero forced dispatch.'
              },
              {
                step: '03',
                title: 'Packet Setup & COI Dispatch',
                desc: 'We fill out broker setup packets and instruct your insurance producer to issue COIs with zero delay.'
              },
              {
                step: '04',
                title: 'Gate Appointments & In-Transit Tracking',
                desc: 'Our dispatch desk schedules pick-up and receiver dock appointments and handles check calls while you drive safely.'
              },
              {
                step: '05',
                title: 'Detention & Layover Enforcement',
                desc: 'If a dock detains you beyond 2 free hours, we immediately document timestamps and invoice $50-$75/hr detention.'
              },
              {
                step: '06',
                title: 'BOL Invoicing & 24h Payout',
                desc: 'Send us a clean photo of your signed BOL. We package the invoice to Express Freight Finance for same-day funding.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#003366] text-amber-400 font-black text-sm flex items-center justify-center shadow">
                  {item.step}
                </div>
                <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Office Automation Section */}
      <section className="py-16 sm:py-20 container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
            ADMINISTRATIVE FREEDOM
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            We Handle 100% of the Paperwork So You Stay Focused on Rolling
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every minute you spend filling out PDFs and arguing with brokers over detention is lost driving revenue. Here is everything we manage for you:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
              <IconFileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Broker Setup Packets</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We complete all carrier broker agreement packets, send your W-9, and provide Certificate of Insurance rapidly so you get approved in minutes.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
              <IconShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Credit Score Risk Checks</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We vet brokers across multiple national credit databases before you commit your truck, verifying days-to-pay and credit limit availability.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
              <IconDollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Detention & TONU Collection</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Shipper held you at the dock for 4 hours? We aggressively enforce detention pay ($50-$75/hr) and TONU cancellation fees on your behalf.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
              <IconClock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">24/7 Night & Weekend Desk</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Freight doesn't stop at 5:00 PM. Our dedicated night coordinators handle receiver check calls, gate appointments, and roadside rescheduling.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
              <IconTruck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Continuous Backhauls</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never leave you stranded in dead zones. Your dispatcher plans your next reload before you even reach your drop-off delivery.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
              <IconCheckCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Factoring Invoicing</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We submit signed BOLs and rate confirmations directly to your factoring company or broker quick-pay department for same-day deposit.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-[#003366] text-white text-center space-y-4">
          <h3 className="text-2xl font-black">Ready to Let Us Handle Your Truck Paperwork?</h3>
          <p className="text-slate-200 text-sm max-w-xl mx-auto">
            Get assigned your dedicated personal dispatcher today with 0% forced dispatch and no long-term contracts.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenOnboard}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-lg shadow transition-all"
            >
              Get Started Now
            </button>
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-white text-[#003366] hover:bg-slate-100 font-extrabold uppercase tracking-wider text-xs rounded-lg shadow transition-all"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
