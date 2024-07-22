import { defineField, defineType } from "sanity";

export default defineType({
    name: 'contactInfo',
    title: 'Contact Info',
    description: 'Company contact information',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required().error('Company Name is required'),
        }),
        defineField({
            name: 'companyEmail',
            title: 'Company Email',
            type: 'string',
            validation: (Rule) => Rule.required().email().error("Valid email is required."),
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.required().error("Phone Number is required."),
        }),
        defineField({
            name: 'fax',
            title: 'Fax Number',
            type: 'string'
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'reference',
            to: [{type: 'companyAddress'}],
            validation: (Rule) => Rule.required().error('Address is required')
        }),
        defineField({
            name: 'officeHours',
            title: 'Office Hours',
            type: 'reference',
            to: [{type: 'officeHours'}],
        }),
        defineField({
            name: 'socialMediaLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{type: 'reference', to:  [{type: 'socialMediaLinks'}]}],
        })
    ],
})