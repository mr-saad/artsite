export default async function CategoryPage({params}){
	const {category} = await params
	return (<section className="container mx-auto p-5">
			<p>Category: {category.join("/")}</p>
		</section>)
}