"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hamburger line variants
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 5 },
  };
  const bottomLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -5 },
  };

  return (
    <>
      <motion.nav
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-6 md:px-10 py-4 max-w-[1440px]">
          {/* Logo / Name */}
          <button
            onClick={scrollToTop}
            className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary hover:text-accent transition-colors duration-300"
          >
            William Radiyeh
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex md:hidden flex-col items-center justify-center w-8 h-8 gap-[6px]"
            aria-label="Toggle menu"
          >
            <motion.span
              variants={topLine}
              animate={mobileOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block w-6 h-[1px] bg-text-primary origin-center"
            />
            <motion.span
              variants={bottomLine}
              animate={mobileOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block w-6 h-[1px] bg-text-primary origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <motion.ul
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={fadeInUp}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-2xl font-light tracking-widest uppercase text-text-primary hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
