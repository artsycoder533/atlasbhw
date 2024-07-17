import { defineField, defineType } from "sanity";

export default defineType({
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the page.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: 'services'},
        {type: 'contactInfo'},
      ]
    }),
    defineField({
      name: "menuItem",
      title: "Menu Item",
      type: "reference",
      to: { type: "menuItem" },
      description: "Reference to the corresponding menu item.",
    }),
  ],
});
