'use client';

import React from 'react';
import Image from 'next/image';
import { RoomItem } from '@/data/content';
import { X, Users, Bed, Eye, Check, Calendar } from 'lucide-react';

interface RoomDetailModalProps {
  room: RoomItem | null;
  onClose: () => void;
  onBookRoom: (roomName: string) => void;
}

export function RoomDetailModal({ room, onClose, onBookRoom }: RoomDetailModalProps) {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-warm-paper rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-stilt-timber/30 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-warm-paper/90 hover:bg-warm-paper text-espresso flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          {/* Header Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-espresso/10">
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-bamboo-shoot text-warm-paper text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>{room.capacity}</span>
            </div>
          </div>

          {/* Title & Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stilt-timber/15 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-espresso">
                {room.name}
              </h3>
              <p className="text-sm text-stilt-timber mt-1 font-medium">
                {room.tagline}
              </p>
            </div>
            {room.pricePerNight && (
              <div className="text-left sm:text-right">
                <span className="text-lg font-bold text-terracotta">
                  {room.pricePerNight}
                </span>
              </div>
            )}
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-soft-sand/60 p-4 rounded-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-warm-paper flex items-center justify-center text-stilt-timber shadow-sm">
                <Bed className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="text-espresso/60 block">Loại giường</span>
                <span className="font-semibold text-espresso">{room.bedType}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-warm-paper flex items-center justify-center text-lake-dawn shadow-sm">
                <Eye className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="text-espresso/60 block">Tầm nhìn</span>
                <span className="font-semibold text-espresso">{room.view}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-warm-paper flex items-center justify-center text-bamboo-shoot shadow-sm">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="text-espresso/60 block">Sức chứa</span>
                <span className="font-semibold text-espresso">{room.capacity}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-espresso/70 mb-2">
              Giới thiệu không gian
            </h4>
            <p className="text-sm text-espresso/85 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Highlights & Amenities */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-espresso/70 mb-2.5">
                Đặc điểm nổi bật
              </h4>
              <ul className="space-y-2">
                {room.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-espresso/90">
                    <Check className="w-3.5 h-3.5 text-bamboo-shoot shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-espresso/70 mb-2.5">
                Tiện nghi phòng
              </h4>
              <ul className="space-y-2">
                {room.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-espresso/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-stilt-timber shrink-0 mt-1.5" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-soft-sand/80 border-t border-stilt-timber/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-espresso/70">
            Hỗ trợ tư vấn đặt phòng nhanh 24/7
          </span>
          <button
            onClick={() => {
              onClose();
              onBookRoom(room.name);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-terracotta hover:bg-[#a15f4d] text-warm-paper px-6 py-3 rounded-lg text-sm font-medium shadow-md transition-all active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Đặt {room.name} ngay</span>
          </button>
        </div>
      </div>
    </div>
  );
}
