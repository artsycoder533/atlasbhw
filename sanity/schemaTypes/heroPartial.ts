import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroPartial",
  title: "Partial Hero",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required().error("Heading is required"),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pages' }] }],
      description: 'Select the pages where this content will be displayed.',
    }),
  ],
});
