import { groq } from "next-sanity";

export const getGalleryQuery = groq`
  *[_type == "galleryPage"][0] {
    "images": images[] {
      "src": asset->url,
      alt
    },
    seo { metaTitle, metaDescription, keywords, canonicalUrl, "openGraphImage": openGraphImage.asset->url, noIndex }
  }
`;
