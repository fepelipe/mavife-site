import { Fraunces, DM_Sans } from "next/font/google";

export const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
  adjustFontFallback: true,
});

export const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
  adjustFontFallback: true,
});
