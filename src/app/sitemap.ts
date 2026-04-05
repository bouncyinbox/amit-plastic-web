import { MetadataRoute } from 'next';
import { NAV_ROUTES } from '@/lib/constants';

const BASE_URL = 'https://amitplastic.in';

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_ROUTES.map(({ path }) => ({
    url: `${BASE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
