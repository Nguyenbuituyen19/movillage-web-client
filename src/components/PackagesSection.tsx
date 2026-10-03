'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Sparkles } from 'lucide-react';

interface PackagesSectionProps {
  onOpenBooking: (pkgTitle?: string) => void;
}

export function PackagesSection({ onOpenBooking }: PackagesSectionProps) {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const isVi = locale === 'vi';

  return (
    <section
      ref={sectionRef}
      id="packages"
      className="py-20 md:py-28 bg-[#fdfcfb] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-[11px] sm:text-xs font-normal uppercase tracking-wider text-[#8f987f] mb-3 font-sans">
            {isVi ? 'GÓI & DỊCH VỤ' : 'PACKAGES & SERVICES'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal text-[#241b18] font-display">
            {isVi ? 'Các gói combo & dịch vụ' : 'Packages & Signature Combos'}
          </h2>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: 2 ngày 1 đêm (Light) */}
          <div
            onClick={() => onOpenBooking(isVi ? 'Combo 2 ngày 1 đêm' : 'Weekend Escape (2D1N)')}
            className={`rounded-2xl bg-[#f6f3ee] border border-[#e5ded4] p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-500 relative cursor-pointer group ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Top Right Badges */}
            <div className="absolute top-7 right-7 sm:top-9 sm:right-9 flex flex-col items-end gap-4">
              <span className="bg-[#8f987f] text-white text-[10px] font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs font-sans">
                {isVi ? 'QUICK GETAWAY' : 'QUICK GETAWAY'}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#e8eee4] flex items-center justify-center text-base select-none shadow-xs group-hover:scale-110 transition-transform">
                <span>🌲</span>
              </div>
            </div>

            <div>
              {/* Title & Subtitle */}
              <div className="mb-4 pr-24">
                <h3 className="text-2xl sm:text-[28px] font-medium font-display text-[#241b18] leading-tight mb-1">
                  {isVi ? '2 ngày 1 đêm' : '2 Days 1 Night'}
                </h3>
                <p className="text-[11px] font-medium tracking-widest text-[#8c827a] uppercase font-sans">
                  WEEKEND ESCAPE
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-base sm:text-[17px] font-medium text-[#b56e5a] font-sans">
                  {isVi ? 'Từ 1.800.000đ/người' : 'From 1,800,000 VND/guest'}
                </p>
              </div>

              {/* Divider */}
              <div className="border-b border-[#e5ded4] mb-6" />

              {/* Inclusions */}
              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3 text-xs sm:text-[13px] text-[#3d332e] font-sans font-light">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-[#8f987f] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                  </div>
                  <span className="leading-snug">
                    {isVi
                      ? '1 đêm nghỉ + ăn sáng + 1 bữa chính'
                      : '1 night stay + breakfast + 1 main meal'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-[13px] text-[#3d332e] font-sans font-light">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-[#8f987f] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                  </div>
                  <span className="leading-snug">
                    {isVi
                      ? 'Chèo kayak hoặc câu cá + sử dụng hồ bơi, sàn yoga'
                      : 'Kayak or fishing + access to infinity pool, yoga deck'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Accent Bar */}
            <div className="w-full pt-4 mt-auto">
              <div className="h-1.5 w-full bg-[#8f987f] rounded-full" />
            </div>
          </div>

          {/* Card 2: 3 ngày 2 đêm (Dark) */}
          <div
            onClick={() => onOpenBooking(isVi ? 'Combo 3 ngày 2 đêm' : 'Complete Experience (3D2N)')}
            style={{ animationDelay: '150ms' }}
            className={`rounded-2xl bg-[#281e1a] border border-[#3d2f29] p-7 sm:p-9 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-500 relative cursor-pointer group ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Top Right Badges */}
            <div className="absolute top-7 right-7 sm:top-9 sm:right-9 flex flex-col items-end gap-4">
              <span className="bg-[#a8604d] text-white text-[10px] font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs font-sans">
                {isVi ? 'PHỔ BIẾN' : 'POPULAR'}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#3d2b24] border border-[#523a31] flex items-center justify-center select-none shadow-xs group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4 text-[#e2a868] fill-[#e2a868]" />
              </div>
            </div>

            <div>
              {/* Title & Subtitle */}
              <div className="mb-4 pr-24">
                <h3 className="text-2xl sm:text-[28px] font-medium font-display text-white leading-tight mb-1">
                  {isVi ? '3 ngày 2 đêm' : '3 Days 2 Nights'}
                </h3>
                <p className="text-[11px] font-medium tracking-widest text-[#b0a299] uppercase font-sans">
                  COMPLETE EXPERIENCE
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-base sm:text-[17px] font-medium text-white font-sans">
                  {isVi ? 'Từ 3.200.000đ/người' : 'From 3,200,000 VND/guest'}
                </p>
              </div>

              {/* Divider */}
              <div className="border-b border-[#3d2f29] mb-6" />

              {/* Inclusions */}
              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3 text-xs sm:text-[13px] text-white/90 font-sans font-light">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-white/90 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#281e1a] stroke-[3]" />
                  </div>
                  <span className="leading-snug">
                    {isVi
                      ? '2 đêm nghỉ + ăn sáng + 2 bữa chính'
                      : '2 nights stay + breakfast + 2 main meals'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-[13px] text-white/90 font-sans font-light">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-white/90 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#281e1a] stroke-[3]" />
                  </div>
                  <span className="leading-snug">
                    {isVi
                      ? 'Tour thuyền hoàng hôn + 1 workshop (cắm hoa hoặc làm bánh)'
                      : 'Sunset boat cruise + 1 cultural workshop (floral or pastry)'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-[13px] text-white/90 font-sans font-light">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-white/90 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#281e1a] stroke-[3]" />
                  </div>
                  <span className="leading-snug">
                    {isVi
                      ? 'Spa massage 60 phút + sử dụng đầy đủ tiện ích'
                      : '60-minute herbal spa massage + full facilities access'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Accent Bar */}
            <div className="w-full pt-4 mt-auto">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#b56e5a] to-[#d8a892] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
