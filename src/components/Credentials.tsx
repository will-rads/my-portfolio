"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/motion";

const education = [
  {
    period: "2024 — 2026",
    institution: "LAU",
    degree: "MS in Applied Artificial Intelligence",
  },
  {
    period: "Graduated 2023",
    institution: "AUB",
    degree: "BA in Philosophy, Applied & Business Ethics",
  },
  {
    period: "Apr — May 2026",
    institution: "Oxford",
    degree: "Leading AI Implementation Programme",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-32 md:py-40 section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.span variants={fadeInUp} className="label">
          CREDENTIALS
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-20"
        >
          Education &amp; Recognition
        </motion.h2>
      </motion.div>

      {/* Section A — Education */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {education.map((entry, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-2 sm:gap-0"
          >
            <div className="font-mono text-sm text-text-muted min-w-[140px] shrink-0">
              {entry.period}
            </div>
            <div>
              <div className="text-accent text-sm font-medium">
                {entry.institution}
              </div>
              <div className="text-lg font-semibold text-text-primary">
                {entry.degree}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Section B — Certifications */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card 1 — Microsoft Azure */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-bg-surface rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition"
        >
          {/* Shield icon */}
          <svg
            className="w-10 h-10 text-accent mb-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 2.18l7 3.89v4.27c0 4.54-3.12 8.78-7 9.82-3.88-1.04-7-5.28-7-9.82V8.07l7-3.89z"
              fill="currentColor"
            />
            <path
              d="M10 14.2l-2.6-2.6L6 13l4 4 8-8-1.4-1.4L10 14.2z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-lg font-semibold text-text-primary">
            Azure AI Fundamentals
          </h3>
          <p className="text-sm text-accent">AI-900 &middot; Microsoft Certified</p>
          <p className="text-sm text-text-secondary mt-2">
            ML, computer vision, NLP in Azure.
          </p>
        </motion.div>

        {/* Card 2 — PwC */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-bg-surface rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition"
        >
          <Image
            src="/images/pwc-certificate.png"
            alt="PwC ElevateME"
            width={400}
            height={200}
            className="rounded-xl mb-4 w-full"
          />
          <h3 className="text-lg font-semibold text-text-primary">
            PwC ElevateME Mentorship
          </h3>
          <p className="text-sm text-accent">
            PwC Middle East &middot; Jan — Mar 2026
          </p>
          <p className="text-sm text-text-secondary mt-2">
            Selected as mentee, bridging academia and professional world.
          </p>
        </motion.div>

        {/* Card 3 — LAU AI */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-bg-surface rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition"
        >
          <Image
            src="/images/ai-badge.png"
            alt="AI Fundamentals"
            width={200}
            height={200}
            className="rounded-xl mb-4 w-20 h-20 object-contain"
          />
          <h3 className="text-lg font-semibold text-text-primary">
            AI Fundamentals Achievement
          </h3>
          <p className="text-sm text-accent">Lebanese American University</p>
          <p className="text-sm text-text-secondary mt-2">
            Skills certification in AI Fundamentals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
