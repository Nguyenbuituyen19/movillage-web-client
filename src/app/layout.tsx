import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: '#b56e5a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://movillage.netlify.app'),
  title: {
    default: 'Mơ Village | A gentle dream on Hòa Bình Lake',
    template: '%s | Mơ Village Resort',
  },
  description:
    'Khu nghỉ dưỡng ven hồ Hòa Bình tại Đà Bắc. Trải nghiệm nhà sàn Mường, bể sục Onsen 4 mùa, chèo thuyền Kayak, tour du thuyền và ẩm thực Tây Bắc giữa thiên nhiên thanh bình.',
  keywords: [
    'Mơ Village',
    'Mo Village',
    'Mơ Village Resort',
    'Mơ Village Hòa Bình',
    'Resort Hòa Bình',
    'Nghỉ dưỡng hồ Hòa Bình',
    'Đà Bắc Hòa Bình',
    'Homestay Đà Bắc',
    'Onsen Hòa Bình',
    'Chèo thuyền Kayak hồ Hòa Bình',
    'Nhà sàn Mường',
    'Du lịch Hòa Bình',
    'Nghỉ dưỡng cuối tuần gần Hà Nội',
    'Eco resort Vietnam',
    'Khu nghỉ dưỡng Tây Bắc',
    'Hồ Hòa Bình resort',
  ],
  authors: [{ name: 'Mơ Village Resort', url: 'https://movillage.netlify.app' }],
  creator: 'Mơ Village Resort',
  publisher: 'Mơ Village Resort',
  applicationName: 'Mơ Village Resort',
  category: 'travel',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'vi-VN': '/',
      'en-US': '/?lang=en',
    },
  },
  openGraph: {
    title: 'Mơ Village | A gentle dream on Hòa Bình Lake',
    description:
      'Một giấc mơ dịu trên mặt hồ Hòa Bình. Khu nghỉ dưỡng ven hồ mang đậm hồn cốt văn hóa Mường giữa thiên nhiên Tây Bắc thanh bình.',
    url: 'https://movillage.netlify.app',
    siteName: 'Mơ Village Resort',
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: '/images/hero-lake.jpg',
        width: 1920,
        height: 1080,
        alt: 'Mơ Village Resort - Hồ Hòa Bình',
      },
      {
        url: '/images/gallery-stilt-house.webp',
        width: 1200,
        height: 800,
        alt: 'Kiến trúc nhà sàn Mường tại Mơ Village',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mơ Village | A gentle dream on Hòa Bình Lake',
    description:
      'Khu nghỉ dưỡng ven hồ mang đậm hồn cốt văn hóa Mường tại Đà Bắc, Hòa Bình.',
    images: ['/images/hero-lake.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'VN-14',
    'geo.placename': 'Đà Bắc, Hòa Bình',
    'geo.position': '20.8931;105.2415',
    ICBM: '20.8931, 105.2415',
  },
};

const jsonLdData = [
  {
    '@context': 'https://schema.org',
    '@type': ['Resort', 'LodgingBusiness', 'Hotel'],
    '@id': 'https://movillage.netlify.app/#resort',
    name: 'Mơ Village Resort',
    alternateName: ['Mơ Village', 'Mo Village', 'Mơ Village Hòa Bình'],
    description:
      'Khu nghỉ dưỡng ven hồ Hòa Bình kết hợp di sản nhà sàn Mường truyền thống với tiện nghi nghỉ dưỡng cao cấp: Onsen 4 mùa, xông hơi, chèo kayak, tour du thuyền vịnh hồ.',
    url: 'https://movillage.netlify.app',
    logo: 'https://movillage.netlify.app/images/logo-stacked.svg',
    image: [
      'https://movillage.netlify.app/images/hero-lake.jpg',
      'https://movillage.netlify.app/images/room-nha-mit.webp',
      'https://movillage.netlify.app/images/room-nha-sang.webp',
      'https://movillage.netlify.app/images/gallery-stilt-house.webp',
      'https://movillage.netlify.app/images/fac-onsen.webp',
    ],
    telephone: '+84964863838',
    email: 'booking@movillage.vn',
    priceRange: '1.450.000 VND - 7.500.000 VND',
    currenciesAccepted: 'VND',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, ZaloPay',
    checkinTime: '14:00',
    checkoutTime: '12:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Xóm Ké, Xã Hiền Lương',
      addressLocality: 'Huyện Đà Bắc',
      addressRegion: 'Tỉnh Hòa Bình',
      postalCode: '350000',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.8931,
      longitude: 105.2415,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Bể sục Onsen nước nóng 4 mùa',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Phòng xông hơi khô & ướt thảo dược',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Chèo thuyền Kayak & SUP trên hồ',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Bể bơi vô cực ngắm trọn hồ Hòa Bình',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Nhà hàng ẩm thực đặc sản Mường',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Sân nướng BBQ ngoài trời',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Tour du thuyền khám phá hồ',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Miễn phí Wi-Fi tốc độ cao',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Bãi đỗ xe',
        value: true,
      },
    ],
    sameAs: ['https://www.facebook.com/movillage.hoabinh'],
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.9',
      bestRating: '5',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Mơ Village cách Hà Nội bao xa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mơ nằm bên hồ Hòa Bình, tại khu vực Đà Bắc, cách Hà Nội hơn 100 km. Thời gian di chuyển thường khoảng 2,5 – 3 giờ tùy cung đường và phương tiện di chuyển.',
        },
      },
      {
        '@type': 'Question',
        name: 'Đến Mơ Village có thể trải nghiệm những gì?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bạn có thể tham gia chèo kayak/SUP trên hồ, bơi bể bơi vô cực, ngâm bể Onsen khoáng thảo dược 4 mùa, thưởng thức ẩm thực Mường và tham gia các workshop văn hóa truyền thống.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mơ Village có phù hợp với gia đình và đoàn thể không?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rất phù hợp! Mơ có nhiều hạng phòng đa dạng từ Bungalow cặp đôi, Villa 3 phòng ngủ có bếp & BBQ riêng đến Nhà Sàn cộng đồng cho 20 người, cùng không gian thiên nhiên rộng rãi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Nên đặt phòng tại Mơ Village trước bao lâu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vào các dịp cuối tuần và lễ tết, Mơ thường hết phòng sớm. Quý khách nên đặt trước từ 1 đến 3 tuần để chọn được căn nhà và dịch vụ ưng ý nhất.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://movillage.netlify.app/#website',
    name: 'Mơ Village Resort',
    url: 'https://movillage.netlify.app',
    inLanguage: ['vi-VN', 'en-US'],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${beVietnamPro.variable} font-sans antialiased text-espresso bg-white selection:bg-terracotta selection:text-white`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
