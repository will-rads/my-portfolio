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
      className="border-t border-sage/20 py-8 section-padding"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-text-muted">
          &copy; 2026 William Radiyeh
        </p>

        <div className="flex items-center gap-0 text-sm text-text-muted">
          <a
            href="https://www.linkedin.com/in/william-radiyeh/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            LinkedIn
          </a>
          <span className="mx-3">&middot;</span>
          <a href="mailto:will.rads@outlook.com" className="link-underline">
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
