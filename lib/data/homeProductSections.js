// import {
//   handPaintedTerracotta,
//   lippanArtMirrorWork,
//   naturePaintings,
//   oversizedWallCanvas,
//   vintagePorcelainPlates,
// } from "@/lib/data/products"

import { globalProducts } from "./products";

const sections = [
"nature-paintings",
"vintage-porcelain-plates",
"lippan-art-mirror-work",
"oversized-wall-canvas",
"hand-painted-terracotta",
];

export const productSections = sections.map(sec=>({
  title:sec.split("-").map(c=> c[0].toUpperCase()+c.slice(1)).join(" "),
  // desc: globalProducts.filter(prod=>prod.category.endsWith(sec)).description,
  products: globalProducts.filter(prod=>prod.category.endsWith(sec))
})
)

// [
//   {
//     title: "Nature Paintings",
//     desc: "Bring the serene and vibrant beauty of the outdoors into your living space.",
//     products: naturePaintings,
//   },
//   {
//     title: "Vintage Porcelain Plates",
//     desc: "Elegant and timeless ceramic plates featuring classic motifs and historic charm.",
//     products: vintagePorcelainPlates,
//   },
//   {
//     title: "Mud & Mirror Art",
//     desc: "Traditional Kutch mud relief panels adorned with reflective mirrors for an earthy aesthetic.",
//     products: lippanArtMirrorWork,
//   },
//   {
//     title: "Oversized Wall Canvas",
//     desc: "Make a bold statement with massive, textured canvases and sweeping abstract designs.",
//     products: oversizedWallCanvas,
//   },
//   {
//     title: "Hand-Painted Terracotta Pots",
//     desc: "Artisanal clay planters featuring vibrant patterns and organic rustic charm.",
//     products: handPaintedTerracotta,
//   },
// ]
