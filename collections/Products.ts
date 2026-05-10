import type { CollectionConfig } from "payload"
import { slugField } from "payload"

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    slugField({
      required: true,
    }),
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "categories",
          type: "relationship",
          relationTo: "categories",
          maxRows: 2,
          minRows: 1,
          hasMany: true,
          required: true,
          admin: {
            description:
              "Select all that apply (e.g., 'Paintings' AND 'Nature Paintings'; Min.1 - Max.2)",
          },
        },
      ],
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      type: "row",
      fields: [
        {
          name: "price",
          type: "number",
        },
        {
          name: "discountedPrice",
          type: "number",
        },
        {
          name: "discountPercent",
          type: "number",
        },
      ],
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "images",
      type: "array",
      defaultValue: [],
      label: "Product Images & Variations",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "color",
          type: "text",
          admin: { description: "e.g., Cobalt Blue, Ivory" },
        },
        {
          name: "alt",
          label: "Image Description",
          type: "text",
        },
      ],
    },
    {
      name: "body",
      type: "richText",
    },
  ],
}
