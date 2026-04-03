'use client';

import { useEffect, useState } from 'react';

interface Rating { rating: string; count: number }
interface Ratings { justdial: Rating; google: Rating }

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => {
        const filled = value >= i;
        const half = !filled && value >= i - 0.5;
        return (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`h${i}`}>
                    <stop offset="50%" stopColor="#fbbc04" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path fill={`url(#h${i})`} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </>
            ) : (
              <path fill={filled ? '#fbbc04' : 'rgba(255,255,255,0.15)'} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            )}
          </svg>
        );
      })}
    </div>
  );
}

function Badge({ platform, logo, rating, count, href, accentColor }: {
  platform: string;
  logo: React.ReactNode;
  rating: string;
  count: number;
  href: string;
  accentColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-2xl no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: accentColor }}>
        {logo}
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-wide" style={{ color: 'rgba(255,255,255,0.6)' }}>{platform}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="font-sora font-bold text-white text-[15px]">{rating}</span>
          <StarRating value={parseFloat(rating)} />
          <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.55)' }}>({count})</span>
        </div>
      </div>
    </a>
  );
}

export default function RatingBadges() {
  const [ratings, setRatings] = useState<Ratings | null>(null);

  useEffect(() => {
    fetch('/api/ratings')
      .then(r => r.json())
      .then(setRatings)
      .catch(() => {});
  }, []);

  if (!ratings) {
    return (
      <div className="flex gap-3 flex-wrap">
        {[0, 1].map(i => (
          <div key={i} className="h-[58px] w-[180px] rounded-2xl animate-pulse" style={{ background: 'rgba(255,255,255,0.06)' }} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 flex-wrap">
      <Badge
        platform="Google Maps"
        href="https://maps.app.goo.gl/xo1miWgQQ8HWe3oT6"
        rating={ratings.google.rating}
        count={ratings.google.count}
        accentColor="#1a73e8"
        logo={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        }
      />
      <Badge
        platform="JustDial"
        href="https://www.justdial.com/Sitamarhi/Amit-Plastic-Furniture-Exclusive-Showroom-Near-Mata-Vaishno-Mandir-Bazar/9999P6226-6226-130406154447-L8P1_BZDET"
        rating={ratings.justdial.rating}
        count={ratings.justdial.count}
        accentColor="#e8431a"
        logo={
          <svg width="18" height="18" viewBox="0 0 32 32" fill="white">
            <text y="24" fontSize="16" fontWeight="900" fontFamily="Arial" textAnchor="middle" x="16">JD</text>
          </svg>
        }
      />
    </div>
  );
}
