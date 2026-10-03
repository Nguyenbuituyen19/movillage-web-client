import type { Metadata } from 'next';
import { Fraunces, Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://movillage.netlify.app'),
  title: 'Mơ Village | A gentle dream on Hòa Bình Lake',
  description: 'Mid-to-premium lakeside retreat in Đà Bắc, Vietnam. Traditional Mường stilt houses, calm waters, and forest tranquility.',

  keywords: ['Mơ Village', 'Mo Village', 'Hòa Bình Lake', 'Đà Bắc', 'Resort Hòa Bình', 'Nhà sàn Mường', 'Nghỉ dưỡng ven hồ'],
  authors: [{ name: 'Mơ Village Resort' }],
  openGraph: {
    title: 'Mơ Village | A gentle dream on Hòa Bình Lake',
    description: 'Một giấc mơ dịu trên mặt hồ Hòa Bình. Khu nghỉ dưỡng ven hồ mang đậm hồn cốt văn hóa Mường.',
    url: 'https://movillage.netlify.app',
    siteName: 'Mơ Village Resort',
    images: [
      {
        url: '/drop-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mơ Village - A gentle dream on Hòa Bình Lake',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${beVietnamPro.variable} font-sans antialiased text-espresso bg-white selection:bg-terracotta selection:text-white`}
      >

        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
