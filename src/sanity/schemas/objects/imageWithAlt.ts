import { defineType, defineField } from 'sanity'

export const imageWithAltType = defineType({
  name: 'imageWithAlt',
  title: 'Image with Alt Text',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for SEO and accessibility. Describe what is in the image.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
