import { IBM_Plex_Mono, Outfit, Syne } from "next/font/google";

export const syne = Syne({
  variable: "--font-syne-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  adjustFontFallback: true,
});

export const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  weight: ["400"],
  adjustFontFallback: true,
});

export const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400"],
  adjustFontFallback: true,
});

export const rootFontClassName = `${syne.variable} ${outfit.variable} ${ibmMono.variable} h-full scroll-smooth antialiased`;
