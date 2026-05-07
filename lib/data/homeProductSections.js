import { globalProducts } from "./products"

const sections = [
  "nature-paintings",
  "vintage-porcelain-plates",
  "lippan-art-mirror-work",
  "oversized-wall-canvas",
  "hand-painted-terracotta",
]

export const productSections = sections.map((sec) => {
  return {
    title: sec
      .split("-")
      .map((c) => c[0].toUpperCase() + c.slice(1))
      .join(" "),
    // desc: globalProducts.filter(prod=>prod.category.endsWith(sec)).description,
    products: globalProducts.filter((prod) => prod.category.endsWith(sec)),
  }
})
