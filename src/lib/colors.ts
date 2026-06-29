/**
 * Mavife design tokens — deep forest marble & metallic gold (brand avatar).
 *
 * Semantic names map to Tailwind utilities in globals.css (`text-ink`, `bg-jungle`, etc.).
 */

export const palette = {
  /** Deepest background — polished marble base */
  greenDeep: "#0b1a13",
  /** Primary forest — logo background */
  greenForest: "#1b3022",
  /** Mid-tone foliage / marble mid-tones */
  greenSurface: "#2d4739",
  /** Sage vein accents in marble */
  greenVein: "#5c7262",
  /** Body text on light surfaces */
  greenInk: "#0d1a14",

  /** Core metallic gold */
  gold: "#c5a059",
  /** Bright highlight gold */
  goldBright: "#d4af37",
  /** Champagne — borders, labels, woven accents */
  goldLight: "#e8d0a9",
  /** Bronze shadow / hover depth */
  goldDark: "#8c6d31",

  /** Page background — warm cream */
  cream: "#faf8f5",
  /** Section surfaces — ivory marble */
  ivory: "#f4f0e8",
  /** Subtle marble vein */
  marble: "#e8ebe4",
} as const;

/** Semantic tokens consumed by components and CSS variables */
export const colors = {
  ink: palette.greenInk,
  muted: palette.greenVein,
  surface: palette.ivory,
  white: palette.cream,
  accent: palette.gold,
  accentDeep: palette.goldDark,
  leaf: palette.greenSurface,
  jungle: palette.greenForest,
  clay: palette.goldLight,
  background: palette.cream,
  textOnDark: palette.cream,
  border: palette.goldLight,
} as const;

/** Browser chrome / PWA theme */
export const themeColor = palette.greenForest;

/** CSS custom properties injected on <html> — single source of truth for theme tokens */
export const cssVariables = {
  "--color-ink": colors.ink,
  "--color-muted": colors.muted,
  "--color-surface": colors.surface,
  "--color-white": colors.white,
  "--color-accent": colors.accent,
  "--color-accent-deep": colors.accentDeep,
  "--color-leaf": colors.leaf,
  "--color-jungle": colors.jungle,
  "--color-clay": colors.clay,
} as const satisfies Record<`--color-${string}`, string>;

export type ColorToken = keyof typeof colors;
