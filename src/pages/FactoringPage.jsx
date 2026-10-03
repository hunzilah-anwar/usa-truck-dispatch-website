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

  const factoringImg =
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&auto=format&fit=crop&q=85";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <section className="relative overflow-hidden bg-main py-16">
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={factoringImg}
          alt="Freight factoring and financial services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-transparent to-primary/80" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-primary/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 px-6 py-10 text-center shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-10 sm:py-14"
          >
            {/* Glass Highlight */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-white/5" />

            {/* Top Glass Line */}
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-linear-to-r from-transparent via-white/70 to-transparent" />

            <div className="relative z-10">
              <h1 className="text-[42px] font-normal leading-[1.05] tracking-tight text-white sm:text-[56px] lg:text-[68px]">
                Official Factoring
                <br />
                <span className="text-orange-400">Inquiries.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-slate-200 sm:text-base">
                Email your carrier information and factoring requests directly
                to our dedicated finance team.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${COMPANY_DETAILS.factoringEmail}`}
                  className="inline-flex items-center gap-2 bg-secondery px-6 py-3.5 text-xs font-normal tracking-[2px] text-white transition-all hover:bg-white hover:text-main"
                >
                  <IconMail className="h-4 w-4" />
                  {COMPANY_DETAILS.factoringEmail}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="cursor-pointer bg-white/10 px-6 py-3.5 text-xs font-normal uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20"
                >
                  {copied ? "Copied!" : "Copy Email"}
                </button>
              </div>

              <p className="mt-5 text-xs text-white/60">
                {COMPANY_DETAILS.factoringEmail}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
