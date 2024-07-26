import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigationMenu",
  title: "Navigation Menu",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "The logo image to display at the top of the navigation menu.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the navigation menu.",
      validation: (Rule) => Rule.required().error('Title is required')
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "reference", to: { type: "menuItem" } }],
      validation: (Rule) =>
        Rule.required().max(6).error("You can only add up to 5 links."),
      description: "The main navigation links. You can add up to 5 links.",
    }),
  ],
});