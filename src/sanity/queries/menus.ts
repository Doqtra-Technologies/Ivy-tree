import { groq } from "next-sanity";

export const getMenusQuery = groq`
  *[_type == "menu"] | order(order asc) {
    _id,
    title,
    "src": image.asset->url,
    "alt": title,
    pdfUrl
  }
`;

export const getMenuPageIntroQuery = groq`
  *[_type == "menuPage"][0] {
    heading,
    description,
    seo { metaTitle, metaDescription, keywords, canonicalUrl, "openGraphImage": openGraphImage.asset->url, noIndex }
  }
`;
