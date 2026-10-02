import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconArrowRight } from "./Icons";
import dryVanImg from "../assets/images/dry-van.jpg";
import reeferImg from "../assets/images/reefer.jpg";
import flatbedImg from "../assets/images/flatbed.jpg";

const HOME_SERVICES = [
  {
    title: "Dry Van Dispatch",
    text: "We search dry van freight based on your equipment, current location, preferred lanes, and operating requirements. We also handle broker communication, appointments, and shipment details.",
    image: dryVanImg,
  },
  {
    title: "Reefer Dispatch",
    text: "We find refrigerated freight that matches your equipment, preferred lanes, and schedule while helping review temperature requirements, appointments, and delivery expectations.",
    image: reeferImg,
  },
  {
    title: "Flatbed Dispatch",
    text: "We identify open-deck freight based on your equipment and operating preferences while helping review cargo dimensions, weight, loading instructions, tarp requirements, and delivery details.",
    image: flatbedImg,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function HomeServices() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="border-t border-slate-200 bg-white py-10 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-6">
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-col justify-between sm:gap-6 gap-2 lg:mb-14 lg:flex-row lg:items-center"
        >
          <h2 className="text-4xl sm:text-[42px] font-normal leading-[1.1] tracking-tight text-primary lg:text-[58px]">
            Professional.
            <br />
            <span className="text-main">Dispatch Services.</span>
          </h2>

          <p className="max-w-md text-[15px] leading-7 text-gray-600 lg:pb-1">
            We handle the work behind your freight — from finding suitable loads
            and communicating with brokers to organizing shipment details — so
            you can stay focused on driving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-8 md:grid-cols-3">
          {HOME_SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-60 overflow-hidden shadow-sm sm:h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-6">
                <h3 className="text-sm font-bold uppercase tracking-[1px] text-main">
                  {service.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-[15px] leading-6 text-gray-600">
                  {service.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center sm:mt-14"
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-2 overflow-hidden bg-secondery px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            <span className="relative z-10">View All Services</span>
            <IconArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-main transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
