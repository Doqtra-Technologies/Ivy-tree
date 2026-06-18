import { sanityFetch } from '@/sanity/fetch';
import { allPostsQuery, postBySlugQuery, recentPostsQuery } from '@/sanity/queries/blog';

export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  location: string;
  quote: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  body?: any[];
  seo?: import('@/utils/seo').SanitySeo;
}

export class BlogRepository {
  static async getPosts(): Promise<BlogPost[]> {
    try {
      const posts = await sanityFetch<BlogPost[]>({ query: allPostsQuery });
      return posts || [];
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  }

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const post = await sanityFetch<BlogPost>({ 
        query: postBySlugQuery,
        params: { slug }
      });
      return post || null;
    } catch (error) {
      console.error(`Error fetching blog post by slug (${slug}):`, error);
      return null;
    }
  }

  static async getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
    try {
      const posts = await sanityFetch<BlogPost[]>({ 
        query: recentPostsQuery,
        params: { limit }
      });
      return posts || [];
    } catch (error) {
      console.error('Error fetching recent blog posts:', error);
      return [];
    }
  }
}
