import { groq } from "next-sanity";

export const getRoomsQuery = groq`
  *[_type == "room"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    capacity,
    description,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }
`;

export const getSemiPrivateIntroQuery = groq`
  *[_type == "semiPrivatePage"][0] {
    heading,
    text,
    seo { metaTitle, metaDescription, keywords, canonicalUrl, "openGraphImage": openGraphImage.asset->url, noIndex }
  }
`;
