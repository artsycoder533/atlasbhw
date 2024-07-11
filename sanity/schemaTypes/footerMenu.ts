import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footerMenu',
  title: 'Footer Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'An image to display in the footer.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'footerLink',
          title: 'Footer Link',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              description: 'The heading for this section of links.',
            }),
            defineField({
              name: 'sublinks',
              title: 'Sublinks',
              type: 'array',
              of: [
                defineField({
                  type: 'object',
                  name: 'footerSublink',
                  title: 'Footer Sublink',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      description: 'The text to display for the sublink.',
                    }),
                    defineField({
                      name: 'slug',
                      title: 'Slug',
                      type: 'slug',
                      description: 'The URL to navigate to when the sublink is clicked.',
                    }),
                  ],
                }),
              ],
              description: 'The sublinks under this heading.',
            }),
          ],
        }),
      ],
      description: 'The main links for the footer. Each link can have multiple sublinks.',
    }),
    defineField({
      name: 'copyrightInfo',
      title: 'Copyright Info',
      type: 'string',
      description: 'The copyright information to display in the footer.',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'The author of the website. This field is not editable.',
      readOnly: true,
      initialValue: 'Natasha Johnson', // Replace with the actual author name
    }),
  ],
})

