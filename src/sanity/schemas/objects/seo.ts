import { defineType, defineField } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Used for browser tab title and search engine results. Keep under 60 characters.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for search engine results. Keep under 160 characters.',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Comma-separated keywords (e.g., "restaurant, cocktail bar, fine dining").',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Override the canonical URL for this page. Leave blank to auto-generate.',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Used for social media sharing (Facebook, Twitter, LinkedIn). Recommended size: 1200x630px.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines (NoIndex)',
      type: 'boolean',
      description: 'Turn this on to prevent search engines from indexing this page.',
      initialValue: false,
    }),
  ],
})
