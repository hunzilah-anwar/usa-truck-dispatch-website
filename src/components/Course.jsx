import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconArrowRight, IconCheck } from './Icons';
import courseImg from '../assets/images/course.jpg';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' }
  }
};

export default function Course() {
  const points = [
    'Live Load Board Demonstrations',
    'Broker Negotiation Scripts & Templates',
    'Official Certificate of Completion'
  ];

  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          {/* Content */}
          <div>

            <motion.h2
              variants={itemVariants}
              className="text-[42px] font-normal leading-[1.05] tracking-tight text-[#161616] lg:text-[58px]"
            >
              Learn The
              <br />
              <span className="text-primary-navy">Business Behind</span>
              <br />
              The Truck.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
            >
              Build the skills to start and operate a professional truck
              dispatching business. Learn load boards, broker negotiations,
              carrier setup, and the workflows used every day in dispatching.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 space-y-3">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-slate-700">
                  <IconCheck className="h-4 w-4 text-amber-500" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <Link
                to="/course"
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-orange-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
              >
                <span className="relative z-10">Explore The Course</span>
                <IconArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-primary-navy transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >

            <div
              className="relative overflow-hidden shadow-xl"
            >
              <img
                src={courseImg}
                alt="Truck Dispatcher Course Training"
                className="h-90 w-full object-cover sm:h-110"
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                      Professional Training
                    </p>
                    <h3 className="mt-2 text-2xl text-white sm:text-3xl font-normal leading-[1.05] tracking-tight">
                      Start Your Dispatch Career
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden h-20 w-20 border-b-2 border-l-2 border-amber-500 sm:block" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}