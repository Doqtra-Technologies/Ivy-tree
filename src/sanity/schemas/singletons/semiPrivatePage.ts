import { defineType, defineField } from "sanity";

export const semiPrivatePage = defineType({
  name: "semiPrivatePage",
  title: "Semi Private Page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Intro Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'seo',
    }),
  ],
});
