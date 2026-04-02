'use client';

import { useEffect, useState } from 'react';
import { Anim } from './Animations';
import type { GoogleReview } from '@/app/api/reviews/route';

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="text-[14px] tracking-[2px]" style={{ color: '#fbbc04' }}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  );
}

function ReviewCard({ r, i }: { r: GoogleReview; i: number }) {
  const initials = r.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const colors = ['from-[#4a6fa5] to-[#2d4f7c]', 'from-[#3d6b52] to-[#274d3a]', 'from-[#8b4545] to-[#6b2e2e]', 'from-[#c49a3c] to-[#9e7a2a]'];
  const gradient = colors[i % colors.length];

  return (
    <Anim delay={i * 0.1} className="h-full">
      <div className="h-full flex flex-col bg-white rounded-[20px] p-7 border border-gray-100 transition-all duration-400 relative overflow-hidden hover:border-gray-200 hover:shadow-lg before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-brand-blue before:via-brand-red before:via-brand-yellow before:to-brand-green before:scale-x-0 before:transition-transform before:duration-400 before:origin-left hover:before:scale-x-100">
        <StarRow rating={r.rating} />
        <p className="text-[14px] leading-[1.75] text-gray-700 my-3.5 italic font-light flex-1">
          &ldquo;{r.text}&rdquo;
        </p>
        <div className="flex items-center gap-2.5 mt-auto">
          {r.photoUrl ? (
            <img src={r.photoUrl} alt={r.name} className="w-9 h-9 rounded-full object-cover" referrerPolicy="no-referrer" />
          ) : (
            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center font-bold text-[13px]`}>
              {initials}
            </div>
          )}
          <div>
            <p className="text-[13px] font-semibold text-[#1a1a2e]">{r.name}</p>
            <p className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" className="inline shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57C21.36 18.41 22.56 15.59 22.56 12.25z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google · {r.relativeTime}
            </p>
          </div>
        </div>
      </div>
    </Anim>
  );
}

function SkeletonCard() {
  return (
    <div className="h-[220px] bg-white rounded-[20px] border border-gray-100 p-7 animate-pulse">
      <div className="h-3 w-20 bg-gray-100 rounded mb-4" />
      <div className="space-y-2 flex-1">
        <div className="h-2.5 bg-gray-100 rounded w-full" />
        <div className="h-2.5 bg-gray-100 rounded w-4/5" />
        <div className="h-2.5 bg-gray-100 rounded w-3/5" />
      </div>
      <div className="flex items-center gap-2.5 mt-6">
        <div className="w-9 h-9 rounded-full bg-gray-100" />
        <div>
          <div className="h-2.5 w-24 bg-gray-100 rounded mb-1.5" />
          <div className="h-2 w-16 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function ReviewsClient() {
  const [reviews, setReviews] = useState<GoogleReview[] | null>(null);

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(setReviews)
      .catch(() => setReviews([]));
  }, []);

  if (!reviews) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[0, 1, 2, 3].map(i => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (reviews.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {reviews.map((r, i) => <ReviewCard key={i} r={r} i={i} />)}
    </div>
  );
}
