import ImgSwiper from "@/components/ImgSwiper";
import ProductDetails from "@/components/ProductDetails";
import { globalProducts, productsMap } from "@/lib/data/products";
import { notFound } from "next/navigation";

export async function generateStaticParams(){
	// console.log(globalProducts.map(p=>({slug:p.slug})))
	return globalProducts.map(p=>({slug:p.slug}))
}

export default async function SlugPage({ params }) {
	const { slug } = await params;

	const prod = productsMap[slug]
	if (!prod) return notFound();

	return (
		<section className="container mx-auto p-5">
			<div className="grid sm:grid-cols-2 gap-5">
				<ImgSwiper imgs={Array(5).fill("https://dessineart.com/cdn/shop/files/Image-1-Quantum-Waves.jpg")} title={prod.title} />
				<ProductDetails {...prod} />
			</div>
		</section>
	);
}
