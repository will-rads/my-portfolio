"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  note: string;
}

interface CertificationItem {
  icon: "shield" | "star" | "badge";
  title: string;
  subtitle: string;
  description: string;
}

const education: EducationItem[] = [
  {
    institution: "Lebanese American University",
    degree: "Master of Science in Applied Artificial Intelligence",
    period: "Sep 2024 — Sep 2026",
    note: "Comprehensive program covering ML, NLP, computer vision, and AI deployment across industries.",
  },
  {
    institution: "American University of Beirut",
    degree: "Bachelor's in Philosophy, Applied & Business Ethics",
    period: "Graduated Feb 2023",
    note: "Focused on ethical frameworks in technology, corporate responsibility, and integrity in decision-making.",
  },
  {
    institution: "University of Oxford",
    degree: "Leading AI Implementation Programme",
    period: "April 2026 — May 2026",
    note: "AI implementation leadership: use case identification, business alignment, risk management, and responsible adoption.",
  },
];

const certifications: CertificationItem[] = [
  {
    icon: "shield",
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    subtitle: "Microsoft Certified",
    description:
      "Foundational knowledge of AI concepts including machine learning, computer vision, and natural language processing in Azure.",
  },
  {
    icon: "star",
    title: "PwC ElevateME Mentorship Programme",
    subtitle: "PwC Middle East \u00B7 Jan — Mar 2026",
    description:
      "Selected as a mentee — bridging the gap between academia and the professional world.",
  },
  {
    icon: "badge",
    title: "LAU AI Fundamentals Achievement",
    subtitle: "Lebanese American University",
    description:
      "Skills achievement certification in Artificial Intelligence Fundamentals.",
  },
];

function CertIcon({ type }: { type: CertificationItem["icon"] }) {
  switch (type) {
    case "shield":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "star":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case "badge":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
  }
}

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Label */}
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-accent mb-4"
        >
          Credentials
        </motion.p>

        {/* Heading */}
        <motion.h2 variants={fadeInUp} className="heading-lg mb-16">
          Education &amp; Certifications
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column — Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-8"
          >
            {education.map((item) => (
              <motion.div
                key={item.institution}
                variants={fadeInUp}
                className="border-l-2 border-accent/30 pl-6"
              >
                <p className="text-sm uppercase tracking-wider text-accent font-medium mb-1">
                  {item.institution}
                </p>
                <p className="text-lg font-semibold text-text-primary mb-1">
                  {item.degree}
                </p>
                <p className="text-sm text-text-muted mb-2">{item.period}</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column — Certifications & Recognition */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-8"
          >
            {certifications.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="flex flex-row gap-4"
              >
                {/* Badge icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CertIcon type={item.icon} />
                </div>

                {/* Text content */}
                <div>
                  <p className="text-lg font-semibold mb-0.5">{item.title}</p>
                  <p className="text-sm text-accent mb-1">{item.subtitle}</p>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
