'use client';

import { WHATSAPP_URL, CALL_URL } from '@/lib/constants';
import { colors } from '@/lib/design';
import { Translations } from '@/lib/translations';

interface FloatingCTAsProps {
  t: Pick<Translations, 'call'>;
}

export default function FloatingCTAs({ t }: FloatingCTAsProps) {
  return (
    <>
      {/* Desktop floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[88px] right-[18px] z-[999] w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl text-white no-underline shadow-lg animate-gentle-pulse max-md:bottom-[76px] max-md:w-[46px] max-md:h-[46px] max-md:text-[21px]"
        style={{ background: colors.whatsapp }}
        title="WhatsApp"
        aria-label="Contact on WhatsApp"
      >
        💬
      </a>

      {/* Mobile sticky bottom bar */}
      <div
        className="hidden max-md:flex fixed bottom-0 left-0 right-0 z-[1000] backdrop-blur-[16px] px-4 py-2.5 gap-2.5"
        style={{
          background: 'rgba(26,26,46,0.97)',
          paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
        }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-white no-underline font-semibold text-[13px] py-2.5 rounded-full"
          style={{ background: colors.whatsapp }}
        >
          💬 WhatsApp
        </a>
        <a
          href={CALL_URL}
          className="flex-1 flex items-center justify-center gap-2 text-white no-underline font-semibold text-[13px] py-2.5 rounded-full"
          style={{ border: `1.5px solid ${colors.white12}` }}
        >
          📞 {t.call}
        </a>
      </div>
    </>
  );
}
