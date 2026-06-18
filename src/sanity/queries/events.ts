import { groq } from "next-sanity";

export const getEventsQuery = groq`
  *[_type == "event"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    pdfUrl,
    "imageUrl": image.asset->url
  }
`;

export const getWhatsOnIntroQuery = groq`
  *[_type == "whatsOnPage"][0] {
    heading,
    subtitle,
    seo { metaTitle, metaDescription, keywords, canonicalUrl, "openGraphImage": openGraphImage.asset->url, noIndex }
  }
`;
