import React, { useState } from 'react';
import ContactSection from '../components/ContactSection';
import { IconMapPin, IconPhone, IconMail, IconClock, IconWhatsApp, IconShieldCheck, IconCheckCircle } from '../components/Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('hq');

  return (
    <div className="contact-page bg-white">
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>24/7/365 Live Dispatch Operations • Desk Online</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Contact <span className="text-[#003366]">Truck Dispatcher USA</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            We are available around the clock to support owner operators, fleets, shippers, and freight brokers. Reach our national dispatch desks via hotline, email, or WhatsApp.
          </p>
        </div>
      </div>

      {/* Dual Regional Hubs Overview */}
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* National HQ Greenville SC */}
            <div className="bg-white border-2 border-slate-200 hover:border-[#003366] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#003366] flex items-center justify-center font-bold">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 bg-blue-100 text-[#003366] text-[10px] font-black uppercase tracking-wider rounded-full">
                  National HQ
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900">Greenville Dispatch Center</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Central headquarters coordinating Midwest, Southeast, Texas, and East Coast long-haul logistics and compliance.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 font-semibold pt-2 border-t border-slate-100">
                <p>📍 {COMPANY_DETAILS.address}, {COMPANY_DETAILS.zipCode}</p>
                <p>📞 Phone: {COMPANY_DETAILS.phone}</p>
                <p>✉️ Email: {COMPANY_DETAILS.email}</p>
                <p className="text-emerald-700 font-bold">🟢 Live Desk: 24/7/365 On-Call</p>
              </div>
            </div>

            {/* West Coast Regional Hub */}
            <div className="bg-white border-2 border-slate-200 hover:border-amber-400 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider rounded-full">
                  West Coast Operations
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900">Los Angeles Logistics Desk</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated regional unit managing California ports, Arizona, Nevada, Pacific Northwest lanes, and cross-country reefers.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700 font-semibold pt-2 border-t border-slate-100">
                <p>📍 601 S Figueroa St, Los Angeles, CA 90017</p>
                <p>📞 Dispatch Hotline: {COMPANY_DETAILS.phone}</p>
                <p>✉️ West Desk: sales247truckdispatch@gmail.com</p>
                <p className="text-emerald-700 font-bold">🟢 Port & Reefer Unit: 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section (Form + Direct Details) */}
      <ContactSection />

      {/* Interactive Map & Direct Actions */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md text-center space-y-6">
            <div className="w-14 h-14 bg-blue-50 text-[#003366] rounded-2xl flex items-center justify-center mx-auto">
              <IconMapPin className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              National Dispatch Headquarters
            </h2>

            <p className="text-slate-700 font-semibold text-base">
              {COMPANY_DETAILS.address}, zip code {COMPANY_DETAILS.zipCode}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Our centralized dispatch desk coordinates long-haul OTR, regional, and specialized freight across all 48 continental states.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="px-6 py-3.5 bg-[#003366] hover:bg-[#002244] text-white font-extrabold uppercase tracking-wider text-xs rounded-xl shadow flex items-center gap-2 transition-all"
              >
                <IconPhone className="w-4 h-4 text-amber-400" />
                <span>Call Hotline: {COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold uppercase tracking-wider text-xs rounded-xl shadow flex items-center gap-2 transition-all"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Live Chat on WhatsApp</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${COMPANY_DETAILS.address}, ${COMPANY_DETAILS.city}, ${COMPANY_DETAILS.state} ${COMPANY_DETAILS.zipCode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold uppercase tracking-wider text-xs rounded-xl border border-slate-300 flex items-center gap-2 transition-all"
              >
                <IconMapPin className="w-4 h-4 text-[#003366]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
