import { defineType, defineField } from "sanity";

export const event = defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF Document (Optional)",
      type: "file",
      description: "Upload a PDF menu or flyer for this event.",
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "image",
      title: "Event Flyer Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
