import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RequirementsAccordion from '../components/RequirementsAccordion';
import { IconFileText, IconShieldCheck, IconCheckCircle, IconMail, IconArrowRight, IconUpload, IconWhatsApp, IconPhone } from '../components/Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function RequirementsPage({ onOpenOnboard }) {
  const [checkedDocs, setCheckedDocs] = useState({
    mcAuthority: true,
    w9: true,
    insurance: true,
    certHolder: false,
    cdl: true
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  const toggleDoc = (key) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const totalCount = 5;
  const completedCount = Object.values(checkedDocs).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const handleSimulatedDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    // Add dummy or dragged file
    setUploadedFiles((prev) => [
      ...prev,
      `Carrier_Document_Packet_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`
    ]);
  };

  return (
    <div className="requirements-page bg-white">
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <IconFileText className="w-3.5 h-3.5 text-amber-600" />
            <span>Carrier Compliance & Onboarding Checklist</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase">
            WHAT DOES TRUCKS DISPATCH SERVICES NEED FROM ME TO GET STARTED?
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Fast, transparent, and compliant onboarding. Have these 5 standard carrier documents ready and start booking high-paying loads today.
          </p>
        </div>
      </div>

      {/* Interactive Document Readiness Checker */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container-custom max-w-4xl">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
                  INTERACTIVE READINESS CHECK
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Carrier Document Readiness Score
                </h2>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-[#003366]">
                  {progressPercent}% Ready
                </div>
                <span className="text-xs text-slate-500 font-semibold">
                  {completedCount} of {totalCount} Requirements Met
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  progressPercent === 100
                    ? 'bg-emerald-500'
                    : progressPercent >= 60
                    ? 'bg-amber-400'
                    : 'bg-blue-500'
                }`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            {/* Document Checkbox Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {[
                { key: 'mcAuthority', title: '1. Active MC Authority Certificate (DOT/FMCSA)', desc: 'Validates legal operating rights for hire' },
                { key: 'w9', title: '2. Signed & Dated IRS W-9 Form (Current Year)', desc: 'Required for quick pay & 1099 disbursements' },
                { key: 'insurance', title: '3. Certificate of Insurance ($1M Auto / $100k Cargo)', desc: 'Universal commercial shipper requirement' },
                { key: 'certHolder', title: '4. Truck Dispatcher USA Listed as Certificate Holder', desc: 'Enables instant broker rate packet dispatch' },
                { key: 'cdl', title: '5. Copy of Commercial Driver\'s License (CDL)', desc: 'Front and back copy for gate check-ins' }
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleDoc(item.key)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                    checkedDocs[item.key]
                      ? 'bg-emerald-50/60 border-emerald-300'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checkedDocs[item.key]}
                    onChange={() => {}}
                    className="accent-emerald-600 mt-1 cursor-pointer w-4 h-4"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Status Alert & Action */}
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
              progressPercent === 100
                ? 'bg-emerald-100/70 border-emerald-300 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}>
              <div className="flex items-center gap-3">
                <IconCheckCircle className={`w-5 h-5 flex-shrink-0 ${progressPercent === 100 ? 'text-emerald-700' : 'text-amber-600'}`} />
                <span className="text-xs sm:text-sm font-extrabold">
                  {progressPercent === 100
                    ? '🎉 You have all 5 documents ready! You can be dispatched on top loads within 2 hours.'
                    : `You have ${completedCount} ready. Have all 5 ready for instant approval.`}
                </span>
              </div>
              <Link
                to="/register"
                className="px-6 py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow whitespace-nowrap"
              >
                Register Carrier Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Component */}
      <RequirementsAccordion onOpenOnboard={onOpenOnboard} />

      {/* Deep Dive Breakdown Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-4xl space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Why Brokers Require These 5 Essential Documents
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Understanding carrier compliance speeds up your broker approvals from days to minutes.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base sm:text-lg font-black text-[#003366] flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-100 text-[#003366] text-xs font-black flex items-center justify-center">1</span>
                <span>Active Operating Authority (MC Permit)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                Your MC permit issued by the FMCSA validates that your trucking company is legally authorized to haul property for hire in interstate commerce. We support established motor carriers as well as new authorities with clean safety records.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base sm:text-lg font-black text-[#003366] flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-100 text-[#003366] text-xs font-black flex items-center justify-center">2</span>
                <span>Signed & Dated IRS W-9 Form</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                Brokers and factoring companies need your signed W-9 with your Federal Employer Identification Number (EIN) or SSN to generate 1099 tax forms and issue wire payments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base sm:text-lg font-black text-[#003366] flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-100 text-[#003366] text-xs font-black flex items-center justify-center">3</span>
                <span>$1,000,000 Auto-Liability & $100,000 Cargo Insurance</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                This is the universal commercial standard across 99% of freight brokers. It ensures that both your vehicle on the highway and the high-value cargo inside the trailer are fully protected against losses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base sm:text-lg font-black text-[#003366] flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-100 text-[#003366] text-xs font-black flex items-center justify-center">4</span>
                <span>Certificate of Insurance (Certificate Holder)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                Listing Truck Dispatcher USA as a Certificate Holder allows your insurance producer to automatically send updated COIs directly to brokers when booking new high-paying lanes without delays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base sm:text-lg font-black text-[#003366] flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-100 text-[#003366] text-xs font-black flex items-center justify-center">5</span>
                <span>Driver Commercial Driver's License (CDL)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                Clear front and back copies of the active CDL for every dispatched driver ensures shipper security gates and facility check-ins are approved smoothly.
              </p>
            </div>
          </div>

          {/* Quick Document Upload / Submission Box */}
          <div className="bg-white border-2 border-dashed border-slate-300 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#003366] flex items-center justify-center mx-auto">
              <IconUpload className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Submit Your Carrier Packet In 1 Click
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Don't want to type through forms? Simply email or WhatsApp your 5 files (PDF or photo) directly to our dispatch compliance desk:
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={`mailto:${COMPANY_DETAILS.email}?subject=New Carrier Onboarding Documents Packet&body=Hello Truck Dispatcher USA,%0D%0A%0D%0APlease find attached our carrier documents:%0D%0A- MC Authority Permit%0D%0A- W9%0D%0A- Certificate of Insurance ($1M / $100k)%0D%0A- CDL Copy%0D%0A%0D%0ACompany Name:%0D%0AMC Number:%0D%0APhone Number:`}
                className="px-6 py-3.5 bg-[#003366] hover:bg-[#002244] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow flex items-center gap-2"
              >
                <IconMail className="w-4 h-4" />
                <span>Email Documents to {COMPANY_DETAILS.email}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Truck Dispatcher USA, I am ready to submit our 5 carrier onboarding documents for immediate dispatch setup.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow flex items-center gap-2"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Send Files via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Action Box */}
          <div className="glass-panel bg-gradient-to-r from-blue-50 via-white to-amber-50 border border-blue-200 p-8 rounded-3xl text-center space-y-4 shadow-sm text-slate-900">
            <h3 className="text-2xl font-black text-slate-900">Ready to Register Your Truck?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Fill out our fast carrier onboarding form online or email your 5 documents directly to our carrier desk at <strong>{COMPANY_DETAILS.email}</strong>.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                to="/register"
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow transition-all"
              >
                Register Carrier Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
