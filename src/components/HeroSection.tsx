'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback to poster image
        });
      }
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden isolate">
      {/* Background Lake Dawn 4K Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-espresso">
        <video
          ref={videoRef}
          src="/hero-lake-dawn-4k.mp4"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="/images/hero-lake.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/hero-lake-dawn-4k.mp4" type="video/mp4" />
          <source src="/videos/hero-lake-dawn-4k.mp4" type="video/mp4" />
        </video>
        {/* Cinematic soft terracotta light pink overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#b56e5a]/15 via-black/15 to-[#b56e5a]/20 pointer-events-none" />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl animate-slide-up">
          {/* Large Stacked Emblem / Logo */}
          <div className="relative w-[33.8rem] h-[15.2rem] sm:w-[50.7rem] sm:h-[20.3rem] lg:w-[60.8rem] lg:h-[25.4rem] mx-auto mb-6">
            <Image
              src="/images/logo-stacked.svg"
              alt="Mơ Village"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Slogan */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] mb-8 text-white drop-shadow-md max-w-3xl mx-auto px-4 font-sans font-medium tracking-normal leading-snug">
            {t.hero.title}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center px-4">
            <button
              onClick={onOpenBooking}
              className="bg-terracotta hover:bg-[#a35e4b] text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-lg text-sm sm:text-base transition-all duration-200 w-auto font-medium cursor-pointer shadow-md hover:shadow-lg"
            >
              {t.hero.ctaPrimary}
            </button>

            <a
              href="#rooms"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-lg text-sm sm:text-base transition-all duration-200 border border-white/30 w-auto font-medium shadow-md hover:shadow-lg"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

