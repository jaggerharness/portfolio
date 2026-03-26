import type { Metadata } from "next";
import "./globals.css";
import { KonamiEasterEgg } from "@/components/portfolio/KonamiEasterEgg";
import { rootFontClassName } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Jagger Harness | Senior Full-Stack Engineer",
    template: "%s | Jagger Harness",
  },
  description:
    "Senior full-stack engineer: cloud-native web, mobile, and conversational AI, plus TypeScript, React, Node.js, Flutter, GCP, Terraform, and platform modernization.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Jagger Harness | Senior Full-Stack Engineer",
    description:
      "Cloud-native platforms, Dialogflow CX, GCP, and end-to-end delivery with strong technical communication.",
    url: SITE_URL,
    siteName: "Jagger Harness",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rootFontClassName}>
      <body className="min-h-full font-sans">
        {children}
        <KonamiEasterEgg />
      </body>
    </html>
  );
}
