import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Browser tab title and search result headline. Keep under 60 characters.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Search result summary. Keep under 160 characters.',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Comma-separated, e.g. "restaurant, cocktail bar, Romford".',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Leave blank to use the page URL.',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Shown when the page is shared on social media. Recommended 1200×630px.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})

export const imageWithAltType = defineType({
  name: 'imageWithAlt',
  title: 'Image',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Describe the image for screen readers and search engines.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const openingHoursType = defineType({
  name: 'openingHours',
  title: 'Opening Hours',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      description: 'e.g. "Monday" or "Mon – Wed"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'string',
      description: 'e.g. "10 am – 12 am" or "Closed"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: { select: { title: 'day', subtitle: 'hours' } },
})

export const objectTypes = [seoType, imageWithAltType, openingHoursType]
