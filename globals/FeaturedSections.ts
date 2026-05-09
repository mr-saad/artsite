import { GlobalConfig } from "payload"

export const FeaturedSections: GlobalConfig = {
  slug: "featuredSections",
  fields: [
    {
      type: "array",
      name: "sections",
      fields: [
        {
          type: "relationship",
          name: "category",
          relationTo: "categories",
          required: true,
          admin: {
            description: "Select the specific category for Products",
          },
        },
        {
          type: "relationship",
          name: "products",
          relationTo: "products",
          hasMany: true,
          required: true,
          maxRows: 4,
          minRows: 1,
          admin: {
            description:
              "Select the specific products related to category(Min. 1 - Max. 4)",
          },
          filterOptions: ({ siblingData }) => {
            const sibling = siblingData as { category?: string }
            if (sibling.category) {
              return {
                categories: {
                  contains: sibling.category,
                },
              }
            }
            return {
              id: { exists: false },
            }
          },
        },
      ],
    },
  ],
}
