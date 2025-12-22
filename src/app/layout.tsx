import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullahnadeem.dev"),
  title: "Abdullah Nadeem | Full-Stack MERN Developer & React Expert",
  description:
    "Abdullah Nadeem is a Full-Stack Web Developer specializing in MERN Stack, React.js, Next.js, and TypeScript. I build high-performance, SEO-friendly web applications with clean architecture and exceptional user experiences. Hire me for your next project.",
  keywords: [
    "Abdullah Nadeem",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Portfolio",
    "Hire Web Developer",
    "Freelance Developer",
  ],
  authors: [{ name: "Abdullah Nadeem", url: "https://abdullahnadeem.dev" }],
  creator: "Abdullah Nadeem",
  publisher: "Abdullah Nadeem",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullahnadeem.dev",
    siteName: "Abdullah Nadeem Portfolio",
    title: "Abdullah Nadeem | Full-Stack MERN Developer & React Expert",
    description:
      "Full-Stack Web Developer specializing in MERN Stack, React.js, and Next.js. Building high-performance web applications with clean architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Nadeem - Full-Stack MERN Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Nadeem | Full-Stack MERN Developer",
    description:
      "Full-Stack Web Developer specializing in MERN Stack, React.js, and Next.js. Building high-performance web applications.",
    creator: "@abdullahnadeem",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://abdullahnadeem.dev",
  },
  category: "Technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abdullahnadeem.dev/#person",
      name: "Abdullah Nadeem",
      jobTitle: "Full-Stack Web Developer",
      description:
        "Full-Stack Web Developer specializing in MERN Stack, React.js, Next.js, and TypeScript. Building high-performance, scalable web applications.",
      url: "https://abdullahnadeem.dev",
      sameAs: [
        "https://github.com/ab9898998989898",
        "https://www.linkedin.com/in/abdullah-nadeem-319560285",
        "https://www.instagram.com/abdullahx__.19",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MERN Stack",
        "Web Development",
        "Frontend Development",
        "Full-Stack Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://abdullahnadeem.dev/#website",
      url: "https://abdullahnadeem.dev",
      name: "Abdullah Nadeem Portfolio",
      description: "Portfolio of Abdullah Nadeem - Full-Stack MERN Developer",
      publisher: {
        "@id": "https://abdullahnadeem.dev/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://abdullahnadeem.dev/#profilepage",
      url: "https://abdullahnadeem.dev",
      name: "Abdullah Nadeem - Full-Stack Developer Portfolio",
      isPartOf: {
        "@id": "https://abdullahnadeem.dev/#website",
      },
      about: {
        "@id": "https://abdullahnadeem.dev/#person",
      },
      mainEntity: {
        "@id": "https://abdullahnadeem.dev/#person",
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#050505" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
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
