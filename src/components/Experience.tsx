"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const experiences = [
  {
    role: "Head of Marketing",
    company: "Namou Properties",
    period: "Sep 2025 — Present",
    description:
      "Leading multi-channel marketing strategy across paid media, content, and CRM. Guiding AI and automation implementation across all marketing workflows.",
  },
  {
    role: "Senior Marketing Manager",
    company: "Namou Properties",
    period: "May 2025 — Sep 2025",
    description:
      "Optimized ad campaigns across Meta, Google, and property platforms. Executed WhatsApp broadcast campaigns and delivered weekly analytics.",
  },
  {
    role: "Digital Marketing Manager",
    company: "800 Storage, Dubai",
    period: "Jan 2025 — May 2025",
    description:
      "Drove digital growth through multi-channel campaigns. Managed Meta, Google, TikTok, and LinkedIn ad campaigns for lead generation.",
  },
  {
    role: "AI/ML Engineer",
    company: "Crypted Security Integration, Dubai",
    period: "Jan 2025 — Dec 2025",
    description:
      "Built predictive ML models for pricing on Azure. Data cleaning, model training, and deployment through web interfaces. (Contract)",
  },
  {
    role: "Social Media Manager",
    company: "Creatingz S.A.L",
    period: "Feb 2024 — May 2025",
    description:
      "Led brand strategies across GCC/MENA markets. Created bilingual content for Instagram, LinkedIn, Facebook, and Twitter.",
  },
  {
    role: "Marketing Copywriter",
    company: "Nudge Communications",
    period: "Mar 2023 — Feb 2024",
    description:
      "Wrote engagement-driving content across fashion, real estate, luxury, tech, and F&B industries.",
  },
];

const INITIAL_COUNT = 3;

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="py-24 md:py-32 section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-accent mb-4"
        >
          Experience
        </motion.p>

        <motion.h2 variants={fadeInUp} className="heading-lg mb-16">
          The Path So Far
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-0 w-[2px] bg-accent/15" />

          <div className="flex flex-col gap-10">
            {experiences.slice(0, INITIAL_COUNT).map((exp) => (
              <motion.div
                key={exp.role + exp.company}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-10"
              >
                {/* Dot */}
                <span className="absolute left-0 top-[7px] w-3 h-3 rounded-full bg-accent" />

                <h3 className="text-lg font-semibold text-text-primary">
                  {exp.role}
                </h3>

                <p className="text-sm mt-0.5">
                  <span className="text-accent font-medium">{exp.company}</span>
                  <span className="text-text-muted mx-2">&middot;</span>
                  <span className="text-text-muted">{exp.period}</span>
                </p>

                <p className="text-sm text-text-secondary mt-1 max-w-xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}

            <AnimatePresence>
              {expanded &&
                experiences.slice(INITIAL_COUNT).map((exp) => (
                  <motion.div
                    key={exp.role + exp.company}
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      height: "auto",
                      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      height: 0,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="relative pl-10"
                  >
                    {/* Dot */}
                    <span className="absolute left-0 top-[7px] w-3 h-3 rounded-full bg-accent" />

                    <h3 className="text-lg font-semibold text-text-primary">
                      {exp.role}
                    </h3>

                    <p className="text-sm mt-0.5">
                      <span className="text-accent font-medium">
                        {exp.company}
                      </span>
                      <span className="text-text-muted mx-2">&middot;</span>
                      <span className="text-text-muted">{exp.period}</span>
                    </p>

                    <p className="text-sm text-text-secondary mt-1 max-w-xl">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Toggle button */}
        <motion.div variants={fadeInUp} className="mt-10 pl-10">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-accent text-sm underline cursor-pointer transition-opacity hover:opacity-70"
          >
            {expanded ? "Show less" : "View full timeline"}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
