import { groq } from 'next-sanity';

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  category,
  readTime,
  location,
  quote,
  excerpt,
  "imageUrl": mainImage.asset->url,
  publishedAt
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  category,
  readTime,
  location,
  quote,
  excerpt,
  "imageUrl": mainImage.asset->url,
  publishedAt,
  body,
  seo { metaTitle, metaDescription, keywords, canonicalUrl, "openGraphImage": openGraphImage.asset->url, noIndex }
}`;

export const recentPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...$limit] {
  title,
  "slug": slug.current,
  category,
  readTime,
  location,
  quote,
  excerpt,
  "imageUrl": mainImage.asset->url,
  publishedAt
}`;
