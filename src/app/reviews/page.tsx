import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials',
  description:
    'See what customers say about Amit Plastic — rated 4.6★ on Google. Trusted by 10,000+ families across Sitamarhi district for quality furniture and honest pricing.',
  alternates: { canonical: 'https://amitplastic.in/reviews' },
  openGraph: {
    title: 'Customer Reviews & Testimonials | Amit Plastic',
    description: 'Rated 4.6★ on Google. Trusted by 10,000+ families across Sitamarhi district for quality furniture and honest pricing.',
    url: 'https://amitplastic.in/reviews',
  },
};

export default function ReviewsPage() {
  return <HomeContent scrollTo="reviews" />;
}
