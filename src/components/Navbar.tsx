'use client';

import { useState, useCallback } from 'react';
import Seal from './Seal';
import { WHATSAPP_URL } from '@/lib/constants';
import { bodyFont } from '@/lib/design';
import { Lang, Translations } from '@/lib/translations';

interface NavbarProps {
  scrolled: boolean;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const NAV_IDS = ['home', 'story', 'products', 'brands', 'reviews', 'contact'];

function LangToggle({
  lang,
  setLang,
  scrolled,
  size = 'md',
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  scrolled: boolean;
  size?: 'sm' | 'md';
}) {
  const px = size === 'sm' ? 'px-2.5 py-1' : 'px-3.5 py-1.5';
  const text = size === 'sm' ? 'text-[10px]' : 'text-[13px]';

  return (
    <div
      className={`flex rounded-full overflow-hidden ${text} font-bold tracking-[0.5px]`}
      style={{ border: `1.5px solid ${scrolled ? '#e8eaed' : 'rgba(255,255,255,0.15)'}` }}
      role="group"
      aria-label="Language selector"
    >
      {(['en', 'hi'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`${px} transition-all duration-300 cursor-pointer border-none`}
          style={{
            background: lang === l ? (scrolled ? '#e8f0fe' : 'rgba(255,255,255,0.15)') : 'transparent',
            color: scrolled
              ? lang === l ? '#1a73e8' : '#5f6368'
              : lang === l ? '#fff' : 'rgba(255,255,255,0.45)',
          }}
        >
          {l === 'en' ? 'EN' : 'हि'}
        </button>
      ))}
    </div>
  );
}

export default function Navbar({ scrolled, lang, setLang, t }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHi = lang === 'hi';

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(26,26,46,0.65)',
        backdropFilter: 'blur(20px) saturate(1.8)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.06)',
        padding: scrolled ? '14px 0' : '24px 0',
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="cursor-pointer border-none bg-transparent p-0"
          aria-label="Go to top"
        >
          <Seal size={scrolled ? 42 : 50} dark={scrolled} />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {t.nav.map((label, i) => (
            <button
              key={NAV_IDS[i]}
              onClick={() => go(NAV_IDS[i])}
              className="nav-link font-semibold tracking-[1.5px] uppercase relative pb-1 transition-colors duration-300 hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-300 after:rounded-sm hover:after:w-full border-none bg-transparent cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-blue"
              style={{
                fontSize: isHi ? 15 : 13,
                color: scrolled ? '#3c4043' : 'rgba(255,255,255,0.85)',
                fontFamily: isHi ? bodyFont(true) : undefined,
                textTransform: isHi ? 'none' : undefined,
                letterSpacing: isHi ? 0.3 : undefined,
              }}
            >
              {label}
            </button>
          ))}

          <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold bg-brand-blue text-white hover:bg-brand-blueDark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2.5">
          <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} size="sm" />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 flex flex-col gap-[5px] border-none bg-transparent cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-[22px] h-[1.5px] rounded-sm transition-all duration-300"
                style={{
                  background: scrolled ? '#1a1a2e' : '#fff',
                  transform: menuOpen
                    ? i === 0
                      ? 'rotate(45deg) translateY(6.5px)'
                      : i === 2
                        ? 'rotate(-45deg) translateY(-6.5px)'
                        : 'scaleX(0)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className="absolute top-full left-0 right-0 bg-white/[0.97] backdrop-blur-[20px] border-b border-gray-100 px-7 overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          paddingTop: menuOpen ? '8px' : '0px',
          paddingBottom: menuOpen ? '8px' : '0px',
          opacity: menuOpen ? 1 : 0,
        }}
        aria-hidden={!menuOpen}
      >
        {t.nav.map((label, i) => (
          <button
            key={NAV_IDS[i]}
            onClick={() => go(NAV_IDS[i])}
            className="w-full text-left py-3.5 text-[15px] font-medium text-gray-800 border-b border-gray-50 last:border-0 bg-transparent cursor-pointer block"
            style={{ fontFamily: isHi ? bodyFont(true) : undefined }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
