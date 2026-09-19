import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { IconPhone, IconMail, IconMapPin, IconClock } from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function ThemeRexFooter({ onOpenLoadRequest, onOpenOnboard }) {
  return (
    <footer className="bg-gradient-to-b from-slate-100 to-slate-200 text-slate-700 border-t border-slate-300 pt-16 pb-12">
      <div className="container-custom">
        {/* Top Callout Strip (ThemeREX Banner) */}
        <div className="glass-card bg-white rounded-2xl p-6 sm:p-8 mb-12 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo variant="dark" size="lg" />
            <div className="hidden lg:block border-l border-slate-200 pl-4">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wide block">
                Independent Truck Dispatching
              </span>
              <span className="text-xs text-slate-500">Established 2016 in the United States</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-6 py-3 bg-[#003366] hover:bg-[#002244] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all shadow flex items-center gap-2"
            >
              <IconPhone className="w-4 h-4 text-amber-400" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={onOpenLoadRequest}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow"
            >
              Request A Load
            </button>
          </div>
        </div>

        {/* 4 Main Footer Columns (Exact from user screenshots media_1789804927716.jpg & media_1789804927806.jpg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-sm">
          {/* Col 1: About Us */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-black uppercase tracking-wider text-sm border-b border-slate-300 pb-2">
              ABOUT US
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {COMPANY_DETAILS.missionStatement}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={COMPANY_DETAILS.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={COMPANY_DETAILS.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-sky-500 text-slate-700 hover:text-white border border-slate-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href={COMPANY_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-pink-600 text-slate-700 hover:text-white border border-slate-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href={COMPANY_DETAILS.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-800 text-slate-700 hover:text-white border border-slate-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="TikTok"
              >
                tt
              </a>
              <a
                href={COMPANY_DETAILS.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-blue-700 text-slate-700 hover:text-white border border-slate-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Col 2: USEFULL LINKS (matching screenshot spelling) */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase tracking-wider text-sm border-b border-slate-300 pb-2 text-[#003366]">
              USEFULL LINKS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-[#003366] transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#003366] transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/factoring" className="text-slate-600 hover:text-[#003366] transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> factoring
                </Link>
              </li>
              <li>
                <Link to="/factoring" className="text-slate-600 hover:text-[#003366] transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> Express freight finance
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-600 hover:text-[#003366] transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> Service Plan (Pricing)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: OUR SERVICES */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase tracking-wider text-sm border-b border-slate-300 pb-2 text-[#003366]">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/services" className="text-slate-600 hover:text-[#003366] transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> Service Coverage
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-amber-600 font-bold hover:underline flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> Register
                </Link>
              </li>
              <li className="pl-4">
                <Link to="/requirements" className="text-amber-700 text-xs hover:underline flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> Service Coverage (Requirements)
                </Link>
              </li>
              <li>
                <Link to="/rates" className="text-slate-600 hover:text-[#003366] transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> Today's Rates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#003366] transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">»</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT US */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase tracking-wider text-sm border-b border-slate-300 pb-2 text-[#003366]">
              CONTACT US
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">📞</span>
                <div>
                  <span className="text-slate-500 block text-[11px] font-semibold">Call Us :</span>
                  <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="font-bold text-slate-900 hover:text-[#003366]">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✉️</span>
                <div>
                  <span className="text-slate-500 block text-[11px] font-semibold">Email :</span>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-800 hover:text-[#003366] break-all font-medium">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">📍</span>
                <span className="text-slate-600 text-xs leading-relaxed">
                  {COMPANY_DETAILS.address}, zip code {COMPANY_DETAILS.zipCode}
                </span>
              </div>

              <p className="text-[11px] text-slate-500 italic pt-2 border-t border-slate-300">
                We are available 24 hours a day, 7 days a week to support and assist those who request our services.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-300 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            © {COMPANY_DETAILS.foundedYear} - {new Date().getFullYear()} {COMPANY_DETAILS.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/requirements" className="hover:text-slate-900">Carrier Requirements</Link>
            <Link to="/pricing" className="hover:text-slate-900">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-900">24/7 Dispatch Hotline</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
