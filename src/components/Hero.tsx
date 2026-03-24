"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const headingLineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const scrollIndicator = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 1.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl"
      >
        {/* Label */}
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-accent mb-8 md:mb-10"
        >
          Head of Marketing &middot; AI Implementation
        </motion.p>

        {/* Main Heading */}
        <div className="heading-xl mb-8 md:mb-10">
          <motion.div
            custom={0}
            variants={headingLineVariants}
            initial="hidden"
            animate="visible"
          >
            Scaling Marketing
          </motion.div>
          <motion.div
            custom={1}
            variants={headingLineVariants}
            initial="hidden"
            animate="visible"
          >
            with Systems, Data,
          </motion.div>
          <motion.div
            custom={2}
            variants={headingLineVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-accent">AI</span> &amp; Creativity
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="body-lg max-w-2xl mb-10 md:mb-14"
        >
          Building the bridge between marketing intuition and machine
          intelligence — from ad strategy to proprietary tools.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          <button
            onClick={() => handleScroll("#work")}
            className="bg-accent text-white rounded-full px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-accent-dark transition-colors duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="border border-accent text-accent rounded-full px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollIndicator}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
