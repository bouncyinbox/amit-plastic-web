import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

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
      } catch (err) {
        logger.warn('api/ratings', 'Failed to parse JSON-LD block', { message: String(err) });
      }
    }
  } catch (err) {
    logger.error('api/ratings', 'Failed to fetch JustDial page', { message: String(err) });
  }
  return { rating: '4.6', count: 32 }; // fallback
}

async function fetchGoogleRating() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID ?? 'ChIJwejOrf7x7DkR9FLgw_3ItNY';

  if (!apiKey) {
    return { rating: process.env.GOOGLE_RATING ?? '4.6', count: parseInt(process.env.GOOGLE_REVIEW_COUNT ?? '27', 10) };
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    const data = await res.json();

    if (data.status === 'OK' && data.result) {
      return {
        rating: (data.result.rating ?? 4.5).toFixed(1),
        count: data.result.user_ratings_total ?? 0,
      };
    }
  } catch (err) {
    logger.error('api/ratings', 'Failed to fetch Google rating', { message: String(err) });
  }

  return { rating: process.env.GOOGLE_RATING ?? '4.6', count: parseInt(process.env.GOOGLE_REVIEW_COUNT ?? '27', 10) };
}

export async function GET() {
  const justdial = await fetchJustDialRating();

  const google = await fetchGoogleRating();

  return NextResponse.json({ justdial, google });
}
