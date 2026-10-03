'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';

export function FloatingHub() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick contact links" className="fixed bottom-6 right-5 sm:right-6 flex flex-col items-center gap-3 z-40">
      {/* 1. Hotline Phone */}
      <a
        href="tel:+84964863838"
        aria-label="Gọi điện thoại cho Mơ Village: 0964 863 838"
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center bg-transparent"
      >
        <Image
          src="/images/icons/phone.webp"
          alt="Hotline"
          fill
          sizes="48px"
          className="object-cover scale-105"
        />
      </a>

      {/* 2. Facebook Messenger / Fanpage */}
      <a
        href="https://www.facebook.com/movillage.hoabinh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Trang Facebook Fanpage Mơ Village Resort"
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center bg-transparent"
      >
        <Image
          src="/images/icons/facebook.webp"
          alt="Facebook"
          fill
          sizes="48px"
          className="object-cover scale-105"
        />
      </a>

      {/* 3. Zalo Chat */}
      <a
        href="https://zalo.me/0964863838"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin Zalo với Mơ Village: 0964 863 838"
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center bg-white"
      >
        <Image
          src="/images/icons/zalo.webp"
          alt="Zalo"
          fill
          sizes="48px"
          className="object-contain p-1"
        />
      </a>

      {/* 4. Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#deb887] hover:bg-[#cda677] text-[#241b18] shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer animate-fade-in"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </aside>
  );
}
