'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const { locale } = useLanguage();
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
    <footer
      ref={sectionRef}
      id="booking"
      className="relative min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden isolate"
    >
      {/* Background Drone Aerial Resort View */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-lake.webp"
          alt="Mơ Village Resort"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
          priority
        />
        {/* Soft terracotta light pink overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#b56e5a]/20 via-[#261410]/45 to-[#b56e5a]/25 backdrop-blur-[0.5px]" />
      </div>

      {/* Content Center */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Tagline */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="block text-[11px] sm:text-xs uppercase tracking-[0.2em] font-normal text-white/80 mb-3 font-sans">
            {isVi ? 'GỬI MỘT LỜI HẸN' : 'SEND A PROMISE'}
          </span>
        </div>

        {/* Heading */}
        <div
          style={{ transitionDelay: '150ms' }}
          className={`transition-all duration-700 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal font-display text-white leading-[1.25] mb-5 tracking-wide">
            {isVi ? (
              <>
                Cuối tuần này, mình đi
                <br />
                Mơ nhé?
              </>
            ) : (
              <>
                This weekend, shall we
                <br />
                visit Mơ?
              </>
            )}
          </h2>
        </div>

        {/* Subtitle */}
        <div
          style={{ transitionDelay: '300ms' }}
          className={`transition-all duration-700 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs sm:text-[13px] md:text-sm text-white/80 font-sans max-w-xl mx-auto leading-relaxed font-light mb-8">
            {isVi
              ? 'Chọn ngày, chọn người đồng hành. Phần còn lại chuẩn bị, để Mơ chuẩn bị.'
              : 'Choose the date, choose your company. Leave all the preparations to Mơ.'}
          </p>
        </div>

        {/* CTA Button */}
        <div
          style={{ transitionDelay: '450ms' }}
          className={`transition-all duration-700 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center bg-[#b56e5a] hover:bg-[#a35e4b] active:scale-[0.98] text-white px-7 py-3 rounded-lg text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer font-sans"
          >
            <span>{isVi ? 'Đặt chỗ nghỉ' : 'Reserve Your Stay'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
