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
      validation: (Rule) => Rule.required().error('Title is required')
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "reference", to: [{ type: "heroSection" }, { type: 'services' }, { type: 'contactInfo' }, { type: 'faqs'}, {type: 'socialMediaLinks'}, {type: 'staffGroup'}, {type: 'about'}, {type: 'partialHero'}] },
      ],
      validation: (Rule) => Rule.required().error('Content is required')
    }),
    defineField({
      name: "menuItem",
      title: "Menu Item",
      type: "reference",
      to: { type: "menuItem" },
      description: "Reference to the corresponding menu item.",
      validation: (Rule) => Rule.required().error('Menu Item is required')
    }),
  ],
});
