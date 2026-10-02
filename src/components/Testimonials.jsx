import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/dispatchData";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  if (!total) return null;

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      className="border-t border-slate-200 bg-white py-10 sm:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-[42px] font-normal leading-[1.05] tracking-tight text-[#161616] lg:text-[58px]">
            Trusted By{" "}
            <span className="text-primary-navy">Carriers.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-slate-500">
            See what owner-operators and carriers have to say about working
            with our dispatch team.
          </p>
        </motion.div>

        {/* Testimonial */}
        <div
          className="mx-auto mt-10 max-w-4xl sm:mt-14"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative border border-slate-200 bg-slate-50 px-6 py-4 text-center sm:px-12 sm:py-4 lg:px-20 lg:py-8">

                {/* Quote Icon */}
                <Quote className="mx-auto mb-6 h-10 w-10 text-primary-navy/15" />

                {/* Quote */}
                <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9 lg:text-[22px]">
                  “{testimonial.quote}”
                </p>

                {/* Author */}
                <div className="mt-4 flex flex-col items-center">

                  <h3 className="mt-4 text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.role || "Carrier"}
                    {testimonial.location && ` · ${testimonial.location}`}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-center gap-4">

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 cursor-pointer transition-all duration-300 rounded-full ${
                    index === current
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}