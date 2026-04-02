# CLAUDE.md — Project Context for Claude Code

## About This Project

This is the website for **Amit Plastic Furniture Exclusive Showroom** — a 30+ year old family-run furniture business in Sitamarhi, Bihar, India. The business is owned by Vijay ji, who started in the 1990s crafting almirahs, shutters, iron grills, and gates before evolving into a full furniture showroom.

## Business Details

- **Name**: Amit Plastic (Furniture Exclusive Showroom)
- **Owner**: Vijay
- **Location**: Near Mata Vaishno Mandir, Thana Road, Sitamarhi — 843302, Bihar
- **Phone**: +91 9835242431
- **Brands**: Authorized distributor of Supreme Furniture, Linc Furniture, Linc Steel Almirah
- **Categories**: Plastic Furniture, Steel Almirahs, Home Furniture, Office Furniture
- **Facebook**: https://www.facebook.com/amitplasticstm/
- **Google Maps**: https://maps.app.goo.gl/xo1miWgQQ8HWe3oT6

## Tech Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS 3.4
- Fonts: Sora (headings/body) + Noto Sans Devanagari (Hindi)
- No external component libraries — all custom components
- Vercel deployment target

## Design System

- **Palette**: Google-inspired — Blue (#1a73e8), Red (#ea4335), Green (#34a853), Yellow (#fbbc04), Navy (#1a1a2e)
- **Font**: Sora (geometric sans-serif) for the modern techy vibe
- **Animations**: Apple-style parallax + scroll-triggered reveals with cubic-bezier(0.16, 1, 0.3, 1)
- **Feel**: Light, classy, "hidden gem" discovery moment

## Architecture

- `src/lib/constants.ts` — All phone numbers, URLs, color constants
- `src/lib/translations.ts` — Full EN/HI translations (typed)
- `src/lib/hooks.ts` — Custom hooks: useParallax, useReveal, useScrollState
- `src/components/Seal.tsx` — SVG monogram logo
- `src/components/Animations.tsx` — Anim and ScaleIn wrappers
- `src/components/Navbar.tsx` — Glassmorphism nav with language toggle
- `src/components/Hero.tsx` — Parallax hero section
- `src/components/Sections.tsx` — Story, Products, Reviews, Contact, Footer, FloatingCTAs

## Important Notes

- The language toggle (EN/HI) is client-side state — no routing needed
- Product images are placeholders (emoji icons) — will be replaced with real photos
- The Google Maps embed URL may need updating with exact business coordinates
- The site is a single-page app with smooth scroll between sections
- All CTAs route to WhatsApp or phone call — no e-commerce
- Hindi font (Noto Sans Devanagari) loads from Google Fonts CDN

## Commands

```bash
npm run dev    # Start dev server on :3000
npm run build  # Production build
npm run lint   # Run ESLint
npm start      # Start production server
```
