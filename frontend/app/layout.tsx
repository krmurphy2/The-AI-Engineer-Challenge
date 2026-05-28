import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Coach Chat",
  description: "A simple chat UI for the AI Engineer Challenge backend.",
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
