import { defineField, defineType } from 'sanity'

const orderField = defineField({
  name: 'order',
  title: 'Display Order',
  type: 'number',
  description: 'Lower numbers show first.',
})

const orderAsc = { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' as const }] }

export const menuType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    orderField,
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'imageWithAlt', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'pdfFile',
      title: 'Menu PDF',
      type: 'file',
      options: { accept: 'application/pdf' },
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [orderAsc],
  preview: { select: { title: 'title', media: 'coverImage' } },
})

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    orderField,
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: 'image', title: 'Flyer Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'pdfFile',
      title: 'Flyer PDF (optional)',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
  ],
  orderings: [orderAsc],
  preview: { select: { title: 'title', subtitle: 'description', media: 'image' } },
})

export const roomType = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    orderField,
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'string',
      description: 'e.g. "50 people" or "6-8 people"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: 'image', title: 'Image', type: 'imageWithAlt', validation: (Rule) => Rule.required() }),
  ],
  orderings: [orderAsc],
  preview: { select: { title: 'name', subtitle: 'capacity', media: 'image' } },
})

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string', description: 'e.g. "2 MIN READ"' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'mainImage', title: 'Featured Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'quote', title: 'Pull Quote', type: 'text', rows: 2 }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  orderings: [{ title: 'Newest first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'mainImage' } },
})

export const documentTypes = [menuType, eventType, roomType, postType]
