export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "MMM D, YYYY" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "cover",
      title: "Cover image",
      type: "url",
      description: "Paste a Google Drive share link.",
    },
    {
      name: "intro",
      title: "Intro paragraph",
      type: "text",
      rows: 3,
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            { name: "heading", title: "Heading (h2)", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 4 },
            {
              name: "subsections",
              title: "Subsections (optional)",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "subsection",
                  fields: [
                    { name: "heading", title: "Heading (h3)", type: "string" },
                    { name: "body", title: "Body", type: "text", rows: 3 },
                  ],
                  preview: { select: { title: "heading" } },
                },
              ],
            },
          ],
          preview: { select: { title: "heading" } },
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Date, newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "date" },
  },
};
