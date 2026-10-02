import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronRight } from './Icons';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState();

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
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="border-t border-gray-200 bg-white py-14 sm:py-10 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-6">

        {/* Heading */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-14"
        >
          <h2 className="text-4xl sm:text-[42px] font-normal leading-[1.05] tracking-tight text-primary lg:text-[58px]">
            FA
            <span className="text-main">Q's.</span>
          </h2>

          <p className="mx-auto mt-2 sm:mt-5 max-w-lg text-[15px] leading-7 text-gray-600">
            Everything you need to know about partnering with our dispatch
            team.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          variants={containerVariants}
          className="mx-auto max-w-7xl"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={faq.q}
                variants={itemVariants}
                className="border-b border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="group flex w-full items-center gap-5 py-6 text-left sm:py-7 cursor-pointer"
                >

                  {/* Question */}
                  <span
                    className={`flex-1 text-base font-normal leading-[1.05] tracking-tight transition-colors duration-300 sm:text-2xl ${
                      isOpen
                        ? 'text-secondery'
                        : 'text-primary group-hover:text-secondery'
                    }`}
                  >
                    {faq.q}
                  </span>

                  {/* Arrow */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 90 : 0,
                      x: isOpen ? 3 : 0
                    }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 ${
                      isOpen ? 'text-secondery' : 'text-gray-500'
                    }`}
                  >
                    <IconChevronRight className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: "easeInOut" },
                        opacity: { duration: 0.2 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pr-8 sm:pb-8 sm:pr-12">
                        <p className="max-w-3xl text-sm leading-7 text-gray-800 sm:text-[15px]">
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