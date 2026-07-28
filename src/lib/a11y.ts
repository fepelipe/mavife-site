/** Accessibility helpers — screen reader strings in pt-BR. */

export const NEW_TAB_SUFFIX = "abre em nova aba";

/** Builds an accessible name that announces a new tab in Portuguese. */
export function externalLinkLabel(label: string): string {
  const trimmed = label.trim();
  if (trimmed.toLowerCase().includes(NEW_TAB_SUFFIX)) return trimmed;
  return `${trimmed} (${NEW_TAB_SUFFIX})`;
}

/** Shortens captions for aria-labels without dumping the full post text. */
export function truncateForLabel(text: string, max = 96): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, Math.max(0, max - 1)).trimEnd()}…`;
}

export function instagramPostLabel(input: {
  caption?: string;
  isVideo?: boolean;
}): string {
  const kind = input.isVideo ? "vídeo" : "publicação";
  const caption = input.caption ? truncateForLabel(input.caption) : "";
  if (caption) {
    return externalLinkLabel(`Abrir ${kind} no Instagram: ${caption}`);
  }
  return externalLinkLabel(`Abrir ${kind} no Instagram`);
}
