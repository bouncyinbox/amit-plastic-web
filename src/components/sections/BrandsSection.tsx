'use client';

import { Anim } from '@/components/Animations';
import { ACCENT_COLORS } from '@/lib/constants';
import { BRAND_COLORS, BRAND_LOGO_URLS } from '@/lib/brands';
import { bodyFont } from '@/lib/design';
import type { SectionProps } from './types';

export default function BrandsSection({ t, isHi }: SectionProps) {
  return (
    <section
      id="brands"
      className="py-12 bg-white border-y border-gray-100"
      style={{ fontFamily: bodyFont(isHi) }}
    >
      <div className="container mb-8">
        <Anim>
          <div className="text-center">
            <p className="text-[11px] tracking-[4px] uppercase text-brand-blue font-bold mb-2">
              {t.brandsTag}
            </p>
            <h2
              className="font-sora font-bold text-[#1a1a2e]"
              style={{ fontSize: 'clamp(24px,4vw,36px)', letterSpacing: -0.5 }}
            >
              {t.brandsTitle}
            </h2>
          </div>
        </Anim>
      </div>

      <div className="container">
        <div
          className="flex gap-4 overflow-x-auto pb-2 no-scrollbar"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {t.brands.map((brand, i) => {
            const accentColor = BRAND_COLORS[brand.name] ?? ACCENT_COLORS[i % ACCENT_COLORS.length];
            const logoUrl = BRAND_LOGO_URLS[brand.name];

            return (
              <div
                key={brand.name}
                className="flex-1 flex-shrink-0 flex items-center justify-center bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                style={{ minWidth: 180, height: 110, scrollSnapAlign: 'start', borderTop: `3px solid ${accentColor}` }}
              >
                {logoUrl && (
                  <img
                    src={logoUrl}
                    alt={`${brand.name} logo`}
                    style={{ maxHeight: 56, maxWidth: 140, objectFit: 'contain' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
