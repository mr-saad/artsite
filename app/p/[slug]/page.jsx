import ImgSwiper from "@/components/ImgSwiper";
import Product from "@/components/Product";
import ProductDetails from "@/components/ProductDetails";
import ProductGrid from "@/components/ui/product-grid";
import Section from "@/components/ui/section";
import { globalProducts, productsMap } from "@/lib/data/products";
import { notFound } from "next/navigation";
import { useMemo } from "react";

export async function generateStaticParams() {
	return globalProducts.map((p) => ({ slug: p.slug }));
}

const getMayLikes = () =>
	globalProducts
		.map((p, i, arr) => arr[Math.floor(Math.random() * arr.length)])
		.slice(0, 4);

export default async function SlugPage({ params }) {
	const { slug } = await params;

	const prod = productsMap[slug];
	if (!prod) return notFound();

	const similars = globalProducts
		.filter((p) => p.category.endsWith(prod.category))
		.slice(0, 4);

	const mayLike = getMayLikes();
	console.log(mayLike);

	return (
		<Section>
			<div className="grid sm:grid-cols-2 gap-5">
				<ImgSwiper
					imgs={
						prod.images
						// Array(5).fill(
						// "https://dessineart.com/cdn/shop/files/Image-1-Quantum-Waves.jpg",
						// )
					}
					title={prod.title}
				/>
				<ProductDetails {...prod} />
			</div>
			<div className="my-10">
				<h2 className="text-center mb-5 text-2xl text-black dark:text-white">
					Similar to {prod.title}
				</h2>
				<ProductGrid>
					{similars.map((ml) => {
						return <Product {...ml} key={ml.id} />;
					})}
				</ProductGrid>
			</div>
			<div className="my-10">
				<h2 className="text-center mb-5 text-2xl text-black dark:text-white">
					You May Also Like
				</h2>
				<ProductGrid>
					{mayLike.map((ml) => {
						return <Product {...ml} key={ml.id} />;
					})}
				</ProductGrid>
			</div>
		</Section>
	);
}
