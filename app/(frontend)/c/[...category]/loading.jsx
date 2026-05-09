import ProductGrid from "@/components/ui/product-grid"
import Section from "@/components/ui/section"

export default function Loading() {
  return (
    <Section className="grid gap-5 md:grid-cols-[1fr_3fr]">
      <div className="animate-pulse bg-zinc-300 text-transparent p-5 self-start">
        Viewing 30 pots
      </div>
      <ProductGrid className="min-h-[80vh]">
        {Array(8)
          .fill("")
          .map((item, index) => (
            <div key={index} className=" animate-pulse bg-zinc-300"></div>
          ))}
      </ProductGrid>
    </Section>
  )
}
