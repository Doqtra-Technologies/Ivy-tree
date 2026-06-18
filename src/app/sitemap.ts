import { MetadataRoute } from 'next';
import { BlogRepository } from '@/data/repositories/blog-repository';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.ivytreeessex.co.uk';

  // Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/menu',
    '/gallery',
    '/cocktail-bar',
    '/semi-private',
    '/whats-on',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Blog Posts
  const posts = await BlogRepository.getPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
