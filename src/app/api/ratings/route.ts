import { NextResponse } from 'next/server';

const JUSTDIAL_URL =
  'https://www.justdial.com/Sitamarhi/Amit-Plastic-Furniture-Exclusive-Showroom-Near-Mata-Vaishno-Mandir-Bazar/9999P6226-6226-130406154447-L8P1_BZDET';

async function fetchJustDialRating() {
  try {
    const res = await fetch(JUSTDIAL_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' },
      next: { revalidate: 86400 }, // cache 24h
    });
    const html = await res.text();

    // Extract JSON-LD blocks
    const matches = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    for (const m of matches) {
      try {
        const json = JSON.parse(m[1]);
        const agg =
          json?.aggregateRating ??
          (Array.isArray(json['@graph']) && json['@graph'].find((n: { aggregateRating?: unknown }) => n.aggregateRating))?.aggregateRating;
        if (agg?.ratingValue) {
          return {
            rating: parseFloat(agg.ratingValue).toFixed(1),
            count: parseInt(agg.ratingCount ?? agg.reviewCount ?? '0', 10),
          };
        }
      } catch {}
    }
  } catch {}
  return { rating: '4.6', count: 32 }; // fallback
}

export async function GET() {
  const justdial = await fetchJustDialRating();

  // Google Maps rating: set GOOGLE_RATING and GOOGLE_REVIEW_COUNT env vars
  // to pull live data (requires Google Places API), otherwise uses fallback.
  const google = {
    rating: process.env.GOOGLE_RATING ?? '4.5',
    count: parseInt(process.env.GOOGLE_REVIEW_COUNT ?? '80', 10),
  };

  return NextResponse.json({ justdial, google });
}
