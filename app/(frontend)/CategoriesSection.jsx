import Link from "next/link"
import { getGlobal } from "@/lib/server/getData"

export default async function CategoriesSection() {
  const gb = await getGlobal({ slug: "featuredCategories" })
  if (!gb.categories)
    return (
      <p className="text-2xl text-red-600 p-5 bg-white">
        Error: Cannot find Categories
      </p>
    )

  return (
    gb?.categories.length > 0 &&
    gb?.categories.map((ct) => {
      return (
        <Link
          className="block font-serif text-3xl transition p-5 outline text-white hover:text-black hover:bg-zinc-100 focus-visible:text-black focus-visible:bg-zinc-100"
          key={ct.id}
          href={"/c/" + ct.slug}
        >
          {ct.title}
        </Link>
      )
    })
  )
}
