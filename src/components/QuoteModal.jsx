import React, { useState, useEffect } from 'react';
import { IconX, IconCheckCircle, IconPhone, IconMail, IconWhatsApp } from './Icons';
import { COMPANY_DETAILS, EQUIPMENT_DETAILS } from '../data/dispatchData';

export default function QuoteModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    equipment: 'Dry Van',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialData?.equipment) {
      setFormData(prev => ({ ...prev, equipment: initialData.equipment }));
    }
    if (initialData?.selectedPlan) {
      setFormData(prev => ({ 
        ...prev, 
        comments: `Interested in ${initialData.selectedPlan} plan. ${prev.comments}` 
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.comments.trim()) {
      setErrorMsg('Please fill in your Email and comments.');
      return;
    }

    // Success
    setSubmitted(true);
    setErrorMsg('');
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div 
        className="modal-container bg-white text-slate-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Clean Light Theme with Frosted Glass) */}
        <div className="bg-gradient-to-r from-slate-50 to-amber-50/40 text-slate-900 p-5 flex items-center justify-between border-b border-slate-200">
          <div>
            <h3 className="text-xl font-extrabold tracking-wide text-slate-900">Request a Quote</h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">Receive top broker dispatch rates within 15 minutes</p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <IconCheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Quote Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.firstName || 'Carrier'}</strong>. A senior dispatch coordinator has received your request and will call you at <strong>{formData.phoneNumber || 'your number'}</strong> shortly.
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Truck Dispatcher USA, I just requested a quote for my ${formData.equipment}. Name: ${formData.firstName} ${formData.lastName}, Phone: ${formData.phoneNumber}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  <span>Chat With Dispatcher on WhatsApp Now</span>
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
                  rows="3"
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
  );
}
