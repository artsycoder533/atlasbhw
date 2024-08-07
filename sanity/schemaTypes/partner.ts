import { defineType, defineField } from "sanity";

export default defineType({
  name: "partner",
  title: "Partner Company",
  type: "object",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
