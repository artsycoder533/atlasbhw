import { defineField, defineType } from "sanity";

export default defineType({
  name: "staffGroup",
  title: "Staff Group",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "staffMembers",
      title: "Staff Members",
      type: "array",
      of: [{ type: "reference", to: [{ type: "staff" }] }],
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
