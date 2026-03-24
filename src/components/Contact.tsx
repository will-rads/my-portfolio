"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const contactLinks = [
  {
    label: "EMAIL",
    value: "will.rads@outlook.com",
    href: "mailto:will.rads@outlook.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/william-radiyeh",
    href: "https://www.linkedin.com/in/william-radiyeh/",
    external: true,
  },
  {
    label: "PHONE",
    value: "(+961) 81 940 801",
    href: "tel:+96181940801",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 section-padding relative">
      {/* Glow spot */}
      <div className="glow-spot w-[500px] h-[500px] bg-accent/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Label */}
        <motion.p variants={fadeInUp} className="label mb-6">
          CONTACT
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]"
        >
          Let&apos;s Build
          <br />
          <span className="text-accent">Something</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          className="text-lg text-text-secondary font-light mt-6 max-w-xl mb-16"
        >
          Whether you need a marketing leader, an AI implementation partner, or
          just want to connect.
        </motion.p>

        {/* Contact rows */}
        <div>
          {contactLinks.map((link) => (
            <motion.div key={link.label} variants={fadeInUp}>
              <motion.a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-center justify-between py-6 border-b border-white/5 group cursor-pointer"
              >
                <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
                  {link.label}
                </span>
                <span className="text-lg md:text-xl font-medium text-text-primary group-hover:text-accent transition-colors duration-300">
                  {link.value}
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
