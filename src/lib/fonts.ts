import { Dancing_Script, Montserrat, Inter } from "next/font/google";

/** Cursive highlight font — brand wordmark and rare accent words ("Mavife"). */
export const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dancing",
});

/** Geometric sans for headings and subheadings ("Home Decor"). */
export const heading = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

/** Default reading font — body copy and UI text. */
export const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: true,
});
