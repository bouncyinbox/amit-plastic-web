import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Customer Reviews — Best Furniture Shop in Sitamarhi | 4.6★ Google Rating',
  description:
    'See why 10,000+ families trust Amit Plastic — rated 4.6★ on Google. Customers from Sitamarhi, Pupri, Riga and across Bihar recommend us for quality furniture, honest pricing and best service.',
  alternates: { canonical: 'https://amitplastic.in/reviews' },
  openGraph: {
    title: 'Customer Reviews — Best Furniture Shop in Sitamarhi | Amit Plastic',
    description: 'Rated 4.6★ on Google. Trusted by 10,000+ families across Sitamarhi district for quality furniture and honest pricing.',
    url: 'https://amitplastic.in/reviews',
  },
};

export default function ReviewsPage() {
  return <HomeContent scrollTo="reviews" />;
}
