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
      className="factoring-page bg-white"
    >
      {/* Header Banner */}
      <div className="page-hero-light py-16 sm:py-20 border-b border-slate-200">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container-custom text-center space-y-4"
        >
          <div className="text-emerald-900 text-sm font-bold uppercase tracking-wider">
            <span>Express Freight Finance Official Partner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Apply For{" "}
            <span className="text-primary-navy">Freight Factoring</span> &
            Same-Day Cash Flow
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Our funding program helps ensure motor carriers have uninterrupted
            cash flow to cover diesel, insurance, and payroll. Get paid within
            24 hours of delivery.
          </p>

          {/* Direct Email Referral Box */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 bg-linear-to-r from-blue-50 via-slate-50 to-amber-50 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-5"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Official Factoring Inquiries & Direct Submissions
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Email your carrier information and factoring requests directly to
            our dedicated finance team:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href={`mailto:${COMPANY_DETAILS.factoringEmail}`}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider rounded-xl shadow transition-all flex items-center gap-2"
            >
              <IconMail className="w-4 h-4" />
              <span>Email: {COMPANY_DETAILS.factoringEmail}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl transition-all"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
