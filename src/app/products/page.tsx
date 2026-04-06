import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Products — Plastic Furniture, Steel Almirahs & More',
  description:
    'Browse our complete range of plastic furniture, steel almirahs, home furniture, thermowares, carpets and household essentials. Supreme, Linc, Milton and more brands at wholesale prices in Sitamarhi.',
  alternates: { canonical: 'https://amitplastic.in/products' },
  openGraph: {
    title: 'Products — Plastic Furniture, Steel Almirahs & More | Amit Plastic',
    description: 'Browse our complete range of plastic furniture, steel almirahs, thermowares and household essentials at wholesale prices in Sitamarhi.',
    url: 'https://amitplastic.in/products',
  },
};

export default function ProductsPage() {
  return <HomeContent scrollTo="products" />;
}
