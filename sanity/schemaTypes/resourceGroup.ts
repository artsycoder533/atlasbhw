import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resourceGroup',
  title: 'Resource Group',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{ type: 'resource' }],
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
