import { defineType, defineField } from 'sanity'

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Link Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      description: 'Use relative paths (e.g., /about) for internal links, and full URLs (e.g., https://google.com) for external links.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isExternal',
      title: 'Open in new tab?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
