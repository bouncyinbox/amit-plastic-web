import { MetadataRoute } from 'next';

const BASE_URL = 'https://amitplastic.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/our-story', '/products', '/brands', '/reviews', '/contact'];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
