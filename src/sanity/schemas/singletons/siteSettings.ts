import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'reservationUrl',
      title: 'Global Reservation URL',
      type: 'url',
    }),
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
      title: 'Global Opening Hours',
      type: 'array',
      of: [{ type: 'openingHours' }],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO Metadata',
      type: 'seo',
    }),
  ],
})
