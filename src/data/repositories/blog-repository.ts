import type { PortableTextBlock } from 'next-sanity';

import { blogPostsContent } from '@/data/content';
import { sanityFetch } from '@/sanity/fetch';
import { postsQuery } from '@/sanity/queries';
import type { PageSeo } from '@/utils/seo';

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
  /** Rich-text body (Portable Text). */
  body?: PortableTextBlock[];
  seo?: PageSeo;
}

/** Wrap plain paragraphs from the static fallback as Portable Text blocks. */
function paragraphsToBlocks(paragraphs: string[]): PortableTextBlock[] {
  return paragraphs.map((text, i) => ({
    _type: 'block',
    _key: `p${i}`,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `p${i}s`, text, marks: [] }],
  }));
}

const fallbackPosts: BlogPost[] = blogPostsContent
  .map((post) => ({ ...post, body: paragraphsToBlocks(post.body) }))
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

export class BlogRepository {
  static async getPosts(): Promise<BlogPost[]> {
    const cms = await sanityFetch<BlogPost[]>({ query: postsQuery, tags: ['post'] });
    return cms?.length ? cms : fallbackPosts;
  }

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await this.getPosts();
    return posts.find((post) => post.slug === slug) || null;
  }

  static async getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
    const posts = await this.getPosts();
    return posts.slice(0, limit);
  }
}
