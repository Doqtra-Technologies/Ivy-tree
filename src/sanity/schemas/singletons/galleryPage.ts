import { defineType, defineField } from "sanity";

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Gallery Page",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "imageWithAlt" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'seo',
    }),
  ],
});
