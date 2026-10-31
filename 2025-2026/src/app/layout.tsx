import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hackuncp.github.io"),
  applicationName: "HackUNCP",
  title: "HackUNCP",
  description:
    "HackUNCP was a student-organized AI hackathon at UNC Pembroke. Explore the 2025 and 2026 events, projects, and winners.",
  keywords: [
    "HackUNCP",
    "UNC Pembroke hackathon",
    "UNCP hackathon",
    "AI hackathon",
  ],
  authors: [{ name: "HackUNCP", url: "https://hackuncp.github.io" }],
  creator: "HackUNCP",
  publisher: "HackUNCP",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Urk5X0IKPxzTGKlDZTJnMg-ZFG-3eHNP1rknY8QnfrU",
  },
  openGraph: {
    title: "HackUNCP",
    description:
      "HackUNCP at UNC Pembroke, featuring the 2025 and 2026 event archives.",
    url: "https://hackuncp.github.io",
    siteName: "HackUNCP",
    locale: "en_US",
    images: [
      {
        url: "/logos/HackUNCP Logo.png",
        width: 1000,
        height: 1000,
        alt: "HackUNCP AI Hackathon Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HackUNCP",
    description:
      "HackUNCP at UNC Pembroke, featuring the 2025 and 2026 event archives.",
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
      <body>{children}</body>
    </html>
  );
}
