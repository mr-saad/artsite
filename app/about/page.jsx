import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import Link from "next/link";

export default function About() {
	return (
		<Section>
			<header className="mb-16 md:mb-24 text-center">
				<h1 className="text-4xl text-black dark:text-white md:text-5xl lg:text-6xl font-extrabold tracking-tight">
					The Art of Making
				</h1>
				<p className="text-lg font-medium max-w-2xl mx-auto leading-relaxed">
					Crafting spaces that inspire. From traditional mud work to
					expansive contemporary canvases, we believe in the
					transformative power of tactile art.
				</p>
			</header>

			{/* Main Content Area using Tailwind Typography (prose) */}
			<article className="prose mx-auto">
				<h2>Our Story</h2>
				<p>
					What began as a quiet exploration of traditional Kutch
					techniques has evolved into a curated collection of diverse
					artistic expressions. ArtSite was founded on the belief that
					the environment we inhabit shapes the way we think and feel.
					We set out to create pieces that do more than decorate; we
					aim to create art that resonates.
				</p>

				<p>
					We source, craft, and curate pieces across multiple
					disciplines, whether it&apos;s the meticulous
					mirror-placement of our <strong>Lippan Art</strong> panels,
					the broad, energetic strokes of an oversized{" "}
					<strong>Acrylic Canvas</strong>, or the quiet elegance of{" "}
					<strong>Vintage Porcelain</strong>. Every piece is an
					invitation to pause and appreciate the details.
				</p>

				<hr className="my-12" />

				<h2>The Process</h2>
				<p>
					Authenticity is at the core of our practice. We honor the
					heritage of traditional crafts while embracing the freedom
					of modern abstract expressionism.
				</p>

				<ul>
					<li>
						<strong>Tactile Heritage:</strong> Our mud work and
						terracotta pieces are crafted using methods passed down
						through generations, ensuring every ridge and texture
						tells a story of human touch.
					</li>
					<li>
						<strong>Modern Statements:</strong> Our gallery canvases
						are designed to anchor a room, utilizing high-quality
						pigments, thick impasto techniques, and bold
						compositions.
					</li>
					<li>
						<strong>Curated Elegance:</strong> For our plate
						collections and pots, we seek out unique firing
						techniques, intricate glazes, and timeless motifs that
						bring a worldly sophistication to any shelf or wall.
					</li>
				</ul>

				<h2>Why We Create</h2>
				<p>
					In an increasingly digital world, we crave the analog. We
					crave texture, history, and the unmistakable mark of the
					maker's hand. Our mission is to bridge the gap between
					traditional artisanship and contemporary interior design,
					providing you with pieces that turn a house into a
					sanctuary.
				</p>

				<blockquote>
					&quot;Art is not what you see, but what you make others
					see.&quot; — Edgar Degas
				</blockquote>
			</article>

			{/* Call to Action */}
			<div className="mt-20 md:mt-32 text-center border-t pt-16">
				<h3 className="text-2xl md:text-3xl font-bold mb-6">
					Explore the Collections
				</h3>
				<p className="mb-8 max-w-lg mx-auto text-lg leading-relaxed">
					Discover the textures, colors, and stories waiting to become
					part of your home.
				</p>
				<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
					<Button
						nativeButton={false}
						size="lg"
						render={<Link href="/c/canvas">View Canvas Arts</Link>}
					/>

					<Button
						nativeButton={false}
						size="lg"
						render={
							<Link href="/c/mud-work">Discover Mud Work</Link>
						}
					/>
				</div>
			</div>
		</Section>
	);
}
