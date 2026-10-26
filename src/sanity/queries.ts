import { defineQuery } from 'next-sanity'

const seoProjection = `seo {
  metaTitle,
  metaDescription,
  keywords,
  canonicalUrl,
  "openGraphImage": openGraphImage.asset->url,
  noIndex
}`

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    siteName,
    "logoUrl": logo.asset->url,
    reservationUrl,
    contact { address, phone, email, gmapsUrl },
    openingHours[] { day, hours },
    socialLinks { instagram, facebook, tiktok },
    ${seoProjection}
  }
`)

export const homepageQuery = defineQuery(`
  *[_type == "homepage" && _id == "homepage"][0] {
    hero {
      heading,
      subheading,
      "videoUrl": coalesce(videoFile.asset->url, videoUrl)
    },
    ${seoProjection}
  }
`)

export const semiPrivateQuery = defineQuery(`
  {
    "page": *[_type == "semiPrivatePage" && _id == "semiPrivatePage"][0] {
      heading,
      text,
      ${seoProjection}
    },
    "rooms": *[_type == "room"] | order(coalesce(order, 999) asc, name asc) {
      "id": _id,
      name,
      capacity,
      description,
      "imageUrl": image.asset->url
    }
  }
`)

export const cocktailBarQuery = defineQuery(`
  *[_type == "cocktailBarPage" && _id == "cocktailBarPage"][0] {
    heading,
    text,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    ${seoProjection}
  }
`)

export const whatsOnQuery = defineQuery(`
  {
    "page": *[_type == "whatsOnPage" && _id == "whatsOnPage"][0] {
      heading,
      subtitle,
      ${seoProjection}
    },
    "events": *[_type == "event"] | order(coalesce(order, 999) asc, _createdAt desc) {
      "id": _id,
      title,
      description,
      "pdfUrl": pdfFile.asset->url,
      "imageUrl": image.asset->url
    }
  }
`)

export const galleryQuery = defineQuery(`
  *[_type == "galleryPage" && _id == "galleryPage"][0] {
    "images": images[] { "src": asset->url, alt },
    ${seoProjection}
  }
`)

export const menuQuery = defineQuery(`
  {
    "page": *[_type == "menuPage" && _id == "menuPage"][0] {
      heading,
      description,
      ${seoProjection}
    },
    "menus": *[_type == "menu"] | order(coalesce(order, 999) asc, title asc) {
      "id": _id,
      title,
      "src": coverImage.asset->url,
      "alt": coalesce(coverImage.alt, title),
      "pdfUrl": pdfFile.asset->url
    }
  }
`)

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
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
    ${seoProjection}
  }
`)
