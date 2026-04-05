'use client';

import { useState, useEffect, useRef } from 'react';

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Skip parallax on mobile or when user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      setOffset((center - window.innerHeight / 2) * speed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset] as const;
}

export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

export function useScrollState() {
  const [state, setState] = useState({ scrolled: false, scrollY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setState({ scrolled: y > 40, scrollY: y });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
}

export interface RatingsData {
  google: { rating: string; count: number };
  justdial: { rating: string; count: number };
}

// ─── localStorage cache helper ───
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

function getCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) { localStorage.removeItem(key); return null; }
    return data as T;
  } catch { return null; }
}

function setCache<T>(key: string, data: T) {
  try { localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() })); } catch { /* quota exceeded */ }
}

// ─── Ratings ───
let ratingsCache: RatingsData | null = null;
let ratingsFetchPromise: Promise<RatingsData | null> | null = null;

function fetchRatingsOnce(): Promise<RatingsData | null> {
  if (ratingsCache) return Promise.resolve(ratingsCache);

  // Check localStorage
  const cached = getCache<RatingsData>('ap_ratings');
  if (cached) { ratingsCache = cached; return Promise.resolve(cached); }

  if (!ratingsFetchPromise) {
    ratingsFetchPromise = fetch('/api/ratings')
      .then(r => r.json())
      .then((data: RatingsData) => { ratingsCache = data; setCache('ap_ratings', data); return data; })
      .catch(() => null);
  }
  return ratingsFetchPromise;
}

export function useRatings() {
  const [ratings, setRatings] = useState<RatingsData | null>(ratingsCache);

  useEffect(() => {
    if (ratingsCache) { setRatings(ratingsCache); return; }
    fetchRatingsOnce().then(data => { if (data) setRatings(data); });
  }, []);

  return ratings;
}

// ─── Reviews ───
export interface GoogleReview {
  name: string;
  rating: number;
  text: string;
  relativeTime: string;
  photoUrl?: string;
}

let reviewsCache: GoogleReview[] | null = null;
let reviewsFetchPromise: Promise<GoogleReview[] | null> | null = null;

function fetchReviewsOnce(): Promise<GoogleReview[] | null> {
  if (reviewsCache) return Promise.resolve(reviewsCache);

  const cached = getCache<GoogleReview[]>('ap_reviews');
  if (cached) { reviewsCache = cached; return Promise.resolve(cached); }

  if (!reviewsFetchPromise) {
    reviewsFetchPromise = fetch('/api/reviews')
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() as Promise<GoogleReview[]>; })
      .then((data) => { reviewsCache = data; setCache('ap_reviews', data); return data; })
      .catch(() => null);
  }
  return reviewsFetchPromise;
}

export function useReviews() {
  const [reviews, setReviews] = useState<GoogleReview[] | null>(reviewsCache);

  useEffect(() => {
    if (reviewsCache) { setReviews(reviewsCache); return; }
    fetchReviewsOnce().then(data => { if (data) setReviews(data); });
  }, []);

  return reviews;
}
