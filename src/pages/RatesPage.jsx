import React from 'react';
import { motion } from 'framer-motion';
import RevenueCalculator from '../components/RevenueCalculator';
import { IconTrendingUp, IconTruck, IconCheckCircle, IconDollarSign } from '../components/Icons';
import { TODAY_RATES } from '../data/dispatchData';

export default function RatesPage({ onOpenLoadRequest, onOpenQuote }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="rates-page bg-white"
    >
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container-custom text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <IconTrendingUp className="w-3.5 h-3.5 text-amber-600" />
            <span>Real-Time Freight Market Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Today's <span className="text-[#003366]">Rates</span> & Commission Index
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Transparent dispatching for Dry Van (5%), Reefer (5%), Flatbed (5%), Step Deck (5%), Power Only (5%), and Box Truck & Hotshot (6%). We negotiate top $/mile with zero forced dispatch.
          </p>
        </motion.div>
      </div>

      {/* Equipment Rates */}
      <section className="py-16 sm:py-20 container-custom">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">NATIONAL SPOT INDEX</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Average Paying Rates by Equipment</h2>
          <p className="text-sm sm:text-base text-slate-600">
            Current average broker paying rates and typical weekly gross earnings for various equipment types.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TODAY_RATES.map((rate, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card glass-shine bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
            >
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-lg text-slate-900">{rate.type}</h3>
                <span className={`px-2.5 py-1 text-[11px] font-black uppercase rounded ${rate.popular ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}>
                  {rate.commission} Fee
                </span>
              </div>
              <p className="text-xs text-slate-600 h-8">Top Lanes: {rate.topLanes}</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-700">Average Rate:</span>
                  <span className="font-black text-[#003366]">{rate.rate} {rate.unit}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-700">Market Trend:</span>
                  <span className="font-black text-emerald-600">{rate.trend}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-slate-700">Avg Weekly Gross:</span>
                  <span className="font-black text-[#003366]">{rate.avgWeeklyGross}</span>
                </div>
              </div>
              <button
                onClick={() => onOpenLoadRequest(rate.type)}
                className="w-full py-2.5 bg-slate-100 hover:bg-[#003366] hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all"
              >
                View {rate.type} Loads
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Revenue Calculator */}
      <RevenueCalculator onOpenQuote={onOpenQuote} />
    </motion.div>
  );
}
