import BackToTop from "@/components/BackToTop"
import ProductSection from "@/components/ProductSection"
import { productSections } from "@/lib/data/homeProductSections"

export default function Home() {
  // console.log(productSections)
  return (
    <>
      <BackToTop />
      <section className="relative isolate">
        <div className="heroPattern absolute w-full h-full -z-1"></div>
        <div className="container p-5 mx-auto min-h-[80vh] flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h1 className="sm:text-7xl text-5xl tracking-tight font-black text-black dark:text-white">
              Bring the Earth Indoors
            </h1>
            <p className="mb-2">Canvas, Clay and Culture.</p>
            <p>
              Make a definitive statement in your living space. Discover
              oversized mixed-media canvases, heavily textured palette knife art
              and custom portrait plates that turn everyday empty walls into
              extraordinary visual experiences.
            </p>
          </div>
        </div>
      </section>


      {productSections.map((sec) => {
              return <ProductSection key={sec.title} {...sec} />
      })}

    </>
  )
}
