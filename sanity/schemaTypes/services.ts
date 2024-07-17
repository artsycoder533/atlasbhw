import { defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "servicesList",
      title: "Services List",
      type: "array",
      of: [
        {
          type: "object",
          name: "service",
          title: "Service",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: 'array',
              of: [{type: 'block'}],
            }),
            defineField({
              name: "serviceUrl",
              title: "Service URL",
              type: "url",
              description: "This is the link to the individual service page.",
            }),
            defineField({
              name: "cta",
              title: "Call to Action",
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Label",
                  type: "string",
                }),
                defineField({
                  name: "ctaUrl",
                  title: "URL",
                  type: "url",
                  description:
                    "Where the user will be navigated to when they click the call to action.",
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
