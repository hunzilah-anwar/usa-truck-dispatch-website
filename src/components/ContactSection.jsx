import { useState } from 'react';
import { IconPhone, IconMail, IconSend, IconCheckCircle, IconWhatsApp } from './Icons';
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
          <span className="text-xs font-black uppercase tracking-widest text-primary-navy">Contact Us</span>
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
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent flex items-end p-5">
                <div>
                  <span className="text-amber-400 text-xs font-black uppercase tracking-widest block">Greenville, SC</span>
                  <p className="text-white font-bold text-sm">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
            </div>

            {/* Contact detail blocks */}
            <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-primary-navy transition-colors group">
              <div className="w-12 h-12 bg-primary-navy text-white rounded-xl flex items-center justify-center shrink-0">
                <IconPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">24/7 Dispatch Hotline</p>
                <p className="text-base font-black text-slate-900 group-hover:text-primary-navy transition-colors">{COMPANY_DETAILS.phone}</p>
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
              href={COMPANY_DETAILS.whatsapplink}
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
              <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200 font-medium">
                  {errorMsg}
                </div>
              )}

              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Company & Job Title */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Apex Transport LLC"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Job title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Owner Operator"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="carrier@gmail.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Equipment Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Equipment type</label>
                <select
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                >
                  <option value="Dry Van">Dry Van (53')</option>
                  <option value="Reefer">Reefer (Temperature Controlled)</option>
                  <option value="Flatbed">Flatbed</option>
                  <option value="Step Deck">Step Deck</option>
                  <option value="Power Only">Power Only</option>
                  <option value="Box Truck">Box Truck (26')</option>
                  <option value="Hotshot">Hotshot</option>
                </select>
              </div>

              {/* How can we help? */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  How can we help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="comments"
                  required
                  rows="4"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell us about your truck, preferred lanes, or when you are ready to roll..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              {/* Orange Button matching screenshot media_1789804965674.jpg */}
              <button
                type="submit"
                className="w-full py-3 bg-[#e65c00] hover:bg-[#cf5300] text-white font-extrabold uppercase tracking-wider text-sm rounded shadow transition-all"
              >
                Request a Quote
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
