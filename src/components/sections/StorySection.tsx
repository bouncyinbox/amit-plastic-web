'use client';

import React from 'react';
import { Anim } from '@/components/Animations';
import SectionHeader from '@/components/SectionHeader';
import { useParallax } from '@/lib/hooks';
import { ACCENT_COLORS } from '@/lib/constants';
import { bodyFont } from '@/lib/design';
import type { SectionProps } from './types';

export default function StorySection({ t, isHi }: SectionProps) {
  const [quoteRef, quoteOff] = useParallax(0.15);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.story.map((item, i) => (
            <Anim key={item.year} delay={i * 0.12}>
              <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-transparent h-full">
                <div className="h-1 rounded-t-[20px]" style={{ background: ACCENT_COLORS[i] }} />
                <div className="p-6 pt-7">
                  <div
                    className="font-sora font-black leading-none mb-[-6px]"
                    style={{ fontSize: 44, color: ACCENT_COLORS[i], opacity: 0.12, letterSpacing: -1 }}
                  >
                    {item.year}
                  </div>
                  <h3
                    className="font-sora font-bold text-[20px] text-[#1a1a2e] mb-1.5"
                    style={{ letterSpacing: -0.3 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-gray-700 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </Anim>
          ))}
        </div>

        <Anim delay={0.4}>
          <div
            ref={quoteRef as React.RefObject<HTMLDivElement>}
            className="mt-12 p-8 bg-white rounded-[20px] max-w-[600px] mx-auto shadow-sm border-l-4 border-brand-blue"
            style={{ transform: `translateY(${quoteOff * 0.2}px)` }}
          >
            <p
              className="text-[#1a1a2e] leading-[1.55] mb-2"
              style={{ fontSize: isHi ? 19 : 22, fontWeight: isHi ? 500 : 400, fontStyle: 'italic' }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-[12px] text-brand-blue font-bold mt-3.5 tracking-[1.5px] uppercase">
              {t.quoteBy}
            </p>
          </div>
        </Anim>
      </div>
    </section>
  );
}
