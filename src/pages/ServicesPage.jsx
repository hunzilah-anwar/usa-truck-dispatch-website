import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EQUIPMENT_DETAILS } from "../data/dispatchData";
import { IconArrowRight, IconCheckCircle } from "../components/Icons";
import Capabilities from "../components/Capabilities";
// import dryVanImg from "../assets/images/dry-van.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ServicesPage({ onOpenQuote }) {
  const dryVanImg =
    "https://static.wixstatic.com/media/c837a6_d83e9bcfdd764c0f9e207e3007c7759a~mv2.png/v1/fill/w_1351,h_696,fp_0.53_0.95,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_d83e9bcfdd764c0f9e207e3007c7759a~mv2.png";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-main">
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={dryVanImg}
          alt="Professional truck dispatching"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-transparent to-primary/80" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-primary/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex  w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mt-20"
          >
            <h1 className="text-[46px] font-normal leading-[1.02] tracking-tight text-white sm:text-[60px] lg:text-[76px]">
              Dispatch Built
              <br />
              Around
              <br />
              <span className="text-orange-400">Your Truck.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-slate-200 sm:text-base">
              From finding the right freight to negotiating rates and managing
              the details, we handle the work behind your loads so you can stay
              focused on the road.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                onClick={onOpenQuote}
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-orange-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
              >
                <span className="relative z-10">Get A Quote</span>
                <IconArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
                <span className="absolute inset-0 z-10 flex translate-x-full items-center justify-center gap-2 text-main transition-transform duration-300 group-hover:translate-x-0">
                  Get A Quote
                  <IconArrowRight className="h-4 w-4" />
                </span>
              </button>

              <a
                href="#services"
                className="text-xs font-bold uppercase tracking-wider text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-orange-400"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end"
          >
            <div>
              <h2 className="text-[42px] font-normal leading-[1.05] tracking-tight text-primary lg:text-[58px]">
                One Team.
                <br />
                <span className="text-main">Every Service.</span>
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-slate-500 lg:pb-1">
              From finding freight to negotiating rates and handling the
              details, our dispatch services are built around the way you run
              your truck.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="border-t border-slate-200"
          >
            {EQUIPMENT_DETAILS.map((service) => (
              <motion.article
                key={service.id}
                variants={itemVariants}
                className="group border-b border-slate-200 py-8 sm:py-10"
              >
                <Link
                  to={`/services/${service.id}`}
                  className="grid items-center gap-7 lg:grid-cols-[320px_1fr] lg:gap-10"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden sm:h-60 lg:h-full">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-main/50 to-transparent" />

                    <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white">
                      {service.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-main sm:text-3xl">
                      {service.name}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 text-xs font-medium text-slate-600"
                        >
                          <IconCheckCircle className="h-3.5 w-3.5 text-orange-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <Capabilities />
    </motion.div>
  );
}
