export interface GoogleReview {
  name: string;
  rating: number;
  text: string;
  relativeTime: string;
  photoUrl?: string;
}

export interface RatingsData {
  google: { rating: string; count: number };
  justdial: { rating: string; count: number };
}
