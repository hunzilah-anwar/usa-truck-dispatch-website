import React from 'react';
import { TEAM_MEMBERS } from '../data/dispatchData';
import { IconPhone, IconMail, IconAward } from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function MeetTheTeamSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#003366] text-xs font-extrabold uppercase tracking-wider">
            <IconAward className="w-3.5 h-3.5 text-amber-500" />
            <span>Dedicated Dispatch Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Meet The <span className="text-[#003366]">Team</span>
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            You don't get routed to a random call center. You get assigned a seasoned US freight professional dedicated to your truck.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="glass-card bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#003366] text-white px-2.5 py-1 rounded text-[11px] font-bold shadow">
                    {member.experience}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-black text-slate-900">{member.name}</h3>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">{member.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{member.bio}</p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold">Direct Desk</span>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="text-[#003366] font-bold hover:text-amber-500 transition-colors flex items-center gap-1"
                >
                  <IconPhone className="w-3.5 h-3.5" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
