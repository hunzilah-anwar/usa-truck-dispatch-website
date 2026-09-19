import React, { useState } from 'react';
import { IconWhatsApp, IconPhone } from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappMessage
  )}`;

  return (
    <div className="fixed right-6 bottom-6 z-40">
      {/* Interactive Popout Card */}
      {isOpen && (
        <div className="absolute right-0 bottom-16 mb-2 w-72 glass-card bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl p-4 animate-entrance">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                <IconWhatsApp className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">Live Dispatch Desk</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Online • Ready to Dispatch</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 text-xs font-bold p-1 rounded"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Need an urgent rate-con, detention check, or backhaul load? Connect directly with our on-duty American dispatch team.
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <IconWhatsApp className="w-4 h-4" />
              <span>Start WhatsApp Dispatch</span>
            </a>

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <IconPhone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call +1 (323) 600-3058</span>
            </a>
          </div>

          <div className="mt-2 text-center text-[10px] text-slate-400">
            24 Hours • 7 Days A Week • 48 States
          </div>
        </div>
      )}

      {/* Pulsing Green Radar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
        aria-label="Toggle WhatsApp Dispatch Chat"
      >
        {/* Outer Pulsing Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"></span>
        <span className="absolute -inset-2 rounded-full border-2 border-[#25D366] opacity-40 animate-pulse"></span>

        {/* WhatsApp Icon */}
        <IconWhatsApp className="w-7 h-7 relative z-10" />
      </button>
    </div>
  );
}

