import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { 
  IconPhone, 
  IconMail, 
  IconClock, 
  IconMenu, 
  IconX, 
  IconSearch, 
  IconTruck, 
  IconChevronRight,
  IconMapPin,
  IconWhatsApp
} from './Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function ThemeRexHeader({ onOpenQuote, onOpenLoadRequest, onOpenOnboard }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const query = searchQuery.toLowerCase();
    setMobileMenuOpen(false);

    if (query.includes('course') || query.includes('train') || query.includes('learn') || query.includes('academy')) {
      navigate('/course');
    } else if (query.includes('rate') || query.includes('cost') || query.includes('today')) {
      navigate('/rates');
    } else if (query.includes('factor') || query.includes('finance')) {
      navigate('/factoring');
    } else if (query.includes('req') || query.includes('permit') || query.includes('w9')) {
      navigate('/requirements');
    } else if (query.includes('about') || query.includes('who') || query.includes('2016')) {
      navigate('/about');
    } else if (query.includes('contact') || query.includes('phone') || query.includes('call')) {
      navigate('/contact');
    } else {
      navigate('/services');
    }
    setSearchQuery('');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Factoring', path: '/factoring' },
    { label: 'Dispatch Course', path: '/course' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full z-40 bg-white">
      {/* Top Utility Bar (Clean ThemeREX Light Top Bar) */}
      <div className="bg-primary-navy text-white text-xs py-6 px-4 border-b border-[#002244]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Contact Details */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-amber-300 font-semibold transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_DETAILS.email}`} 
              className="hidden md:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <IconMail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <IconMapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Greenville, SC ({COMPANY_DETAILS.zipCode})</span>
            </div>
          </div>

          {/* Right Hours & Socials */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-200">
              <IconClock className="w-3.5 h-3.5 text-amber-400" />
              <span>Available 24/7/365</span>
            </div>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <IconWhatsApp className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (ThemeREX Clean Crisp White Navigation) */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'shadow-md py-2.5' : 'py-3.5'} bg-white border-b border-slate-200 sticky top-0 z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0 mr-2">
            <Logo variant="dark" size="md" />
          </Link>

          {/* Desktop Nav Items with smooth animated underline */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs 2xl:text-[13px] font-bold tracking-tight whitespace-nowrap shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-1 relative transition-colors nav-link-animated ${
                  isActive(link.path)
                    ? 'text-primary-navy font-extrabold active'
                    : 'text-slate-700 hover:text-primary-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenLoadRequest}
              className="px-3.5 py-2 text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <IconTruck className="w-4 h-4" />
              <span>Request A Load</span>
            </button>
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider text-white bg-primary-navy hover:bg-[#002244] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-2 text-slate-800 hover:text-amber-500 transition-colors"
            aria-label="Open mobile navigation menu"
          >
            <IconMenu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Matching exact screenshot media_1789804914144.jpg) */}
      <div 
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className="mobile-drawer-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 bg-[#0a2540] border-b border-[#14375e]">
            <Logo variant="light" size="sm" />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full text-slate-300 hover:text-white"
            >
              <IconX className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-2">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-menu-item"
            >
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>HOME</span>
              </span>
              <IconChevronRight className="w-4 h-4 text-slate-300" />
            </Link>

            {/* OUR SERVICES */}
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-menu-item"
            >
              <span>DISPATCH SERVICES</span>
              <IconChevronRight className="w-4 h-4 text-slate-300" />
            </Link>

            {/* FACTORING */}
            <Link
              to="/factoring"
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-menu-item"
            >
              <span>FACTORING SERVICES</span>
              <IconChevronRight className="w-4 h-4 text-slate-300" />
            </Link>

            {/* DISPATCH COURSE (Highlighted) */}
            <Link
              to="/course"
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-menu-item highlighted"
            >
              <span className="flex items-center gap-2">
                <span>🎓 DISPATCH COURSE</span>
                <span className="text-[10px] bg-slate-950 text-amber-400 px-1.5 py-0.5 rounded font-black">NEW</span>
              </span>
              <IconChevronRight className="w-4 h-4 text-slate-950" />
            </Link>




            <div
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLoadRequest();
              }}
              className="drawer-menu-item cursor-pointer"
            >
              <span className="text-amber-400">REQUEST A LOAD</span>
              <IconTruck className="w-4 h-4 text-amber-400" />
            </div>

            {/* REGISTER */}
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-menu-item"
            >
              <span>REGISTER AS CARRIER</span>
              <IconChevronRight className="w-4 h-4 text-slate-300" />
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-menu-item"
            >
              <span>ABOUT US</span>
              <IconChevronRight className="w-4 h-4 text-slate-300" />
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="drawer-menu-item"
            >
              <span>CONTACT</span>
              <IconChevronRight className="w-4 h-4 text-slate-300" />
            </Link>

            {/* Search Bar matching screenshot */}
            <div className="p-4 mt-2">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-slate-900 text-sm px-4 py-2.5 rounded-none pr-10 focus:outline-none placeholder:text-slate-400"
                />
                <button type="submit" className="absolute right-2 text-slate-600 hover:text-amber-500">
                  <IconSearch className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Direct Call Button */}
            <div className="p-4 pt-1">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded text-xs uppercase tracking-wider shadow"
              >
                <IconPhone className="w-4 h-4" />
                <span>Call Us: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
