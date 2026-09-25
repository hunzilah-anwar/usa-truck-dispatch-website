import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import { IconAward, IconCheckCircle, IconShieldCheck, IconClock, IconTruck, IconArrowRight } from '../components/Icons';
import { COMPANY_DETAILS, LIVE_STATS } from '../data/dispatchData';

export default function AboutPage({ onOpenQuote, onOpenOnboard }) {
  return (
    <div className="about-page bg-white">
      {/* Page Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Established 2016 • Proudly American</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            About <span className="text-[#003366]">Truck Dispatcher USA</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Empowering independent owner operators and carrier fleets across the continental United States with top rates, paperwork automation, and zero forced dispatch.
          </p>
        </div>
      </div>

      {/* Origin Story Section */}
      <section className="py-16 sm:py-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Born from Passion for the Hardest Working Drivers in America
            </h2>
            <div className="w-16 h-1.5 bg-amber-400 rounded-full"></div>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {COMPANY_DETAILS.missionStatement}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded in 2016, Truck Dispatcher USA was started by transportation specialists who saw owner-operators sacrificing sleep and safety to navigate convoluted load boards, negotiate with ruthless freight brokers, and drown in rate confirmation paperwork.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminated the middleman headache. By providing each truck driver with a dedicated 24/7 personal dispatcher, verified broker credit checks, and same-day factoring coordination through Express Freight Finance, we transformed truck driving into a scalable, high-earning business.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenOnboard}
                className="px-6 py-3.5 bg-[#003366] hover:bg-[#002244] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center gap-2"
              >
                <span>Register As Carrier</span>
                <IconArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80"
                alt="Truck Dispatcher USA on the American Highway"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">HQ Greenville, South Carolina</span>
                  <h3 className="text-xl font-black text-white">Serving Carriers Across All 48 Continental States</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIVE_STATS.map((s, idx) => (
              <div key={idx} className="glass-card glass-shine bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-[#003366] mb-1">{s.value}</div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1">{s.label}</div>
                <div className="text-xs text-slate-500">{s.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Core Values Grid */}
      <section className="py-16 sm:py-20 container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">OUR FOUNDATIONAL PILLARS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">What Sets Us Apart in the Trucking Industry</h2>
          <p className="text-sm sm:text-base text-slate-600">Built by trucking veterans who understand the cost of every gallon of diesel and every layover minute.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black text-xl">
              🎯
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">0% Forced Dispatch</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You own your truck. We never coerce or penalize you for turning down loads that don't match your rate or destination requirements.
            </p>
          </div>

          <div className="glass-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black text-xl">
              📈
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">Maximum Rate Per Mile</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We benchmark daily DAT and Truckstop indexes to negotiate top dollar on headhauls and secure high-dollar backhauls before delivery.
            </p>
          </div>

          <div className="glass-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-black text-xl">
              ⚡
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">Same-Day Factoring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official partner with Express Freight Finance. Invoices, rate confirmations, and delivery receipts are coordinated for immediate ACH payment.
            </p>
          </div>

          <div className="glass-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-black text-xl">
              🛡️
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">Broker Credit Shield</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never book with high-risk or slow-paying freight brokers. Every broker credit rating and days-to-pay is rigorously audited.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#003366] block">COMPANY MILESTONES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">A Decade of Freight Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <span className="text-2xl font-black text-amber-500 block mb-1">2016</span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">Company Founded</h4>
              <p className="text-xs text-slate-600">Started in South Carolina with 5 dedicated owner-operators running regional Midwest lanes.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <span className="text-2xl font-black text-[#003366] block mb-1">2019</span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">Factoring Partnership</h4>
              <p className="text-xs text-slate-600">Established direct wire integration with Express Freight Finance for guaranteed cash flow.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <span className="text-2xl font-black text-emerald-600 block mb-1">2022</span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">500+ Active Fleets</h4>
              <p className="text-xs text-slate-600">Expanded dispatch desks to cover Dry Van, Reefer, Flatbed, Step Deck, and Box Trucks across 48 states.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <span className="text-2xl font-black text-blue-600 block mb-1">2026</span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">Real-Time Lane Network</h4>
              <p className="text-xs text-slate-600">Over 623,000 load opportunities evaluated daily with proprietary rate benchmarking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}


