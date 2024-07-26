import { defineType, defineField } from "sanity";

export default defineType({
  name: "socialMediaLinks",
  title: "Social Media Links",
  type: "object",
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),
    defineField({
      name: "linkedIn",
      title: "LinkedIn",
      type: "url",
      description: 'The full URL to your company LinkedIn Page'
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
      description: 'The full URL to your company Instagram Page'
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
      description: 'The full URL to your company Facebook Page'
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "url",
      description: 'The full URL to your company Twitter Page'
    }),
    defineField({
      name: "tiktok",
      title: "TikTok",
      type: "url",
      description: 'The full URL to your company TikTok Page'
    }),
  ],
});
