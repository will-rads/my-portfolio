"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  slideInLeft,
  slideInRight,
  fadeInUp,
} from "@/lib/motion";

const stats = [
  { value: "6+", label: "Years in Marketing" },
  { value: "AI", label: "Implementation Lead" },
  { value: "MS", label: "Applied AI (LAU)" },
  { value: "Oxford", label: "AI Leadership" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Left Column — Quote */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-2 flex items-start"
        >
          <blockquote className="lg:sticky lg:top-32">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-snug text-text-primary tracking-tight">
              &ldquo;All your brand needs is some space to breathe.&rdquo;
            </p>
            <cite className="block mt-6 text-sm text-text-muted not-italic tracking-wide">
              — A belief I work by
            </cite>
            <div className="mt-8 w-12 h-[1px] bg-accent/30" />
          </blockquote>
        </motion.div>

        {/* Right Column — Bio */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-3"
        >
          <motion.span
            variants={fadeInUp}
            className="block text-sm uppercase tracking-widest text-accent mb-4"
          >
            About
          </motion.span>

          <motion.h2 variants={fadeInUp} className="heading-md mb-8">
            From Philosophy to AI
          </motion.h2>

          <motion.p variants={fadeInUp} className="body-md mb-6">
            I studied philosophy at the American University of Beirut — learning
            to think in frameworks, question assumptions, and find structure in
            ambiguity. That foundation shaped how I approach everything:
            marketing, branding, and now artificial intelligence.
          </motion.p>

          <motion.p variants={fadeInUp} className="body-md mb-6">
            Today, as Head of Marketing at Namou Properties, I lead
            multi-channel growth across paid media, content, and CRM — while
            implementing AI and automation across every workflow. I&apos;ve built
            proprietary internal tools, connected our ad accounts to AI agents,
            and created dashboards that let us make faster, sharper decisions.
          </motion.p>

          <motion.p variants={fadeInUp} className="body-md mb-12">
            I&apos;m currently pursuing a Master&apos;s in Applied AI at the
            Lebanese American University and completing the University of
            Oxford&apos;s Leading AI Implementation Programme. My goal is simple:
            make marketing smarter, faster, and more human at the same time.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-sage/20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <span className="block font-serif text-2xl text-accent font-medium">
                  {stat.value}
                </span>
                <span className="block text-sm text-text-muted mt-1 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
