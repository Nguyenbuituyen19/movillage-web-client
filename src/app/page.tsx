'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StorySection } from '@/components/StorySection';
import { RoomsSection } from '@/components/RoomsSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { GallerySection } from '@/components/GallerySection';
import { DirectionsSection } from '@/components/DirectionsSection';
import { PackagesSection } from '@/components/PackagesSection';
import { BookingModal } from '@/components/BookingModal';
import { FloatingHub } from '@/components/FloatingHub';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedOption, setPreselectedOption] = useState<string | undefined>(undefined);

  const handleOpenBooking = (option?: string) => {
    setPreselectedOption(option);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-terracotta selection:text-white relative">
      {/* 1. Header / Navigation */}

      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Hero Section */}
      <HeroSection onOpenBooking={() => handleOpenBooking()} />

      {/* 3. Story Section */}
      <StorySection />

      {/* 4. Rooms & Accommodations */}
      <RoomsSection onOpenBooking={handleOpenBooking} />

      {/* 5. Experiences & Wellness */}
      <ExperiencesSection />

      {/* 6. Gallery & Lightbox */}
      <GallerySection />

      {/* 7. Directions & FAQs */}
      <DirectionsSection />

      {/* 8. Packages & Combos */}
      <PackagesSection onOpenBooking={handleOpenBooking} />

      {/* 9. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Action Hub (Hotline, Zalo, FB, ScrollTop) */}
      <FloatingHub />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedOption={preselectedOption}
      />
    </main>
  );
}
