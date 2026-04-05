'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import {
  StorySection,
  ProductsSection,
  BrandsSection,
  ReviewsSection,
  ContactSection,
  Footer,
  FloatingCTAs,
} from '@/components/sections/index';
import { useScrollState } from '@/lib/hooks';
import { translations, Lang } from '@/lib/translations';

interface HomeContentProps {
  scrollTo?: string;
}

export default function HomeContent({ scrollTo }: HomeContentProps) {
  const [lang, setLang] = useState<Lang>('en');
  const { scrolled, scrollY } = useScrollState();
  const t    = translations[lang];
  const isHi = lang === 'hi';

  useEffect(() => {
    if (scrollTo) {
      requestAnimationFrame(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
      });
    }
  }, [scrollTo]);

  return (
    <>
      <Navbar scrolled={scrolled} lang={lang} setLang={setLang} t={t} />
      <Hero t={t} isHi={isHi} scrollY={scrollY} />
      <StorySection    t={t} isHi={isHi} />
      <ProductsSection t={t} isHi={isHi} />
      <BrandsSection   t={t} isHi={isHi} />
      <ReviewsSection  t={t} isHi={isHi} />
      <ContactSection  t={t} isHi={isHi} />
      <Footer          t={t} isHi={isHi} />
      <FloatingCTAs    t={t} />
    </>
  );
}
