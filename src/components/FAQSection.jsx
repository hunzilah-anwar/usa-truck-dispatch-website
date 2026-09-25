import React, { useState } from 'react';
import { IconChevronRight } from './Icons';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Do you force dispatch?",
      a: "Absolutely not. We operate on a 100% zero forced dispatch model. You are the boss of your truck. You have the final say on every load, lane, and rate we negotiate for you."
    },
    {
      q: "What are your fees?",
      a: "We charge a flat, transparent 5% dispatch fee (6% for Box Trucks and Hotshots) on the gross linehaul of the load. We only get paid when you get paid. There are no sign-up fees or hidden costs."
    },
    {
      q: "Do I have to sign a long-term contract?",
      a: "No. Our agreement is month-to-month and you can cancel at any time without any termination penalties. We believe in earning your business on every single load."
    },
    {
      q: "Can you help me with factoring?",
      a: "Yes! We have a direct partnership with Express Freight Finance and other top-tier factoring companies to ensure you get paid the same day you deliver, removing all cash flow bottlenecks."
    },
    {
      q: "Who handles the broker setup packets?",
      a: "We do. Our back-office team completes all broker carrier setup packets, provides your COI, and verifies the broker's credit so you can focus entirely on driving."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container-custom max-w-7xl mx-auto">
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Everything you need to know about partnering with Truck Dispatcher USA.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#003366] shadow-lg bg-blue-50/30' : 'border-slate-200 hover:border-amber-300 bg-white'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-base sm:text-lg font-bold ${isOpen ? 'text-[#003366]' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#003366] text-white rotate-90' : 'bg-slate-100 text-slate-400'}`}>
                    <IconChevronRight className="w-5 h-5" />
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
