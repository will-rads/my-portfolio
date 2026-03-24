"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const experiences = [
  {
    period: "Sep 2025 — Present",
    role: "Head of Marketing",
    company: "Namou Properties",
    description:
      "Leading multi-channel marketing strategy and AI implementation across all workflows.",
    tag: "LEADERSHIP",
  },
  {
    period: "May — Sep 2025",
    role: "Senior Marketing Manager",
    company: "Namou Properties",
    description:
      "Optimized campaigns across Meta, Google, property platforms. Weekly analytics and reporting.",
    tag: "MANAGEMENT",
  },
  {
    period: "Jan — May 2025",
    role: "Digital Marketing Manager",
    company: "800 Storage, Dubai",
    description:
      "Multi-channel campaigns for lead generation across Meta, Google, TikTok, LinkedIn.",
    tag: "DIGITAL",
  },
  {
    period: "Jan — Dec 2025",
    role: "AI/ML Engineer",
    company: "Crypted Security, Dubai",
    description:
      "Built predictive ML models for pricing on Azure. Contract-based.",
    tag: "ENGINEERING",
  },
  {
    period: "Feb 2024 — May 2025",
    role: "Social Media Manager",
    company: "Creatingz S.A.L",
    description:
      "Brand strategies across GCC/MENA. Bilingual content creation.",
    tag: "SOCIAL",
  },
  {
    period: "Mar 2023 — Feb 2024",
    role: "Marketing Copywriter",
    company: "Nudge Communications",
    description:
      "Content for fashion, real estate, luxury, tech, and F&B.",
    tag: "CREATIVE",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-40 section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p variants={fadeInUp} className="label">
          EXPERIENCE
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-20"
        >
          The Path So Far
        </motion.h2>

        <div>
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="grid grid-cols-12 gap-4 items-baseline">
                {/* Period */}
                <div className="col-span-3 md:col-span-2 font-mono text-sm text-text-muted">
                  {exp.period}
                </div>

                {/* Role, Company, Description */}
                <motion.div
                  className="col-span-7 md:col-span-8"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="text-lg md:text-xl font-semibold text-text-primary">
                    {exp.role}
                  </div>
                  <div className="text-accent text-sm font-medium mt-0.5">
                    {exp.company}
                  </div>
                  <p className="text-sm text-text-secondary mt-2 max-w-2xl font-light">
                    {exp.description}
                  </p>
                </motion.div>

                {/* Tag */}
                <div className="col-span-2 font-mono text-xs text-text-muted/40 uppercase text-right">
                  {exp.tag}
                </div>
              </div>

              {/* Divider between entries */}
              {index < experiences.length - 1 && (
                <div className="h-[1px] bg-white/5 w-full my-8" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
