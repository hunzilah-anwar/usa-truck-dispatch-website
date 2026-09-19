import React, { useState } from 'react';
import { IconCheckCircle, IconShieldCheck, IconUpload, IconFileText, IconPhone, IconWhatsApp, IconArrowRight } from '../components/Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    mcNumber: '',
    dotNumber: '',
    contactPerson: '',
    phone: '',
    email: '',
    equipment: 'Dry Van',
    truckCount: '1',
    maxWeight: '45,000 lbs',
    preferredLanes: '',
    homeWeekend: 'Yes',
    hasMCAuthority: true,
    hasW9: true,
    hasInsurance: true,
    hasCDL: true,
    agreedToTerms: true,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (currentStep === 1) {
      if (!formData.businessName || !formData.mcNumber || !formData.contactPerson || !formData.phone || !formData.email) {
        setErrorMsg('Please complete all required fields marked with * in Step 1');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.equipment) {
        setErrorMsg('Please select your primary equipment type');
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setErrorMsg('');
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      setErrorMsg('Please confirm agreement to our zero forced dispatch policy.');
      return;
    }
    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <div className="register-page bg-white">
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <IconShieldCheck className="w-3.5 h-3.5" />
            <span>Fast 24-Hour Carrier Setup</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Register As A <span className="text-[#003366]">Carrier</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Partner with Truck Dispatcher USA. Zero forced dispatch, no long-term contracts, and dedicated 24/7 personal dispatchers booking high-paying loads.
          </p>
        </div>
      </div>

      <div className="py-16 sm:py-20 container-custom max-w-3xl">
        {submitted ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <IconCheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Registration Successfully Received!
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactPerson || formData.businessName}</strong>. Your carrier profile has been assigned to a Senior Onboarding Specialist. We will contact you at <strong>{formData.phone}</strong> shortly.
            </p>

            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto space-y-1 text-left">
              <div className="font-bold text-slate-900">Next Step: Email Your Documents</div>
              <p>Please email your MC Authority, W-9, and Certificate of Insurance ($1M / $100k) to:</p>
              <div className="font-mono text-xs font-bold text-[#003366]">{COMPANY_DETAILS.email}</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Truck Dispatcher USA, I completed registration for ${formData.businessName}, MC# ${formData.mcNumber}. Contact: ${formData.contactPerson}, Phone: ${formData.phone}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Send Documents via WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className="px-6 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg text-xs uppercase tracking-wider"
              >
                Register Another Truck
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-12 shadow-md space-y-8">
            {/* Step Wizard Indicator */}
            <div className="grid grid-cols-3 gap-2 border-b border-slate-200 pb-6 text-center">
              <div
                className={`flex flex-col items-center gap-1.5 cursor-pointer ${
                  currentStep === 1 ? 'text-[#003366]' : currentStep > 1 ? 'text-emerald-600' : 'text-slate-400'
                }`}
                onClick={() => setCurrentStep(1)}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                    currentStep === 1
                      ? 'bg-[#003366] text-white shadow-md'
                      : currentStep > 1
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {currentStep > 1 ? '✓' : '1'}
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider hidden sm:block">
                  Carrier Info
                </span>
              </div>

              <div
                className={`flex flex-col items-center gap-1.5 cursor-pointer ${
                  currentStep === 2 ? 'text-[#003366]' : currentStep > 2 ? 'text-emerald-600' : 'text-slate-400'
                }`}
                onClick={() => currentStep > 2 && setCurrentStep(2)}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                    currentStep === 2
                      ? 'bg-[#003366] text-white shadow-md'
                      : currentStep > 2
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {currentStep > 2 ? '✓' : '2'}
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider hidden sm:block">
                  Equipment & Lanes
                </span>
              </div>

              <div
                className={`flex flex-col items-center gap-1.5 ${
                  currentStep === 3 ? 'text-[#003366]' : 'text-slate-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                    currentStep === 3
                      ? 'bg-[#003366] text-white shadow-md'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  3
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider hidden sm:block">
                  Documents & Finalize
                </span>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-bold">
                {errorMsg}
              </div>
            )}

            {/* STEP 1: Carrier & Contact Information */}
            {currentStep === 1 && (
              <form onSubmit={handleNextStep} className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Step 1: Motor Carrier & Authority Profile
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    FMCSA verified fields marked with <span className="text-red-500 font-bold">*</span> are required
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Legal Business / Carrier Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Freight Logistics LLC"
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      MC Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="mcNumber"
                      required
                      value={formData.mcNumber}
                      onChange={handleChange}
                      placeholder="MC #123456"
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      USDOT Number (Optional)
                    </label>
                    <input
                      type="text"
                      name="dotNumber"
                      value={formData.dotNumber}
                      onChange={handleChange}
                      placeholder="USDOT #987654"
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Number of Active Trucks
                    </label>
                    <select
                      name="truckCount"
                      value={formData.truckCount}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none font-semibold"
                    >
                      <option value="1">1 Truck (Owner Operator)</option>
                      <option value="2-3">2 - 3 Trucks (Small Fleet)</option>
                      <option value="4-9">4 - 9 Trucks (Growing Fleet)</option>
                      <option value="10+">10+ Trucks (Enterprise Partner)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Primary Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Marcus Sterling"
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(323) 000-0000"
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="carrier@gmail.com"
                    className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue to Step 2: Equipment & Lanes</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* STEP 2: Equipment & Operating Lanes */}
            {currentStep === 2 && (
              <form onSubmit={handleNextStep} className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Step 2: Equipment Capacity & Preferred Lanes
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Tell us where you want your trucks rolling and what equipment you operate
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Trailer / Equipment Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none font-semibold"
                    >
                      <option value="Dry Van">53' Dry Van</option>
                      <option value="Reefer">53' Reefer (Temperature Controlled)</option>
                      <option value="Flatbed">48'/53' Flatbed</option>
                      <option value="Step Deck">Step Deck / Single Drop</option>
                      <option value="Power Only">Power Only</option>
                      <option value="Box Truck">26' Box Truck</option>
                      <option value="Hotshot">Hotshot (40' Gooseneck)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Max Cargo Weight Scale
                    </label>
                    <select
                      name="maxWeight"
                      value={formData.maxWeight}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none font-semibold"
                    >
                      <option value="45,000 lbs">Up to 45,000 lbs (Standard 53')</option>
                      <option value="48,000 lbs">Up to 48,000 lbs (Heavy Haul / Flatbed)</option>
                      <option value="26,000 lbs">Under 26,000 lbs (Non-CDL Box Truck)</option>
                      <option value="16,500 lbs">Up to 16,500 lbs (Hotshot)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Preferred Running Lanes & Desired Regions
                  </label>
                  <input
                    type="text"
                    name="preferredLanes"
                    value={formData.preferredLanes}
                    onChange={handleChange}
                    placeholder="e.g. Midwest to Southeast, Texas Triangle, East Coast OTR..."
                    className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Home Time Preference
                  </label>
                  <select
                    name="homeWeekend"
                    value={formData.homeWeekend}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none font-semibold"
                  >
                    <option value="Yes">Home Every Weekend (Regional Routing)</option>
                    <option value="2-Weeks">Home Every 2 Weeks (Maximum Gross Earnings)</option>
                    <option value="Flexible">Flexible / OTR Dedicated</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Special Equipment Notes (e.g. Liftgate, Pallet Jack, Pipe Stakes)
                  </label>
                  <textarea
                    name="notes"
                    rows="2"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Have 2 straps, 4 chains, e-track bars installed..."
                    className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#003366] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-1/3 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Continue to Step 3: Documents</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Documents & Agreement */}
            {currentStep === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Step 3: Document Readiness & Final Agreement
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Confirm your required documents and finalize your carrier profile
                  </p>
                </div>

                {/* Checklist checkboxes */}
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3">
                  <span className="block text-xs font-black uppercase tracking-wider text-slate-800">
                    Confirm Available Documents (Will email/WhatsApp after submit):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    <label className="flex items-center gap-2 cursor-pointer font-semibold">
                      <input
                        type="checkbox"
                        name="hasMCAuthority"
                        checked={formData.hasMCAuthority}
                        onChange={handleChange}
                        className="accent-amber-500 rounded w-4 h-4"
                      />
                      <span>Active MC Authority Certificate</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-semibold">
                      <input
                        type="checkbox"
                        name="hasW9"
                        checked={formData.hasW9}
                        onChange={handleChange}
                        className="accent-amber-500 rounded w-4 h-4"
                      />
                      <span>Signed IRS W-9 Form</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-semibold">
                      <input
                        type="checkbox"
                        name="hasInsurance"
                        checked={formData.hasInsurance}
                        onChange={handleChange}
                        className="accent-amber-500 rounded w-4 h-4"
                      />
                      <span>$1M Auto Liability & $100k Cargo COI</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-semibold">
                      <input
                        type="checkbox"
                        name="hasCDL"
                        checked={formData.hasCDL}
                        onChange={handleChange}
                        className="accent-amber-500 rounded w-4 h-4"
                      />
                      <span>Driver Commercial License (CDL)</span>
                    </label>
                  </div>
                </div>

                {/* Agreement checkbox */}
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-950 space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer font-bold">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      className="accent-amber-600 rounded mt-0.5 w-4 h-4 flex-shrink-0"
                    />
                    <span>
                      I acknowledge and understand that Truck Dispatcher USA operates on a 100% Zero Forced Dispatch policy with NO upfront onboarding or setup fees.
                    </span>
                  </label>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-1/3 py-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-lg transition-all"
                  >
                    Complete Carrier Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
