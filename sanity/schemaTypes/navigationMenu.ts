import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigationMenu",
  title: "Navigation Menu",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "The logo image to display at the top of the navigation menu.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the navigation menu.",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "navigationLink",
          title: "Navigation Link",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "The text to display for the link.",
            }),
            defineField({
              name: "linkType",
              title: "Link Type",
              type: "string",
              options: {
                list: [
                  { title: "Full URL", value: "fullUrl" },
                  { title: "Relative URL", value: "relativeUrl" },
                  { title: "Anchor Link", value: "anchorLink" },
                ],
                layout: "radio",
              },
              validation: (Rule) => Rule.required(),
              description: `
                The type of link:
                - **Full URL**: A complete URL (e.g., https://example.com)
                - **Relative URL**: A relative path (e.g., /services)
                - **Anchor Link**: An anchor link within the page (e.g., #section).
              `,
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
              description:
                "The URL to navigate to when the link is clicked. Should match the selected link type.",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as {
                    linkType?: string;
                  };

                  if (!value || !parent.linkType) {
                    return true;
                  }

                  const { linkType } = parent;

                  if (linkType === "fullUrl" && !value.startsWith("https://")) {
                    return 'Full URLs must start with "https://".';
                  }
                  if (linkType === "relativeUrl" && !value.startsWith("/")) {
                    return 'Relative URLs must start with "/".';
                  }
                  if (linkType === "anchorLink" && !value.startsWith("#")) {
                    return 'Anchor links must start with "#".';
                  }
                  return true;
                }),
            }),
            defineField({
              name: "isDropdown",
              title: "Is Dropdown",
              type: "boolean",
              initialValue: false,
              description: "Indicates if this link is a dropdown menu.",
            }),
            defineField({
              name: "dropdownLinks",
              title: "Dropdown Links",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  name: "dropdownLink",
                  title: "Dropdown Link",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                      description: "The text to display for the dropdown link.",
                    }),
                    defineField({
                      name: "linkType",
                      title: "Link Type",
                      type: "string",
                      options: {
                        list: [
                          { title: "Full URL", value: "fullUrl" },
                          { title: "Relative URL", value: "relativeUrl" },
                          { title: "Anchor Link", value: "anchorLink" },
                        ],
                        layout: "radio",
                      },
                    }),
                    defineField({
                      name: "url",
                      title: "URL",
                      type: "string",
                      description:
                        "The URL to navigate to when the link is clicked. Should match the selected link type.",
                      validation: (Rule) =>
                        Rule.custom((value, context) => {
                          const parent = context.parent as {
                            linkType?: string;
                          };

                          if (!value || !parent.linkType) {
                            return true;
                          }

                          const { linkType } = parent;

                          if (
                            linkType === "fullUrl" &&
                            !value.startsWith("https://")
                          ) {
                            return 'Full URLs must start with "https://".';
                          }
                          if (
                            linkType === "relativeUrl" &&
                            !value.startsWith("/")
                          ) {
                            return 'Relative URLs must start with "/".';
                          }
                          if (
                            linkType === "anchorLink" &&
                            !value.startsWith("#")
                          ) {
                            return 'Anchor links must start with "#".';
                          }
                          return true;
                        }),
                      hidden: ({ parent }) =>
                        !parent || parent.linkType === "anchorLink",
                    }),
                  ],
                }),
              ],
              description: "The links to display in the dropdown menu.",
              hidden: ({ parent }) => !parent || !parent.isDropdown,
            }),
            defineField({
              name: "isCTA",
              title: "Is CTA",
              type: "boolean",
              initialValue: false,
              description:
                "Indicates if this link is a Call to Action (CTA) and should be styled as a button.",
            }),
          ],
        }),
      ],
      validation: (Rule) =>
        Rule.max(5).error("You can only add up to 5 links."),
      description: "The main navigation links. You can add up to 5 links.",
    }),
  ],
});
