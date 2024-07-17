import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
