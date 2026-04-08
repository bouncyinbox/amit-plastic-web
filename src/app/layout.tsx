import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import FirebaseAnalytics from '@/components/FirebaseAnalytics';
import './globals.css';

const BASE_URL = 'https://amitplastic.in';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a73e8',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Amit Plastic — Furniture Showroom & Wholesale Distributor | Sitamarhi, Bihar',
    template: '%s | Amit Plastic Sitamarhi',
  },
  description:
    'Sitamarhi\'s largest furniture showroom since 2002. Authorized wholesale distributor of Supreme & Linc furniture, Milton thermowares. Plastic chairs, steel almirahs, home furniture & more. Visit us near Mata Vaishno Mandir, Thana Road, Sitamarhi — 843302, Bihar.',
  keywords: [
    // Primary — brand + location
    'Amit Plastic Sitamarhi',
    'furniture showroom Sitamarhi',
    'wholesale furniture Sitamarhi',
    'furniture dealer Sitamarhi',
    'best furniture shop Sitamarhi',
    'furniture shop near Mata Vaishno Mandir Sitamarhi',
    // Product + location
    'plastic chair wholesale Bihar',
    'steel almirah Sitamarhi',
    'Sleepwell mattress dealer Sitamarhi',
    'dining table set Sitamarhi',
    'mattress shop Sitamarhi',
    'sofa set Sitamarhi',
    'wardrobe Sitamarhi',
    'study table Sitamarhi',
    // Brand + location
    'Supreme furniture dealer Sitamarhi',
    'Linc furniture Bihar',
    'Milton thermoware Sitamarhi',
    'Spacewood furniture Sitamarhi',
    'Sapana carpet Sitamarhi',
    'Sleepwell mattress Bihar',
    // Category
    'home furniture Bihar',
    'office furniture Sitamarhi',
    'furniture wholesale distributor Bihar',
    'bulk plastic chair order Bihar',
    'furniture supplier for shops Bihar',
    // Nearby areas
    'furniture shop Pupri',
    'furniture dealer Sheohar',
    'furniture Muzaffarpur',
    'furniture wholesale Darbhanga',
    // Hindi keywords
    'अमित प्लास्टिक सीतामढ़ी',
    'फर्नीचर सीतामढ़ी',
    'फर्नीचर की दुकान सीतामढ़ी',
    'प्लास्टिक कुर्सी सीतामढ़ी',
    'स्टील अलमारी सीतामढ़ी',
    'गद्दा दुकान सीतामढ़ी',
    'फर्नीचर शोरूम सीतामढ़ी',
  ],
  authors: [{ name: 'Amit Plastic Furniture Exclusive Showroom' }],
  creator: 'Amit Plastic',
  publisher: 'Amit Plastic',
  category: 'Furniture Store',
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-IN': BASE_URL,
      'hi-IN': `${BASE_URL}?lang=hi`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'hi_IN',
    url: BASE_URL,
    siteName: 'Amit Plastic',
    title: 'Amit Plastic — Furniture Showroom & Wholesale Distributor | Sitamarhi',
    description:
      'Sitamarhi\'s largest furniture showroom since 2002. Authorized wholesale distributor of Supreme & Linc furniture, Milton thermowares. Plastic chairs, steel almirahs, home furniture & more.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Amit Plastic — Furniture Exclusive Showroom, Sitamarhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Plastic — Furniture Showroom & Wholesale Distributor | Sitamarhi',
    description:
      'Sitamarhi\'s largest furniture showroom since 2002. Authorized wholesale distributor of Supreme & Linc furniture, Milton thermowares.',
    images: ['/opengraph-image'],
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    // Geo meta tags for local SEO
    'geo.region': 'IN-BR',
    'geo.placename': 'Sitamarhi, Bihar, India',
    'geo.position': '26.5918;85.4893',
    'ICBM': '26.5918, 85.4893',
    // AI crawler hints
    'revisit-after': '7 days',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'FurnitureStore', 'Store'],
      '@id': `${BASE_URL}/#business`,
      name: 'Amit Plastic Furniture Exclusive Showroom',
      alternateName: ['Amit Plastic', 'Amit Plastic Sitamarhi'],
      description:
        "Sitamarhi's largest furniture showroom and wholesale distributor since 2002. Authorized dealer of Supreme, Linc furniture, Milton thermowares and Sapana carpets.",
      url: BASE_URL,
      image: `${BASE_URL}/opengraph-image`,
      telephone: ['+919835242431', '+917654957236', '+919471805297'],
      email: 'amitplasticstm@gmail.com',
      foundingDate: '2002',
      founder: { '@type': 'Person', name: 'Vijay' },
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Mata Vaishno Mandir, Thana Road',
        addressLocality: 'Sitamarhi',
        addressRegion: 'Bihar',
        postalCode: '843302',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.5918,
        longitude: 85.4893,
      },
      hasMap: 'https://maps.app.goo.gl/xo1miWgQQ8HWe3oT6',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:30',
          closes: '20:30',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: process.env.GOOGLE_RATING ?? '4.6',
        reviewCount: process.env.GOOGLE_REVIEW_COUNT ?? '27',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Amit Kumar' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'The best place to get all household items in and around Sitamarhi. The dealers are the most experienced wholesalers and retailers with 20+ years of experience.',
          datePublished: '2025-10-01',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Raushan Kumar' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Perfect place for room furniture.',
          datePublished: '2025-09-01',
        },
      ],
      sameAs: [
        'https://www.facebook.com/amitplasticstm/',
        'https://www.indiamart.com/amit-plastic-sitamarhi/',
        'https://www.justdial.com/Sitamarhi/Amit-Plastic-Furniture-Exclusive-Showroom-Near-Mata-Vaishno-Mandir-Bazar/9999P6226-6226-130406154447-L8P1_BZDET',
        'https://maps.app.goo.gl/xo1miWgQQ8HWe3oT6',
      ],
      brand: [
        { '@type': 'Brand', name: 'Supreme Furniture' },
        { '@type': 'Brand', name: 'Linc Furniture' },
        { '@type': 'Brand', name: 'Milton' },
        { '@type': 'Brand', name: 'Sapana' },
        { '@type': 'Brand', name: 'Spacewood' },
        { '@type': 'Brand', name: 'SPL' },
        { '@type': 'Brand', name: 'Uniko' },
        { '@type': 'Brand', name: 'Sleepwell' },
        { '@type': 'Brand', name: 'CMP' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Furniture & Home Products',
        itemListElement: [
          { '@type': 'OfferCatalog', name: 'Plastic Furniture', description: 'Chairs, dining sets, center tables, stools, beds, kids furniture — Supreme, Linc & Uniko brands' },
          { '@type': 'OfferCatalog', name: 'Home Furniture', description: 'Steel almirahs, TV units, beds, wardrobes, dressing tables, mattresses' },
          { '@type': 'OfferCatalog', name: 'Thermowares', description: 'Insulated lunch boxes, bottles, water jugs, casseroles — Milton brand' },
          { '@type': 'OfferCatalog', name: 'Household Essentials', description: 'Buckets, dustbins, patlas, planters, tubs' },
          { '@type': 'OfferCatalog', name: 'Carpets & Mats', description: 'Sapana carpets, door mats, floor mats, rugs' },
        ],
      },
      areaServed: [
        { '@type': 'City', name: 'Sitamarhi' },
        { '@type': 'City', name: 'Pupri' },
        { '@type': 'City', name: 'Riga' },
        { '@type': 'City', name: 'Bairgania' },
        { '@type': 'City', name: 'Sonbarsa' },
        { '@type': 'City', name: 'Parihar' },
        { '@type': 'City', name: 'Bajpatti' },
        { '@type': 'AdministrativeArea', name: 'Sitamarhi district' },
        { '@type': 'AdministrativeArea', name: 'Sheohar district' },
        { '@type': 'State', name: 'Bihar' },
      ],
      knowsAbout: [
        'Plastic Furniture',
        'Steel Almirahs',
        'Wholesale Furniture Distribution',
        'Home Furniture',
        'Thermowares',
        'Household Essentials',
        'Supreme Furniture',
        'Linc Furniture',
        'Sleepwell Mattresses',
        'Spacewood Modular Furniture',
        'Milton Thermowares',
        'Sapana Carpets',
        'Dining Table Sets',
        'Plastic Chairs Wholesale',
        'Mattress Dealer',
        'Wardrobe and Storage Solutions',
        'Office Furniture',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Amit Plastic',
      description: "Sitamarhi's leading furniture showroom and wholesale distributor since 2002.",
      inLanguage: ['en-IN', 'hi-IN'],
      publisher: { '@id': `${BASE_URL}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Our Story', item: `${BASE_URL}/our-story` },
        { '@type': 'ListItem', position: 3, name: 'Products', item: `${BASE_URL}/products` },
        { '@type': 'ListItem', position: 4, name: 'Brands', item: `${BASE_URL}/brands` },
        { '@type': 'ListItem', position: 5, name: 'Reviews', item: `${BASE_URL}/reviews` },
        { '@type': 'ListItem', position: 6, name: 'Contact', item: `${BASE_URL}/contact` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What brands does Amit Plastic sell?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amit Plastic is an authorized dealer of Supreme Furniture, Linc Furniture, Milton Thermowares, Sapana Carpets, Spacewood, Sleepwell, SPL, Uniko, and CMP.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the opening hours of Amit Plastic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amit Plastic is open every day from 10:30 AM to 8:30 PM, including Sundays.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Amit Plastic located in Sitamarhi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amit Plastic Furniture Exclusive Showroom is located near Mata Vaishno Mandir, Thana Road, Sitamarhi — 843302, Bihar, India.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Amit Plastic offer wholesale pricing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Amit Plastic is a wholesale distributor supplying shops across Sitamarhi district. Retail customers are also welcome at the showroom.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Amit Plastic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can call +91 9835242431, +91 7654957236, or +91 9471805297. You can also WhatsApp or email at amitplasticstm@gmail.com.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I buy Sleepwell mattress in Sitamarhi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Amit Plastic is an authorized Sleepwell dealer in Sitamarhi. We stock mattresses, pillows, and cushions at our Thana Road showroom.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I buy Supreme plastic chairs in bulk in Bihar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amit Plastic is an authorized wholesale distributor of Supreme Furniture in Sitamarhi. We supply bulk orders of Supreme plastic chairs, tables, and stools to shops and dealers across Sitamarhi, Sheohar, Pupri, Riga, and surrounding Bihar districts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Amit Plastic deliver to Pupri, Riga, and nearby towns?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Amit Plastic supplies furniture wholesale to shops in Pupri, Riga, Bairgania, Sonbarsa, Parihar, Bajpatti, and across Sitamarhi district. Contact us on WhatsApp (+91 9835242431) for delivery and bulk order details.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the price range of steel almirahs at Amit Plastic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amit Plastic offers Linc steel almirahs in various sizes — single door, double door, and wardrobe models. Visit our showroom on Thana Road, Sitamarhi or call +91 9835242431 for current pricing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best furniture shop in Sitamarhi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amit Plastic is rated 4.6★ on Google and is Sitamarhi\'s largest furniture showroom since 2002. We are authorized dealers of 9 leading brands including Supreme, Linc, Sleepwell, and Spacewood, serving 10,000+ families.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="llms" href="/llms.txt" />
      </head>
      <body>
        {children}
        <Analytics />
        <FirebaseAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
