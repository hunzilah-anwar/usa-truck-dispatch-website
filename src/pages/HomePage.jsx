import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Equipment from "../components/Equipment";
import Course from "../components/Course";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

export default function HomePage({ onOpenQuote }) {
  const services = [
    {
      image:
        "https://static.wixstatic.com/media/c837a6_33239af69a4c435780550d3c4c3c93e7~mv2.jpg",
      title: "LOAD DISPATCHING",
      text: "We find, negotiate, and book profitable loads while managing the details from pickup to delivery.",
    },
    {
      image:
        "https://static.wixstatic.com/media/c837a6_18f08973eb2e4ca5b59b40cadd433299~mv2.jpg",
      title: "FREIGHT BROKERAGE",
      text: "Access reliable freight opportunities and connect with trusted brokers across major lanes.",
    },
    {
      image:
        "https://static.wixstatic.com/media/c837a6_29c97d10edcd44e98cf5653614b91334~mv2.jpg",
      title: "ROUTE & RATE SUPPORT",
      text: "Smart route planning and rate negotiation designed to reduce empty miles and improve your revenue.",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full">
      <Hero
        onOpenQuote={() => onOpenQuote()}
        onOpenLoadRequest={() => onOpenQuote()}
      />
      <motion.section
        id="services"
        className="py-10 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <h2 className="text-4xl sm:text-[42px] font-normal leading-[1.1] tracking-tight text-primary lg:text-[58px]">
                Dispatching for
                <br />
                <span className="text-main">every mile.</span>
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-slate-600 lg:pb-1">
              Professional dispatching solutions built to keep your trucks
              loaded, your routes moving, and your business growing.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group"
              >
                {/* Image */}
                <div className="relative sm:aspect-square aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-70" />

                  <span className="absolute bottom-5 left-5 text-5xl font-light text-white/80">
                    0{services.indexOf(service) + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="py-6">
                  <h3 className="text-sm font-bold uppercase tracking-[1px] text-main">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-[15px] leading-6 text-gray-600">
                    {service.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
      <Capabilities />
      <About />
      <Equipment onOpenLoadRequest={onOpenQuote} onOpenQuote={onOpenQuote} />
      <Course />
      <Testimonials />
      <FAQ />
    </div>
  );
}
