import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amit Plastic - Furniture Exclusive Showroom | Sitamarhi, Bihar',
  description:
    'Authorized distributor of Supreme & Linc Furniture in Sitamarhi, Bihar. 30+ years of trust. Plastic furniture, steel almirahs, home & office furniture.',
  keywords: [
    'furniture showroom Sitamarhi',
    'Amit Plastic',
    'Supreme furniture Sitamarhi',
    'Linc furniture Bihar',
    'steel almirah Sitamarhi',
    'furniture shop near me',
    'plastic chairs Sitamarhi',
    'office furniture Bihar',
    'home furniture Sitamarhi',
  ],
  authors: [{ name: 'Amit Plastic Furniture' }],
  openGraph: {
    title: 'Amit Plastic - Furniture Exclusive Showroom',
    description:
      'Three decades of trust. Authorized distributor of Supreme & Linc Furniture in Sitamarhi, Bihar.',
    url: 'https://amitplastic.in',
    siteName: 'Amit Plastic',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Plastic - Furniture Exclusive Showroom',
    description:
      'Three decades of trust. Authorized distributor of Supreme & Linc Furniture in Sitamarhi, Bihar.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#1a73e8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
