"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-8 section-padding border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-wider text-text-muted/40">
          &copy; 2026 WILLIAM RADIYEH
        </span>

        <div className="font-mono text-xs uppercase tracking-wider text-text-muted/40">
          <a
            href="https://www.linkedin.com/in/william-radiyeh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            LINKEDIN
          </a>
          <span className="divider-pipe">|</span>
          <a
            href="mailto:will.rads@outlook.com"
            className="hover:text-accent transition-colors duration-300"
          >
            EMAIL
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
