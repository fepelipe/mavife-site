import { Montserrat, Inter } from "next/font/google";

/** Geometric sans for headings. */
export const heading = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-montserrat",
  adjustFontFallback: true,
});

/** Default reading font - body copy and UI text. */
export const body = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: true,
});
