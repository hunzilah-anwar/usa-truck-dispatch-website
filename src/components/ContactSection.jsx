import React, { useState } from 'react';
import { IconPhone, IconMail, IconMapPin, IconClock, IconSend, IconCheckCircle } from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.comments.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Information (from screenshots media_1789804927716.jpg and media_1789804927806.jpg) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-3 shadow-sm">
                <IconClock className="w-3.5 h-3.5 text-amber-600" />
                <span>24/7 Dedicated Support</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                CONTACT <span className="text-[#003366]">US</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                {COMPANY_DETAILS.missionStatement}
              </p>
            </div>

            {/* Direct Cards with Glassmorphism */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="glass-card bg-white flex items-start gap-4 p-4 rounded-2xl border border-slate-200 hover:border-amber-400 transition-all group shadow-sm"
              >
                <div className="p-3 bg-blue-50 text-[#003366] rounded-xl group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Call Us 24/7</span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#003366] transition-colors">
                    {COMPANY_DETAILS.phone}
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="glass-card bg-white flex items-start gap-4 p-4 rounded-2xl border border-slate-200 hover:border-amber-400 transition-all group shadow-sm"
              >
                <div className="p-3 bg-blue-50 text-[#003366] rounded-xl group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <IconMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Email Dispatch</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#003366] transition-colors break-all">
                    {COMPANY_DETAILS.email}
                  </span>
                </div>
              </a>

              {/* Address Card */}
              <div className="glass-card bg-white flex items-start gap-4 p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-3 bg-blue-50 text-[#003366] rounded-xl flex-shrink-0">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Office Headquarters</span>
                  <span className="text-sm font-bold text-slate-900 block">
                    {COMPANY_DETAILS.address}, zip code {COMPANY_DETAILS.zipCode}
                  </span>
                  <span className="text-xs text-amber-700 font-medium mt-1 block">
                    {COMPANY_DETAILS.hours}
                  </span>
                </div>
              </div>
            </div>

            {/* Note text matching screenshot */}
            <div className="p-4 rounded-xl glass-card bg-amber-50/70 border border-amber-200 text-xs text-amber-900 italic font-medium leading-relaxed">
              "We are available 24 hours a day, 7 days a week to support and assist those who request our services."
            </div>
          </div>

          {/* Right Column: Contact Form (Exact from screenshot media_1789804933397.jpg) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h3 className="text-2xl font-black text-slate-900">Contact</h3>
              <p className="text-xs text-slate-500 mt-1">Fields marked with an <span className="text-red-500 font-bold">*</span> are required</p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <IconCheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-slate-900">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message has been routed to our dispatch manager. We will contact you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', lastName: '', email: '', phone: '', comments: '' });
                  }}
                  className="px-6 py-2.5 bg-[#003366] text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-[#002244] transition-colors shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200 font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Name * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>

                {/* Last Name * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>

                {/* Email * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>

                {/* Phone * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>

                {/* Comments * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Comments <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="comments"
                    required
                    rows="4"
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Provide details on how our dispatch team can assist your business..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                {/* Dark Submit Button matching screenshot media_1789804933397.jpg */}
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold uppercase tracking-wider text-xs rounded transition-all shadow"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
