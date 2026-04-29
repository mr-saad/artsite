import ProductSwiper from "./ProductSwiper"

export default function ProductSection({ title, desc, products }) {
  return (
    <section className="container mx-auto p-5">
      <div className="text-center">
        <h3 className="text-3xl text-balance font-serif">{title}</h3>
        <p>{desc}</p>
      </div>
      {/* <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
      <ProductSwiper products={products} />
      {/* </div> */}
    </section>
  )
}
