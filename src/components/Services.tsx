"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const services = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 28 12 20 20 24 28 12 36 8" />
        <polyline points="28 8 36 8 36 16" />
        <line x1="4" y1="34" x2="36" y2="34" />
      </svg>
    ),
    title: "Marketing Leadership",
    description:
      "Developing and executing multi-channel strategies across Meta, Google, TikTok, and LinkedIn. Leading teams of designers, marketers, and analysts to deliver campaigns that align with business and investor objectives.",
    tags: ["Strategy", "Team Leadership", "Multi-channel", "ROI"],
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="20" cy="14" r="8" />
        <circle cx="20" cy="14" r="3" />
        <line x1="20" y1="6" x2="20" y2="3" />
        <line x1="20" y1="22" x2="20" y2="25" />
        <line x1="12" y1="14" x2="9" y2="14" />
        <line x1="28" y1="14" x2="31" y2="14" />
        <path d="M14 25 L10 34" />
        <path d="M26 25 L30 34" />
        <path d="M20 25 L20 34" />
        <circle cx="10" cy="35" r="1.5" />
        <circle cx="20" cy="35" r="1.5" />
        <circle cx="30" cy="35" r="1.5" />
      </svg>
    ),
    title: "AI Implementation",
    description:
      "Building proprietary AI-powered tools — from an internal marketing UI to an AI agent connected to our ad accounts. Automating creative production, reporting, and decision-making workflows to increase speed and consistency.",
    tags: ["AI Agents", "Automation", "Internal Tools", "Azure ML"],
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="20" cy="20" r="16" />
        <circle cx="20" cy="20" r="10" />
        <circle cx="20" cy="20" r="4" />
        <circle cx="20" cy="20" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Advertising & Performance",
    description:
      "Managing paid campaigns end-to-end with a custom dashboard that tracks ad status, reporting, and real-time decisions — what to boost, kill, or pause. Data-driven optimization across all platforms.",
    tags: ["Meta Ads", "Google Ads", "Dashboard", "Analytics"],
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 4 L32 14 L32 26 L20 36 L8 26 L8 14 Z" />
        <path d="M20 10 L27 15 L27 25 L20 30 L13 25 L13 15 Z" />
      </svg>
    ),
    title: "Brand & Positioning",
    description:
      "Crafting brand narratives and visual identities that resonate. From investor-ready collateral to social content across GCC and MENA markets — ensuring every touchpoint reflects a cohesive, elevated brand voice.",
    tags: ["Branding", "Copywriting", "Creative Direction", "GCC/MENA"],
  },
];

export default function Services() {
  return (
    <section id="work" className="py-24 md:py-32 section-padding">
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
          What I Do
        </motion.p>

        <motion.h2 variants={fadeInUp} className="heading-lg mb-16">
          Where Strategy Meets Systems
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              whileHover={{ y: -2, transition: { duration: 0.3 } }}
              className="bg-bg-card rounded-2xl p-8 md:p-10 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="text-accent mb-6">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="body-md mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-sage/30 text-sage-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
