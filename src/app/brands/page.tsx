import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Brands — Supreme, Linc, Milton & More',
  description:
    'Authorized wholesale distributor of Supreme Furniture, Linc Furniture, Milton Thermowares, Sapana Carpets, Spacewood, Sleepwell and more. Genuine products at best prices in Sitamarhi, Bihar.',
  alternates: { canonical: 'https://amitplastic.in/brands' },
};

export default function BrandsPage() {
  return <HomeContent scrollTo="brands" />;
}
