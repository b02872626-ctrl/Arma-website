export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "liveUrl",
      title: "Live project URL",
      type: "url",
    },
    {
      name: "cover",
      title: "Cover image",
      type: "url",
      description:
        "Paste a Google Drive share link (right-click the file in Drive → Share → Copy link). Make sure the file is set to 'Anyone with the link can view'.",
    },
    {
      name: "gallery",
      title: "Gallery images",
      type: "array",
      description: "Drive share links — one per image.",
      of: [{ type: "url" }],
    },
    {
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first. Leave blank to sort by date.",
    },
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "tags" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: Array.isArray(subtitle) ? subtitle.join(" · ") : "",
      };
    },
  },
};
