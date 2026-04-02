'use client';

import React, { useState } from 'react';
import Seal from './Seal';
import { Anim, ScaleIn } from './Animations';
import { useParallax } from '@/lib/hooks';
import { WHATSAPP_URL, CALL_URL, MAPS_LINK, MAPS_EMBED, PHONE, ACCENT_COLORS, CATEGORY_ICONS, CATEGORY_GRADIENTS, FACEBOOK_URL, INDIAMART_URL, JUSTDIAL_URL } from '@/lib/constants';
import { Translations, BrandItem } from '@/lib/translations';
import supremeLogo from '@/assets/brand-logos/supreme-furniture.png';
import lincLogo from '@/assets/brand-logos/linc.jpg';
import miltonLogo from '@/assets/brand-logos/milton.png';
import sapanaLogo from '@/assets/brand-logos/sapana-carpets.png';
import RatingBadges from './RatingBadges';
import ReviewsClient from './ReviewsClient';

interface SectionProps {
  t: Translations;
  isHi: boolean;
}

/* ─── Story ─── */
export function StorySection({ t, isHi }: SectionProps) {
  const [quoteRef, quoteOff] = useParallax(0.15);
  const bf = isHi ? "'Hind','Sora',sans-serif" : "'Sora',sans-serif";

  return (
    <section id="story" className="py-[120px] max-md:py-[72px]" style={{ background: '#f8f9fa', fontFamily: bf }}>
      <div className="container">
        <Anim>
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[4px] uppercase text-brand-blue font-bold mb-3">{t.storyTag}</p>
            <h2 className="font-sora font-bold text-[#1a1a2e] leading-[1.1] mb-3.5" style={{ fontSize: 'clamp(32px,6vw,54px)', letterSpacing: -1 }}>{t.storyTitle}</h2>
            <p className="text-[16px] text-gray-700 max-w-[500px] mx-auto leading-[1.7] font-light">{t.storySub}</p>
          </div>
        </Anim>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.story.map((s, i) => (
            <Anim key={i} delay={i * 0.12}>
              <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-transparent h-full">
                <div className="h-1 rounded-t-[20px]" style={{ background: ACCENT_COLORS[i] }} />
                <div className="p-6 pt-7">
                  <div className="font-sora font-black leading-none mb-[-6px]" style={{ fontSize: 44, color: ACCENT_COLORS[i], opacity: 0.12, letterSpacing: -1 }}>{s.yr}</div>
                  <h3 className="font-sora font-bold text-[20px] text-[#1a1a2e] mb-1.5" style={{ letterSpacing: -0.3 }}>{s.t}</h3>
                  <p className="text-[14px] leading-[1.75] text-gray-700 font-light">{s.d}</p>
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
            <p className="text-[#1a1a2e] leading-[1.55] mb-2" style={{ fontSize: isHi ? 19 : 22, fontWeight: isHi ? 500 : 400, fontStyle: 'italic' }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-[12px] text-brand-blue font-bold mt-3.5 tracking-[1.5px] uppercase">{t.quoteBy}</p>
          </div>
        </Anim>
      </div>
    </section>
  );
}

/* ─── Products ─── */
export function ProductsSection({ t, isHi }: SectionProps) {
  const [activeCat, setActiveCat] = useState('plastic');
  const bf = isHi ? "'Hind','Sora',sans-serif" : "'Sora',sans-serif";

  return (
    <section id="products" className="py-[120px] max-md:py-[72px] bg-white" style={{ fontFamily: bf }}>
      <div className="container">
        <Anim>
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[4px] uppercase text-brand-blue font-bold mb-3">{t.prodTag}</p>
            <h2 className="font-sora font-bold text-[#1a1a2e] leading-[1.1] mb-3.5" style={{ fontSize: 'clamp(32px,6vw,54px)', letterSpacing: -1 }}>{t.prodTitle}</h2>
            <p className="text-[16px] text-gray-700 max-w-[460px] mx-auto leading-[1.7] font-light">{t.prodSub}</p>
          </div>
        </Anim>

        <Anim delay={0.1}>
          <div className="flex gap-2.5 justify-center flex-wrap mb-11">
            {t.cats.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`px-7 py-3 rounded-full text-[13px] font-semibold font-sora whitespace-nowrap transition-all duration-400 border-none ${activeCat === c.id ? 'bg-brand-blue text-white shadow-lg -translate-y-0.5' : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-brand-blue hover:-translate-y-0.5'}`}
                style={{ letterSpacing: 0.3 }}
              >
                {c.name}
              </button>
            ))}
          </div>
        </Anim>

        {t.cats.filter(c => c.id === activeCat).map(cat => {
          const icon = CATEGORY_ICONS[cat.id];
          const gradient = CATEGORY_GRADIENTS[cat.id];
          const ci = ['plastic', 'steel', 'home', 'office'].indexOf(cat.id);
          return (
            <ScaleIn key={cat.id}>
              <div className="text-center mb-8">
                <div
                  className="inline-flex w-16 h-16 rounded-[20px] items-center justify-center text-[28px] mb-3"
                  style={{ background: gradient, boxShadow: `0 8px 24px ${ACCENT_COLORS[ci]}33` }}
                >
                  {icon}
                </div>
                <h3 className="font-sora font-bold text-[28px] text-[#1a1a2e] mb-1" style={{ letterSpacing: -0.5 }}>{cat.name}</h3>
                <p className="text-[14px] text-gray-700 max-w-[440px] mx-auto leading-[1.7] font-light mt-1.5">{cat.desc}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3.5">
                {cat.items.map((item, j) => (
                  <div key={j} className="w-[140px] bg-white rounded-[20px] p-5 pt-6 text-center border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
                    <div className="w-full aspect-square rounded-[14px] bg-gray-50 flex items-center justify-center text-4xl mb-3">{icon}</div>
                    <p className="text-[13px] font-semibold text-[#1a1a2e]">{item}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-[14px] font-semibold bg-brand-blue text-white hover:bg-brand-blueDark transition-all duration-400 hover:-translate-y-1 hover:shadow-xl">
                  💬 {t.enquire}
                </a>
              </div>
            </ScaleIn>
          );
        })}

      </div>
    </section>
  );
}

/* ─── Brands ─── */
const BRAND_COLORS: Record<string, string> = {
  Supreme: '#c41230',
  Linc: '#e8302a',
  Milton: '#e8392a',
  Sapana: '#8b1c2d',
};

const BRAND_LOGO_MAP: Record<string, string> = {
  Supreme: supremeLogo.src,
  Linc: lincLogo.src,
  Milton: miltonLogo.src,
  Sapana: sapanaLogo.src,
};

export function BrandsSection({ t, isHi }: SectionProps) {
  const bf = isHi ? "'Hind','Sora',sans-serif" : "'Sora',sans-serif";

  return (
    <section id="brands" className="py-12 bg-white border-y border-gray-100" style={{ fontFamily: bf }}>
      <div className="container mb-8">
        <Anim>
          <div className="text-center">
            <p className="text-[11px] tracking-[4px] uppercase text-brand-blue font-bold mb-2">{t.brandsTag}</p>
            <h2 className="font-sora font-bold text-[#1a1a2e]" style={{ fontSize: 'clamp(24px,4vw,36px)', letterSpacing: -0.5 }}>{t.brandsTitle}</h2>
          </div>
        </Anim>
      </div>

      {/* Carousel */}
      <div className="container">
        <div
          className="flex gap-4 overflow-x-auto pb-2 no-scrollbar"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
        {t.brands.map((brand: BrandItem, i: number) => {
          const color = BRAND_COLORS[brand.name] ?? ACCENT_COLORS[i % ACCENT_COLORS.length];
          return (
            <div
              key={brand.name}
              className="flex-1 flex-shrink-0 flex items-center justify-center bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
              style={{ minWidth: 180, height: 110, scrollSnapAlign: 'start', borderTop: `3px solid ${color}` }}
            >
              <img
                src={BRAND_LOGO_MAP[brand.name]}
                alt={brand.name}
                style={{ maxHeight: 56, maxWidth: 140, objectFit: 'contain' }}
              />
            </div>
          );
        })}
        </div>
      </div>

    </section>
  );
}

/* ─── Reviews ─── */
export function ReviewsSection({ t, isHi }: SectionProps) {
  const bf = isHi ? "'Hind','Sora',sans-serif" : "'Sora',sans-serif";

  return (
    <section id="reviews" className="py-[120px] max-md:py-[72px]" style={{ background: '#f8f9fa', fontFamily: bf }}>
      <div className="container">
        <Anim>
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[4px] uppercase text-brand-blue font-bold mb-3">{t.revTag}</p>
            <h2 className="font-sora font-bold text-[#1a1a2e] leading-[1.1] mb-3.5" style={{ fontSize: 'clamp(32px,6vw,54px)', letterSpacing: -1 }}>{t.revTitle}</h2>
            <p className="text-[16px] text-gray-700 font-light">{t.revSub}</p>
          </div>
        </Anim>
        <ReviewsClient />
      </div>
    </section>
  );
}

/* ─── Contact ─── */
export function ContactSection({ t, isHi }: SectionProps) {
  const bf = isHi ? "'Hind','Sora',sans-serif" : "'Sora',sans-serif";

  return (
    <section id="contact" className="py-[120px] pb-[140px] max-md:py-[72px] bg-white" style={{ fontFamily: bf }}>
      <div className="container">
        <Anim>
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[4px] uppercase text-brand-blue font-bold mb-3">{t.contactTag}</p>
            <h2 className="font-sora font-bold text-[#1a1a2e] leading-[1.1] mb-3.5" style={{ fontSize: 'clamp(32px,6vw,54px)', letterSpacing: -1 }}>{t.contactTitle}</h2>
            <p className="text-[16px] text-gray-700 font-light">{t.contactSub}</p>
          </div>
        </Anim>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScaleIn>
            <div className="bg-[#1a1a2e] rounded-3xl p-9 text-white h-full">
              <h3 className="font-sora font-bold text-[22px] text-white mb-7" style={{ letterSpacing: -0.3 }}>Amit Plastic</h3>
              {[
                { i: '📍', l: t.address, v: t.addr },
                { i: '📞', l: t.phone, v: `+91 ${PHONE}` },
                { i: '🕐', l: t.hours, v: t.hourVal },
              ].map((c, idx) => (
                <div key={idx} className="flex gap-3.5 mb-5.5">
                  <span className="text-[20px] shrink-0">{c.i}</span>
                  <div>
                    <p className="text-[10px] tracking-[2px] uppercase text-[#8ab4f8] font-bold mb-0.5">{c.l}</p>
                    <p className="text-[14px] leading-[1.65] whitespace-pre-line font-light" style={{ color: 'rgba(255,255,255,0.65)' }}>{c.v}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-2.5 mt-7 flex-wrap">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] py-3.5 px-4 rounded-full bg-[#25D366] text-white text-center font-semibold text-[13px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  💬 WhatsApp
                </a>
                <a href={CALL_URL} className="flex-1 min-w-[120px] py-3.5 px-4 rounded-full text-white text-center font-semibold text-[13px] no-underline transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  📞 {t.call}
                </a>
              </div>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.12}>
            <div className="rounded-3xl overflow-hidden h-full min-h-[380px] relative border border-gray-100">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amit Plastic Location"
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3.5 left-3.5 right-3.5 py-3.5 rounded-full bg-white text-center font-semibold text-[13px] text-brand-blue no-underline shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                📍 {t.openMaps}
              </a>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
export function Footer({ t, isHi }: SectionProps) {
  const bf = isHi ? "'Hind','Sora',sans-serif" : "'Sora',sans-serif";
  const NAV_LINKS = [
    { label: t.nav[0], id: 'home' },
    { label: t.nav[1], id: 'story' },
    { label: t.nav[2], id: 'products' },
    { label: t.nav[3], id: 'brands' },
    { label: t.nav[4], id: 'reviews' },
    { label: t.nav[5], id: 'contact' },
  ];

  return (
    <footer className="bg-[#0f0f1a] pb-[110px] md:pb-0" style={{ fontFamily: bf }}>
      {/* Top divider */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Col 1 — Brand */}
          <div>
            <div className="mb-4">
              <Seal size={40} />
            </div>
            <p className="text-[14px] leading-[1.75] mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {t.heroLine}
            </p>
            {/* Social */}
            <div className="flex flex-wrap gap-2">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a href={INDIAMART_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor"><text y="24" fontSize="22" fontWeight="bold" fontFamily="Arial">IM</text></svg>
                IndiaMart
              </a>
              <a href={JUSTDIAL_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor"><text y="24" fontSize="22" fontWeight="bold" fontFamily="Arial">JD</text></svg>
                JustDial
              </a>
            </div>

            {/* Ratings */}
            <div className="mt-5">
              <p className="text-[11px] tracking-[3px] uppercase font-bold mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {isHi ? 'हमारी रेटिंग' : 'Our Ratings'}
              </p>
              <RatingBadges />
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase font-bold mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {isHi ? 'त्वरित लिंक' : 'Quick Links'}
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[14px] font-medium transition-colors duration-200 hover:text-white text-left"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase font-bold mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {t.contactTag}
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-[16px] shrink-0 mt-0.5">📍</span>
                <span className="text-[14px] leading-[1.7] whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.addr}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[16px] shrink-0">📞</span>
                <a href={`tel:+91${PHONE}`} className="text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.65)' }}>+91 {PHONE}</a>
              </li>
              <li className="flex gap-3">
                <span className="text-[16px] shrink-0 mt-0.5">🕐</span>
                <span className="text-[14px] leading-[1.7] whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.65)' }}>{t.hourVal}</span>
              </li>
            </ul>
            <div className="flex gap-2.5 mt-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-full bg-[#25D366] text-white text-center font-semibold text-[13px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                💬 WhatsApp
              </a>
              <a href={`tel:+91${PHONE}`}
                className="flex-1 py-2.5 rounded-full text-white text-center font-semibold text-[13px] no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                📞 {t.call}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Amit Plastic. All rights reserved.
          </p>
          <div className="flex gap-1.5">
            {ACCENT_COLORS.map((c, i) => (
              <div key={i} className="w-5 h-1 rounded-full" style={{ background: c, opacity: 0.6 }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Floating CTAs ─── */
export function FloatingCTAs({ t }: { t: Translations }) {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[88px] right-[18px] z-[999] w-[52px] h-[52px] rounded-full bg-[#25D366] flex items-center justify-center text-2xl text-white no-underline shadow-lg animate-gentle-pulse max-md:bottom-[76px] max-md:w-[46px] max-md:h-[46px] max-md:text-[21px]"
        title="WhatsApp"
      >
        💬
      </a>

      <div className="hidden max-md:flex fixed bottom-0 left-0 right-0 z-[1000] bg-[#1a1a2e]/[0.97] backdrop-blur-[16px] px-4 py-2.5 gap-2.5" style={{ paddingBottom: 'max(10px, env(safe-area-inset-bottom))' }}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-white no-underline font-semibold text-[13px] py-2.5 bg-[#25D366] rounded-full"
        >
          💬 WhatsApp
        </a>
        <a
          href={CALL_URL}
          className="flex-1 flex items-center justify-center gap-2 text-white no-underline font-semibold text-[13px] py-2.5 rounded-full"
          style={{ border: '1.5px solid rgba(255,255,255,0.18)' }}
        >
          📞 {t.call}
        </a>
      </div>
    </>
  );
}
