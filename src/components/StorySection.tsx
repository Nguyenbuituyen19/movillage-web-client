'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export function StorySection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
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


  const cardDelays = ['animation-delay-150', 'animation-delay-300', 'animation-delay-450'];

  return (
    <section ref={sectionRef} id="story" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Slide-up Animation */}
        <div className={isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}>
          <p className="text-body-sm uppercase tracking-wide text-stilt-timber mb-4">
            {t.story.tagline}
          </p>
          <h2 className="text-display-lg text-espresso mb-6 font-display font-normal">
            {t.story.title}
          </h2>
          <p className="text-body-lg text-espresso/80 mb-12 max-w-3xl leading-relaxed font-light">
            {t.story.lead}
          </p>
        </div>

        {/* 3 Columns Grid with Sequential Staggered Slide-up Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {t.story.cards.map((card, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-6 ${
                isVisible
                  ? `animate-slide-up ${cardDelays[idx] || ''}`
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Image Aspect 4/5 with rounded corners */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-espresso/5">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-display-sm text-espresso mb-4 font-display font-normal">
                  {card.title}
                </h3>
                <p className="text-body-base text-espresso/90 leading-relaxed font-sans font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
