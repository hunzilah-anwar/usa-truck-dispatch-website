import React, { useState } from 'react';
import { IconPhone, IconMail, IconMapPin, IconSend, IconCheckCircle, IconWhatsApp } from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', comments: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.comments.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <section className="py-20 sm:py-24 bg-white page-hero-light">
      <div className="container-custom">

        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#003366]">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Get In Touch With Our Team</h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">Available 24/7. Our dispatch team is ready to onboard you and start finding you high-paying loads immediately.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left col — contact info + image */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map / office image */}
            <div className="rounded-2xl overflow-hidden h-52 relative">
              <img
                src="/images/dispatcher.jpg"
                alt="Dispatch Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-5">
                <div>
                  <span className="text-amber-400 text-xs font-black uppercase tracking-widest block">Greenville, SC</span>
                  <p className="text-white font-bold text-sm">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
            </div>

            {/* Contact detail blocks */}
            <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#003366] transition-colors group">
              <div className="w-12 h-12 bg-[#003366] text-white rounded-xl flex items-center justify-center shrink-0">
                <IconPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">24/7 Dispatch Hotline</p>
                <p className="text-base font-black text-slate-900 group-hover:text-[#003366] transition-colors">{COMPANY_DETAILS.phone}</p>
              </div>
            </a>

            <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-amber-400 transition-colors group">
              <div className="w-12 h-12 bg-amber-400 text-slate-900 rounded-xl flex items-center justify-center shrink-0">
                <IconMail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Support</p>
                <p className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors break-all">{COMPANY_DETAILS.email}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-emerald-50 border border-emerald-200 rounded-xl hover:border-emerald-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shrink-0">
                <IconWhatsApp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</p>
                <p className="text-base font-black text-slate-900">Chat with us instantly</p>
              </div>
            </a>
          </div>

          {/* Right col — form */}
          <div className="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-2xl p-8">
            {submitted ? (
              <div className="py-16 text-center space-y-5">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <IconCheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-slate-900">Message Received!</h4>
                <p className="text-slate-600 text-sm">We'll reach out to <strong>{formData.email}</strong> within minutes.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', comments: '' }); }}
                  className="mt-4 px-6 py-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-all text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-black text-slate-900 mb-6">Drop Us a Message</h3>
                {errorMsg && <div className="p-4 bg-red-50 text-red-600 text-sm font-bold rounded-xl">{errorMsg}</div>}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Phone *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 outline-none transition-all" />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">How can we help? *</label>
                  <textarea name="comments" required rows="4" value={formData.comments} onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 outline-none transition-all resize-none" />
                </div>

                <button type="submit" className="w-full py-4 bg-[#003366] hover:bg-[#002244] text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <IconSend className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
