import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Brands — Supreme, Linc, Sleepwell, Spacewood & More | Sitamarhi Dealer',
  description:
    'Authorized dealer & wholesale distributor of Supreme Furniture, Linc Steel Almirahs, Sleepwell Mattresses, Spacewood Modular Furniture, Milton Thermowares, Sapana Carpets and more. Best prices in Sitamarhi, Bihar.',
  alternates: { canonical: 'https://amitplastic.in/brands' },
  openGraph: {
    title: 'Brands — Supreme, Linc, Sleepwell, Spacewood & More | Amit Plastic Sitamarhi',
    description: 'Authorized dealer of Supreme, Linc, Sleepwell, Spacewood, Milton, Sapana and more. Wholesale & retail in Sitamarhi, Bihar.',
    url: 'https://amitplastic.in/brands',
  },
};

export default function BrandsPage() {
  return <HomeContent scrollTo="brands" />;
}
