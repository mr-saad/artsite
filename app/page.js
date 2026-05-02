import BackToTop from "@/components/BackToTop";
import ProductSection from "@/components/ProductSection";
import ReviewsSection from "@/components/ReviewsSection";
import { productSections } from "@/lib/data/homeProductSections";
import { categories } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      <div className="mb-10 h-[80vh] relative isolate">
        <div className="absolute bg-black/60 w-full h-full grid sm:grid-cols-2 md:grid-cols-3">
          {categories.map((ct) => {
            return (
              <Link
                className="block font-serif text-3xl transition p-5 outline text-white hover:text-black hover:bg-zinc-100 focus-visible:text-black focus-visible:bg-zinc-100"
                key={ct.id}
                href={ct.baseRoute}
              >
                {ct.title}
              </Link>
            );
          })}
        </div>
        <Image
          alt="ArtSite Banner Image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover aspect-video"
          src="https://dessineart.com/cdn/shop/files/DA_Banner_4.jpg"
        />
      </div>

      {productSections.map((sec) => {
        return <ProductSection key={sec.title} {...sec} />;
      })}
      <ReviewsSection />
    </>
  );
}
