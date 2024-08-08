import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error('Title is required')
    }),
    defineField({
      name: 'announcementBanner',
      title: 'Announcement Banner',
      type: 'string',
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required().error('Heading is required')
    }),
    defineField({
      name: "subHeading",
      title: "Sub Heading",
      type: "array",
      of: [{type: 'block'}]
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "primaryCTA",
      title: "Primary CTA",
      type: "object",
      description: "The main call to action button in this section.",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          validation: (Rule) => Rule.required().error('Primary call to action is required')
        }),
        defineField({
          name: "linkType",
          title: "Link Type",
          type: "string",
          options: {
            list: [
              { title: "Full URL", value: "fullUrl" },
              { title: "Relative URL", value: "relativeUrl" },
              { title: "Anchor Link", value: "anchorLink" },
            ],
            layout: "radio",
          },
          validation: (Rule) => Rule.required(),
          description: `
                The type of link:
                - **Full URL**: A complete URL (e.g., https://example.com)
                - **Relative URL**: A relative path (e.g., /services)
                - **Anchor Link**: An anchor link within the page (e.g., #section).
              `,
        }),
        defineField({
          name: "url",
          title: "URL",
          type: "string",
          description:
            "Where the user will be navigated to when they click the primary CTA",
        }),
      ],
    }),
    defineField({
      name: "secondaryCTA",
      title: "Secondary CTA",
      type: "object",
      description: "The secondary call to action button in this section",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),
        defineField({
          name: "linkType",
          title: "Link Type",
          type: "string",
          options: {
            list: [
              { title: "Full URL", value: "fullUrl" },
              { title: "Relative URL", value: "relativeUrl" },
              { title: "Anchor Link", value: "anchorLink" },
            ],
            layout: "radio",
          },
          validation: (Rule) => Rule.required().error('Must select link type'),
          description: `
                The type of link:
                - **Full URL**: A complete URL (e.g., https://example.com)
                - **Relative URL**: A relative path (e.g., /services)
                - **Anchor Link**: An anchor link within the page (e.g., #section).
              `,
        }),
        defineField({
          name: "url",
          title: "URL",
          type: "string",
          description:
            "Where the user will be navigated to when they click the secondary CTA",
        }),
      ],
    }),
  ],
});
