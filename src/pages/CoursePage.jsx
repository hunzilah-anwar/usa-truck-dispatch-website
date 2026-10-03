import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DISPATCH_COURSE_DATA, COMPANY_DETAILS } from "../data/dispatchData";
import {
  IconCheckCircle,
  IconArrowRight,
  IconWhatsApp,
} from "../components/Icons";
import courseImage from "../assets/images/course.jpg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const syllabusVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

export default function CoursePage() {
  const [activeModule, setActiveModule] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "Complete Beginner",
    preferredTiming: "Evening Batch (Online Live)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setErrorMsg("Please fill in your name, email, and phone number.");
      return;
    }
    setSubmitted(true);
    setErrorMsg("");
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-main">
        <img
          src={courseImage}
          alt="Truck Dispatch Training"
          className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-transparent to-primary/80" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-primary/80" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-3xl"
          >
            <div className="overflow-hidden sm:p-10 lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-sm font-black uppercase tracking-[0.2em] text-white
                ">
                  {DISPATCH_COURSE_DATA.badge}
                </span>
              </div>

              <h1 className="text-[42px] font-normal leading-[1.02] tracking-tight text-white sm:text-[58px] lg:text-[72px]">
                Learn The
                <br />
                Business Behind
                <br />
                <span className="text-secondery">The Truck.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-base">
                Learn how to find quality freight, negotiate better rates,
                manage carrier paperwork, and build the skills needed to run a
                professional truck dispatching business.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#enroll-form"
                  className="group inline-flex items-center gap-2 bg-secondery px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white hover:text-main transition-all hover:bg-white"
                >
                  <span>Enroll In Next Batch</span>
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href={COMPANY_DETAILS.whatsapplink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white hover:text-main"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  <span>Inquire About Course</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <div className="py-8 bg-gray-50 border-b border-gray-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {DISPATCH_COURSE_DATA.stats.map((s, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-main">
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Who Is This Course For? */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <span className="text-xs font-black uppercase tracking-widest text-secondery block">
            TARGET AUDIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary">
            Who This Dispatch Academy Is Designed For
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            No prior logistics experience required. We guide you from basic
            freight terminology to live real-world broker call execution.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {DISPATCH_COURSE_DATA.targetAudience.map((aud, idx) => (
            <motion.div
              variants={fadeInUp}
              key={idx}
              className="bg-white/80 backdrop-blur-md p-7 rounded-2xl border border-gray-200 shadow-sm space-y-3 hover:border-secondery transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-main font-black text-lg flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-extrabold text-primary">
                {aud.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {aud.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Comprehensive 8-Module Syllabus */}
      <section className="py-16 sm:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center space-y-3 mb-12"
          >
            <span className="text-xs font-black uppercase tracking-widest text-main block">
              DETAILED SYLLABUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-primary">
              8 Step-by-Step Training Modules
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Each module includes live video walkthroughs, interactive homework
              assignments, real document analysis, and actionable negotiation
              drills.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {DISPATCH_COURSE_DATA.modules.map((mod, idx) => {
              const isOpen = activeModule === idx;
              return (
                <motion.div
                  variants={fadeInUp}
                  key={mod.number}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setActiveModule(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="w-9 h-9 rounded-xl bg-main text-secondery font-black text-xs sm:text-sm flex items-center justify-center shrink-0">
                        {mod.number}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-primary">
                          {mod.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                          {mod.summary}
                        </p>
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={syllabusVariant}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 space-y-3">
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                            {mod.summary}
                          </p>
                          <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                            <span className="text-xs font-black uppercase tracking-wider text-primary block">
                              Topics Covered:
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {mod.topics.map((top, tIdx) => (
                                <li
                                  key={tIdx}
                                  className="flex items-start gap-2 text-xs text-gray-600"
                                >
                                  <span className="text-emerald-500 font-bold">
                                    ✓
                                  </span>
                                  <span>{top}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Deliverables & Materials Included */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <span className="text-xs font-black uppercase tracking-widest text-secondery block">
            COURSE ASSETS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary">
            What You Receive Upon Enrollment
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Get lifetime access to our operational templates, rate calculators,
            and legal documents.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DISPATCH_COURSE_DATA.deliverables.map((del, idx) => (
            <motion.div
              variants={fadeInUp}
              key={idx}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2 hover:border-secondery transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-lg">
                📁
              </div>
              <h3 className="font-extrabold text-base text-primary">
                {del.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {del.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Enrollment Form Section */}
      <section
        id="enroll-form"
        className="py-16 sm:py-20 bg-linear-to-b from-gray-50 to-white border-t border-gray-200"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xl space-y-6">
            <div className="text-center space-y-2 border-b border-gray-100 pb-6">
              <span className="text-xs font-black uppercase tracking-widest text-main block">
                RESERVE YOUR SEAT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-primary">
                Enroll in the Next Training Batch
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Fill out the quick form below. Our training coordinator will
                contact you with batch schedules, fee structure, and enrollment
                confirmation.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <IconCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-primary">
                  Enrollment Application Received!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. A course
                  coordinator will reach out to you at{" "}
                  <strong>{formData.phone}</strong> and email the syllabus
                  packet to <strong>{formData.email}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={COMPANY_DETAILS.whatsapplink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-whatsapp-green hover:bg-[#20bd5a] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    <span>Confirm Instantly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs"
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <AnimatePresence>
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 font-medium"
                    >
                      {errorMsg}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none bg-gray-50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone Number (WhatsApp Preferred){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none bg-gray-50 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Current Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none bg-gray-50 focus:bg-white transition-colors"
                    >
                      <option value="Complete Beginner">
                        Complete Beginner (No Experience)
                      </option>
                      <option value="Truck Driver / CDL Holder">
                        Truck Driver / CDL Holder
                      </option>
                      <option value="Freight Broker / Agent">
                        Freight Broker / Agent
                      </option>
                      <option value="Fleet Owner">Fleet Owner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Preferred Batch Schedule
                    </label>
                    <select
                      name="preferredTiming"
                      value={formData.preferredTiming}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none bg-gray-50 focus:bg-white transition-colors"
                    >
                      <option value="Evening Batch (Online Live)">
                        Evening Batch (Online Live)
                      </option>
                      <option value="Weekend Intensive">
                        Weekend Intensive
                      </option>
                      <option value="Self-Paced Recorded">
                        Self-Paced with Mentor Sessions
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Questions or Specific Goals
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you want to achieve or any questions you have about the curriculum..."
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none bg-gray-50 focus:bg-white resize-none transition-colors"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 bg-secondery hover:bg-amber-300 text-gray-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Course Application</span>
                  <IconArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
