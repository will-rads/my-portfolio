"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";

export default function Philosophy() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-24 md:py-40 section-padding bg-bg-dark overflow-hidden"
    >
      {/* Grain overlay — scoped to this section with reduced opacity */}
      <div
        className="grain-overlay"
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          right: "-50%",
          bottom: "-50%",
          opacity: 0.15,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Decorative quotation mark */}
        <motion.div
          variants={fadeInUp}
          className="text-8xl font-serif text-accent opacity-40 leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </motion.div>

        {/* Main quote */}
        <motion.blockquote
          variants={fadeInUp}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-white/90 -mt-6"
        >
          You don&rsquo;t need to go viral. You need to be consistent with
          what&rsquo;s already working.
        </motion.blockquote>

        {/* Divider line */}
        <motion.div
          variants={fadeInUp}
          className="w-16 h-[1px] bg-accent mx-auto my-8"
        />

        {/* Secondary quote */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-white/50 font-light italic"
        >
          Input to output. Pattern to meaning.
        </motion.p>

        {/* Attribution */}
        <motion.p
          variants={fadeInUp}
          className="text-sm text-white/30 uppercase tracking-widest mt-8"
        >
          &mdash; Principles I build on
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
