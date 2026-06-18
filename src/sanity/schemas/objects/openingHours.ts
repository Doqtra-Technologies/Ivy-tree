import { defineType, defineField } from 'sanity'

export const openingHoursType = defineType({
  name: 'openingHours',
  title: 'Opening Hours',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      description: 'e.g., "Monday" or "Mon - Wed"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'string',
      description: 'e.g., "10:00 AM - 11:00 PM" or "Closed"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'day',
      subtitle: 'hours',
    },
  },
})
