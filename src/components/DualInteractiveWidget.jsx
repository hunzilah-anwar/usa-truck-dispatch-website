import React, { useState, useId } from 'react';
import { EQUIPMENT_DETAILS } from '../data/dispatchData';
import { IconCalculator, IconSearch, IconTruck, IconCheckCircle, IconArrowRight, IconShieldCheck } from './Icons';

export default function DualInteractiveWidget({ onOpenQuote }) {
  // Quote State
  const [equipmentId, setEquipmentId] = useState('dry-van');
  const [trucks, setTrucks] = useState(1);
  const [weeklyMiles, setWeeklyMiles] = useState(2500);

  // Tracking State
  const [trackQuery, setTrackQuery] = useState('');
  const [trackResult, setTrackResult] = useState(null);
  const [trackingLoading, setTrackingLoading] = useState(false);

  const selectedEquipment = EQUIPMENT_DETAILS.find((e) => e.id === equipmentId) || EQUIPMENT_DETAILS[0];
  const ratePerMile = selectedEquipment.baseRatePerMile;
  const commissionRate = selectedEquipment.commissionRate || 0.05;
  const weeklyGross = weeklyMiles * ratePerMile * trucks;
  const dispatchFee = weeklyGross * commissionRate;
  const carrierNet = weeklyGross - dispatchFee;

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackQuery.trim()) return;
    setTrackingLoading(true);
    setTimeout(() => {
      setTrackingLoading(false);
      setTrackResult({
        mc: trackQuery.toUpperCase(),
        status: 'Active & Approved for High-Paying Freight',
        lastLane: 'Chicago, IL to Atlanta, GA ($3.35/mi)',
        assignedDesk: 'Senior Midwest Dispatch Desk',
        verifiedDate: new Date().toLocaleDateString()
      });
    }, 800);
  };

  const trucksInputId = useId();
  const milesInputId = useId();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Box: Get Instant Quotes (ThemeREX Left Widget) */}
          <div className="glass-card bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 text-amber-600 font-extrabold text-xs uppercase tracking-wider mb-2">
                <IconCalculator className="w-4 h-4 text-amber-500" />
                <span>Instant Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Get Instant Quotes</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Calculate estimated gross pay and take-home profit based on real current spot market rates.
              </p>

              {/* Equipment Selector */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Equipment Type
                  </label>
                  <select
                    value={equipmentId}
                    onChange={(e) => setEquipmentId(e.target.value)}
                    className="w-full bg-white border border-slate-300 text-slate-900 text-sm font-bold rounded-xl p-3 focus:ring-2 focus:ring-[#003366] focus:outline-none shadow-xs cursor-pointer"
                  >
                    {EQUIPMENT_DETAILS.map((eq) => (
                      <option key={eq.id} value={eq.id}>
                        {eq.name} (${eq.baseRatePerMile.toFixed(2)}/mi base)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Truck Count Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
                    <label htmlFor={trucksInputId}>Active Trucks:</label>
                    <span className="text-[#003366] font-black text-sm">{trucks} {trucks === 1 ? 'Truck' : 'Trucks'}</span>
                  </div>
                  <input
                    id={trucksInputId}
                    type="range"
                    min="1"
                    max="15"
                    value={trucks}
                    onChange={(e) => setTrucks(parseInt(e.target.value))}
                    className="w-full accent-[#003366] cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                </div>

                {/* Weekly Miles */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
                    <label htmlFor={milesInputId}>Average Weekly Miles / Truck:</label>
                    <span className="text-[#003366] font-black text-sm">{weeklyMiles.toLocaleString()} miles</span>
                  </div>
                  <input
                    id={milesInputId}
                    type="range"
                    min="1500"
                    max="3500"
                    step="100"
                    value={weeklyMiles}
                    onChange={(e) => setWeeklyMiles(parseInt(e.target.value))}
                    className="w-full accent-[#003366] cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                </div>
              </div>

              {/* Output Preview */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6 flex flex-wrap justify-between items-center gap-3 shadow-xs">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-bold">Weekly Gross</span>
                  <span className="text-xl sm:text-2xl font-black text-[#003366]">${Math.round(weeklyGross).toLocaleString()}</span>
                </div>
                <div className="text-center px-3 py-1.5 bg-amber-100/80 rounded-xl border border-amber-300">
                  <span className="text-[10px] text-amber-900 uppercase tracking-wider block font-black">Fee ({selectedEquipment.commission})</span>
                  <span className="text-xs font-black text-amber-950">-${Math.round(dispatchFee).toLocaleString()}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-bold">Your Net Payout</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-700">${Math.round(carrierNet).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote({ equipment: selectedEquipment.name, trucks, miles: weeklyMiles })}
              className="mt-2 w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-amber-400/20 cursor-pointer"
            >
              <span>Lock In This Dispatch Rate</span>
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Box: Track Your Shipments / Carrier MC Status (ThemeREX Right Widget - Light Glass) */}
          <div className="glass-card bg-gradient-to-br from-white via-slate-50/50 to-blue-50/40 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md text-slate-900">
            <div>
              <div className="flex items-center gap-2 text-[#003366] font-extrabold text-xs uppercase tracking-wider mb-2">
                <IconSearch className="w-4 h-4 text-[#003366]" />
                <span>Live Freight Network</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Track Your Shipments</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Enter your Carrier MC / DOT number or Load Confirmation code to check active lane status and broker packet verification.
              </p>

              {/* Form */}
              <form onSubmit={handleTrackSubmit} className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    MC / DOT Number or Load ID
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      required
                      placeholder="e.g. MC-987452 or TDU-4820"
                      value={trackQuery}
                      onChange={(e) => setTrackQuery(e.target.value)}
                      className="flex-1 bg-white text-slate-900 border border-slate-300 px-4 py-3 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-[#003366] focus:outline-none placeholder:text-slate-400 shadow-xs"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#003366] hover:bg-[#002244] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
                    >
                      {trackingLoading ? 'Checking...' : 'Check Status'}
                    </button>
                  </div>
                </div>
              </form>

              {/* Status Result Display */}
              {trackResult ? (
                <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 text-xs text-slate-700 shadow-sm animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <IconCheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Carrier Status: {trackResult.mc}</span>
                  </div>
                  <div className="text-emerald-700 font-bold">{trackResult.status}</div>
                  <div className="text-slate-600">Top Assigned Lane: <strong className="text-slate-900">{trackResult.lastLane}</strong></div>
                  <div className="text-slate-500 text-[11px]">Direct Support: {trackResult.assignedDesk} • Updated {trackResult.verifiedDate}</div>
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-6 rounded-2xl text-center space-y-2.5 shadow-xs">
                  <IconShieldCheck className="w-8 h-8 text-[#003366] mx-auto" />
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Real-Time Dispatch Transparency
                  </div>
                  <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
                    All rate confirmations, check calls, and delivery BOLs are logged digitally for seamless billing and factoring.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-slate-200 text-center">
              <span className="text-xs text-slate-500">Need emergency dispatch assistance? </span>
              <a href="tel:+13236003058" className="text-[#003366] font-extrabold hover:underline">
                Call +1 (323) 600-3058
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
