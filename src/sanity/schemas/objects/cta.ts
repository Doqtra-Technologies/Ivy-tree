import { defineType, defineField } from 'sanity'

export const ctaType = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Style Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Gold)', value: 'primary' },
          { title: 'Secondary (Outline)', value: 'secondary' },
          { title: 'Text Only', value: 'text' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
  ],
})
