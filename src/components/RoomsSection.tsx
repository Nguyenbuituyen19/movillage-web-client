'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { RoomItem } from '@/data/content';
import { RoomDetailModal } from './RoomDetailModal';

interface RoomsSectionProps {
  onOpenBooking: (roomName?: string) => void;
}

export function RoomsSection({ onOpenBooking }: RoomsSectionProps) {
  const { t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);
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


  const cardDelays = [
    'animation-delay-150',
    'animation-delay-300',
    'animation-delay-450',
    'animation-delay-150',
    'animation-delay-300',
    'animation-delay-450',
  ];

  return (
    <section ref={sectionRef} id="rooms" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <p className="text-body-sm uppercase tracking-wide text-bamboo-shoot mb-4 font-normal font-sans">
            {t.rooms.tagline}
          </p>
          <h2 className="text-display-lg font-normal text-espresso font-display">
            {t.rooms.title}
          </h2>
        </div>

        {/* 6 Rooms Grid with Staggered Slide-up Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.rooms.items.map((room, idx) => (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className={`bg-[#f6f3ee] rounded-xl p-6 relative overflow-hidden border border-[#dfd8d1] hover:border-[#cfc7be] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer ${
                isVisible
                  ? `animate-slide-up ${cardDelays[idx] || ''}`
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-bamboo-shoot/5 via-transparent to-stilt-timber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Image Aspect 4/3 */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-espresso/10">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Guest Capacity Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1.5 bg-[#9ca48a]/95 backdrop-blur-sm rounded-full shadow-md">
                      <span className="text-body-sm font-medium text-warm-paper">
                        {room.capacity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative pt-6 flex-1 flex flex-col">
                  {/* Room Name & House Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-body-xl font-medium text-espresso font-display">
                      {room.name}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-bamboo-shoot/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏡</span>
                    </div>
                  </div>

                  {/* Room Tagline Description */}
                  <p className="text-body-base text-espresso/85 leading-relaxed mb-6 font-sans font-light">
                    {room.tagline}
                  </p>

                  {/* Room Features List */}
                  <ul className="space-y-3 flex-1 mb-6">
                    {room.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="mt-1 w-4 h-4 rounded-full bg-[#9ca48a] flex items-center justify-center flex-shrink-0">
                          <span className="text-[#f6f3ee] text-[10px] font-bold">✓</span>
                        </div>
                        <span className="text-body-sm text-espresso/80 leading-relaxed font-sans">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Muted Sage Accent Line */}
              <div className="h-[2px] bg-[#bfb6aa] rounded-full mt-4" />
            </div>

          ))}
        </div>
      </div>

      {/* Room Detail Modal for viewing full specifications & booking */}
      <RoomDetailModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBookRoom={(name) => {
          setSelectedRoom(null);
          onOpenBooking(name);
        }}
      />
    </section>
  );
}
