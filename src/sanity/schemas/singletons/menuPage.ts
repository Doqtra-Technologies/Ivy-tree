import { defineType, defineField } from 'sanity'

export const menuPage = defineType({
  name: 'menuPage',
  title: 'Menu Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Page Heading',
      type: 'string',
      initialValue: 'OUR MENU',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: 'Discover our exquisite Mediterranean dishes. Click the covers below to view our menus.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'seo',
    }),
  ],
})
