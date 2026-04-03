import supremeLogo from '@/assets/brand-logos/supreme-furniture.png';
import lincLogo    from '@/assets/brand-logos/linc.jpg';
import miltonLogo  from '@/assets/brand-logos/milton.png';
import sapanaLogo  from '@/assets/brand-logos/sapana-carpets.png';

/** Accent colour derived from each brand's actual logo palette. */
export const BRAND_COLORS: Record<string, string> = {
  Supreme: '#c41230',
  Linc:    '#e8302a',
  Milton:  '#e8392a',
  Sapana:  '#8b1c2d',
};

/** Resolved static image URLs for brand logos. */
export const BRAND_LOGO_URLS: Record<string, string> = {
  Supreme: supremeLogo.src,
  Linc:    lincLogo.src,
  Milton:  miltonLogo.src,
  Sapana:  sapanaLogo.src,
};
