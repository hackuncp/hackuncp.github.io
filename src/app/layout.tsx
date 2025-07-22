import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Full SEO Metadata with Google Verification and Favicons
export const metadata: Metadata = {
  metadataBase: new URL("https://hackuncp.github.io"),
  title: "HackUNCP 2026 | Premier AI Hackathon",
  description:
    "HackUNCP 2026 is UNC Pembroke’s flagship AI hackathon organized by AI@UNCP. Join builders, coders, and creatives from across the region.",
  verification: {
    google: "Urk5X0IKPxzTGKlDZTJnMg-ZFG-3eHNP1rknY8QnfrU",
  },
  openGraph: {
    title: "HackUNCP 2026 | Premier AI Hackathon",
    description:
      "Build with AI. Compete with purpose. HackUNCP 2026 is organized by AI@UNCP and hosted at UNC Pembroke.",
    url: "https://hackuncp.github.io",
    siteName: "HackUNCP",
    images: [
      {
        url: "/logos/HackUNCP Logo.png",
        width: 1200,
        height: 630,
        alt: "HackUNCP AI Hackathon Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackUNCP 2026 | Premier AI Hackathon",
    description:
      "Organized by AI@UNCP at UNC Pembroke, HackUNCP 2026 brings together student innovators to solve real-world challenges with AI.",
    images: ["/logos/HackUNCP Logo.png"],
  },
  icons: {
    icon: "/logos/HackUNCP Logo.png",
    apple: "/logos/HackUNCP Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
