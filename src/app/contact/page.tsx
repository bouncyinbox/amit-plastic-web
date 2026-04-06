import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Contact & Visit Our Showroom, Sitamarhi',
  description:
    'Visit Amit Plastic near Mata Vaishno Mandir, Thana Road, Sitamarhi — 843302, Bihar. Open daily 10:30 AM – 8:30 PM. Call +91 9835242431 or WhatsApp us.',
  alternates: { canonical: 'https://amitplastic.in/contact' },
  openGraph: {
    title: 'Contact & Visit Our Showroom | Amit Plastic Sitamarhi',
    description: 'Visit us near Mata Vaishno Mandir, Thana Road, Sitamarhi — 843302. Open daily 10:30 AM – 8:30 PM.',
    url: 'https://amitplastic.in/contact',
  },
};

export default function ContactPage() {
  return <HomeContent scrollTo="contact" />;
}
