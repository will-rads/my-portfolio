"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const contactCards = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4 12 13 2 4" />
      </svg>
    ),
    label: "Email",
    value: "will.rads@outlook.com",
    href: "mailto:will.rads@outlook.com",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "William Radiyeh",
    href: "https://www.linkedin.com/in/william-radiyeh/",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "(+961) 81 940 801",
    href: "tel:+96181940801",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-bg-card rounded-3xl p-12 md:p-16"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-accent mb-4"
        >
          Get in Touch
        </motion.p>

        <motion.h2 variants={fadeInUp} className="heading-lg mb-4">
          Let&apos;s Build Something
        </motion.h2>

        <motion.p variants={fadeInUp} className="body-md max-w-xl mb-12">
          Whether you&apos;re looking for a marketing leader, an AI
          implementation partner, or just want to connect — I&apos;d love to
          hear from you.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.label}
              variants={fadeInUp}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={
                card.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-center p-6 rounded-xl transition-colors hover:bg-white group"
            >
              <span className="inline-block text-accent mb-3">{card.icon}</span>

              <p className="text-sm text-text-muted mb-1">{card.label}</p>

              <p className="text-text-primary font-medium">{card.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
