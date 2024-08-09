import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Us",
  type: "document",
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required().error()
      }),
    defineField({
      name: "missionStatement",
      title: "Mission Statement",
      type: "object",
      fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (Rule) => Rule.required().error('Heading is required')
        }),
        defineField({
            name: 'bodyText',
            title: 'Body Text',
            type: 'array',
            of: [{type: 'block'}],
            validation: (Rule) => Rule.required().error('Body text is required')
        })
      ]
    }),
    defineField({
      name: "teachingSiteStatement",
      title: "Teaching Site Statement",
      type: "object",
      fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: (Rule) => Rule.required().error('Heading is required')
        }),
        defineField({
            name: 'bodyText',
            title: 'Body Text',
            type: 'array',
            of: [{type: 'block'}],
            validation: (Rule) => Rule.required().error('Body text is required')
        })
      ]
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
