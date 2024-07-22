import { defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error('Title is required')
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required().error('Slug is required')
    }),
    defineField({
      name: "servicesList",
      title: "Services List",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }], 
      validation: (Rule) => Rule.required().error('Services are required')
    }),
  ],
});
