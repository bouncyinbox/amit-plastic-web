'use client';

import { useState } from 'react';
import { Anim, ScaleIn } from '@/components/Animations';
import SectionHeader from '@/components/SectionHeader';
import { WHATSAPP_URL, CATEGORY_ICONS } from '@/lib/constants';
import { PRODUCT_IMAGES } from '@/lib/product-images';
import { bodyFont } from '@/lib/design';
import type { SectionProps } from './types';

export default function ProductsSection({ t, isHi }: SectionProps) {
  const [activeCatId, setActiveCatId] = useState('plastic');

  const activeCatIndex = t.cats.findIndex(c => c.id === activeCatId);
  const activeCat = t.cats[activeCatIndex];

  return (
    <section
      id="products"
      className="py-[120px] max-md:py-[72px] bg-white"
      style={{ fontFamily: bodyFont(isHi) }}
    >
      <div className="container">
        <Anim>
          <SectionHeader tag={t.prodTag} title={t.prodTitle} sub={t.prodSub} subMaxWidth="460px" />
        </Anim>

        {/* Category tabs */}
        <Anim delay={0.1}>
          <div className="flex gap-0 justify-center mb-11 mx-auto max-w-fit rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 max-md:flex-wrap max-md:rounded-xl">
            {t.cats.map((cat, i) => {
              const isActive = activeCatId === cat.id;
              const icon = CATEGORY_ICONS[cat.id] ?? '📦';
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCatId(cat.id)}
                  className={`relative flex items-center gap-2 px-5 py-3.5 max-md:px-4 max-md:py-3 text-[13px] font-semibold font-sora whitespace-nowrap transition-all duration-300 border-none max-md:flex-1 max-md:justify-center ${
                    isActive
                      ? 'bg-brand-blue text-white'
                      : 'bg-transparent text-gray-800 hover:bg-white hover:text-brand-blue'
                  }`}
                  style={{ letterSpacing: 0.2 }}
                >
                  <span className="text-[15px]">{icon}</span>
                  <span>{cat.name}</span>
                  <span
                    className={`ml-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded-full leading-none ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {cat.items.length}
                  </span>
                  {/* Divider between tabs (not after last) */}
                  {!isActive && i < t.cats.length - 1 && (
                    <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gray-200 max-md:hidden" />
                  )}
                </button>
              );
            })}
          </div>
        </Anim>

        {/* Active category content */}
        {activeCat && (
          <ScaleIn key={activeCat.id}>
            <div className="text-center mb-8">
              <h3
                className="font-sora font-bold text-[28px] text-[#1a1a2e] mb-1"
                style={{ letterSpacing: -0.5 }}
              >
                {activeCat.name}
              </h3>
              <p className="text-[14px] text-gray-700 max-w-[440px] mx-auto leading-[1.7] font-light mt-1.5">
                {activeCat.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3.5 lg:gap-5">
              {activeCat.items.map((item, idx) => {
                const imgSrc = PRODUCT_IMAGES[`${activeCat.id}-${idx}`];
                return (
                  <div
                    key={item}
                    className="w-full sm:w-[160px] lg:w-[200px] bg-white rounded-[20px] p-3 lg:p-4 pt-3 lg:pt-4 text-center border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-transparent"
                  >
                    <div className="w-full aspect-square rounded-[14px] bg-gray-50 flex items-center justify-center text-4xl mb-3 overflow-hidden">
                      {imgSrc ? (
                        <img
                          src={imgSrc}
                          alt={item}
                          className="w-full h-full object-cover rounded-[14px]"
                        />
                      ) : (
                        CATEGORY_ICONS[activeCat.id]
                      )}
                    </div>
                    <p className="text-[13px] lg:text-[14px] font-semibold text-[#1a1a2e]">{item}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-[14px] font-semibold bg-brand-blue text-white hover:bg-brand-blueDark transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
              >
                💬 {t.enquire}
              </a>
            </div>
          </ScaleIn>
        )}
      </div>
    </section>
  );
}
