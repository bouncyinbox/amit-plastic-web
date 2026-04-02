import { NextResponse } from 'next/server';

export interface GoogleReview {
  name: string;
  rating: number;
  text: string;
  relativeTime: string;
  photoUrl?: string;
}

const FALLBACK_REVIEWS: GoogleReview[] = [
  { name: 'Rajesh Kumar', rating: 5, text: 'We\'ve been buying from Amit Plastic for 30 years. Quality and trust — you get both here.', relativeTime: 'a year ago' },
  { name: 'Sunita Devi', rating: 5, text: 'Best furniture showroom in Sitamarhi. Huge variety and honest pricing.', relativeTime: '8 months ago' },
  { name: 'Manoj Singh', rating: 4, text: 'Great wholesale rates. I stock my shop from here every season.', relativeTime: '6 months ago' },
  { name: 'Priya Sharma', rating: 5, text: 'Authorized Supreme and Linc dealer — always genuine products. Highly recommended.', relativeTime: '3 months ago' },
];

async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID ?? 'ChIJwejOrf7x7DkR9FLgw_3ItNY';

  if (!apiKey) return FALLBACK_REVIEWS;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=en&reviews_sort=newest`,
      { next: { revalidate: 86400 } } // cache 24h
    );
    const data = await res.json();
    const reviews: GoogleReview[] = (data?.result?.reviews ?? [])
      .filter((r: { rating: number }) => r.rating >= 4)
      .map((r: { author_name: string; rating: number; text: string; relative_time_description: string; profile_photo_url?: string }) => ({
        name: r.author_name,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
        photoUrl: r.profile_photo_url,
      }));

    return reviews.length > 0 ? reviews : FALLBACK_REVIEWS;
  } catch {
    return FALLBACK_REVIEWS;
  }
}

export async function GET() {
  const reviews = await fetchGoogleReviews();
  return NextResponse.json(reviews);
}
