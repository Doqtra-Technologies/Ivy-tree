import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    "logoUrl": logo.asset->url,
    reservationUrl,
    contact {
      address,
      phone,
      email,
      gmapsUrl
    },
    openingHours[] {
      day,
      hours
    },
    socialLinks[] {
      platform,
      url
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
