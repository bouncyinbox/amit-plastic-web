import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Contact & Visit — Furniture Showroom Thana Road, Sitamarhi',
  description:
    'Visit Amit Plastic furniture showroom near Mata Vaishno Mandir, Thana Road, Sitamarhi — 843302, Bihar. Open daily 10:30 AM – 8:30 PM including Sundays. Call +91 9835242431, WhatsApp for wholesale enquiries.',
  alternates: { canonical: 'https://amitplastic.in/contact' },
  openGraph: {
    title: 'Contact & Visit Our Furniture Showroom | Amit Plastic Sitamarhi',
    description: 'Visit us near Mata Vaishno Mandir, Thana Road, Sitamarhi — 843302. Open daily 10:30 AM – 8:30 PM. Call or WhatsApp for wholesale enquiries.',
    url: 'https://amitplastic.in/contact',
  },
};

export default function ContactPage() {
  return <HomeContent scrollTo="contact" />;
}
