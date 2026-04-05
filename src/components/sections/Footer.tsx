'use client';

import Seal from '@/components/Seal';
import RatingBadges from '@/components/RatingBadges';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { WHATSAPP_URL, CALL_URL, PHONES, EMAIL, FACEBOOK_URL, INDIAMART_URL, JUSTDIAL_URL, ACCENT_COLORS, NAV_ROUTES, navigateToSection } from '@/lib/constants';
import { bodyFont, colors } from '@/lib/design';
import type { SectionProps } from './types';

export default function Footer({ t, isHi }: SectionProps) {
  const navLinks = NAV_ROUTES.map(({ id, path }, i) => ({ id, path, label: t.nav[i] }));

  const socialLinks = [
    {
      href: FACEBOOK_URL,
      label: 'Facebook',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      href: INDIAMART_URL,
      label: 'IndiaMart',
      icon: (
        <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor">
          <text y="24" fontSize="22" fontWeight="bold" fontFamily="Arial">IM</text>
        </svg>
      ),
    },
    {
      href: JUSTDIAL_URL,
      label: 'JustDial',
      icon: (
        <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor">
          <text y="24" fontSize="22" fontWeight="bold" fontFamily="Arial">JD</text>
        </svg>
      ),
    },
  ];

  const contactItems: { icon: string; value: string; href?: string }[] = [
    { icon: '📍', value: t.addr },
    ...PHONES.map(p => ({ icon: '📞', value: `+91 ${p}`, href: `tel:+91${p}` })),
    { icon: '✉️', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: '🕐', value: t.hourVal },
  ];

  return (
    <footer className="bg-[#0f0f1a] pb-[110px] md:pb-0" style={{ fontFamily: bodyFont(isHi) }}>
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)' }} />

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1fr_1.3fr] gap-10 md:gap-8">

          {/* Col 1 — Brand + social + ratings */}
          <div>
            <div className="mb-4">
              <Seal size={40} />
            </div>
            <p className="text-[14px] leading-[1.75] mb-6" style={{ color: colors.white55 }}>
              {t.heroLine}
            </p>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: colors.white07, color: 'rgba(255,255,255,0.75)', border: `1px solid ${colors.white12}` }}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-[11px] tracking-[3px] uppercase font-bold mb-3" style={{ color: colors.white35 }}>
                {isHi ? 'हमारी रेटिंग' : 'Our Ratings'}
              </p>
              <ErrorBoundary context="Footer/RatingBadges">
                <RatingBadges />
              </ErrorBoundary>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase font-bold mb-5" style={{ color: colors.white35 }}>
              {isHi ? 'त्वरित लिंक' : 'Quick Links'}
            </p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    onClick={(e) => navigateToSection(e, link.id, link.path)}
                    className="text-[14px] font-medium transition-colors duration-200 hover:text-white text-left no-underline"
                    style={{ color: colors.white55 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase font-bold mb-5" style={{ color: colors.white35 }}>
              {t.contactTag}
            </p>
            <ul className="space-y-4">
              {contactItems.map(({ icon, value, href }, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[16px] shrink-0 mt-0.5">{icon}</span>
                  {href ? (
                    <a href={href} className="text-[14px] hover:text-white transition-colors" style={{ color: colors.white65 }}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-[14px] leading-[1.7] whitespace-pre-line" style={{ color: colors.white65 }}>
                      {value}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex gap-2.5 mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-full text-white text-center font-semibold text-[13px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: colors.whatsapp }}
              >
                💬 WhatsApp
              </a>
              <a
                href={CALL_URL}
                className="flex-1 py-2.5 rounded-full text-white text-center font-semibold text-[13px] no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: colors.white08, border: `1px solid ${colors.white12}` }}
              >
                📞 {t.call}
              </a>
            </div>
          </div>

          {/* Col 4 — Facebook Card */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase font-bold mb-5" style={{ color: colors.white35 }}>
              {isHi ? 'फेसबुक पर फॉलो करें' : 'Follow Us on Facebook'}
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              style={{ background: colors.white07, border: `1px solid ${colors.white12}` }}
            >
              {/* FB Logo + Page Name */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: '#1877F2' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white leading-tight">Amit Plastic</p>
                  <p className="text-[12px] mt-0.5" style={{ color: colors.white45 }}>
                    {isHi ? 'फर्नीचर एक्सक्लूसिव शोरूम' : 'Furniture Exclusive Showroom'}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13px] leading-[1.7] mb-5" style={{ color: colors.white55 }}>
                {isHi
                  ? 'नवीनतम अपडेट, ऑफ़र और नई प्रोडक्ट जानकारी के लिए हमें फेसबुक पर फॉलो करें।'
                  : 'Follow us for latest updates, offers & new arrivals. Join our community!'}
              </p>

              {/* Like & Follow Button */}
              <div
                className="flex items-center justify-center gap-2 py-3 rounded-full text-[13px] font-semibold transition-all duration-300 group-hover:brightness-110"
                style={{ background: '#1877F2', color: 'white' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                {isHi ? 'लाइक और फॉलो करें' : 'Like & Follow'}
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
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
