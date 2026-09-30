import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconPhone,
  IconMail,
  IconClock,
  IconMenu,
  IconX,
  IconChevronRight,
  IconMapPin,
  IconWhatsApp,
} from "./Icons";
import { COMPANY_DETAILS } from "../data/dispatchData";

export default function ThemeRexHeader({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  /* =========================================================
     SCROLL LOGIC
     Initial state:
     Top utility bar + navbar both visible.

     After scrolling:
     Top utility bar smoothly hides.
     Main navbar becomes fixed at top.
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ========================================================= */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  /* =========================================================
     NAVIGATION LINKS
  ========================================================= */
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Factoring", path: "/factoring" },
    { label: "Dispatch Course", path: "/course" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  /* =========================================================
     ACTIVE LINK
  ========================================================= */
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="relative z-50 w-full bg-white">
        {/* ===================================================
            TOP UTILITY BAR
        ==================================================== */}
        <div
          className={`
            bg-primary-navy
            text-white
            text-xs
            px-4
            border-b
            border-[#002244]
            overflow-hidden
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isScrolled
                ? "max-h-0 py-0 opacity-0"
                : "max-h-24 py-6 opacity-100"
            }
          `}
        >
          <div className="max-w-7xl px-4 sm:px-6 xl:px-12 mx-auto flex justify-between items-center gap-4">
            {/* Contact Details */}
            <div className="flex items-center gap-4 sm:gap-6 min-w-0">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-amber-300 font-semibold transition-colors whitespace-nowrap"
              >
                <IconPhone className="w-3.5 h-3.5 text-amber-400 shrink-0" />

                <span>{COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="hidden md:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              >
                <IconMail className="w-3.5 h-3.5 text-amber-400 shrink-0" />

                <span>{COMPANY_DETAILS.email}</span>
              </a>

              <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
                <IconMapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />

                <span>{COMPANY_DETAILS.address}</span>
              </div>
            </div>

            {/* Right Hours & Socials */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden sm:flex items-center gap-1.5 text-slate-200">
                <IconClock className="w-3.5 h-3.5 text-amber-400" />

                <span>Available 24/7</span>
              </div>

              <a
                href={COMPANY_DETAILS.whatsapplink}
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

        {/* ===================================================
            MAIN NAVIGATION
        ==================================================== */}

        {/*
          Placeholder keeps the document layout stable when
          the navbar changes from relative to fixed.
        */}
        <div
          className={`
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isScrolled
                ? "h-[64px] sm:h-[68px]"
                : "h-0"
            }
          `}
          aria-hidden="true"
        />

        <nav
          className={`
            w-full
            bg-white
            border-b
            border-slate-200
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isScrolled
                ? `
                  fixed
                  left-0
                  right-0
                  top-0
                  z-[100]
                  py-2.5
                  shadow-[0_8px_30px_rgba(15,23,42,0.12)]
                `
                : `
                  relative
                  py-3.5
                `
            }
          `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-12 flex items-center justify-between gap-4">
            {/* =================================================
                LOGO
            ================================================== */}
            <Link
              to="/"
              className="group inline-flex items-center shrink-0"
            >
              <img
                src="/logo.jpeg"
                alt={COMPANY_DETAILS.name}
                className={`
                  w-auto
                  object-contain
                  transition-all
                  duration-500
                  ease-out

                  ${
                    isScrolled
                      ? "h-10 sm:h-11"
                      : "h-12"
                  }
                `}
              />
            </Link>

            {/* =================================================
                DESKTOP NAV
            ================================================== */}
            <div className="hidden xl:flex items-center gap-4 2xl:gap-6 text-sm 2xl:text-[13px] font-bold tracking-tight whitespace-nowrap shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    py-1
                    relative
                    nav-link-animated
                    transition-all
                    duration-300

                    ${
                      isActive(link.path)
                        ? "text-primary-navy font-extrabold active"
                        : "text-slate-700 hover:text-primary-navy"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================== */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                onClick={onOpenQuote}
                className={`
                  font-extrabold
                  uppercase
                  tracking-wider
                  text-white
                  bg-primary-navy
                  hover:bg-[#002244]
                  rounded-lg
                  shadow-sm
                  hover:shadow
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  whitespace-nowrap

                  ${
                    isScrolled
                      ? "px-3 py-2 text-[11px]"
                      : "px-3.5 py-2 text-xs"
                  }
                `}
              >
                Get A Quote
              </button>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="
                xl:hidden
                p-2
                text-slate-800
                hover:text-amber-500
                transition-all
                duration-300
                hover:scale-105
              "
              aria-label="Open mobile navigation menu"
            >
              <IconMenu className="w-7 h-7" />
            </button>
          </div>
        </nav>

        {/* ===================================================
            MOBILE DRAWER BACKDROP
        ==================================================== */}
        <div
          className={`
            mobile-drawer-backdrop
            ${mobileMenuOpen ? "open" : ""}
          `}
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Mobile Drawer Panel */}
          <div
            className="mobile-drawer-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 bg-[#0a2540] border-b border-[#14375e]">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center"
              >
                <img
                  src="/logo.jpeg"
                  alt={COMPANY_DETAILS.name}
                  className="h-12 w-auto object-contain"
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="
                  p-1.5
                  rounded-full
                  text-slate-300
                  hover:text-white
                  hover:bg-white/10
                  transition-all
                "
                aria-label="Close mobile navigation menu"
              >
                <IconX className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto py-2">
              {/* HOME */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="drawer-menu-item"
              >
                <span className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>

                  <span>HOME</span>
                </span>

                <IconChevronRight className="w-4 h-4 text-slate-300" />
              </Link>

              {/* SERVICES */}
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

              {/* DISPATCH COURSE */}
              <Link
                to="/course"
                onClick={() => setMobileMenuOpen(false)}
                className="drawer-menu-item highlighted"
              >
                <span className="flex items-center gap-2">
                  <span>DISPATCH COURSE</span>

                  <span className="text-[10px] bg-slate-950 text-amber-400 px-1.5 py-0.5 rounded font-black">
                    NEW
                  </span>
                </span>

                <IconChevronRight className="w-4 h-4 text-slate-950" />
              </Link>

              {/* ABOUT */}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="drawer-menu-item"
              >
                <span>ABOUT US</span>

                <IconChevronRight className="w-4 h-4 text-slate-300" />
              </Link>

              {/* CONTACT */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="drawer-menu-item"
              >
                <span>CONTACT</span>

                <IconChevronRight className="w-4 h-4 text-slate-300" />
              </Link>

              {/* CALL BUTTON */}
              <div className="p-4 pt-4">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-3
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-bold
                    rounded
                    text-xs
                    uppercase
                    tracking-wider
                    shadow
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >
                  <IconPhone className="w-4 h-4" />

                  <span>
                    Call Us: {COMPANY_DETAILS.phone}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}