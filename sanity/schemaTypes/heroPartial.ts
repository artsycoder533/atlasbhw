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
      name: "page",
      title: "Page",
      type: "reference",
      description: "Select the page that this content will be displayed.",
      to: [{ type: "pages" }],
    }),
  ],
});
