import { defineField, defineType } from "sanity";

export default defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "The text to display for the link.",
      validation: (Rule) => Rule.required().error('Label is required')
    }),
    defineField({
      name: "slugType",
      title: "Slug Type",
      type: "string",
      options: {
        list: [
          { title: "External", value: "externalUrl" },
          { title: "Relative", value: "relativeUrl" },
          { title: "Anchor", value: "anchorLink" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error('Must select slug type'),
      description: `
            The type of slug:
            - External: A complete URL (e.g., https://example.com) that navigates the user away from the website.
            - Relative: Navigates the user to another page within the website (e.g., /services)
            - Anchor Link: Navigates the user to another section on the current page (e.g., #section).
          `,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required().error('Slug is required'),
      description: 'If the slug is more than one word you should use dashes instead of spaces i.e. meet-the-founders'
    }),
    defineField({
      name: "isDropdown",
      title: "Is Dropdown?",
      type: "boolean",
      initialValue: false,
      description: "Indicates if this link is a dropdown menu.",
    }),
    defineField({
      name: "dropdownLinks",
      title: "Dropdown Links",
      type: "array",
      of: [{ type: "reference", to: { type: "menuItem" } }],
      description: "The links to display in the dropdown menu.",
      hidden: ({ parent }) => !parent || !parent.isDropdown,
    }),
    defineField({
      name: "isCTA",
      title: "Is CTA",
      type: "boolean",
      initialValue: false,
      description:
        "Indicates if this link is a Call to Action (CTA) and should be styled as a button.",
    }),
  ],
});
