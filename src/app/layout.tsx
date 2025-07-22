import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO and social platforms
export const metadata: Metadata = {
  metadataBase: new URL("https://hackuncp.github.io"),
  title: "HackUNCP 2026 | Premier AI Hackathon",
  description:
    "HackUNCP 2026 is UNC Pembroke’s premier AI hackathon organized by AI@UNCP. Join student innovators for 24 hours of building, learning, and collaboration.",
  openGraph: {
    title: "HackUNCP 2026 | Premier AI Hackathon",
    description:
      "Hosted by AI@UNCP, HackUNCP 2026 is UNC Pembroke's premier AI hackathon bringing together developers to solve real challenges with technology.",
    url: "https://hackuncp.github.io",
    siteName: "HackUNCP",
    images: [
      {
        url: "/logos/HackUNCP Logo.png",
        width: 1200,
        height: 630,
        alt: "HackUNCP Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackUNCP 2026 | Premier AI Hackathon",
    description:
      "UNC Pembroke’s official AI hackathon, hosted by AI@UNCP. Build something amazing in 24 hours.",
    images: ["/logos/HackUNCP Logo.png"],
  },
  icons: {
    icon: "/logos/HackUNCP Logo.png",
    apple: "/logos/HackUNCP Logo.png",
  },
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
