import Product from "@/components/Product"
import ProductGrid from "@/components/ui/product-grid"
import Section from "@/components/ui/section"
import { getCategoryData, getProductsByPath } from "@/lib/categoryHelpers"
import { getProducts } from "@/lib/server/getProducts"
import { notFound } from "next/navigation"

export default async function CategoryPage({ params }) {
  const { category } = await params

  const targetCt = await getProducts({
    collection: "categories",
    where: { slug: { equals: category.at(-1) } },
    limit: 1,
  })

  //   const ctInfo = getCategoryData(category)
  if (!targetCt.length) return notFound()

  const products = await getProducts({
    where: { categories: { contains: targetCt[0].id } },
  })
  //   console.log(products)
  // getProductsByPath(ctInfo.searchPath)

  return (
    <Section className="grid gap-5 md:grid-cols-[1fr_3fr]">
      <aside className="bg-white md:sticky top-21.5 p-5 max-h-[50vh]">
        <p className="capitalize">
          Viewing {products.length} {category.join(" / ")}
        </p>
      </aside>
      {products.length > 0 ? (
        <ProductGrid>
          {products.map((p) => {
            return <Product key={p.id} {...p} />
          })}
        </ProductGrid>
      ) : (
        <p>No Products Found</p>
      )}
    </Section>
  )
}
