import React, { useState } from 'react';
import { DISPATCH_COURSE_DATA, COMPANY_DETAILS } from '../data/dispatchData';
import { 
  IconCheck, 
  IconCheckCircle, 
  IconShieldCheck, 
  IconArrowRight, 
  IconPhone, 
  IconMail, 
  IconWhatsApp, 
  IconClock, 
  IconFileText 
} from '../components/Icons';

export default function DispatchCoursePage() {
  const [activeModule, setActiveModule] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: 'Complete Beginner',
    preferredTiming: 'Evening Batch (Online Live)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }
    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <div className="dispatch-course-page bg-white">
      {/* Header Banner — with background image */}
      <div className="relative bg-[#003366] text-white py-24 overflow-hidden">
        <img
          src="/images/dispatcher.jpg"
          alt="Dispatch Training"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container-custom relative z-10 text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>{DISPATCH_COURSE_DATA.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Professional <span className="text-amber-400">Truck Dispatcher</span> Masterclass
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Learn how to find top-dollar loads, negotiate like a veteran, manage carrier paperwork, and build a profitable independent dispatch business from home.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#enroll-form"
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Enroll In Next Batch</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                "Hello Truck Dispatcher USA, I want to learn more about the Dispatcher Training Course schedule and syllabus."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-400" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>


      {/* Stats Counter Strip */}
      <div className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {DISPATCH_COURSE_DATA.stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-[#003366]">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who Is This Course For? */}
      <section className="py-16 sm:py-20 container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
            TARGET AUDIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Who This Dispatch Academy Is Designed For
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            No prior logistics experience required. We guide you from basic freight terminology to live real-world broker call execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DISPATCH_COURSE_DATA.targetAudience.map((aud, idx) => (
            <div 
              key={idx}
              className="glass-card bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-amber-400 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003366] font-black text-lg flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">{aud.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{aud.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive 8-Module Syllabus */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom max-w-5xl">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#003366] block">
              DETAILED SYLLABUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              8 Step-by-Step Training Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Each module includes live video walkthroughs, interactive homework assignments, real document analysis, and actionable negotiation drills.
            </p>
          </div>

          <div className="space-y-4">
            {DISPATCH_COURSE_DATA.modules.map((mod, idx) => {
              const isOpen = activeModule === idx;
              return (
                <div 
                  key={mod.number}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setActiveModule(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="w-9 h-9 rounded-xl bg-[#003366] text-amber-400 font-black text-xs sm:text-sm flex items-center justify-center shrink-0">
                        {mod.number}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900">{mod.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{mod.summary}</p>
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-3 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {mod.summary}
                      </p>
                      <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-900 block">Topics Covered:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mod.topics.map((top, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{top}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables & Materials Included */}
      <section className="py-16 sm:py-20 container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
            COURSE ASSETS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            What You Receive Upon Enrollment
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Get lifetime access to our operational templates, rate calculators, and legal documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISPATCH_COURSE_DATA.deliverables.map((del, idx) => (
            <div 
              key={idx}
              className="glass-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:border-amber-400 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg">
                📁
              </div>
              <h3 className="font-extrabold text-base text-slate-900">{del.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{del.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section id="enroll-form" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="container-custom max-w-3xl">
          <div className="glass-card bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="text-center space-y-2 border-b border-slate-100 pb-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#003366] block">
                RESERVE YOUR SEAT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Enroll in the Next Training Batch
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the quick form below. Our training coordinator will contact you with batch schedules, fee structure, and enrollment confirmation.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <IconCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Enrollment Application Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. A course coordinator will reach out to you at <strong>{formData.phone}</strong> and email the syllabus packet to <strong>{formData.email}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Truck Dispatcher USA, I have submitted my enrollment form for the Dispatch Course. My name is ${formData.fullName} (${formData.phone}). Please share the batch start date.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    <span>Confirm Instantly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 font-medium">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (WhatsApp Preferred) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                    >
                      <option value="Complete Beginner">Complete Beginner (No Experience)</option>
                      <option value="Truck Driver / CDL Holder">Truck Driver / CDL Holder</option>
                      <option value="Freight Broker / Agent">Freight Broker / Agent</option>
                      <option value="Fleet Owner">Fleet Owner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Batch Schedule
                    </label>
                    <select
                      name="preferredTiming"
                      value={formData.preferredTiming}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                    >
                      <option value="Evening Batch (Online Live)">Evening Batch (Online Live)</option>
                      <option value="Weekend Intensive">Weekend Intensive</option>
                      <option value="Self-Paced Recorded">Self-Paced with Mentor Sessions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Questions or Specific Goals
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you want to achieve or any questions you have about the curriculum..."
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Course Application</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
