import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Nadeem | Next-Gen Portfolio",
  description: "Immersive 3D Portfolio of Abdullah Nadeem - Full Stack Developer & Digital Marketer.",
};

import { Navigation } from "@/components/ui/Navigation";
import SmoothScroll from "@/components/ui/SmoothScroll";

import { Footer } from "@/components/ui/Footer";
import { Chatbot } from "@/components/ui/Chatbot";
import GlobalCanvas from "@/components/canvas/GlobalCanvas";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-deep-black text-white selection:bg-neon-cyan selection:text-deep-black overflow-x-hidden`}
      >
        <GlobalCanvas />
        <SmoothScroll>
          <Navigation />
          {children}
          <Footer />
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
