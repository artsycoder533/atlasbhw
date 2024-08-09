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
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      description: 'Select the page that this content will be displayed.',
      to: [{ type: 'pages' }],
    }),
  ],
});
