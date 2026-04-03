'use client';

interface TrustBadgesProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

const badges = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: 'Authorized Dealer',
    sub: 'Certified Brand Partner',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="16" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10" fontWeight="700" fontFamily="sans-serif">35</text>
      </svg>
    ),
    label: 'Est. 1990',
    sub: '35+ Years of Trust',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
    label: '4.5★ Rated',
    sub: 'Google Reviews',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: '10,000+',
    sub: 'Happy Families',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
        <path d="M12 16h4" />
      </svg>
    ),
    label: 'Secure Payment',
    sub: 'Cash · UPI · Card',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <circle cx="12" cy="16" r="0.5" fill="currentColor" />
      </svg>
    ),
    label: '100% Genuine',
    sub: 'Trusted Products',
  },
];

export default function TrustBadges({ variant = 'dark', size = 'md' }: TrustBadgesProps) {
  const isDark = variant === 'dark';
  const isSm = size === 'sm';

  return (
    <div className={`grid grid-cols-2 ${isSm ? 'gap-x-5 gap-y-4' : 'gap-x-6 gap-y-5 lg:gap-x-8 lg:grid-cols-3'}`}>
      {badges.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-3 min-w-0"
        >
          {/* Icon circle */}
          <div
            className={`flex items-center justify-center rounded-full shrink-0 ${isSm ? 'w-12 h-12' : 'w-16 h-16'}`}
            style={{
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(26,26,46,0.05)',
              color: isDark ? '#4a9eff' : '#1a73e8',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(26,26,46,0.08)'}`,
            }}
          >
            {b.icon}
          </div>
          {/* Text */}
          <div>
            <div
              className="font-sora font-bold leading-tight"
              style={{
                fontSize: isSm ? 13 : 15,
                color: isDark ? 'rgba(255,255,255,0.85)' : '#1a1a2e',
              }}
            >
              {b.label}
            </div>
            <div
              style={{
                fontSize: isSm ? 11 : 13,
                color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(26,26,46,0.45)',
                fontWeight: 500,
              }}
            >
              {b.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
