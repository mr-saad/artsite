import { cacheLife } from "next/cache"
import { getPayload } from "payload"
import config from "@payload-config"

export const getCachedCategories = async () => {
  "use cache"
  cacheLife("minutes")
  const payload = await getPayload({ config })
  const cts = await payload.findGlobal({
    slug: "navbarCategories",
  })
  if (!cts.categories) return []
  const ids = cts.categories.map((ct) => ct.id)

  const subCts = await payload.find({
    collection: "categories",
    pagination: false,
    where: {
      parent: { in: ids },
    },
  })
  if (!subCts.docs) return []

  return cts.categories.map((ct) => ({
    id: ct.id,
    title: ct.title,
    subCategories: subCts.docs.filter(
      (sb) =>
        (typeof sb.parent === "object" ? sb.parent.id : sb.parent) === ct.id,
    ),
  }))
}
