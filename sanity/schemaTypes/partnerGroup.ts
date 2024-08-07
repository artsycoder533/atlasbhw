import { defineType, defineField } from "sanity";

export default defineType({
  name: "partnerGroup",
  title: "Partner Group",
  type: "document",
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "partner" }],
    }),
  ],
});
