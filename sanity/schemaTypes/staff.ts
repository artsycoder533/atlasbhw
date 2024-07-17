import { defineType, defineField } from "sanity";

export default defineType({
  name: "staff",
  title: "Staff",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required"),
    }),
    defineField({
      name: "qualification",
      title: "Qualification",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Staff Member", value: "staff" },
          { title: "Founder", value: "founder" },
        ],
        layout: "radio", // Ensures it appears as radio buttons
      },
      validation: (Rule) =>
        Rule.required().error("Role selection is required."),
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "object",
      description: "The main call to action button in this section.",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),
        defineField({
          name: "url",
          title: "URL",
          type: "url",
          description:
            "Where the user will be navigated to when they click the button",
        }),
      ],
    }),
  ],
});
