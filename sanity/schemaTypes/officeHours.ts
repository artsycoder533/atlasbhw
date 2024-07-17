import { defineField, defineType } from "sanity";

export default defineType({
  name: 'officeHours',
  title: 'Office Hours',
  type: 'object',
  fields: [
    defineField({
      name: 'monday',
      title: 'Monday',
      type: 'string',
      description: 'Enter office hours for Monday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tuesday',
      title: 'Tuesday',
      type: 'string',
      description: 'Enter office hours for Tuesday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'wednesday',
      title: 'Wednesday',
      type: 'string',
      description: 'Enter office hours for Wednesday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thursday',
      title: 'Thursday',
      type: 'string',
      description: 'Enter office hours for Thursday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'friday',
      title: 'Friday',
      type: 'string',
      description: 'Enter office hours for Friday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'saturday',
      title: 'Saturday',
      type: 'string',
      description: 'Enter office hours for Saturday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sunday',
      title: 'Sunday',
      type: 'string',
      description: 'Enter office hours for Sunday.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
