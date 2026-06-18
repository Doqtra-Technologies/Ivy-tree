import { defineType, defineField } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title (Internal)',
      type: 'string',
      initialValue: 'Homepage',
      readOnly: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Subheading', type: 'text' }),
        defineField({ name: 'videoUrl', title: 'Background Video URL (MP4)', type: 'string' }),
        defineField({ name: 'fallbackImage', title: 'Fallback Background Image', type: 'image' }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Homepage SEO',
      type: 'seo',
    }),
  ],
})
