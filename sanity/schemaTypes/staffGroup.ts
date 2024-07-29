import { defineField, defineType } from "sanity";

export default defineType({
    name: 'staffGroup',
    title: 'Staff Group',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().error('Title is required')
        }),
        defineField({
            name: 'staffMembers',
            title: 'Staff Members',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'staff'}]}]
        }),
    ],
    })