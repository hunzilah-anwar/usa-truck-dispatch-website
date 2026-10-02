import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { IconMapPin, IconPhone, IconWhatsApp, } from '../components/Icons';
import { COMPANY_DETAILS } from '../data/dispatchData';

export default function ContactPage() {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white flex flex-col"
    >

      {/* Main Contact Section (Form + Direct Details) */}
      <Contact />

      {/* Interactive Map & Direct Actions */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50 border-t border-gray-200"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md text-center space-y-4"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-14 h-14 bg-blue-50 text-main rounded-2xl flex items-center justify-center mx-auto"
            >
              <IconMapPin className="w-7 h-7" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-black text-primary"
            >
              {COMPANY_DETAILS.name} Headquarter
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 font-semibold text-base"
            >
              {COMPANY_DETAILS.address}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto"
            >
              Our centralized dispatch desk coordinates long-haul OTR, regional, and specialized freight across all 48 continental states.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4 flex flex-wrap justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="px-6 py-3.5 bg-main hover:bg-secondery text-white font-extrabold uppercase tracking-wider text-xs rounded-xl shadow flex items-center gap-2 transition-colors"
              >
                <IconPhone className="w-4 h-4 text-amber-400" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={COMPANY_DETAILS.whatsapplink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-whatsapp-green/90 hover:bg-whatsapp-green text-white font-extrabold uppercase tracking-wider text-xs rounded-xl shadow flex items-center gap-2 transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Live Chat on WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={COMPANY_DETAILS.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-extrabold uppercase tracking-wider text-xs rounded-xl border border-gray-300 flex items-center gap-2 transition-colors"
              >
                <IconMapPin className="w-4 h-4 text-main" />
                <span>Open in Google Maps</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
