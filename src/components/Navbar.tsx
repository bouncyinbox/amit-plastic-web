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

export default function Navbar({ scrolled, lang, setLang, t }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHi = lang === 'hi';

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
        padding: scrolled ? '14px 0' : '24px 0',
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => go('home')} className="cursor-pointer">
          <Seal size={scrolled ? 42 : 50} dark={scrolled} />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {t.nav.map((label, i) => (
            <span
              key={NAV_IDS[i]}
              onClick={() => go(NAV_IDS[i])}
              className="nav-link cursor-pointer font-semibold tracking-[1.5px] uppercase relative pb-1 transition-colors duration-300 hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-300 after:rounded-sm hover:after:w-full"
              style={{
                fontSize: isHi ? 15 : 13,
                color: scrolled ? '#3c4043' : 'rgba(255,255,255,0.85)',
                fontFamily: isHi ? bodyFont(true) : undefined,
                textTransform: isHi ? 'none' : undefined,
                letterSpacing: isHi ? 0.3 : undefined,
              }}
            >
              {label}
            </span>
          ))}

          {/* Language toggle */}
          <div
            className="flex rounded-full overflow-hidden text-[13px] font-bold tracking-[0.5px] cursor-pointer"
            style={{ border: `1.5px solid ${scrolled ? '#e8eaed' : 'rgba(255,255,255,0.15)'}` }}
          >
            <span
              onClick={() => setLang('en')}
              className="px-3.5 py-1.5 transition-all duration-300"
              style={{
                background: lang === 'en' ? (scrolled ? '#e8f0fe' : 'rgba(255,255,255,0.15)') : 'transparent',
                color: scrolled ? (lang === 'en' ? '#1a73e8' : '#5f6368') : (lang === 'en' ? '#fff' : 'rgba(255,255,255,0.45)'),
              }}
            >
              EN
            </span>
            <span
              onClick={() => setLang('hi')}
              className="px-3.5 py-1.5 transition-all duration-300"
              style={{
                background: lang === 'hi' ? (scrolled ? '#e8f0fe' : 'rgba(255,255,255,0.15)') : 'transparent',
                color: scrolled ? (lang === 'hi' ? '#1a73e8' : '#5f6368') : (lang === 'hi' ? '#fff' : 'rgba(255,255,255,0.45)'),
              }}
            >
              हि
            </span>
          </div>

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
          {/* Mobile lang toggle */}
          <div
            className="flex rounded-full overflow-hidden text-[10px] font-bold cursor-pointer"
            style={{ border: `1.5px solid ${scrolled ? '#e8eaed' : 'rgba(255,255,255,0.15)'}` }}
          >
            <span
              onClick={() => setLang('en')}
              className="px-2.5 py-1 transition-all duration-300"
              style={{
                background: lang === 'en' ? (scrolled ? '#e8f0fe' : 'rgba(255,255,255,0.15)') : 'transparent',
                color: scrolled ? (lang === 'en' ? '#1a73e8' : '#5f6368') : (lang === 'en' ? '#fff' : 'rgba(255,255,255,0.45)'),
              }}
            >
              EN
            </span>
            <span
              onClick={() => setLang('hi')}
              className="px-2.5 py-1 transition-all duration-300"
              style={{
                background: lang === 'hi' ? (scrolled ? '#e8f0fe' : 'rgba(255,255,255,0.15)') : 'transparent',
                color: scrolled ? (lang === 'hi' ? '#1a73e8' : '#5f6368') : (lang === 'hi' ? '#fff' : 'rgba(255,255,255,0.45)'),
              }}
            >
              हि
            </span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 flex flex-col gap-[5px]"
            aria-label="Toggle menu"
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
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/[0.97] backdrop-blur-[20px] border-b border-gray-100 px-7 py-2">
          {t.nav.map((label, i) => (
            <div
              key={NAV_IDS[i]}
              onClick={() => go(NAV_IDS[i])}
              className="py-3.5 text-[15px] font-medium text-gray-800 cursor-pointer border-b border-gray-50"
              style={{ fontFamily: isHi ? bodyFont(true) : undefined }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
