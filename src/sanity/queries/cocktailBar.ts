import { groq } from "next-sanity";

export const getCocktailBarQuery = groq`
  *[_type == "cocktailBarPage"][0] {
    heading,
    text,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    seo { metaTitle, metaDescription, keywords, canonicalUrl, "openGraphImage": openGraphImage.asset->url, noIndex }
  }
`;
