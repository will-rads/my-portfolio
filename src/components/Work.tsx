"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/motion";

interface Metric {
  value: string;
  label: string;
}

interface Project {
  number: string;
  tag: string;
  title: string;
  description: string;
  metrics: Metric[];
  reverse?: boolean;
  visual: "dashboard" | "feed" | "charts";
}

const projects: Project[] = [
  {
    number: "01",
    tag: "INTERNAL TOOL",
    title: "Proprietary Marketing Interface",
    description:
      "Built a custom internal platform for Namou Properties that centralizes campaign planning, asset production, and investor call hosting. Replaced fragmented workflows with a single system.",
    metrics: [
      { value: "70%", label: "Faster Setup" },
      { value: "1", label: "Unified Platform" },
      { value: "3x", label: "Team Output" },
    ],
    visual: "dashboard",
  },
  {
    number: "02",
    tag: "AI AGENT",
    title: "AI-Powered Ad Management",
    description:
      "Connected ad accounts to an AI agent that monitors campaigns in real-time across Meta and Google. Recommends actions — boost, kill, or pause — and auto-generates performance reports.",
    metrics: [
      { value: "40%", label: "Less Wasted Spend" },
      { value: "Real-time", label: "Decisions" },
      { value: "85%", label: "Faster Reports" },
    ],
    reverse: true,
    visual: "feed",
  },
  {
    number: "03",
    tag: "DASHBOARD",
    title: "Ad Intelligence Dashboard",
    description:
      "Created a centralized dashboard tracking ad status, spend, and ROI across all platforms. Real-time reporting and decision support for faster marketing intelligence.",
    metrics: [
      { value: "5+", label: "Platforms" },
      { value: "Daily", label: "Auto-Reports" },
      { value: "2x", label: "Decision Speed" },
    ],
    visual: "charts",
  },
];

function DashboardMockup() {
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Title bar */}
      <div className="h-8 bg-bg-card border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
      </div>
      {/* Body */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-1/4 bg-bg-card border-r border-white/5 p-3 space-y-3">
          <div className="h-3 w-3/4 bg-bg-hover rounded" />
          <div className="h-3 w-1/2 bg-bg-hover rounded" />
          <div className="h-3 w-2/3 bg-accent/10 rounded" />
          <div className="h-3 w-1/2 bg-bg-hover rounded" />
          <div className="h-3 w-3/5 bg-bg-hover rounded" />
        </div>
        {/* Main */}
        <div className="flex-1 p-4 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 bg-bg-card rounded-lg border border-white/5" />
            <div className="h-16 bg-bg-card rounded-lg border border-white/5" />
            <div className="h-16 bg-bg-card rounded-lg border border-white/5" />
          </div>
          <div className="h-24 bg-bg-card rounded-lg border border-white/5" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-14 bg-bg-hover rounded-lg border border-white/5" />
            <div className="h-14 bg-bg-hover rounded-lg border border-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeedMockup() {
  const rows = [
    { color: "bg-accent", width: "w-1/3" },
    { color: "bg-accent-blue", width: "w-1/2" },
    { color: "bg-red-400/60", width: "w-1/4" },
    { color: "bg-accent", width: "w-2/5" },
    { color: "bg-accent-blue", width: "w-1/3" },
  ];

  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Title bar */}
      <div className="h-8 bg-bg-card border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
      </div>
      {/* Feed rows */}
      <div className="flex-1 p-4 space-y-2.5">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-3 h-10 bg-bg-card rounded-lg border border-white/5 px-4"
          >
            <div className={`w-2 h-2 rounded-full ${row.color} shrink-0`} />
            <div className={`h-2.5 ${row.width} bg-bg-hover rounded`} />
            <div className="ml-auto h-2.5 w-16 bg-bg-hover rounded" />
          </div>
        ))}
        <div className="flex items-center gap-3 h-10 bg-bg-card rounded-lg border border-white/5 px-4">
          <div className="w-2 h-2 rounded-full bg-accent-blue shrink-0" />
          <div className="h-2.5 w-2/5 bg-bg-hover rounded" />
          <div className="ml-auto h-2.5 w-16 bg-bg-hover rounded" />
        </div>
      </div>
    </div>
  );
}

function ChartsMockup() {
  const bars = [
    { width: "w-full", color: "bg-accent" },
    { width: "w-3/4", color: "bg-accent/80" },
    { width: "w-1/2", color: "bg-accent-blue" },
    { width: "w-[85%]", color: "bg-accent" },
    { width: "w-2/3", color: "bg-accent-blue/80" },
    { width: "w-[45%]", color: "bg-accent/60" },
  ];

  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Title bar */}
      <div className="h-8 bg-bg-card border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
      </div>
      {/* Chart area */}
      <div className="flex-1 p-6 flex flex-col justify-center space-y-3">
        {bars.map((bar, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-12 h-2.5 bg-bg-hover rounded shrink-0" />
            <div className="flex-1 h-5 bg-bg-card rounded-md overflow-hidden border border-white/5">
              <div
                className={`h-full ${bar.width} ${bar.color} rounded-md`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ type }: { type: Project["visual"] }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative aspect-[16/10] bg-bg-surface rounded-2xl overflow-hidden border border-white/5"
    >
      {type === "dashboard" && <DashboardMockup />}
      {type === "feed" && <FeedMockup />}
      {type === "charts" && <ChartsMockup />}
    </motion.div>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  const textContent = (
    <div className={project.reverse ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"}>
      <div className="text-8xl font-black text-white/5 leading-none">
        {project.number}
      </div>
      <div className="font-mono text-xs text-accent uppercase tracking-widest mt-4">
        {project.tag}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mt-4 text-text-primary">
        {project.title}
      </h3>
      <p className="text-text-secondary font-light mt-4 leading-relaxed">
        {project.description}
      </p>
    </div>
  );

  const visualContent = (
    <div className={project.reverse ? "lg:col-span-7 lg:order-1" : "lg:col-span-7"}>
      <ProjectVisual type={project.visual} />
    </div>
  );

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {textContent}
        {visualContent}
      </div>

      {/* Metrics */}
      <div className="flex flex-wrap gap-12 mt-10">
        {project.metrics.map((metric, i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-accent">{metric.value}</div>
            <div className="text-xs text-text-muted mt-1">{metric.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-32 md:py-40 section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.span variants={fadeInUp} className="label">
          WORK
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary"
        >
          What I Build
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-text-secondary font-light mt-4 mb-24"
        >
          Tools, systems, and strategies that make marketing smarter.
        </motion.p>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project) => (
          <ProjectBlock key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
