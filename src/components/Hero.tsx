'use client';

import { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { WHATSAPP_URL, CALL_URL } from '@/lib/constants';
import { bodyFont } from '@/lib/design';
import { Translations } from '@/lib/translations';

import TrustBadges from './TrustBadges';
import img1 from '@/assets/gallery/1.jpeg';
import img2 from '@/assets/gallery/2.jpeg';
import img3 from '@/assets/gallery/3.jpeg';
import img4 from '@/assets/gallery/4.jpeg';
import img5 from '@/assets/gallery/5.jpeg';

const images: StaticImageData[] = [img1, img2, img3, img4, img5];
const INTERVAL = 5000;

interface HeroProps {
  t: Translations;
  isHi: boolean;
  scrollY: number;
}

export default function Hero({ t, isHi, scrollY }: HeroProps) {
  // On mobile, delay fade until after the gallery (start fading after 400px, fully gone by 1000px)
  // On desktop, fade sooner since the section is single-screen height
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const fadeStart = isMobile ? 400 : 0;
  const fadeRange = isMobile ? 600 : 600;
  const heroOpacity = Math.max(0, 1 - Math.max(0, scrollY - fadeStart) / fadeRange);

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const goTo = useCallback((idx: number) => {
    setPrev(current);
    setCurrent(idx);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % images.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current, goTo]);

  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 1200);
    return () => clearTimeout(t);
  }, [prev]);

  /* ---- Shared carousel ---- */
  const carousel = (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`Amit Plastic Showroom ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 z-[2]"
        style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.5), transparent)' }}
      />
    </div>
  );

  /* ---- Text content ---- */
  const textContent = (
    <div style={{ fontFamily: bodyFont(isHi) }}>
      <div
        className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.2s_both] w-10 lg:w-12 h-1 rounded-full mb-5 lg:mb-8"
        style={{ background: 'linear-gradient(90deg, #1a73e8, #34a853)' }}
      />

      <p
        className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_both]"
        style={{
          fontSize: 'clamp(11px,2vw,14px)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: isHi ? 1 : 4,
          textTransform: isHi ? 'none' : 'uppercase',
        }}
      >
        {t.heroSub}
      </p>

      <h1
        className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.4s_both] font-sora font-bold text-white mt-2 lg:mt-4 leading-[1.1]"
        style={{ fontSize: 'clamp(28px,7vw,52px)', letterSpacing: -1 }}
      >
        Amit Plastic
      </h1>

      <p
        className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.5s_both] mt-3 lg:mt-5 max-w-[440px]"
        style={{
          fontSize: 'clamp(14px,3.5vw,18px)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.65,
        }}
      >
        {t.heroLine}
      </p>

      <p
        className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.55s_both] mt-2 lg:mt-3"
        style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: isHi ? 0 : 1.5,
          fontWeight: 500,
        }}
      >
        {t.heroAddr}
      </p>

      {/* CTA buttons */}
      <div className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.65s_both] flex gap-2.5 lg:gap-3 flex-wrap mt-5 lg:mt-8">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 lg:px-7 lg:py-3.5 rounded-full text-[13px] lg:text-[14px] font-semibold bg-brand-blue text-white hover:bg-brand-blueDark transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
        >
          💬 {t.wa}
        </a>
        <a
          href={CALL_URL}
          className="inline-flex items-center gap-2 px-5 py-3 lg:px-7 lg:py-3.5 rounded-full text-[13px] lg:text-[14px] font-semibold transition-all duration-400 hover:-translate-y-1"
          style={{
            color: 'rgba(255,255,255,0.85)',
            background: 'rgba(255,255,255,0.08)',
            border: '1.5px solid rgba(255,255,255,0.12)',
          }}
        >
          📞 {t.call}
        </a>
      </div>

      {/* Trust badges */}
      <div className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.8s_both] mt-8 lg:mt-10">
        <TrustBadges variant="dark" size="sm" isHi={isHi} />
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: '#1a1a2e', opacity: heroOpacity }}
    >
      {/* ===== MOBILE LAYOUT: image on top, text below ===== */}
      <div className="lg:hidden pt-5">
        {/* Image carousel — takes top portion */}
        <div className="relative w-full" style={{ height: '45vh', minHeight: 280 }}>
          {carousel}
        </div>

        {/* Text content */}
        <div className="px-6 py-8 pb-10">
          {textContent}
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT: side by side ===== */}
      <div className="hidden lg:flex min-h-screen pt-10">
        {/* Left panel — text */}
        <div
          className="relative z-10 flex flex-col justify-center px-16 xl:px-20 w-[45%] xl:w-[42%] shrink-0"
          style={{ background: '#1a1a2e' }}
        >
          {textContent}
        </div>

        {/* Right panel — carousel */}
        <div className="relative flex-1">
          {carousel}
          {/* Soft edge blend */}
          <div
            className="absolute inset-y-0 left-0 w-24 z-[2]"
            style={{ background: 'linear-gradient(to right, #1a1a2e, transparent)' }}
          />
        </div>
      </div>
    </section>
  );
}
