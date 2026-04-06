import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Our Story — 20+ Years of Furniture Excellence',
  description:
    'From a small workshop in the 1990s to Sitamarhi\'s largest furniture showroom — discover the journey of Amit Plastic and Vijay ji\'s vision of honest work and quality furniture.',
  alternates: { canonical: 'https://amitplastic.in/our-story' },
  openGraph: {
    title: 'Our Story — 20+ Years of Furniture Excellence | Amit Plastic',
    description: 'From a small workshop in the 1990s to Sitamarhi\'s largest furniture showroom — discover the journey of Amit Plastic.',
    url: 'https://amitplastic.in/our-story',
  },
};

export default function OurStoryPage() {
  return <HomeContent scrollTo="story" />;
}
