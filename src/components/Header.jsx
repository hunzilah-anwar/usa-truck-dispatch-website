import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu, IconX } from "./Icons";
import { COMPANY_DETAILS } from "../data/dispatchData";

import logoPng from "../assets/logo.png";
import logoJpeg from "../assets/logo.jpeg";

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Factoring", path: "/factoring" },
    { label: "Dispatch Course", path: "/course" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: { type: "spring", damping: 25, stiffness: 200 }
    },
    exit: { 
      x: "100%",
      transition: { type: "spring", damping: 25, stiffness: 200 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                src={logoPng}
                alt={COMPANY_DETAILS.name}
                className="h-11 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <motion.div initial="initial" whileHover="hover">
                  <Link
                    to={link.path}
                    className={`relative block px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                      isScrolled
                        ? "text-slate-700 hover:text-orange-500"
                        : "text-white hover:text-orange-400"
                    }`}
                  >
                    {link.label}
                    <motion.span 
                      variants={{
                        initial: { scaleX: 0 },
                        hover: { scaleX: 1 }
                      }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500" 
                    />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </nav>

          {/* Right Side */}
          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={onOpenQuote}
            className="relative overflow-hidden cursor-pointer bg-orange-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
          >
            <span className="relative z-10">Get A Quote</span>
            <motion.span 
              variants={{
                initial: { x: "-100%" },
                hover: { x: 0 }
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#0a2540]" 
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(true)}
            className={`xl:hidden p-2 transition-colors ${isScrolled ? "text-slate-800" : "text-white"}`}
            aria-label="Open menu"
          >
            <IconMenu className="h-7 w-7" />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.aside
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="ml-auto flex h-full w-[320px] flex-col bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between bg-[#0a2540] px-5 py-4">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src={logoJpeg}
                    alt={COMPANY_DETAILS.name}
                    className="h-10 w-auto"
                  />
                </Link>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white"
                >
                  <IconX className="h-6 w-6" />
                </motion.button>
              </div>

              <nav className="flex flex-1 flex-col py-3 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between border-b border-slate-100 px-6 py-4 text-sm font-bold uppercase tracking-wide text-slate-700 transition-colors hover:bg-slate-50 hover:text-orange-500"
                    >
                      <span>{link.label}</span>
                      <motion.span 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-orange-500"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto p-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full bg-orange-500 px-5 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600"
                  >
                    Get A Quote
                  </motion.button>
                </motion.div>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
