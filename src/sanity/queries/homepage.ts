import { groq } from 'next-sanity'

export const homepageQuery = groq`
  *[_type == "homepage"][0]{
    hero {
      heading,
      subheading,
      videoUrl,
      "fallbackImageUrl": fallbackImage.asset->url
    },
    seo {
      metaTitle,
      metaDescription,
      keywords,
      canonicalUrl,
      "openGraphImage": openGraphImage.asset->url,
      noIndex
    }
  }
`
