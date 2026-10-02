import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight, IconMenu, IconX } from "./Icons";
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
          <nav className="hidden lg:flex items-center gap-1">
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
                        ? "text-primary hover:text-secondery"
                        : "text-white hover:text-secondery"
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
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondery" 
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
            className="relative hidden lg:flex gap-2 group overflow-hidden cursor-pointer bg-secondery px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
          >
            <span className="relative z-10">Get A Quote</span>
            <IconArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <motion.span 
              variants={{
                initial: { x: "-100%" },
                hover: { x: 0 }
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-main" 
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 cursor-pointer transition-colors ${isScrolled ? "text-primary" : "text-white"}`}
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
              className="ml-auto flex h-screen max-w-100 flex-col bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src={logoJpeg}
                    alt={COMPANY_DETAILS.name}
                    className="h-20 w-auto"
                  />
                </Link>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-main cursor-pointer"
                >
                  <IconX className="h-6 w-6" />
                </motion.button>
              </div>

              <nav className="flex flex-col py-3">
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
                      className="flex items-center justify-between border-b border-gray-100 px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-gray-50 hover:text-secondery"
                    >
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
