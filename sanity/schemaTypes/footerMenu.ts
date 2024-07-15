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
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the footer menu.',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
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
                        "The URL to navigate to when the link is clicked. Should match the selected link type.",
                      validation: (Rule) =>
                        Rule.custom((value, context) => {
                          const parent = context.parent as {
                            linkType?: string;
                          };
        
                          if (!value || !parent.linkType) {
                            return true;
                          }
        
                          const { linkType } = parent;
        
                          if (linkType === "fullUrl" && !value.startsWith("https://")) {
                            return 'Full URLs must start with "https://".';
                          }
                          if (linkType === "relativeUrl" && !value.startsWith("/")) {
                            return 'Relative URLs must start with "/".';
                          }
                          if (linkType === "anchorLink" && !value.startsWith("#")) {
                            return 'Anchor links must start with "#".';
                          }
                          return true;
                        }),
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
      name: 'createdBy',
      title: 'Created By',
      type: 'string',
      description: 'The creator of this website. This field is not editable.',
      initialValue: 'Ten-23 Agency, LLC',
      readOnly: true,
    }),
    defineField({
      name: 'creatorWebsite',
      title: 'Creator Website',
      type: 'url',
      description: 'The creators website.  This field is not editable.',
      initialValue: 'https://www.ten23.agency/',
      readOnly: true,
    })
  ],
})

