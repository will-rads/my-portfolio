"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const caseStudies = [
  {
    number: "01",
    tag: "Internal Tool",
    title: "Proprietary Marketing Interface",
    description:
      "Designed and built a custom internal UI for Namou Properties that centralizes marketing operations — from campaign planning and asset production to investor call hosting. Replaced fragmented workflows with a single, cohesive system used daily by the marketing and sales teams.",
    metrics: [
      { value: "70%", label: "Faster campaign setup" },
      { value: "1", label: "Unified platform" },
      { value: "3x", label: "Team throughput" },
    ],
    tech: ["Next.js", "AI Integration", "Custom UI", "Internal Platform"],
    accentGradient: "from-accent/8 via-accent/3 to-transparent",
  },
  {
    number: "02",
    tag: "AI Agent",
    title: "AI-Powered Ad Management",
    description:
      "Connected our ad accounts to an AI agent that monitors campaign performance in real-time across Meta and Google. The system analyzes spend, CTR, and conversion data to recommend actions — boost high performers, kill underperformers, pause for review — and auto-generates performance summaries.",
    metrics: [
      { value: "40%", label: "Reduced wasted ad spend" },
      { value: "Real-time", label: "Decision support" },
      { value: "85%", label: "Faster reporting" },
    ],
    tech: ["AI Agent", "Meta Ads API", "Google Ads", "Automation"],
    accentGradient: "from-sand/8 via-sand/3 to-transparent",
  },
  {
    number: "03",
    tag: "Dashboard",
    title: "Ad Intelligence Dashboard",
    description:
      "Created a centralized analytics dashboard that tracks ad status, spend allocation, and ROI across all platforms in one view. Provides real-time reporting, trend visualization, and decision support — transforming raw data into actionable intelligence for faster marketing decisions.",
    metrics: [
      { value: "5+", label: "Platforms unified" },
      { value: "Daily", label: "Automated reports" },
      { value: "2x", label: "Decision speed" },
    ],
    tech: ["Analytics", "Real-time Data", "Multi-platform", "Decision Engine"],
    accentGradient: "from-sage/8 via-sage/3 to-transparent",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 section-padding">
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
          Selected Work
        </motion.p>

        <motion.h2 variants={fadeInUp} className="heading-lg mb-6">
          Building Tools That Think
        </motion.h2>

        <motion.p variants={fadeInUp} className="body-md max-w-2xl mb-16">
          These projects reflect my approach: identify friction, design systems,
          and build tools that make marketing smarter — not just faster.
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-20">
        {caseStudies.map((study) => (
          <motion.article
            key={study.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="group"
          >
            {/* Card */}
            <div className="bg-bg-card rounded-3xl overflow-hidden">
              {/* Top accent strip */}
              <div
                className={`h-1.5 bg-gradient-to-r ${study.accentGradient}`}
              />

              <div className="p-8 md:p-12">
                {/* Header row */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span className="inline-block text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium mb-4">
                      {study.tag}
                    </span>
                    <h3 className="heading-md">{study.title}</h3>
                  </div>
                  <span className="hidden md:block font-serif text-6xl text-sage/20 font-medium leading-none">
                    {study.number}
                  </span>
                </div>

                {/* Description */}
                <p className="body-md max-w-3xl mb-10">{study.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-sage/15">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-serif text-2xl md:text-3xl text-accent font-medium mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-sage/20 text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
