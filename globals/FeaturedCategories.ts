import { GlobalConfig } from "payload"

export const FeaturedCategories: GlobalConfig = {
  slug: "featuredCategories",
  fields: [
    {
      type: "relationship",
      name: "categories",
      relationTo: "categories",
      hasMany: true,
      required: true,
      maxRows: 6,
      minRows: 1,
      admin: {
        description:
          "Select the specific categories to highlight on the home page. (Min. 1 - Max. 6)",
      },
    },
  ],
}
