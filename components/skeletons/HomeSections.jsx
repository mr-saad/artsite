import ProductGrid from "../ui/product-grid"
import Section from "../ui/section"

export default function HomeSections() {
  return (
    <>
      <Section>
        <div className="animate-pulse bg-zinc-300 h-10 mb-5"></div>
        <ProductGrid className={"min-h-[50vh]"}>
          {Array(4)
            .fill("")
            .map((item, index) => (
              <div key={index} className="animate-pulse bg-zinc-300"></div>
            ))}
        </ProductGrid>
      </Section>
      <Section>
        <div className="animate-pulse bg-zinc-300 h-10 mb-5"></div>
        <ProductGrid className={"min-h-[50vh]"}>
          {Array(4)
            .fill("")
            .map((item, index) => (
              <div key={index} className="animate-pulse bg-zinc-300"></div>
            ))}
        </ProductGrid>
      </Section>
    </>
  )
}
