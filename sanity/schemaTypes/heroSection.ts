import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
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
        }),
        defineField({
          name: "url",
          title: "URL",
          type: "url",
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
          name: "url",
          title: "URL",
          type: "url",
          description:
            "Where the user will be navigated to when they click the primary CTA",
        }),
      ],
    }),
  ],
});
