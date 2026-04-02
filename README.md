# Amit Plastic - Furniture Exclusive Showroom

A production-grade website for **Amit Plastic Furniture Exclusive Showroom**, Sitamarhi, Bihar. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Apple-style parallax scrolling** and scroll-triggered animations
- **Language toggle** (English / Hindi) — instant client-side switching
- **SEO optimized** — full meta tags, Open Graph, structured data ready
- **Fully responsive** — mobile-first with sticky bottom CTA bar
- **Google-inspired color palette** — clean, modern, professional
- **Monogram seal logo** — SVG, scalable, brand-grade
- **WhatsApp + Click-to-call** CTAs throughout
- **Google Maps** embed with deep link
- **Production-ready** — TypeScript, ESLint, optimized builds

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Sora (geometric sans) + Noto Sans Devanagari (Hindi)
- **Deployment**: Vercel-ready (also works with any Node.js host)

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind + custom animations
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Animations.tsx     # Reusable scroll-reveal wrappers
│   ├── Hero.tsx           # Hero section with parallax
│   ├── Navbar.tsx         # Glassmorphism navbar + language toggle
│   ├── Seal.tsx           # SVG monogram logo component
│   └── Sections.tsx       # Story, Products, Reviews, Contact, Footer
└── lib/
    ├── constants.ts       # Phone, URLs, colors, gradients
    ├── hooks.ts           # useParallax, useReveal, useScrollState
    └── translations.ts    # Full EN/HI translations with types
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Working with Claude Code

This project is structured for easy iteration with Claude Code:

```bash
# Open the project
cd amit-plastic-furniture
claude

# Example prompts:
# "Add a new product category for Garden Furniture"
# "Change the phone number to 98XXXXXXXX"  
# "Add a photo gallery section after products"
# "Update the Google Maps embed with the correct coordinates"
# "Add WhatsApp click tracking with Google Analytics"
# "Create a sitemap.xml and robots.txt"
```

### Key files to edit:

| What to change | File |
|---|---|
| Phone number, URLs | `src/lib/constants.ts` |
| All text content (EN + HI) | `src/lib/translations.ts` |
| SEO title, description, keywords | `src/app/layout.tsx` |
| Colors, fonts | `tailwind.config.js` |
| Add new sections | `src/components/Sections.tsx` |
| Modify animations | `src/lib/hooks.ts` |

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Git + Vercel Dashboard

1. Push to GitHub/GitLab
2. Import in [vercel.com/new](https://vercel.com/new)
3. Auto-deploys on every push

### Option 3: Static Export (for any hosting)

Uncomment `output: 'export'` in `next.config.js`, then:

```bash
npm run build
# Upload the `out/` folder to any static host
```

## Custom Domain

After deploying to Vercel:

1. Go to Project Settings → Domains
2. Add your domain (e.g., `amitplastic.in`)
3. Update DNS records as instructed

## TODO / Next Steps

- [ ] Replace placeholder product images with real photos
- [ ] Update Google Maps embed with exact coordinates
- [ ] Add Google Analytics / Meta Pixel tracking
- [ ] Create `sitemap.xml` and `robots.txt`
- [ ] Add structured data (LocalBusiness schema) for SEO
- [ ] Set up a custom domain
- [ ] Add product detail pages (optional)
- [ ] Integrate Google Business Profile reviews API

## License

Private — built for Amit Plastic Furniture Exclusive Showroom, Sitamarhi.
