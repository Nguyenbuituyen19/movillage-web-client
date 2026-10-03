'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface NavbarProps {
  onOpenBooking: (roomOrPackage?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const { t, locale, toggleLocale } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.story, href: '#story' },
    { label: t.nav.rooms, href: '#rooms' },
    { label: t.nav.experiences, href: '#experiences' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.directions, href: '#directions' },
    { label: t.nav.packages, href: '#packages' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-warm-paper z-50 border-b border-karst-mist shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">



            {/* Logo */}
            <a className="relative h-12 w-48" href="#">
              <Image
                src="/images/logo-horizontal.svg"
                alt="Mơ Village"
                fill
                priority
                className="object-contain object-left"
              />
            </a>

            {/* Desktop Navigation Links & Actions */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  className="text-espresso hover:text-stilt-timber transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => onOpenBooking()}
                className="bg-terracotta hover:bg-terracotta/90 text-warm-paper px-6 py-2 rounded-lg transition-colors cursor-pointer"
              >
                {t.nav.bookNow}
              </button>

              <button
                onClick={toggleLocale}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-soft-sand transition-colors cursor-pointer text-espresso"
                aria-label="Change language"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,187a113.4,113.4,0,0,1-20.39-35h40.82a116.94,116.94,0,0,1-10,20.77A108.61,108.61,0,0,1,128,207Zm-26.49-59a135.42,135.42,0,0,1,0-40h53a135.42,135.42,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.25a160.63,160.63,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128Zm84-79a113.4,113.4,0,0,1,20.39,35H107.59a116.94,116.94,0,0,1,10-20.77A108.61,108.61,0,0,1,128,49Zm50.73,59h30.82a83.52,83.52,0,0,1,0,40H178.75a160.63,160.63,0,0,0,0-40Zm20.77-24H173.71a140.82,140.82,0,0,0-15.5-34.36A84.51,84.51,0,0,1,199.52,84ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.51,84.51,0,0,1,97.79,49.64ZM56.48,172H82.29a140.82,140.82,0,0,0,15.5,34.36A84.51,84.51,0,0,1,56.48,172Zm101.73,34.36A140.82,140.82,0,0,0,173.71,172h25.81A84.51,84.51,0,0,1,158.21,206.36Z"></path>
                </svg>
                <span className="text-sm font-medium uppercase">{locale}</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-espresso"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-espresso/50 backdrop-blur-sm md:hidden pt-16 animate-fade-in">
          <div className="bg-warm-paper border-b border-karst-mist shadow-xl p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-espresso hover:text-stilt-timber text-base font-medium py-2 border-b border-karst-mist/50"
                >
                  {link.label}
                </a>
              ))}
            </div>



            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-terracotta hover:bg-terracotta/90 text-warm-paper py-3 rounded-lg font-medium text-center shadow-md transition-colors"
              >
                {t.nav.bookNow}
              </button>

              <button
                onClick={() => {
                  toggleLocale();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-karst-mist text-espresso font-medium hover:bg-soft-sand transition-colors"
              >
                <span>Ngôn ngữ: <strong className="uppercase">{locale}</strong></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
