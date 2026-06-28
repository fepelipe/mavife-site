import type { Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SkipLink } from "@/components/SkipLink";
import { VercelInsights } from "@/components/VercelInsights";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { display, sans } from "@/lib/fonts";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-cream font-sans text-ink antialiased">
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
