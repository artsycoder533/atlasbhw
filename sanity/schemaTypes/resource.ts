import { defineType, defineField } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the resource",
      validation: (Rule) => Rule.required().error('Title is required')
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: "resourceType",
      title: "Resource Type",
      type: "string",
      options: {
        list: [
          { title: "URL", value: "url" },
          { title: "File", value: "file" },
          { title: 'Both', value: 'both'}
        ],
        layout: "radio",
      },
      initialValue: "url",
      validation: (Rule) => Rule.required().error('Resource type is required')
    }),
    defineField({
      name: "url",
      title: "Resource Link",
      type: "url",
      description: "The URL of the resource link",
      hidden: ({ parent }) => !['url', 'both'].includes(parent?.resourceType),
    }),
    defineField({
      name: "urlLabel",
      title: "URL Label",
      type: "string",
      description: "The label for the URL",
      hidden: ({ parent }) => !['url', 'both'].includes(parent?.resourceType),
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
      description: "The file to be downloaded",
      hidden: ({ parent }) => !['file', 'both'].includes(parent?.resourceType),
    }),
    defineField({
      name: "fileLabel",
      title: "File Label",
      type: "string",
      description: "The label for the file",
      hidden: ({ parent }) => !['file', 'both'].includes(parent?.resourceType),
    }),
  ],
});

