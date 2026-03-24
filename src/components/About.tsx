"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  lineReveal,
} from "@/lib/motion";

const stats = [
  { value: "6+", label: "Years in Marketing" },
  { value: "3", label: "AI Tools Built" },
  { value: "MS", label: "Applied AI" },
  { value: "Oxford", label: "AI Leadership" },
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column — Photo */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-accent/5 blur-3xl -z-10" />

          <div className="rounded-2xl overflow-hidden border border-white/5 relative">
            <Image
              src="/images/headshot.png"
              alt="William Radiyeh"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Column — Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={fadeInUp} className="label mb-6">
            ABOUT
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-text-primary"
          >
            From Philosophy
            <br />
            to Artificial Intelligence
          </motion.h2>

          {/* Accent line */}
          <motion.div
            variants={lineReveal}
            className="w-16 h-[1px] bg-accent my-8"
          />

          <div className="space-y-5">
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-text-secondary font-light leading-relaxed"
            >
              I studied philosophy at the American University of Beirut —
              learning to think in frameworks, question assumptions, and find
              structure in ambiguity. That foundation shaped how I approach
              everything: marketing, branding, and now artificial intelligence.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-text-secondary font-light leading-relaxed"
            >
              Today, as Head of Marketing at Namou Properties, I lead
              multi-channel growth across paid media, content, and CRM — while
              implementing AI and automation across every workflow. I&apos;ve
              built proprietary internal tools, connected our ad accounts to AI
              agents, and created dashboards that let us make faster, sharper
              decisions.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-text-secondary font-light leading-relaxed"
            >
              Currently pursuing a Master&apos;s in Applied AI at the Lebanese
              American University and completing Oxford&apos;s Leading AI
              Implementation Programme.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-accent font-display">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-text-muted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
