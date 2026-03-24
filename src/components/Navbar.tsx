"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer, fadeInUp } from "@/lib/motion";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-sage/10"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-2xl md:text-3xl font-semibold text-accent tracking-tight select-none"
          >
            WR
          </a>

          {/* Desktop Nav Links */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <motion.li key={link.label} variants={fadeInUp}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm tracking-wide text-text-secondary hover:text-accent transition-colors duration-300 link-underline"
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6, backgroundColor: "#2D5A4B" }
                  : { rotate: 0, y: 0, backgroundColor: "#1A1A1A" }
              }
              transition={{ duration: 0.3 }}
              className="block w-6 h-[1.5px] origin-center"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              className="block w-6 h-[1.5px] bg-text-primary"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6, backgroundColor: "#2D5A4B" }
                  : { rotate: 0, y: 0, backgroundColor: "#1A1A1A" }
              }
              transition={{ duration: 0.3 }}
              className="block w-6 h-[1.5px] origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={fadeInUp}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-serif text-3xl text-text-primary hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
