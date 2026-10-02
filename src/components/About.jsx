import { motion } from "framer-motion";
import { IconArrowRight, IconCheckCircle } from "./Icons";
import dispatcherImg from "../assets/images/dispatcher.jpg";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Capabilities() {
  const points = [
    "Quality loads matched to your truck and preferred lanes",
    "Rate negotiation and complete broker communication",
    "Load paperwork, confirmations, and setup support",
  ];

  return (
    <motion.section
      id="capabilities"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-white pb-10 sm:pb-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-4xl sm:text-[42px] font-normal leading-[1.1] tracking-tight text-primary lg:text-[58px]">
                Your Truck.
                <br />
                <span className="text-main">Our Dispatch.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base leading-relaxed text-gray-700"
            >
              We help owner-operators and small fleets find quality freight,
              negotiate better rates, and handle the daily dispatch work so you
              can spend more time driving and growing your business.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondery" />
                  <span className="text-sm font-semibold text-primary">
                    {point}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden bg-secondery px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <span className="relative z-10">Get Started</span>
                  <IconArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 -translate-x-full bg-main transition-transform duration-300 group-hover:translate-x-0" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative h-75 overflow-hidden rounded-2xl shadow-xl sm:h-105"
          >
            <img
              src={dispatcherImg}
              alt="Professional truck dispatching"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
