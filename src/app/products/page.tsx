import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Products — Plastic Chairs, Steel Almirahs, Mattresses & More | Sitamarhi',
  description:
    'Buy plastic chairs, steel almirahs, Sleepwell mattresses, dining tables, wardrobes, Milton thermowares and household essentials at wholesale prices. Supreme, Linc, Spacewood brands available in Sitamarhi, Bihar.',
  alternates: { canonical: 'https://amitplastic.in/products' },
  openGraph: {
    title: 'Products — Plastic Chairs, Steel Almirahs, Mattresses & More | Amit Plastic Sitamarhi',
    description: 'Buy plastic chairs, steel almirahs, Sleepwell mattresses, dining tables, wardrobes and more at wholesale prices in Sitamarhi, Bihar.',
    url: 'https://amitplastic.in/products',
  },
};

export default function ProductsPage() {
  return <HomeContent scrollTo="products" />;
}
