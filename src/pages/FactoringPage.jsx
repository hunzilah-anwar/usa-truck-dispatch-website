import { useState } from "react";
import { motion } from "framer-motion";
import { IconMail } from "../components/Icons";
import { COMPANY_DETAILS } from "../data/dispatchData";

export default function FactoringPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.factoringEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white py-20"
    >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
        >

          {/* Direct Email Referral Box */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-blue-50 via-slate-50 to-amber-50 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-5"
        >
          <h3 className="text-2xl sm:text-3xl font-normal text-primary">
            Official Factoring Inquiries & Direct Submissions
          </h3>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Email your carrier information and factoring requests directly to
            our dedicated finance team:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href={`mailto:${COMPANY_DETAILS.factoringEmail}`}
              className="px-6 py-3.5 bg-main hover:bg-secondery text-white font-extrabold text-xs tracking-wider rounded-xl shadow transition-all flex items-center gap-2"
            >
              <IconMail className="w-4 h-4" />
              <span>Email: {COMPANY_DETAILS.factoringEmail}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 cursor-pointer bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold text-xs rounded-xl transition-all"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </motion.div>
        </motion.div>
    </motion.div>
  );
}
