import { GlobalConfig } from "payload"

export const NavbarCategories: GlobalConfig = {
  slug: "navbarCategories",
  fields: [
    {
      type: "relationship",
      name: "categories",
      relationTo: "categories",
      hasMany: true,
      required: true,
      maxRows: 5,
      minRows: 1,
      admin: {
        description:
          "Select the specific categories to highlight in Navbar. (Min. 1 - Max. 5)",
      },
      filterOptions: () => {
        return {
          parent: { exists: false },
        }
      },
    },
  ],
}
