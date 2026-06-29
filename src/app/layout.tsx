import type { Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SkipLink } from "@/components/SkipLink";
import { VercelInsights } from "@/components/VercelInsights";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { script, heading, body } from "@/lib/fonts";
import { cssVariables, themeColor } from "@/lib/colors";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${script.variable} ${heading.variable} ${body.variable} h-full`}
      style={cssVariables as React.CSSProperties}
    >
      <body className="min-h-full bg-white font-sans text-ink antialiased">
        <SkipLink />
        <div className="flex min-h-full flex-col">
          <Navigation />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppFloat />
        <VercelInsights />
      </body>
    </html>
  );
}
