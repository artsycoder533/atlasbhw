import { defineField, defineType } from "sanity";

export default defineType({
  name: "jobListing",
  title: "Job Listing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Job Title is required."),
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error("Description is required."),
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error(),
    }),
    defineField({
      name: "certification",
      title: "License/Certification",
      type: "string",
      validation: (Rule) => Rule.required().error("License is required."),
    }),
    defineField({
      name: "pay",
      title: "Pay",
      type: "string",
      validation: (Rule) => Rule.required().error("Pay is required."),
    }),
    defineField({
      name: "supplementalPay",
      title: "Supplemental Pay Types",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error("Schedule is required."),
    }),
    defineField({
      name: "workLocation",
      title: "Work Location",
      type: "string",
      validation: (Rule) => Rule.required().error("Work location is required."),
    }),
    defineField({
      name: "requestResume",
      title: "Request Resume?",
      type: "boolean",
    }),
    defineField({
      name: "requestCoverLetter",
      title: "Request Cover Letter?",
      type: "boolean",
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
