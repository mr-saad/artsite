import ImgSwiper from "@/components/ImgSwiper"
import Product from "@/components/Product"
import ProductDetails from "@/components/ProductDetails"
import ProductGrid from "@/components/ui/product-grid"
import Section from "@/components/ui/section"
// import { globalProducts, productsMap } from "@/lib/data/products"
import { getProducts } from "@/lib/server/getProducts"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const products = await getProducts({ select: { slug: true } })
  return products.map((p) => ({ slug: p.slug }))
}

// const getMayLikes = (products) =>
//   products
//     .map((p, i, arr) => arr[Math.floor(Math.random() * arr.length)])
//     .slice(0, 4)

export default async function SlugPage({ params }) {
  const { slug } = await params

  const prod = await getProducts({
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const product = prod[0]
  if (!product) return notFound()
  // productsMap[slug]

  // console.log(product)

  //   const products = await getProducts()

  const similars = await getProducts({
    where: {
      and: [
        { categories: { in: product.categories.map((c) => c.id) } },
        { id: { not_equals: product.id } },
      ],
    },
    limit: 4,
  })

  // .filter((p) => p.category.endsWith(product.category))
  // .slice(0, 4)

  const mayLike = await getProducts({
    limit: 4,
  })

  return (
    <Section>
      <div className="grid sm:grid-cols-2 gap-5">
        <ImgSwiper
          imgs={
            product.images.length > 0
              ? product.images.length
              : Array(5).fill({
                  url: "https://dessineart.com/cdn/shop/files/Image-1-Quantum-Waves.jpg",
                  alt: "Image-1-Quantum-Waves",
                })
          }
          title={product.title}
        />
        <ProductDetails {...product} />
      </div>
      <div className="my-10">
        <h2 className="text-center mb-5 text-2xl text-black dark:text-white">
          Similar to {product.title}
        </h2>
        <ProductGrid>
          {similars.map((smlr) => {
            return <Product {...smlr} key={smlr.id} />
          })}
        </ProductGrid>
      </div>
      <div className="my-10">
        <h2 className="text-center mb-5 text-2xl text-black dark:text-white">
          You May Also Like
        </h2>
        <ProductGrid>
          {mayLike.map((ml) => {
            return <Product {...ml} key={ml.id} />
          })}
        </ProductGrid>
      </div>
    </Section>
  )
}
