import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconWhatsApp, IconPhone } from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = COMPANY_DETAILS.whatsapplink;

  return (
    <div className="fixed right-6 bottom-6 z-40">
      {/* Interactive Popout Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 bottom-16 mb-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl p-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-whatsapp-green text-white flex items-center justify-center">
                  <IconWhatsApp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs text-primary">Dispatch Desk</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold">
                    <span>Ready to Dispatch</span>
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
              Need an urgent rate-con, detention check, or backhaul load? Connect directly with our on-duty dispatch team.
            </p>

            <div className="space-y-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-whatsapp-green hover:bg-[#20ba5a] text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Start WhatsApp Dispatch</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <IconPhone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call +1 (323) 600-3058</span>
              </motion.a>
            </div>

            <div className="mt-2 text-center text-[10px] text-slate-400">
              24 Hours • 7 Days A Week
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Green Radar Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp-green text-white shadow-2xl cursor-pointer"
        aria-label="Toggle WhatsApp Dispatch Chat"
      >
        {/* Outer Pulsing Rings */}
        <motion.span
          animate={{
            scale: [1, 1.5],
            opacity: [0.6, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute inset-0 rounded-full bg-whatsapp-green"
        ></motion.span>
        <motion.span
          animate={{
            scale: [1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -inset-2 rounded-full border-2 border-whatsapp-green"
        ></motion.span>

        {/* WhatsApp Icon */}
        <IconWhatsApp className="w-7 h-7 relative z-10" />
      </motion.button>
    </div>
  );
}
