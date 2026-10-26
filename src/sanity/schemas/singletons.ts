import { defineField, defineType } from 'sanity'

/**
 * Single-instance documents. Each is stored under an `_id` equal to its type
 * name and pinned in the Studio sidebar by `src/sanity/structure.ts`.
 */

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'reservationUrl', title: 'Reservation Link (OpenTable)', type: 'url' }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({ name: 'address', title: 'Address', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'gmapsUrl', title: 'Google Maps Link', type: 'url' }),
      ],
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [{ type: 'openingHours' }],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
        defineField({ name: 'tiktok', title: 'TikTok', type: 'url' }),
      ],
    }),
    defineField({ name: 'seo', title: 'Default SEO', type: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Subheading', type: 'text', rows: 3 }),
        defineField({
          name: 'videoFile',
          title: 'Background Video',
          type: 'file',
          options: { accept: 'video/mp4' },
          description: 'Upload an MP4. Takes priority over the video URL below.',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Background Video URL',
          type: 'string',
          description: 'Used when no video is uploaded, e.g. /homepage/banner/banner.mp4',
        }),
      ],
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Homepage' }) },
})

export const menuPageType = defineType({
  name: 'menuPage',
  title: 'Menu Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Menu Page' }) },
})

export const whatsOnPageType = defineType({
  name: 'whatsOnPage',
  title: "What's On Page",
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { prepare: () => ({ title: "What's On Page" }) },
})

export const semiPrivatePageType = defineType({
  name: 'semiPrivatePage',
  title: 'Semi Private Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'text', title: 'Intro Text', type: 'text', rows: 4 }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Semi Private Page' }) },
})

export const cocktailBarPageType = defineType({
  name: 'cocktailBarPage',
  title: 'Cocktail Bar Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'text', title: 'Intro Text', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Main Image', type: 'imageWithAlt' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Cocktail Bar Page' }) },
})

export const galleryPageType = defineType({
  name: 'galleryPage',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
      options: { layout: 'grid' },
      description: 'Drag to reorder. The first 10 also appear on the homepage.',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Gallery' }) },
})

export const singletonTypes = [
  siteSettingsType,
  homepageType,
  menuPageType,
  whatsOnPageType,
  semiPrivatePageType,
  cocktailBarPageType,
  galleryPageType,
]
