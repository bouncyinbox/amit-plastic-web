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
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3.5 sm:gap-4">
          {t.brands.map((brand, i) => {
            const accentColor = BRAND_COLORS[brand.name] ?? ACCENT_COLORS[i % ACCENT_COLORS.length];
            const logoUrl = BRAND_LOGO_URLS[brand.name];

            return (
              <div
                key={brand.name}
                className="flex items-center justify-center bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 w-full h-[90px] sm:w-[180px] sm:h-[110px]"
                style={{ borderTop: `3px solid ${accentColor}` }}
              >
                {logoUrl && (
                  <img
                    src={logoUrl}
                    alt={`${brand.name} logo`}
                    className="max-h-[44px] max-w-[120px] sm:max-h-[56px] sm:max-w-[140px] object-contain"
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
