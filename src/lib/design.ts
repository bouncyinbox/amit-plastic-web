/**
 * Shared design utilities.
 * Colours live in tailwind.config.js (brand.*).
 * This file holds derived helpers and one-off tokens not worth
 * adding to Tailwind config.
 */

/** Returns the correct font-family string for the active language. */
export function bodyFont(isHi: boolean): string {
  return isHi ? "'Hind','Sora',sans-serif" : "'Sora',sans-serif";
}

/** Non-brand colour tokens used inline across sections. */
export const colors = {
  navy:        '#1a1a2e',
  navyDeep:    '#0f0f1a',
  bgAlt:       '#f8f9fa',
  gold:        '#fbbc04',
  whatsapp:    '#25D366',
  blueLight:   '#8ab4f8',

  // Alpha variants (dark-on-dark surfaces)
  white65:  'rgba(255,255,255,0.65)',
  white55:  'rgba(255,255,255,0.55)',
  white45:  'rgba(255,255,255,0.45)',
  white35:  'rgba(255,255,255,0.35)',
  white12:  'rgba(255,255,255,0.12)',
  white08:  'rgba(255,255,255,0.08)',
  white07:  'rgba(255,255,255,0.07)',
} as const;
