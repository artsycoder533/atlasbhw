import { defineType, defineField } from "sanity";

export default defineType({
  name: "staff",
  title: "Staff",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required"),
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required().error('Headshot image is requried')
    }),
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Staff Member", value: "staff" },
          { title: "Founder", value: "founder" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("Role selection is required."),
    }),

    // defineField({
    //   name: "bio",
    //   title: "Bio",
    //   type: "array",
    //   of: [{ type: "block" }],
    //   validation: (Rule) => Rule.required().error('Bio is required')
    // }),
    // defineField({
    //   name: 'staffCTA',
    //   title: 'Staff Call To Action',
    //   type: 'reference',
    //   to: [{ type: 'menuItem' }],
    //   description: 'Select the menu item that the CTA will link to',
    //   validation: (Rule) => Rule.required().error('Menu Item is required'),
    // }),
    defineField({
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.unique().error('Specialties should be unique')
    }),
    defineField({
      name: 'ehrLink',
      title: 'EHR Link',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required().error('EHR link label is required')
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: (Rule) => Rule.required().error('URL is required')
        })
      ]
    })
  ],
});
