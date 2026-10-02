import { motion } from "framer-motion";

export default function Capabilities() {
  const items = [
    {
      image: "https://static.wixstatic.com/media/c837a6_7039154e80894c3ebb6856644e76c0c6~mv2.jpg",
      title: "Reliable Dispatching",
      text: "Professional load management and daily dispatch support to keep your trucks moving.",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_da99d8984e144b2983cc543a76c6a61c~mv2.jpg",
      title: "Better Paying Loads",
      text: "We search, negotiate, and book quality freight that helps maximize your truck's earning potential.",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_dde39912ea9e42d981b926e64f5fd5ac~mv2.jpg",
      title: "24/7 Driver Support",
      text: "From booking to delivery, our dispatch team stays available to handle your day-to-day needs.",
    },
  ];

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="standard"
      className="border-t border-gray-300 bg-[#fefefe] py-10 lg:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
        <motion.div
          variants={fadeUp}
          className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-start lg:mb-14"
        >
          <div>
            <h2 className="text-[42px] font-normal leading-[1.1] tracking-tight text-[#161616] lg:text-[58px]">
              Dispatching built
              <br />
              for your business
            </h2>

            <p className="mt-5 text-[18px] leading-[1.6] text-[#161616]">
              Everything you need to keep your trucks loaded, moving, and profitable.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            {items.map((item) => (
              <div key={item.title} className="h-21.25 w-27.5 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          {items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <div className="flex flex-col justify-between gap-5 border-b border-gray-300 py-7 md:flex-row md:items-center">
                <h3 className="text-[28px] font-normal leading-[1.2] text-[#161616] lg:text-[34px]">
                  {item.title}
                </h3>

                <p className="max-w-90 text-[16px] leading-[1.6] text-[#161616]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}