import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ARTICLES, COMPANY_DETAILS } from '../data/dispatchData';
import { IconArrowRight, IconClock, IconStar } from './Icons';

export default function RecentNewsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#003366] text-xs font-extrabold uppercase tracking-wider">
            <span>Freight Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Recent <span className="text-[#003366]">News</span> & Industry Trends
          </h2>

          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Stay updated with spot market shifts, fuel surcharge trends, and carrier business management best practices.
          </p>
        </div>

        {/* 3 News Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="glass-card bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#003366] text-white px-3 py-1 rounded-full text-[11px] font-bold shadow">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                    <IconClock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#003366] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#003366] hover:text-amber-500 transition-colors"
                >
                  <span>Read Article</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Social Community Banner (From screenshot media_1789804933416.jpg) */}
        <div className="glass-card bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-xl bg-[#1877F2] text-white flex items-center justify-center font-black text-2xl flex-shrink-0 shadow">
              f
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900">Truck Dispatcher USA Community</h4>
              <p className="text-xs text-slate-500">Over 1,545+ active carriers, drivers, and owner operators in our network</p>
            </div>
          </div>

          <a
            href={COMPANY_DETAILS.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center gap-2"
          >
            <span>Follow on Facebook</span>
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
