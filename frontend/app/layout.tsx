import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// JetBrains Mono fits the terminal aesthetic and ships via next/font, which
// self-hosts the file for zero layout shift and no extra network hop.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SENTINEL :: secure coaching session",
  description:
    "SENTINEL is a cybersecurity-themed AI mental coach. Patch your mindset, harden your habits.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono">{children}</body>
    </html>
  );
}
