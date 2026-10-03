'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, Calendar, User, Phone, CheckCircle2, Send, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOption?: string;
}

export function BookingModal({ isOpen, onClose, preselectedOption }: BookingModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: '2',
    roomType: '',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedOption) {
      setFormData((prev) => ({ ...prev, roomType: preselectedOption }));
    }
  }, [preselectedOption]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-warm-paper rounded-2xl shadow-2xl p-6 sm:p-8 border border-stilt-timber/30 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-soft-sand hover:bg-stilt-timber/20 text-espresso flex items-center justify-center transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-bamboo-shoot/20 text-bamboo-shoot flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-espresso">
              {t.booking.form.successTitle}
            </h3>
            <p className="text-xs sm:text-sm text-espresso/80 leading-relaxed">
              {t.booking.form.successMessage}
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-espresso text-warm-paper text-xs font-semibold hover:bg-espresso/90 transition-colors"
            >
              Đóng cửa sổ
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta block mb-1">
                Đặt phòng nghỉ dưỡng
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-espresso">
                {preselectedOption ? `Đặt ${preselectedOption}` : 'Gửi yêu cầu đặt chỗ'}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-espresso/80 mb-1">
                  {t.booking.form.fullName} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t.booking.form.fullNamePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-warm-paper border border-stilt-timber/25 focus:border-terracotta text-xs sm:text-sm text-espresso outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso/80 mb-1">
                  {t.booking.form.phone} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.booking.form.phonePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-warm-paper border border-stilt-timber/25 focus:border-terracotta text-xs sm:text-sm text-espresso outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-espresso/80 mb-1">
                    {t.booking.form.checkIn} *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-warm-paper border border-stilt-timber/25 text-xs text-espresso outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-espresso/80 mb-1">
                    {t.booking.form.checkOut} *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-warm-paper border border-stilt-timber/25 text-xs text-espresso outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-espresso/80 mb-1">
                    Hạng phòng / Gói
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-warm-paper border border-stilt-timber/25 text-xs text-espresso outline-none"
                  >
                    <option value="">-- Chọn dịch vụ --</option>
                    <option value="Nhà Táo">Nhà Táo</option>
                    <option value="Nhà Đào">Nhà Đào</option>
                    <option value="Nhà Mận">Nhà Mận</option>
                    <option value="Nhà Mít">Nhà Mít</option>
                    <option value="Nhà Sang">Nhà Sang</option>
                    <option value="Nhà Cộng đồng">Nhà Cộng đồng</option>
                    <option value="Combo 2N1Đ">Combo 2N1Đ Weekend</option>
                    <option value="Combo 3N2Đ">Combo 3N2Đ Complete</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-espresso/80 mb-1">
                    Số lượng khách
                  </label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-warm-paper border border-stilt-timber/25 text-xs text-espresso outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((n) => (
                      <option key={n} value={n}>
                        {n} khách
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso/80 mb-1">
                  Yêu cầu thêm
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Ghi chú về ăn uống, đón xe..."
                  className="w-full px-3 py-2 rounded-xl bg-warm-paper border border-stilt-timber/25 text-xs text-espresso outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-terracotta hover:bg-[#a15f4d] active:scale-[0.99] text-warm-paper py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu ngay'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
