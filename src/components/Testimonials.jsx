import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/dispatchData";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS.length;

  // Auto slider
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    if (total <= 3) return TESTIMONIALS;

    return [0, 1, 2].map((offset) => TESTIMONIALS[(current + offset) % total]);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      className="border-y border-slate-200 bg-white py-16 sm:py-20 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Here's what{" "}
            <span className="text-amber-500">people are saying</span>
          </h2>

          {/* Centered underline */}
          <div className="relative mx-auto mt-4 h-1 w-[50%] overflow-hidden rounded-full bg-slate-200">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-primary-navy" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="overflow-visible pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="group relative z-10 flex min-h-76.25 flex-col items-center rounded-2xl border border-[#e7e7e7] bg-white px-6 py-7 text-center shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#d8d8d8] hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)] sm:px-7"
                >
                  {/* Quote Icon */}
                  <div className="absolute right-5 top-5 text-[#e9e9e9] transition-colors duration-300 group-hover:text-[#dedede]">
                    <Quote size={42} strokeWidth={1.4} fill="currentColor" />
                  </div>

                  {/* Top Decoration */}
                  <div className="relative z-20 mb-6 h-2 w-16 rounded-full bg-primary-navy">
                    {/* Center Dot */}
                    <div className="absolute z-10 left-1/2 -top-14 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-amber ring-2 ring-primary-navy" />

                    {/* Left Decorative Line */}
                    <div className="absolute -left-8 -top-14 h-0.5 w-16 origin-right -translate-y-1/2 rotate-[-65deg] rounded-full bg-primary-navy" />

                    {/* Right Decorative Line */}
                    <div className="absolute -right-8 -top-14 h-0.5 w-16 origin-left -translate-y-1/2 rotate-65 rounded-full bg-primary-navy" />
                  </div>

                  {/* Quote */}
                  <p className="relative z-10 max-w-85 text-[15px] leading-6 text-gray-500">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-auto flex w-full items-center justify-center gap-3 pt-8">
                    {/* Profile Image */}
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#e5e5e5] ring-1 ring-[#eeeeee]">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#d9d9d9] text-lg font-semibold text-[#666]">
                          {testimonial.name?.charAt(0)?.toUpperCase()}
                        </div>
                      )}
                    </div>

                    {/* Name + Role */}
                    <div className="text-left">
                      <h3 className="text-[14px] font-medium leading-5 text-[#222]">
                        {testimonial.name}
                      </h3>

                      <p className="text-[13px] leading-5 text-[#777]">
                        {testimonial.role || "Carrier"}
                      </p>

                      {testimonial.location && (
                        <p className="text-[12px] leading-4 text-[#999]">
                          {testimonial.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider dots */}
        {total > 3 && (
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 bg-primary-navy"
                    : "w-2 bg-[#d5d5d5] hover:bg-[#999]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
