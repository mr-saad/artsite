import ProductGrid from "@/components/ui/product-grid"
import Section from "@/components/ui/section"

export default function Loading() {
  return (
    <Section>
      <div className="grid sm:grid-cols-2 gap-5 min-h-[80vh]">
        <div className="bg-zinc-300 animate-pulse"></div>
        <div className="bg-zinc-300 animate-pulse"></div>
      </div>
      <ProductGrid className="my-10 min-h-[50vh]">
        {Array(4)
          .fill("")
          .map((item, index) => (
            <div key={index} className="bg-zinc-300 animate-pulse"></div>
          ))}
      </ProductGrid>
      <ProductGrid className="my-10 min-h-[50vh]">
        {Array(4)
          .fill("")
          .map((item, index) => (
            <div key={index} className="bg-zinc-300 animate-pulse"></div>
          ))}
      </ProductGrid>
    </Section>
  )
}
