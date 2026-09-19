import React, { useState, useEffect } from 'react';
import { IconX, IconCheckCircle, IconTruck, IconCalendar, IconDollarSign, IconMapPin, IconWhatsApp } from './Icons';
import { COMPANY_DETAILS, EQUIPMENT_DETAILS } from '../data/dispatchData';

export default function LoadRequestModal({ isOpen, onClose, defaultEquipment = '' }) {
  const [formData, setFormData] = useState({
    carrierName: '',
    mcNumber: '',
    phone: '',
    email: '',
    equipment: 'Dry Van',
    originCity: '',
    destinationCity: '',
    emptyDate: '',
    targetRate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultEquipment) {
      setFormData(prev => ({ ...prev, equipment: defaultEquipment }));
    }
  }, [defaultEquipment]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        className="modal-container bg-white text-slate-900 rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Clean Light Theme with Frosted Glass) */}
        <div className="bg-gradient-to-r from-slate-50 to-amber-50/40 text-slate-900 p-5 flex items-center justify-between border-b-2 border-amber-400">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400 text-slate-950 rounded-lg shadow-sm">
              <IconTruck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-wide text-slate-900">Request A Load</h3>
              <p className="text-xs text-slate-500 font-medium">Tell us where you are empty and where you want to roll</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <IconCheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Load Request Dispatched!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                We are scanning our active shipper network for loads from <strong>{formData.originCity || 'Current Location'}</strong> to <strong>{formData.destinationCity || 'Any Destination'}</strong>. A live dispatcher will contact you immediately.
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Truck Dispatcher USA, I requested a load for my ${formData.equipment}. From: ${formData.originCity} To: ${formData.destinationCity}, Empty Date: ${formData.emptyDate}, Phone: ${formData.phone}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  <span>Connect Directly With Night/Day Dispatcher</span>
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
              {/* Carrier & MC */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Carrier Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="carrierName"
                    required
                    value={formData.carrierName}
                    onChange={handleChange}
                    placeholder="Swift Freight Lines"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    MC / DOT Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="mcNumber"
                    required
                    value={formData.mcNumber}
                    onChange={handleChange}
                    placeholder="MC #123456"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-2 gap-3">
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
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="driver@gmail.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Equipment Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Equipment Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                >
                  <option value="Dry Van">53' Dry Van</option>
                  <option value="Reefer">53' Reefer (Refrigerated)</option>
                  <option value="Flatbed">Flatbed (48' / 53')</option>
                  <option value="Step Deck">Step Deck / Single Drop</option>
                  <option value="Power Only">Power Only</option>
                  <option value="Box Truck">26' Box Truck</option>
                  <option value="Hotshot">Hotshot (40' Gooseneck)</option>
                </select>
              </div>

              {/* Origin & Destination */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Location (Origin) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="originCity"
                    required
                    value={formData.originCity}
                    onChange={handleChange}
                    placeholder="Chicago, IL"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Destination
                  </label>
                  <input
                    type="text"
                    name="destinationCity"
                    value={formData.destinationCity}
                    onChange={handleChange}
                    placeholder="Atlanta, GA (or Anywhere)"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Empty Date & Target Rate */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date & Time Empty <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="emptyDate"
                    required
                    value={formData.emptyDate}
                    onChange={handleChange}
                    placeholder="Today 2:00 PM"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Rate ($/mile or Flat)
                  </label>
                  <input
                    type="text"
                    name="targetRate"
                    value={formData.targetRate}
                    onChange={handleChange}
                    placeholder="$3.20/mi or $2,500"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-sm rounded-lg shadow-md transition-all mt-2"
              >
                Find & Book Top Loads Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
