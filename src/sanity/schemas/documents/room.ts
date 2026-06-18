import { defineType, defineField } from "sanity";

export const room = defineType({
  name: "room",
  title: "Rooms",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Room Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "capacity",
      title: "Capacity",
      type: "string",
      description: "e.g., '50 people', '6-8 people'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Room Image",
      type: "imageWithAlt",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "capacity",
      media: "image.asset",
    },
  },
});
