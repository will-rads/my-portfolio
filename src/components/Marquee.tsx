"use client";

const items = [
  "MARKETING",
  "AI IMPLEMENTATION",
  "STRATEGY",
  "BRANDING",
  "ADVERTISING",
  "ANALYTICS",
  "AUTOMATION",
  "POSITIONING",
  "CREATIVE DIRECTION",
  "PERFORMANCE",
];

interface MarqueeProps {
  reverse?: boolean;
}

export default function Marquee({ reverse = false }: MarqueeProps) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0">
      <span className="font-mono text-sm uppercase tracking-widest text-text-muted/40 whitespace-nowrap">
        {item}
      </span>
      <span className="text-accent/30 text-xs select-none">{"\u25C6"}</span>
    </span>
  ));

  return (
    <div
      className="w-full overflow-hidden py-6 border-y border-white/5 group"
      aria-hidden="true"
    >
      <div
        className={`flex gap-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-duration:60s]`}
        style={{ width: "max-content" }}
      >
        <div className="flex gap-8">{content}</div>
        <div className="flex gap-8">{content}</div>
      </div>
    </div>
  );
}
