import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    hasPlacesKey: !!process.env.GOOGLE_PLACES_API_KEY,
    placesKeyPrefix: process.env.GOOGLE_PLACES_API_KEY?.slice(0, 6) ?? null,
    hasPlaceId: !!process.env.GOOGLE_PLACE_ID,
    placeId: process.env.GOOGLE_PLACE_ID ?? 'not set (using default)',
    googleRating: process.env.GOOGLE_RATING ?? 'not set',
    googleReviewCount: process.env.GOOGLE_REVIEW_COUNT ?? 'not set',
  });
}
