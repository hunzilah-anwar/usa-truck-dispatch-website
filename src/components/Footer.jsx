import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconMapPin } from "./Icons";
import { COMPANY_DETAILS, EQUIPMENT_DETAILS } from "../data/dispatchData";
import logoImg from "../assets/logo.png";

export default function Footer() {
  const mainPages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Factoring", path: "/factoring" },
    { name: "Dispatch Course", path: "/course" },
    { name: "Contact Us", path: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-linear-to-b from-gray-100 to-gray-200 text-primary border-t border-gray-300 pt-16 pb-12"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-sm"
        >
          {/* Col 1: About Us */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logoImg}
                alt={COMPANY_DETAILS.name}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {COMPANY_DETAILS.missionStatement}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={COMPANY_DETAILS.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-blue-600 text-primary hover:text-white border border-gray-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={COMPANY_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-pink-600 text-primary hover:text-white border border-gray-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href={COMPANY_DETAILS.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-gray-800 text-primary hover:text-white border border-gray-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="TikTok"
              >
                tt
              </a>
              <a
                href={COMPANY_DETAILS.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-blue-700 text-primary hover:text-white border border-gray-300 flex items-center justify-center font-bold text-xs transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </motion.div>

          {/* Col 2: USEFULL LINKS (matching screenshot spelling) */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h4 className="text-gray-900 font-black uppercase tracking-wider text-sm border-b border-gray-300 pb-2">
              Pages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-gray-600 hover:text-main hover:tracking-wider transition-all ease-in-out duration-300 flex items-center gap-1.5 tracking-tight"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: OUR SERVICES */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h4 className="text-gray-900 font-black uppercase tracking-wider text-sm border-b border-gray-300 pb-2">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {EQUIPMENT_DETAILS.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-600 hover:text-main hover:tracking-wider transition-all ease-in-out duration-300 flex items-center gap-1.5 tracking-tight"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: CONTACT US */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h4 className="font-black uppercase tracking-wider text-sm border-b border-gray-300 pb-2 text-main">
              CONTACT US
            </h4>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">
                  <IconPhone />
                </span>
                <div>
                  <span className="text-gray-500 block text-[11px] font-semibold">
                    Call Us :
                  </span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="font-bold text-gray-900 hover:text-main"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">
                  <IconMail />
                </span>
                <div>
                  <span className="text-gray-500 block text-[11px] font-semibold">
                    Email :
                  </span>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-gray-800 hover:text-main break-all font-medium"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">
                  <IconMapPin />
                </span>
                <span className="text-gray-600 text-xs leading-relaxed">
                  {COMPANY_DETAILS.address}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-gray-300 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600"
        >
          <div>
            © {COMPANY_DETAILS.foundedYear} - {new Date().getFullYear()}{" "}
            {COMPANY_DETAILS.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-gray-900">
              24/7 Dispatch Hotline
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
