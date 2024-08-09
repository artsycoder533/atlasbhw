import { defineField, defineType, validation } from 'sanity';

export default defineType({
  name: 'scheduleCTA',
  title: 'Schedule CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required().max(100).warning('Shorter titles are usually better'),
    }),
    defineField({
      name: 'ctaItems',
      title: 'CTA Items',
      type: 'array',
      of: [
        defineField({
          name: 'ctaItem',
          title: 'CTA Item',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required().max(50).warning('Shorter labels are usually better'),
            }),
            defineField({
              name: 'ctaText',
              title: 'CTA Link Text',
              type: 'string',
              validation: Rule => Rule.required().error('CTA link text is required')
            }),
            defineField({
              name: 'url',
              title: 'Url',
              type: 'url',
              validation: Rule => Rule.uri({ allowRelative: true, scheme: ['http', 'https'] }).error('Must be a valid URL'),
            }),
            defineField({
              name: 'email',
              title: 'Email',
              type: 'string',
              validation: Rule => Rule.email().error('Must be a valid email address'),
            }),
          ],
          validation: Rule => Rule.custom(fields => {
            if (!fields?.url && !fields?.email) {
              return 'Either a URL or an email must be provided';
            }
            if (fields?.url && fields?.email) {
              return 'You can provide only one: either a URL or an email, not both';
            }
            return true;
          }),
        }),
      ],
      validation: Rule => Rule.max(2).error('You can only add up to 2 CTA items'),
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

