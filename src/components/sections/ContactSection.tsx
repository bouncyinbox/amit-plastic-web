'use client';

import { Anim, ScaleIn } from '@/components/Animations';
import SectionHeader from '@/components/SectionHeader';
import { WHATSAPP_URL, CALL_URL, MAPS_LINK, MAPS_EMBED, PHONES, EMAIL } from '@/lib/constants';
import { bodyFont, colors } from '@/lib/design';
import type { SectionProps } from './types';

export default function ContactSection({ t, isHi }: SectionProps) {
  const contactDetails = [
    { icon: '📍', label: t.address, value: t.addr },
    { icon: '📞', label: t.phone,   value: PHONES.map(p => `+91 ${p}`).join('\n') },
    { icon: '✉️', label: isHi ? 'ईमेल' : 'Email', value: EMAIL },
    { icon: '🕐', label: t.hours,   value: t.hourVal },
  ];

  return (
    <section
      id="contact"
      className="py-[120px] pb-[140px] max-md:py-[72px] bg-white"
      style={{ fontFamily: bodyFont(isHi) }}
    >
      <div className="container">
        <Anim>
          <SectionHeader tag={t.contactTag} title={t.contactTitle} sub={t.contactSub} />
        </Anim>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info card */}
          <ScaleIn>
            <div className="bg-[#1a1a2e] rounded-3xl p-9 text-white h-full">
              <h3 className="font-sora font-bold text-[22px] text-white mb-7" style={{ letterSpacing: -0.3 }}>
                Amit Plastic
              </h3>

              {contactDetails.map(({ icon, label, value }) => (
                <div key={label} className="flex gap-3.5 mb-5">
                  <span className="text-[20px] shrink-0">{icon}</span>
                  <div>
                    <p className="text-[10px] tracking-[2px] uppercase font-bold mb-0.5" style={{ color: colors.blueLight }}>
                      {label}
                    </p>
                    <p className="text-[14px] leading-[1.65] whitespace-pre-line font-light" style={{ color: colors.white65 }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex gap-2.5 mt-7 flex-wrap">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] py-3.5 px-4 rounded-full text-white text-center font-semibold text-[13px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: colors.whatsapp }}
                >
                  💬 WhatsApp
                </a>
                <a
                  href={CALL_URL}
                  className="flex-1 min-w-[120px] py-3.5 px-4 rounded-full text-white text-center font-semibold text-[13px] no-underline transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: colors.white08, border: `1px solid ${colors.white12}` }}
                >
                  📞 {t.call}
                </a>
              </div>
            </div>
          </ScaleIn>

          {/* Map */}
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
