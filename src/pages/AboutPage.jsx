import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconArrowRight } from '../components/Icons';
import { COMPANY_DETAILS, LIVE_STATS } from '../data/dispatchData';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage({ onOpenOnboard }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Page Header Banner */}
      <div className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10"
        >
          <h1 className="flex flex-col text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            About <span className="text-primary-navy">{COMPANY_DETAILS.name}</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Empowering independent owner operators and carrier fleets across the continental United States with top rates, paperwork automation, and zero forced dispatch.
          </p>
        </motion.div>
      </div>

      {/* Origin Story Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Born from Passion for the Hardest Working Drivers in America
            </h2>
            <div className="w-16 h-1.5 bg-amber-400 rounded-full -translate-y-2"></div>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {COMPANY_DETAILS.missionStatement}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded in {COMPANY_DETAILS.foundedYear}, {COMPANY_DETAILS.name} was started by transportation specialists who saw owner-operators sacrificing sleep and safety to navigate convoluted load boards, negotiate with ruthless freight brokers, and drown in rate confirmation paperwork.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminated the middleman headache. By providing each truck driver with a dedicated 24/7 personal dispatcher, verified broker credit checks, and same-day factoring coordination through Express Freight Finance, we transformed truck driving into a scalable, high-earning business.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenOnboard}
                className="px-6 py-3.5 bg-primary-navy hover:bg-[#002244] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center gap-2"
              >
                <span>Register As Carrier</span>
                <IconArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80"
                alt={`${COMPANY_DETAILS.name} on the Highway`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">HQ Greenville, South Carolina</span>
                  <h3 className="text-xl font-black text-white">Serving Carriers Across All 48 Continental States</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {LIVE_STATS.map((s, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative overflow-hidden bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-150%] hover:animate-[shimmer_1.5s_infinite]"></div>
                <div className="text-3xl sm:text-4xl font-black text-primary-navy mb-1">{s.value}</div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1">{s.label}</div>
                <div className="text-xs text-slate-500">{s.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4 Core Values Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">OUR FOUNDATIONAL PILLARS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">What Sets Us Apart in the Trucking Industry</h2>
          <p className="text-sm sm:text-base text-slate-600">Built by trucking veterans who understand the cost of every gallon of diesel and every layover minute.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: "🎯", title: "0% Forced Dispatch", desc: "You own your truck. We never coerce or penalize you for turning down loads that don't match your rate or destination requirements.", color: "bg-amber-100 text-amber-900" },
            { icon: "📈", title: "Maximum Rate Per Mile", desc: "We benchmark daily DAT and Truckstop indexes to negotiate top dollar on headhauls and secure high-dollar backhauls before delivery.", color: "bg-emerald-100 text-emerald-900" },
            { icon: "⚡", title: "Same-Day Factoring", desc: "Official partner with Express Freight Finance. Invoices, rate confirmations, and delivery receipts are coordinated for immediate ACH payment.", color: "bg-blue-100 text-blue-900" },
            { icon: "🛡️", title: "Broker Credit Shield", desc: "We never book with high-risk or slow-paying freight brokers. Every broker credit rating and days-to-pay is rigorously audited.", color: "bg-purple-100 text-purple-900" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-lg space-y-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center font-black text-xl`}>
                {item.icon}
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs font-black uppercase tracking-widest text-primary-navy block">COMPANY MILESTONES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">A Decade of Freight Excellence</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { year: "2016", title: "Company Founded", desc: "Started in South Carolina with 5 dedicated owner-operators running regional Midwest lanes.", color: "text-amber-500" },
              { year: "2019", title: "Factoring Partnership", desc: "Established direct wire integration with Express Freight Finance for guaranteed cash flow.", color: "text-primary-navy" },
              { year: "2022", title: "500+ Active Fleets", desc: "Expanded dispatch desks to cover Dry Van, Reefer, Flatbed, Step Deck, and Box Trucks across 48 states.", color: "text-emerald-600" },
              { year: "2026", title: "Real-Time Lane Network", desc: "Over 623,000 load opportunities evaluated daily with proprietary rate benchmarking.", color: "text-blue-600" }
            ].map((milestone, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <span className={`text-2xl font-black ${milestone.color} block mb-1`}>{milestone.year}</span>
                <h4 className="font-bold text-slate-900 text-sm mb-2">{milestone.title}</h4>
                <p className="text-xs text-slate-600">{milestone.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
