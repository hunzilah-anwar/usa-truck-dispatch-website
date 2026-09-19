import React, { useState, useId } from 'react';
import { EQUIPMENT_DETAILS } from '../data/dispatchData';
import { IconCalculator, IconDollarSign, IconTruck, IconShieldCheck, IconArrowRight, IconSliders } from './Icons';

export default function RevenueCalculator({ onOpenQuote }) {
  const [selectedEquipment, setSelectedEquipment] = useState('dry-van');
  const [truckCount, setTruckCount] = useState(1);
  const [weeklyMiles, setWeeklyMiles] = useState(2500);
  const [customRate, setCustomRate] = useState(null);

  const currentEquipment = EQUIPMENT_DETAILS.find((e) => e.id === selectedEquipment) || EQUIPMENT_DETAILS[0];
  const ratePerMile = customRate !== null ? customRate : currentEquipment.baseRatePerMile;

  // Calculations
  const weeklyGrossPerTruck = weeklyMiles * ratePerMile;
  const totalWeeklyGross = weeklyGrossPerTruck * truckCount;
  const totalMonthlyGross = totalWeeklyGross * 4.33;
  const dispatchFeePercent = 0.05; // 5% standard rate
  const totalWeeklyDispatchFee = totalWeeklyGross * dispatchFeePercent;
  const totalWeeklyNetToCarrier = totalWeeklyGross - totalWeeklyDispatchFee;
  const totalMonthlyNetToCarrier = totalMonthlyGross * (1 - dispatchFeePercent);

  const handleEquipmentChange = (eqId) => {
    setSelectedEquipment(eqId);
    setCustomRate(null);
  };

  const trucksInputId = useId();
  const milesInputId = useId();
  const rateInputId = useId();

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold shadow-sm">
            <IconCalculator className="w-3.5 h-3.5" />
            <span>Interactive Freight Profit Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Calculate Your <span className="text-[#003366]">Weekly Earnings</span>
          </h2>
          <p className="text-slate-600 text-base">
            See how much more you take home with a dedicated 24/7 dispatcher booking high-paying loads at zero forced dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-card bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
            {/* Step 1: Select Equipment */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <IconTruck className="w-4 h-4 text-[#003366]" />
                <span>1. Select Equipment Type</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {EQUIPMENT_DETAILS.map((eq) => (
                  <button
                    key={eq.id}
                    type="button"
                    onClick={() => handleEquipmentChange(eq.id)}
                    className={`p-3 rounded-xl text-xs font-bold transition-all text-left border ${
                      selectedEquipment === eq.id
                        ? 'bg-[#003366] text-white border-[#003366] shadow-md font-black'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className="truncate">{eq.name.split('(')[0].trim()}</div>
                    <div className={`text-[10px] mt-0.5 ${selectedEquipment === eq.id ? 'text-amber-300' : 'text-slate-500'}`}>
                      ${eq.baseRatePerMile.toFixed(2)}/mi base
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Number of Trucks Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={trucksInputId} className="font-bold text-slate-800 flex items-center gap-2">
                  <IconSliders className="w-4 h-4 text-[#003366]" />
                  <span>2. Number of Active Trucks</span>
                </label>
                <span className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg font-black text-[#003366]">
                  {truckCount} {truckCount === 1 ? 'Truck' : 'Trucks'}
                </span>
              </div>
              <input
                id={trucksInputId}
                type="range"
                min="1"
                max="20"
                step="1"
                value={truckCount}
                onChange={(e) => setTruckCount(parseInt(e.target.value))}
                className="w-full accent-[#003366] cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>1 Truck (Owner Operator)</span>
                <span>10 Trucks</span>
                <span>20+ Fleet</span>
              </div>
            </div>

            {/* Step 3: Weekly Miles Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={milesInputId} className="font-bold text-slate-800 flex items-center gap-2">
                  <IconSliders className="w-4 h-4 text-[#003366]" />
                  <span>3. Average Weekly Miles Per Truck</span>
                </label>
                <span className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg font-black text-[#003366]">
                  {weeklyMiles.toLocaleString()} miles
                </span>
              </div>
              <input
                id={milesInputId}
                type="range"
                min="1200"
                max="3500"
                step="100"
                value={weeklyMiles}
                onChange={(e) => setWeeklyMiles(parseInt(e.target.value))}
                className="w-full accent-[#003366] cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>1,200 mi (Regional)</span>
                <span>2,500 mi (Standard OTR)</span>
                <span>3,500 mi (Team / Expedited)</span>
              </div>
            </div>

            {/* Step 4: Fine-tune Rate per Mile */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={rateInputId} className="font-bold text-slate-800 flex items-center gap-2">
                  <IconDollarSign className="w-4 h-4 text-emerald-600" />
                  <span>Rate Per Mile (Adjustable)</span>
                </label>
                <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-lg font-black text-emerald-700">
                  ${ratePerMile.toFixed(2)} / mi
                </span>
              </div>
              <input
                id={rateInputId}
                type="range"
                min="2.00"
                max="5.00"
                step="0.05"
                value={ratePerMile}
                onChange={(e) => setCustomRate(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>
          </div>

          {/* Results Summary Box (Light Frosted Financial Panel) */}
          <div className="lg:col-span-5 glass-panel bg-gradient-to-br from-blue-50/60 via-white to-amber-50/40 border-2 border-amber-400 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">Projected Earnings</span>
                <h3 className="text-xl font-black text-slate-900">{currentEquipment.name}</h3>
              </div>
              <span className="px-3 py-1 text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-full">
                5% Dispatch Fee
              </span>
            </div>

            {/* Key Numbers */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">
                  Estimated Weekly Gross Revenue
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#003366]">
                  ${Math.round(totalWeeklyGross).toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 block mt-1">
                  At ${(ratePerMile).toFixed(2)}/mi across {truckCount * weeklyMiles} total miles/wk
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[11px] text-slate-500 block font-medium">Monthly Gross</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">
                    ${Math.round(totalMonthlyGross).toLocaleString()}
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[11px] text-slate-500 block font-medium">Weekly 5% Fee</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-700">
                    -${Math.round(totalWeeklyDispatchFee).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Net Payout to Carrier */}
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-300">
                <span className="text-xs text-emerald-800 block uppercase font-bold tracking-wider">
                  Carrier Net Payout (Weekly)
                </span>
                <span className="text-3xl font-black text-emerald-700">
                  ${Math.round(totalWeeklyNetToCarrier).toLocaleString()}
                </span>
                <span className="text-xs text-emerald-700 block mt-1 font-medium">
                  Projected Monthly Net: ${Math.round(totalMonthlyNetToCarrier).toLocaleString()}
                </span>
              </div>
            </div>

            {/* CTA in Calculator */}
            <div className="pt-2">
              <button
                onClick={() => onOpenQuote({
                  equipment: currentEquipment.name,
                  trucks: truckCount,
                  miles: weeklyMiles,
                  rate: ratePerMile
                })}
                className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black uppercase tracking-wider rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Lock In This Rate With Dispatcher</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[11px] text-slate-500 mt-2">
                No credit card required • Zero setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
