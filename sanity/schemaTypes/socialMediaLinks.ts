import { defineType, defineField } from "sanity";

export default defineType({
    name: 'socialMediaLinks',
    title: 'Social Media Links',
    type: 'document',
    fields: [
        defineField({
            name: 'linkedIn',
            title: 'LinkedIn',
            type: 'url',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'url'
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook',
            type: 'url'
        })
    ],
})