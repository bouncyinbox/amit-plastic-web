'use client';

import React from 'react';
import { Anim } from '@/components/Animations';
import SectionHeader from '@/components/SectionHeader';
import { useParallax, useRatings } from '@/lib/hooks';
import { ACCENT_COLORS } from '@/lib/constants';
import { bodyFont } from '@/lib/design';
import type { SectionProps } from './types';

const TIMELINE_ICONS = [
  // 1990s — Hammer/tools
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15L22 10.64"/><path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V6.5a.5.5 0 0 0-.5-.5H16.2c-.85 0-1.65-.33-2.25-.93L12.7 3.82"/><path d="M6 14l4 4"/></svg>,
  // 2000s — Truck/supply
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>,
  // 2010s — Store
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  // Today — Trophy
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>,
];

export default function StorySection({ t, isHi }: SectionProps) {
  const [quoteRef, quoteOff] = useParallax(0.15);
  const ratings = useRatings();
  const googleRating = ratings?.google?.rating ?? '4.5';

  return (
    <section
      id="story"
      className="py-[120px] max-md:py-[72px]"
      style={{ background: '#f8f9fa', fontFamily: bodyFont(isHi) }}
    >
      <div className="container">
        <Anim>
          <SectionHeader tag={t.storyTag} title={t.storyTitle} sub={t.storySub} />
        </Anim>

        {/* Vertical Timeline */}
        <div className="relative max-w-[700px] mx-auto">
          {/* Central line */}
          <div
            className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px"
            style={{ background: 'linear-gradient(to bottom, transparent, #d1d5db 5%, #d1d5db 95%, transparent)' }}
          />

          {t.story.map((item, i) => {
            const isLeft = i % 2 === 0;
            const color = ACCENT_COLORS[i];

            return (
              <Anim key={item.year} delay={i * 0.12}>
                <div className={`relative flex items-start mb-10 lg:mb-8 last:mb-0 ${
                  isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>

                  {/* Icon on timeline */}
                  <div
                    className="absolute left-0 lg:left-1/2 top-0 z-10 w-[38px] h-[38px] rounded-full flex items-center justify-center lg:-translate-x-1/2 shrink-0 shadow-md border-[3px]"
                    style={{ background: color, color: 'white', borderColor: '#f8f9fa' }}
                  >
                    {TIMELINE_ICONS[i]}
                  </div>

                  {/* Spacer for mobile (left gutter) */}
                  <div className="w-[52px] shrink-0 lg:hidden" />

                  {/* Card */}
                  <div className={`flex-1 lg:w-[calc(50%-32px)] ${
                    isLeft ? 'lg:pr-10 lg:text-right' : 'lg:pl-10 lg:text-left'
                  }`}>
                    <div className="bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm transition-all duration-400 hover:-translate-y-0.5 hover:shadow-md">
                      <div className={`flex items-center gap-2.5 mb-1.5 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white"
                          style={{ background: color }}
                        >
                          {item.year}
                        </span>
                        <h3
                          className="font-sora font-bold text-[16px] text-[#1a1a2e]"
                          style={{ letterSpacing: -0.3 }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[13px] leading-[1.7] text-gray-500 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer for opposite side (desktop) */}
                  <div className="hidden lg:block lg:w-[calc(50%-32px)]" />
                </div>
              </Anim>
            );
          })}
        </div>

        {/* Trust banner */}
        <Anim delay={0.4}>
          <div
            ref={quoteRef as React.RefObject<HTMLDivElement>}
            className="mt-14 rounded-2xl overflow-hidden"
            style={{ background: '#1a1a2e', transform: `translateY(${quoteOff * 0.2}px)` }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 px-6 sm:px-10 py-6">
              {/* Quote icon + text */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(26,115,232,0.15)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a73e8">
                    <path d="M11 7H7a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6a2 2 0 0 1 2-2h3V7zm10 0h-4a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1a2 2 0 0 1 2-2h3V7z" />
                  </svg>
                </div>
                <p
                  className="text-white leading-snug"
                  style={{ fontSize: isHi ? 15 : 16, fontWeight: 400, fontStyle: 'italic' }}
                >
                  {t.quote}
                  <span className="block sm:inline text-[11px] font-bold tracking-[1.5px] uppercase mt-1 sm:mt-0 sm:ml-3" style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'normal' }}>
                    {t.quoteBy}
                  </span>
                </p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div className="sm:hidden w-full h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

              {/* Mini stats */}
              <div className="flex gap-6 sm:gap-8 shrink-0">
                <div className="text-center">
                  <p className="font-sora font-bold text-white text-[22px] leading-none">20+</p>
                  <p className="text-[10px] font-medium tracking-wide mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {isHi ? 'साल' : 'Years'}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-sora font-bold text-[22px] leading-none" style={{ color: '#34a853' }}>10K+</p>
                  <p className="text-[10px] font-medium tracking-wide mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {isHi ? 'परिवार' : 'Families'}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-sora font-bold text-[22px] leading-none" style={{ color: '#fbbc04' }}>{googleRating}★</p>
                  <p className="text-[10px] font-medium tracking-wide mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {isHi ? 'रेटिंग' : 'Rated'}
                  </p>
                </div>
              </div>
            </div>

            {/* Accent bar bottom */}
            <div className="flex h-1">
              <div className="flex-1" style={{ background: '#1a73e8' }} />
              <div className="flex-1" style={{ background: '#ea4335' }} />
              <div className="flex-1" style={{ background: '#34a853' }} />
              <div className="flex-1" style={{ background: '#fbbc04' }} />
            </div>
          </div>
        </Anim>
      </div>
    </section>
  );
}
