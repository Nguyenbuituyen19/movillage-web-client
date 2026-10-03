'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export function ExperiencesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure background video plays reliably across all browsers
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, fallback to poster
        });
      }
    }

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

  const cardDelays = [
    'delay-[100ms]',
    'delay-[200ms]',
    'delay-[300ms]',
    'delay-[400ms]',
    'delay-[500ms]',
    'delay-[600ms]',
  ];

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="relative min-h-screen py-24 overflow-hidden isolate"
    >
      {/* Background Lake Video with Poster and Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-espresso">
        <video
          ref={videoRef}
          src="/kayak-lake.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/fac-kayak.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/kayak-lake.mp4" type="video/mp4" />
          <source src="/videos/kayak-lake.mp4" type="video/mp4" />
        </video>
        {/* Soft terracotta light pink overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#b56e5a]/20 via-[#241714]/50 to-[#b56e5a]/20 backdrop-blur-[0.5px] pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div
          className={`max-w-2xl mb-14 text-center mx-auto transition-all duration-700 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Reversed White Brand Emblem */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3">
            <Image
              src="/images/logo-white.svg"
              alt="Mơ Village"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-normal text-white/85 mb-2 font-sans">
            {t.experiences.tagline}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-3 font-display tracking-tight">
            {t.experiences.title}
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto font-sans font-light leading-relaxed">
            {t.experiences.sub}
          </p>
        </div>

        {/* 1. Hoạt động tại Mơ */}
        <div className="mb-14">
          <h3
            className={`text-xl sm:text-2xl font-normal text-white mb-6 font-display text-left transition-all duration-700 ${
              isVisible ? 'animate-slide-up delay-100' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.experiences.categories.facilities}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {t.experiences.facilitiesList.map((item, idx) => (
              <div
                key={item.id}
                className={`transition-all duration-500 ${
                  isVisible
                    ? `animate-slide-up ${cardDelays[idx] || ''}`
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-[#eceae5] rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-espresso/10 mb-3.5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <h4 className="text-sm sm:text-base font-medium text-[#2b2420] mb-1.5 font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#5c524b] leading-relaxed font-sans font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Workshop & văn hóa */}
        <div className="mb-14">
          <h3
            className={`text-xl sm:text-2xl font-normal text-white mb-6 font-display text-left transition-all duration-700 ${
              isVisible ? 'animate-slide-up delay-200' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.experiences.categories.workshops}
          </h3>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {t.experiences.workshopsList.map((ws, idx) => (
              <div
                key={ws.id}
                className={`p-5 sm:p-6 bg-[#eceae5] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
                  isVisible
                    ? `animate-slide-up ${cardDelays[idx] || ''}`
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h4 className="text-sm sm:text-base font-medium text-[#2b2420] mb-2 font-display">
                  {ws.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#5c524b] leading-relaxed font-sans font-light">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Điểm đến lân cận */}
        <div>
          <h3
            className={`text-xl sm:text-2xl font-normal text-white mb-6 font-display text-left transition-all duration-700 ${
              isVisible ? 'animate-slide-up delay-300' : 'opacity-0 translate-y-6'
            }`}
          >
            {t.experiences.categories.nearby}
          </h3>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {t.experiences.nearbyList.map((spot, idx) => (
              <div
                key={spot.id}
                className={`p-5 sm:p-6 bg-[#eceae5] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between ${
                  isVisible
                    ? `animate-slide-up ${cardDelays[idx] || ''}`
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-[#2b2420] mb-2 font-display">
                    {spot.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#5c524b] leading-relaxed font-sans font-light mb-3">
                    {spot.desc}
                  </p>
                </div>
                <p className="text-xs font-medium text-[#4a3b36] font-sans">
                  {spot.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


