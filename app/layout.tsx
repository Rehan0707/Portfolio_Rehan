import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://rehansanadi.com";
const description =
  "Rehan Sanadi — iOS Developer, Product Builder & Founder. I design and build digital products that improve everyday life with SwiftUI, Apple Intelligence, and thoughtful design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rehan Sanadi — iOS Developer & Product Builder",
    template: "%s · Rehan Sanadi",
  },
  description,
  keywords: [
    "Rehan Sanadi",
    "iOS Developer",
    "SwiftUI",
    "Product Builder",
    "Apple Intelligence",
    "Portfolio",
  ],
  authors: [{ name: "Rehan Sanadi", url: siteUrl }],
  creator: "Rehan Sanadi",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Rehan Sanadi — iOS Developer & Product Builder",
    description,
    siteName: "Rehan Sanadi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rehan Sanadi — iOS Developer & Product Builder",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#F7F4FF",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "iOS Developer & Product Builder",
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ichalkaranji",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Swift",
    "SwiftUI",
    "iOS Development",
    "Apple Intelligence",
    "Core ML",
    "Product Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
