'use client';

import { Anim } from '@/components/Animations';
import SectionHeader from '@/components/SectionHeader';
import ReviewsClient from '@/components/ReviewsClient';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { bodyFont } from '@/lib/design';
import type { SectionProps } from './types';

export default function ReviewsSection({ t, isHi }: SectionProps) {
  return (
    <section
      id="reviews"
      className="py-[120px] max-md:py-[72px]"
      style={{ background: '#f8f9fa', fontFamily: bodyFont(isHi) }}
    >
      <div className="container">
        <Anim>
          <SectionHeader tag={t.revTag} title={t.revTitle} sub={t.revSub} />
        </Anim>

        <ErrorBoundary context="ReviewsSection">
          <ReviewsClient />
        </ErrorBoundary>
      </div>
    </section>
  );
}
