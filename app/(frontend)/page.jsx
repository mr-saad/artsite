import BackToTop from "@/components/BackToTop"
import ReviewsSection from "@/components/ReviewsSection"
import Image from "next/image"
import { Suspense } from "react"
import ProductSections from "./ProductSections"
import CategoriesSection from "./CategoriesSection"
import HomeSections from "@/components/skeletons/HomeSections"
import Hero from "./Hero"

export default function Home() {
  return (
    <>
      <section className="relative isolate">
        <div className="heroPattern absolute w-full h-full -z-1"></div>
        <div className="container p-5 mx-auto min-h-[80vh] flex items-center justify-center">
          <Hero />
        </div>
      </section>

      <div className="mb-10 h-[80vh] relative isolate">
        <div className="absolute bg-black/60 w-full h-full grid sm:grid-cols-2 md:grid-cols-3">
          <Suspense fallback={null}>
            <CategoriesSection />
          </Suspense>
        </div>
        <Image
          alt="ArtSite Banner Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover aspect-video"
          src="https://dessineart.com/cdn/shop/files/DA_Banner_4.jpg"
        />
      </div>

      <Suspense fallback={<HomeSections />}>
        <ProductSections />
      </Suspense>
      <ReviewsSection />
    </>
  )
}
