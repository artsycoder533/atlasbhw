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
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pages' }] }],
      description: 'Select the pages where this content will be displayed.',
    }),
  ],
});
