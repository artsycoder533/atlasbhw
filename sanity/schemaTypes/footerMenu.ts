import { defineField, defineType } from "sanity";

export default defineType({
  name: "footerMenu",
  title: "Footer Menu",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "An image to display in the footer.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the footer menu.",
      validation: (Rule) => Rule.required().error('Title is required')
    }),
    defineField({
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "footerLink",
          title: "Footer Link",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              description: "The heading for this section of links.",
              validation: (Rule) => Rule.required().error('Heading is required')
            }),
            defineField({
              name: "sublinks",
              title: "Sublinks",
              type: "array",
              of: [{ type: "reference", to: [{ type: "menuItem" }] }],
              description: "The sublinks under this heading.",
              validation: (Rule) => Rule.required().error('Footer sublinks required')
            }),
          ],
        }),
      ],
      description:
        "The main links for the footer. Each link can have multiple sublinks.",
    }),
    defineField({
      name: "copyrightInfo",
      title: "Copyright Info",
      type: "string",
      description: "The copyright information to display in the footer.",
      validation: (Rule) => Rule.required().error('Copyright info is required')
    }),
    defineField({
      name: "createdBy",
      title: "Created By",
      type: "string",
      description: "The creator of this website. This field is not editable.",
      initialValue: "Ten-23 Agency, LLC",
      readOnly: true,
    }),
    defineField({
      name: "creatorWebsite",
      title: "Creator Website",
      type: "url",
      description: "The creators website.  This field is not editable.",
      initialValue: "https://www.ten23.agency/",
      readOnly: true,
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'socialMediaLinks',
    })
  ],
});
