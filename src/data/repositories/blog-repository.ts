import { blogPostsContent } from '@/data/content';

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
  /** Body paragraphs, rendered in order. */
  body?: string[];
  seo?: import('@/utils/seo').PageSeo;
}

const posts: BlogPost[] = [...blogPostsContent].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export class BlogRepository {
  static async getPosts(): Promise<BlogPost[]> {
    return posts;
  }

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return posts.find((post) => post.slug === slug) || null;
  }

  static async getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
    return posts.slice(0, limit);
  }
}
