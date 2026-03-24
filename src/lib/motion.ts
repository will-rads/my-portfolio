export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const letterReveal = {
  hidden: { opacity: 0, y: 100, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.04,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export const blurIn = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};
