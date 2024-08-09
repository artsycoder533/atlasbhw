import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqs",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error('Title is required')
    }),
    defineField({
      name: "faqsList",
      title: "FAQs List",
      type: 'array',
      of: [
        {
          type: "object",
          name: "accordionItem",
          title: "Accordian Item",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required().error('Question is required')
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "array",
              of: [{type: 'block'}],
              validation: (Rule) => Rule.required().error('Answer is required')
            }),
          ],
        },
      ],
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
