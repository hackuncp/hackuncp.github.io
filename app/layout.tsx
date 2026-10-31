import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, IBM_Plex_Mono, Jost } from "next/font/google";
import config from "@/hackuncp.config";
import { asset } from "@/components/desk/asset";
import "./styles.css";

const fraunces = Fraunces({ subsets: ["latin"], axes: ["opsz", "SOFT", "WONK"], variable: "--font-fraunces", display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(config.meta.url),
  title: { default: config.meta.title, template: `%s · ${config.meta.title}` },
  description: config.meta.description,
  alternates: { canonical: "/" },
  verification: { google: config.meta.googleVerification },
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: "/",
    type: "website",
    images: [{ url: asset("/brand/hackuncp-logo.png"), width: 908, height: 682, alt: "HackUNCP logo" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#c7a69e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${jost.variable} ${caveat.variable} ${mono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
