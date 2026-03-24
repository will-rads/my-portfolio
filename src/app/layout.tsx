import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Radiyeh — Head of Marketing & AI Implementation",
  description:
    "Scaling marketing with systems, data, AI, and creativity. Head of Marketing at Namou Properties. MS in Applied AI.",
  keywords: [
    "William Radiyeh",
    "Head of Marketing",
    "AI Implementation",
    "Digital Marketing",
    "Marketing Strategy",
    "AI Agent",
    "Namou Properties",
  ],
  openGraph: {
    title: "William Radiyeh — Head of Marketing & AI Implementation",
    description:
      "Scaling marketing with systems, data, AI, and creativity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
