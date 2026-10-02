import { motion } from "framer-motion";
import TruckGateImg from "../assets/images/truck-gate.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative min-h-150 h-screen w-full overflow-hidden bg-black text-white">

      {/* Background Video */}
      <motion.video
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
        src="https://video.wixstatic.com/video/c837a6_7dc83e59b8ae496fbc4607c9bd40bab3/720p/mp4/file.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex flex-wrap w-full max-w-7xl items-end justify-between gap-10 px-4 pb-10 lg:px-6"
        >

          {/* Heading */}
          <motion.div variants={itemVariants} className="shrink-0">
            <h1 className="text-[48px] font-bold leading-[0.9] tracking-[-2px] sm:text-[64px] xl:text-[82px]">
              YOUR CARGO,
              <br />
              OUR COMMITMENT
            </h1>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            variants={itemVariants}
            className="flex w-full max-w-103.75 shrink-0 bg-orange-500 p-3 text-black"
          >
            <div className="h-35 w-33.75 shrink-0 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={TruckGateImg}
                alt="Truck"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between px-4 py-1">
              <p className="text-[15px] leading-[1.35]">
                Delivering unparalleled trucking and logistics solutions
                across the nation. We move your business forward.
              </p>

              <button
                onClick={onOpenQuote}
                className="w-fit text-[15px] font-medium underline underline-offset-2 transition hover:text-black/60"
              >
                GET A QUOTE
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}