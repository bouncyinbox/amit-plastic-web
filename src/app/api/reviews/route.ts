import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import type { GoogleReview } from '@/lib/types';

export const revalidate = 86400; // ISR: revalidate once per day

/** Shown when the Places API key is absent or to supplement few live reviews. */
const FALLBACK_REVIEWS: GoogleReview[] = [
  { name: 'Rajesh Kumar',  rating: 5, text: "We've been buying from Amit Plastic for 20 years. Quality and trust — you get both here.",  relativeTime: 'a year ago' },
  { name: 'Sunita Devi',   rating: 5, text: 'Best furniture showroom in Sitamarhi. Huge variety and honest pricing.',                     relativeTime: '8 months ago' },
  { name: 'Manoj Singh',   rating: 4, text: 'Great wholesale rates. I stock my shop from here every season.',                             relativeTime: '6 months ago' },
  { name: 'Priya Sharma',  rating: 5, text: 'Authorized Supreme and Linc dealer — always genuine products. Highly recommended.',          relativeTime: '3 months ago' },
  { name: 'Ankit Verma',   rating: 5, text: 'Visited for the first time and was impressed by the range. From plastic chairs to steel almirahs, they have it all under one roof.', relativeTime: '2 months ago' },
  { name: 'Neha Kumari',   rating: 5, text: 'Very well maintained showroom. Staff is polite and helpful. Got a great deal on dining set.', relativeTime: '4 months ago' },
];

/** Shape of a review returned by the Google Places Details API. */
interface PlacesReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

async function fetchFromGooglePlaces(apiKey: string, placeId: string): Promise<GoogleReview[]> {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=en&reviews_sort=newest`;

  const res = await fetch(url, { next: { revalidate: 86400 } }); // cache 24 h

  if (!res.ok) {
    throw new Error(`Places API responded with HTTP ${res.status}`);
  }

  const data = await res.json();

  if (data.status !== 'OK') {
    throw new Error(`Places API status: ${data.status}`);
  }

  return (data?.result?.reviews ?? [])
    .filter((r: PlacesReview) => r.rating >= 4 && r.text && r.text.trim().length > 0)
    .map((r: PlacesReview): GoogleReview => ({
      name:         r.author_name,
      rating:       r.rating,
      text:         r.text,
      relativeTime: r.relative_time_description,
      photoUrl:     r.profile_photo_url,
    }));
}

export async function GET() {
  const apiKey  = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID ?? 'ChIJwejOrf7x7DkR9FLgw_3ItNY';

  if (!apiKey) {
    logger.warn('api/reviews', 'GOOGLE_PLACES_API_KEY not set — serving fallback reviews');
    return NextResponse.json(FALLBACK_REVIEWS);
  }

  try {
    const liveReviews = await fetchFromGooglePlaces(apiKey, placeId);

    // Always supplement with fallback to ensure enough reviews are shown
    const needed = FALLBACK_REVIEWS.filter(fb => !liveReviews.some(lr => lr.name === fb.name));
    const result = [...liveReviews, ...needed].slice(0, 6);

    logger.info('api/reviews', `Serving ${result.length} reviews (live: ${liveReviews.length})`);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    logger.error('api/reviews', 'Places API fetch failed — falling back', { message });
    return NextResponse.json(FALLBACK_REVIEWS);
  }
}
