import { defineType, defineField } from "sanity";

export default defineType({
  name: "companyAddress",
  title: "Company Address",
  type: "object",
  fields: [
    defineField({
      name: "streetAddress",
      title: "Street Address",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Street Address is required."),
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'string',
      description: 'Apt, Suite Number (optional)'
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required().error("City is required."),
    }),
    defineField({
      name: "state",
      title: "State/Province",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("State/Province is required."),
    }),
    defineField({
      name: "postalCode",
      title: "Postal Code",
      type: "string",
      validation: (Rule) => Rule.required().error("Postal Code is required."),
    }),
  ],
});
