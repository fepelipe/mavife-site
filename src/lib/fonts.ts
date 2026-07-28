import { Montserrat } from "next/font/google";

/** Geometric sans for headings. */
export const heading = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-montserrat",
  adjustFontFallback: true,
});
