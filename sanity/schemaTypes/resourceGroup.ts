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
  ],
});
