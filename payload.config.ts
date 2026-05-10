import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"
import sharp from "sharp"

import { Users } from "./collections/Users"
import { Media } from "./collections/Media"
import { Products } from "./collections/Products"
import { Categories } from "./collections/Categories"
import { FeaturedCategories } from "./globals/FeaturedCategories"
import { FeaturedSections } from "./globals/FeaturedSections"
import { NavbarCategories } from "./globals/NavbarCategories"

import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  collections: [Users, Media, Products, Categories],
  globals: [NavbarCategories, FeaturedCategories, FeaturedSections],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
})
