import type { Metadata } from "next";
import { Bebas_Neue, Newsreader, Inter_Tight, JetBrains_Mono, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import "./sections.css";
// Loaded last: the review-round-2 overrides depend on winning by source order.
import "./polish.css";
import { Analytics } from "@/components/Analytics";
import { CtaTracker } from "@/components/CtaTracker";
import { siteOrigin } from "@/lib/config";

// DISPLAY (condensed all-caps) for the SDP brass-on-light LP.
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// BODY face for the whole site. Self-hosted by next/font so the stack in
// globals.css (`--fb`) resolves to a real webfont, not a local-only fallback.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Fallback for the Marathi words in the copy (पोळी-भाजी, वरण-भात, भाकरी).
// Sits after Manrope in `--fb`, so it only ever paints Devanagari glyphs.
const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: "Kraft With Kunal | Lose 8–12 kilos in 90 days, without giving up Poli-Bhaji",
  description:
    "The MARATHI Framework: 1:1 fat-loss and strength coaching for Marathi working professionals, businessmen and entrepreneurs aged 35+. Maharashtrian-friendly nutrition, weekly check-ins with Kunal, 200+ clients coached, 100% Results Guarantee.",
  robots: { index: false, follow: false }, // pre-launch: keep out of search until assets/figures confirmed
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${bebas.variable} ${newsreader.variable} ${interTight.variable} ${jetbrains.variable} ${manrope.variable} ${devanagari.variable}`}
    >
      <body>
        <Analytics />
        <CtaTracker />
        {children}
      </body>
    </html>
  );
}
