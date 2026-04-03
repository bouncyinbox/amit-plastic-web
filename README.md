# Amit Plastic — Furniture Exclusive Showroom

Website for Amit Plastic, Sitamarhi, Bihar. Next.js 14 · TypeScript · Tailwind CSS · Vercel.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS 3.4** with custom design tokens
- **Sora** (headings) + **Noto Sans Devanagari** (Hindi)
- **Google Places API** for live reviews (optional)

## Dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Environment

```bash
# .env.local (optional — enables live Google reviews)
GOOGLE_PLACES_API_KEY=your_key_here
```

## Key files

| What | Where |
|---|---|
| Phone, URLs, colors | `src/lib/constants.ts` |
| All text (EN + HI) | `src/lib/translations.ts` |
| Design tokens | `src/lib/design.ts` |
| SEO metadata | `src/app/layout.tsx` |
| Sections | `src/components/sections/` |

## Deploy

Push to GitHub → import on [vercel.com/new](https://vercel.com/new) → add `GOOGLE_PLACES_API_KEY` in project env vars.
