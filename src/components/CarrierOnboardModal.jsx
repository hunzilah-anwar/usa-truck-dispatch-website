import React, { useState } from 'react';
import { IconX, IconCheckCircle, IconFileText, IconShieldCheck, IconUpload, IconWhatsApp } from './Icons';
import { COMPANY_DETAILS, ONBOARDING_REQUIREMENTS } from '../data/dispatchData';

export default function CarrierOnboardModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    legalBusinessName: '',
    dbaName: '',
    mcDotNumber: '',
    contactName: '',
    phone: '',
    email: '',
    equipmentType: 'Dry Van',
    truckCount: '1',
    hasW9: true,
    hasCOI: true,
    hasMCAuthority: true,
    hasCDL: true,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div 
        className="modal-container bg-white text-slate-900 rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Clean Light Theme with Frosted Glass) */}
        <div className="bg-gradient-to-r from-slate-50 to-amber-50/40 text-slate-900 p-5 flex items-center justify-between border-b-2 border-amber-400 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400 text-slate-950 rounded-lg shadow-sm">
              <IconShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-wide text-slate-900">Register / Carrier Setup</h3>
              <p className="text-xs text-slate-500 font-medium">Fast 24-hour onboarding • No setup fees</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <IconCheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Carrier Packet Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.legalBusinessName || formData.contactName}</strong>. Your carrier profile has been forwarded to our onboarding desk. Please send your COI & W-9 documents to:
              </p>
              <div className="p-3 bg-slate-100 rounded-lg font-mono text-xs font-bold text-slate-800">
                {COMPANY_DETAILS.email}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Truck Dispatcher USA, I just registered my trucking company: ${formData.legalBusinessName}, MC# ${formData.mcDotNumber}, Contact: ${formData.contactName}, Phone: ${formData.phone}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  <span>Send Documents on WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Business Name & MC */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Legal Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="legalBusinessName"
                    required
                    value={formData.legalBusinessName}
                    onChange={handleChange}
                    placeholder="Eagle Logistics LLC"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    MC / DOT Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="mcDotNumber"
                    required
                    value={formData.mcDotNumber}
                    onChange={handleChange}
                    placeholder="MC #987654"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Contact Person & Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Robert Johnson"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(323) 000-0000"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email & Equipment */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="eaglelogistics@gmail.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Equipment Handled
                  </label>
                  <select
                    name="equipmentType"
                    value={formData.equipmentType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  >
                    <option value="Dry Van">53' Dry Van</option>
                    <option value="Reefer">53' Reefer</option>
                    <option value="Flatbed">Flatbed</option>
                    <option value="Step Deck">Step Deck</option>
                    <option value="Power Only">Power Only</option>
                    <option value="Box Truck">Box Truck (26')</option>
                    <option value="Hotshot">Hotshot</option>
                  </select>
                </div>
              </div>

              {/* Document Checklist confirmation */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <span className="block text-xs font-bold uppercase text-slate-700">
                  Carrier Document Checklist (Confirm you have ready)
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasMCAuthority"
                      checked={formData.hasMCAuthority}
                      onChange={handleChange}
                      className="accent-amber-500 rounded"
                    />
                    <span>MC Authority Permit</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasW9"
                      checked={formData.hasW9}
                      onChange={handleChange}
                      className="accent-amber-500 rounded"
                    />
                    <span>Signed W-9 Form</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasCOI"
                      checked={formData.hasCOI}
                      onChange={handleChange}
                      className="accent-amber-500 rounded"
                    />
                    <span>Certificate of Insurance ($1M / $100k)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasCDL"
                      checked={formData.hasCDL}
                      onChange={handleChange}
                      className="accent-amber-500 rounded"
                    />
                    <span>Driver CDL Copy</span>
                  </label>
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Running Lanes or Preferences
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g., Midwest to Texas only, home every weekend, min $3.00/mi..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-sm rounded-lg shadow-md transition-all"
              >
                Complete Carrier Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
