import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronRight } from './Icons';

export default function FAQ() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-white relative"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Everything you need to know about partnering with Truck Dispatcher USA.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-[#003366] shadow-lg bg-blue-50/30' : 'border-slate-200 hover:border-amber-300 bg-white'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#003366]' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#003366] text-white' : 'bg-slate-100 text-slate-400'}`}
                  >
                    <IconChevronRight className="w-5 h-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </motion.section>
  );
}
