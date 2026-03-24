"use client";

import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  letterReveal,
  lineReveal,
  blurIn,
} from "@/lib/motion";

const FIRST_NAME = "WILLIAM";
const LAST_NAME = "RADIYEH";

function AnimatedWord({
  word,
  startIndex,
}: {
  word: string;
  startIndex: number;
}) {
  return (
    <span className="inline-flex overflow-hidden">
      {word.split("").map((char, i) => (
        <motion.span
          key={`${char}-${startIndex + i}`}
          variants={letterReveal}
          custom={startIndex + i}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* ── Background effects ── */}
      <div className="glow-spot absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/20 pointer-events-none" />
      <div className="glow-spot absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent-blue/15 pointer-events-none" />
      <div className="grain-overlay" />

      {/* ── Content ── */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 section-padding"
      >
        {/* Pipe bar */}
        <motion.p
          variants={fadeIn}
          transition={{ delay: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted/60 mb-10 md:mb-14"
        >
          | MARKETING | AI IMPLEMENTATION | STRATEGY | SYSTEMS |
        </motion.p>

        {/* Name */}
        <div className="text-[clamp(3rem,12vw,10rem)] font-black uppercase tracking-tight leading-[0.9] text-text-primary">
          <div className="overflow-hidden">
            <AnimatedWord word={FIRST_NAME} startIndex={0} />
          </div>
          <div className="overflow-hidden">
            <AnimatedWord word={LAST_NAME} startIndex={FIRST_NAME.length} />
          </div>
        </div>

        {/* Divider line */}
        <motion.div
          variants={lineReveal}
          className="my-8 h-[1px] max-w-2xl bg-gradient-to-r from-transparent via-accent to-transparent origin-left"
        />

        {/* Tagline */}
        <motion.p
          variants={blurIn}
          className="text-lg md:text-xl font-light tracking-wide text-text-secondary"
        >
          Head of Marketing &amp; AI Implementation
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-base text-text-muted font-light max-w-lg"
        >
          Scaling marketing with systems, data, AI, and creativity.
        </motion.p>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="relative w-5 h-5 rounded-full border border-text-muted/30 flex items-center justify-center">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block w-1 h-1 rounded-full bg-text-muted/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
