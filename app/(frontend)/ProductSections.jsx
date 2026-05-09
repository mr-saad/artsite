import { getGlobal } from "@/lib/server/getData"
import ProductSwiper from "@/components/ProductSwiper"
import Section from "@/components/ui/section"

export default async function ProductSections() {
  const gb = await getGlobal({ slug: "featuredSections" })
  if (!gb.sections)
    return (
      <p className="text-2xl text-red-600 p-5 bg-white">
        Error: Cannot find Sections
      </p>
    )
  return (
    gb?.sections.length > 0 &&
    gb?.sections.map((section) => {
      return (
        <Section key={section.category.slug}>
          <div className="text-center">
            <h3 className="text-3xl text-balance font-serif mb-5">
              {section.category.title}
            </h3>
          </div>
          <ProductSwiper products={section.products} />
        </Section>
      )
    })
  )
}
