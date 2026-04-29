import { notFound } from "next/navigation"

export default async function SlugPage({params}){
	const {slug,category} = await params


	return <section className='container mx-auto'>
		<h1 className="text-2xl">Category: {category}</h1>
		<h1 className="text-2xl">Product: {slug[0]}</h1>
	</section>
}