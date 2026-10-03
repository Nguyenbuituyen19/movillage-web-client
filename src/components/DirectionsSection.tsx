'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export function DirectionsSection() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
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

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="directions"
      className="relative min-h-screen py-20 md:py-28 overflow-hidden bg-espresso isolate"
    >
      {/* Background Map Satellite Drone View */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/map-background.png"
          alt="Bản đồ chỉ đường đến Mơ Village"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
          priority
        />
        {/* Soft terracotta light pink overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#b56e5a]/18 via-[#261410]/45 to-[#b56e5a]/20 backdrop-blur-[0.5px]" />
      </div>



      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white font-display mb-2">
            {t.directions.title}
          </h2>
          <p className="text-xs sm:text-sm text-white/85 font-sans font-light">
            {t.directions.sub}
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="max-w-3xl space-y-3 mb-10">
          {t.directions.faqs.map((faq, idx) => {
            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                style={{ animationDelay: `${idx * 100}ms` }}
                className={`transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-6'
                }`}
              >
                {isOpen ? (
                  <div className="border border-white/40 rounded-xl p-4 sm:p-5 bg-black/25 backdrop-blur-sm shadow-lg transition-all duration-300">
                    <div
                      onClick={() => toggleFaq(faq.id)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-3 text-white text-xs sm:text-sm font-semibold font-sans">
                        <span className="text-white/60 font-mono text-[11px] sm:text-xs">
                          {faq.num}
                        </span>
                        <span>{faq.question}</span>
                      </div>
                      <span className="text-white text-base font-bold select-none px-1">
                        -
                      </span>
                    </div>
                    <p className="mt-3 text-xs sm:text-[13px] text-white/85 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                ) : (
                  <div
                    onClick={() => toggleFaq(faq.id)}
                    className="py-3 sm:py-3.5 border-b border-white/20 flex items-center justify-between cursor-pointer hover:border-white/40 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 text-white text-xs sm:text-sm font-medium font-sans">
                      <span className="text-white/60 font-mono text-[11px] sm:text-xs">
                        {faq.num}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <span className="text-white text-base font-bold select-none px-1">
                      +
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Route & Directions Card */}
        <div
          className={`bg-[#f6f3ee]/95 backdrop-blur-md rounded-xl p-5 sm:p-6 shadow-2xl max-w-3xl transition-all duration-700 delay-300 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs sm:text-[13px] text-[#5c524b] leading-relaxed font-sans mb-4">
            {t.directions.routeDesc}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-black/5">
            {/* Route Breadcrumbs */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-[#2c150f] font-sans">
              <span>Hà Nội</span>
              <span className="text-black/30">→</span>
              <span>Hòa Lạc</span>
              <span className="text-black/30">→</span>
              <span>Hòa Bình</span>
              <span className="text-black/30">→</span>
              <span className="text-[#b56e5a] font-semibold">Xóm Mơ</span>
            </div>

            {/* Navigation Button */}
            <a
              href="https://maps.google.com/?q=Mo+Village+Da+Bac+Hoa+Binh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#b56e5a] hover:bg-[#a35e4b] text-white px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all cursor-pointer self-start sm:self-auto"
            >
              <span>{t.directions.openGoogleMaps}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

