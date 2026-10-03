'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export function GallerySection() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : t.gallery.images.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev! < t.gallery.images.length - 1 ? prev! + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, t.gallery.images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : t.gallery.images.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < t.gallery.images.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section ref={sectionRef} id="gallery" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className={`mb-8 md:mb-10 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c150f] font-display">
            {t.gallery.title}
          </h2>
        </div>

        {/* Gallery Grid (Mosaic matching exact reference layout - Enlarged with clean presentation) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 auto-rows-[160px] sm:auto-rows-[220px] md:auto-rows-[240px] lg:auto-rows-[270px] xl:auto-rows-[290px]">
          {t.gallery.images.map((img, idx) => {
            // idx 4 is wide (campus-lake.webp), idx 6 is tall portrait (gallery-lake-deck.webp)
            const isWide = idx === 4;
            const isTall = idx === 6;

            return (
              <div
                key={img.id}
                onClick={() => setLightboxIndex(idx)}
                style={{
                  animationDelay: `${idx * 60}ms`,
                }}
                className={`relative rounded-xl overflow-hidden bg-espresso/10 cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 ${
                  isWide
                    ? 'col-span-2 row-span-1'
                    : isTall
                    ? 'col-span-1 row-span-2'
                    : 'col-span-1 row-span-1'
                } ${
                  isVisible
                    ? 'animate-zoom-fade'
                    : 'opacity-0 scale-[0.88]'
                }`}
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  sizes={
                    isWide
                      ? '(max-width: 768px) 100vw, 50vw'
                      : isTall
                      ? '(max-width: 768px) 50vw, 25vw'
                      : '(max-width: 768px) 50vw, 25vw'
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && t.gallery.images[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Đóng thư viện ảnh"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-13 h-13 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-13 h-13 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-6xl max-h-[92vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[88vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={t.gallery.images[lightboxIndex].image}
                alt={t.gallery.images[lightboxIndex].title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
