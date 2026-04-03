'use client';

import { WHATSAPP_URL, CALL_URL, ACCENT_COLORS } from '@/lib/constants';
import { bodyFont } from '@/lib/design';
import { useParallax } from '@/lib/hooks';
import { Translations } from '@/lib/translations';

interface HeroProps {
  t: Translations;
  isHi: boolean;
  scrollY: number;
}

export default function Hero({ t, isHi, scrollY }: HeroProps) {
  const [heroRef, heroOff] = useParallax(0.25);
  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const heroScale = 1 + scrollY * 0.0003;

  return (
    <section
      id="home"
      ref={heroRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center relative text-center px-6 overflow-hidden"
      style={{ background: '#1a1a2e' }}
    >
      {/* Animated gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%,rgba(66,133,244,.15) 0%,transparent 60%),radial-gradient(ellipse at 70% 80%,rgba(234,67,53,.1) 0%,transparent 50%),radial-gradient(ellipse at 50% 50%,rgba(251,188,4,.08) 0%,transparent 60%)',
          transform: `scale(${heroScale})`,
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translateY(${heroOff}px)`,
        }}
      />

      <div
        className="container relative z-10"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroOff * 0.5}px)`,
          fontFamily: bodyFont(isHi),
        }}
      >
        <div className="mt-8">
          <h1 className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_both] font-sora font-bold text-white leading-[1.05]" style={{ fontSize: 'clamp(42px,9vw,80px)', letterSpacing: -2 }}>
            Amit Plastic
          </h1>
          <p className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_both] mt-2.5" style={{ fontSize: 'clamp(13px,2.5vw,17px)', fontWeight: 400, color: 'rgba(255,255,255,0.4)', letterSpacing: isHi ? 1 : 5, textTransform: isHi ? 'none' : 'uppercase' }}>
            {t.heroSub}
          </p>
        </div>

        <p className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.5s_both] mt-7 mx-auto max-w-[560px] xl:max-w-[720px] 2xl:max-w-[860px]" style={{ fontSize: 'clamp(16px,3vw,21px)', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
          {t.heroLine}
        </p>
        <p className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.5s_both] mt-4" style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', letterSpacing: isHi ? 0 : 1.5, fontWeight: 500 }}>
          {t.heroAddr}
        </p>

        <div className="animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.7s_both] flex gap-3.5 justify-center flex-wrap mt-9">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-9 sm:py-4 rounded-full text-[14px] font-semibold bg-brand-blue text-white hover:bg-brand-blueDark transition-all duration-400 hover:-translate-y-1 hover:shadow-xl">
            💬 {t.wa}
          </a>
          <a href={CALL_URL} className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-9 sm:py-4 rounded-full text-[14px] font-semibold transition-all duration-400 hover:-translate-y-1" style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)' }}>
            📞 {t.call}
          </a>
        </div>

        <div className="animate-[scaleIn_1.2s_cubic-bezier(0.16,1,0.3,1)_0.9s_both] flex justify-center gap-[clamp(28px,7vw,64px)] mt-14 flex-wrap">
          {t.stats.map((s, i) => (
            <div key={s.value} className="text-center">
              <div className="font-sora font-extrabold leading-none" style={{ fontSize: 'clamp(32px,6vw,48px)', color: ACCENT_COLORS[i], letterSpacing: -1 }}>{s.value}</div>
              <div className="mt-1" style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 500, letterSpacing: 0.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-float">
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <rect x="1" y="1" width="18" height="28" rx="9" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.3)">
            <animate attributeName="cy" values="10;18;10" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}
