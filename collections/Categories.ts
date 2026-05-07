import { CollectionConfig, slugField } from "payload"

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: { useAsTitle: "title" },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },

        {
          name: "parent",
          type: "relationship",
          relationTo: "categories",
          admin: {
            description:
              "Leave blank for top-level categories (e.g., Paintings). Select a parent for sub-categories (e.g., Nature Paintings).",
          },
        },
      ],
    },
    slugField({
      useAsSlug: "title",
      name: "slug",
      required: true,
    }),
  ],
}
