import React, { useState } from 'react';
import { IconClock, IconStar, IconArrowRight, IconShieldCheck, IconDollarSign } from '../components/Icons';
import { NEWS_ARTICLES, COMPANY_DETAILS } from '../data/dispatchData';

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Market Insights', 'Freight Finance', 'Carrier Compliance', 'Fuel & Economics', 'Specialized Freight', 'Lane Strategy'];

  const filteredArticles = activeCategory === 'All'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="news-page bg-white">
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <div className="container-custom text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Market Intelligence & Carrier Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Dispatch <span className="text-[#003366]">News</span> & Market Trends
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Essential freight analysis, load board rate shifts, diesel trends, and business scaling guides for independent motor carriers.
          </p>
        </div>
      </div>

      {/* Market Indicators Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6 font-semibold text-slate-700 overflow-x-auto py-1">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Nat'l Van Outbound: <strong>$2.85/mi</strong> (+3.2%)</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Nat'l Reefer Avg: <strong>$3.45/mi</strong> (+4.8%)</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Nat'l Flatbed Avg: <strong>$3.25/mi</strong> (+2.1%)</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>US Diesel Avg: <strong>$3.82/gal</strong></span>
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-semibold hidden md:inline">
            Updated Weekly by Greenville Dispatch Desk
          </span>
        </div>
      </div>

      <div className="container-custom py-12 sm:py-16">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-[#003366] text-white border-[#003366] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
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
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-slate-800 px-2.5 py-0.5 rounded-md text-[10px] font-extrabold shadow">
                    {article.readTime}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <IconClock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#003366] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <span className="text-[11px] text-slate-400 font-medium truncate max-w-[170px]">
                  {article.author}
                </span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#003366] hover:text-amber-500 transition-colors"
                >
                  <span>Read Full</span>
                  <IconArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Social Community Banner */}
        <div className="glass-card bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center font-black text-2xl flex-shrink-0 shadow">
              f
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900">Truck Dispatcher USA Driver Community</h4>
              <p className="text-xs text-slate-500">Over 1,545+ active carriers, owner operators, and fleet managers in our network</p>
            </div>
          </div>

          <a
            href={COMPANY_DETAILS.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-2"
          >
            <span>Join Discussion on Facebook</span>
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5 animate-scale-in">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider rounded-full">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-400 font-semibold ml-2">
                  {selectedArticle.date} • {selectedArticle.readTime}
                </span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 font-medium">
              Author: <strong>{selectedArticle.author}</strong>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-900">
                {selectedArticle.summary}
              </p>
              <p>
                {selectedArticle.content}
              </p>
              <p className="text-xs text-slate-500 italic">
                Published by Truck Dispatcher USA Market Research Bureau • Greenville, South Carolina.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
