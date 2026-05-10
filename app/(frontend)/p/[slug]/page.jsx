import ImgSwiper from "@/components/ImgSwiper"
import Product from "@/components/Product"
import ProductDetails from "@/components/ProductDetails"
import ProductGrid from "@/components/ui/product-grid"
import Section from "@/components/ui/section"
import { payload } from "@/lib/server/payload"
import { cacheLife } from "next/cache"
import { notFound } from "next/navigation"

const getProducts = async (filter) => {
  "use cache"
  cacheLife("minutes")
  const { docs } = await payload.find({
    collection: "products",
    pagination: false,
    ...filter,
  })
  return docs
}

export async function generateStaticParams() {
  const products = await getProducts({ select: { slug: true } })
  return products.map((p) => ({ slug: p.slug }))
}

export default async function SlugPage({ params }) {
  const { slug } = await params

  const prod = await getProducts({
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const product = prod[0]
  if (!product) return notFound()

  console.log(product)

  const similars = await getProducts({
    where: {
      and: [
        { categories: { in: product.categories.map((c) => c.id) } },
        { id: { not_equals: product.id } },
      ],
    },
    limit: 4,
  })

  const mayLike = await getProducts({
    limit: 4,
  })

  return (
    <Section>
      <div className="grid sm:grid-cols-2 gap-5">
        <ImgSwiper
          imgs={
            product.images.length > 0
              ? product.images
              : Array(5).fill({
                  image: {
                    url: "https://dessineart.com/cdn/shop/files/Image-1-Quantum-Waves.jpg",
                    alt: "Image-1-Quantum-Waves",
                  },
                })
          }
          title={product.title}
        />
        <ProductDetails {...product} />
      </div>
      {similars.length > 0 && (
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
      )}
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
