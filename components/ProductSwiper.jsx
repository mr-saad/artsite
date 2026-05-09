import "swiper/css"
import "swiper/css/pagination"
import Product from "./Product"
import ProductGrid from "./ui/product-grid"

export default function ProductSwiper({ products }) {
  return (
    <ProductGrid>
      {products.map((prod) => {
        return <Product key={prod.slug} {...prod} />
      })}
    </ProductGrid>
  )
}
