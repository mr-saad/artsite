import Section from "@/components/ui/section";
import Link from "next/link";

export default function TermsService() {
	return (
		<Section>
			{/* Header Section */}
			<header className="mb-12 md:mb-16">
				<h1 className="text-4xl text-black dark:text-white md:text-5xl font-extrabold tracking-tight">
					Terms of Service
				</h1>
				<p className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wide">
					Last Updated: May 2026
				</p>
			</header>

			{/* Main Content Area using Tailwind Typography (prose) */}
			<article className="prose  mx-auto max-w-none">
				<p>
					Welcome to ArtSite. These Terms of Service
					(&quot;Terms&quot;) govern your use of our website and the
					purchase of our products. By accessing our site or placing
					an order, you agree to be bound by these Terms. Please read
					them carefully.
				</p>

				<h2>1. Handcrafted Nature of Our Products</h2>
				<p>
					ArtSite prides itself on offering authentic, handcrafted art
					pieces. Because our items—including mud work, terracotta
					pots, original canvases, and ceramic plates—are created by
					human hands using natural materials, inherent variations
					will occur.
				</p>
				<ul>
					<li>
						<strong>Color Variations:</strong> Please be aware that
						slight differences in color may occur between the
						physical product and what is displayed on your screen.
						Factors such as screen calibration, lighting during
						photography, and the natural variations in paints,
						glazes, and mud all contribute to these differences. By
						purchasing, you acknowledge and accept that these minor
						variations are part of the unique character of
						handcrafted art.
					</li>
					<li>
						<strong>Texture and Form:</strong> Minor imperfections,
						slight asymmetrical forms, and textural differences are
						not considered defects; they are the hallmarks of
						artisanal craftsmanship.
					</li>
				</ul>

				<h2>2. Pricing and Payments</h2>
				<p>
					All prices displayed on the website are final and inclusive
					of applicable taxes unless stated otherwise. Shipping costs
					will be calculated at checkout.
				</p>
				<h3>Accepted Payment Methods</h3>
				<p>
					Currently, ArtSite exclusively processes payments through{" "}
					<strong>UPI (Unified Payments Interface)</strong>.
				</p>
				<ul>
					<li>
						Upon checkout, you will be provided with our UPI details
						(VPA or QR Code) to complete your transaction.
					</li>
					<li>
						Orders are only confirmed and processed <em>after</em>{" "}
						the UPI payment has been successfully received and
						verified by our team.
					</li>
					<li>
						Please ensure you use the exact order reference number
						provided during your UPI transfer to avoid delays in
						processing.
					</li>
				</ul>

				<h2>3. Custom Commissions</h2>
				<p>
					If you are purchasing a custom piece (such as a Custom
					Portrait Plate), the following terms apply:
				</p>
				<ul>
					<li>
						A non-refundable advance payment via UPI is required
						before work begins.
					</li>
					<li>
						Given the personalized nature of these items, custom
						commissions cannot be cancelled, returned, or refunded
						once production has started, except in cases of damage
						during transit.
					</li>
					<li>
						Estimated completion times for custom work are
						approximations and may vary depending on the complexity
						of the piece.
					</li>
				</ul>

				<h2>4. Shipping and Delivery</h2>
				<p>
					We take the utmost care in packaging our delicate items.
					However, once a package is handed over to our shipping
					partners, we are not liable for unexpected delays caused by
					weather, logistical issues, or other factors outside our
					control.
				</p>
				<p>
					For comprehensive details on how we handle shipping, damaged
					items, and timelines, please review our full{" "}
					<Link href="/shipping">Shipping Policy</Link>.
				</p>

				<h2>5. Returns and Exchanges</h2>
				<p>
					Due to the fragile and bespoke nature of our art, we accept
					returns only in specific circumstances:
				</p>
				<ul>
					<li>
						If an item arrives demonstrably damaged or broken, you
						must contact us within 48 hours of delivery with
						photographic evidence.
					</li>
					<li>
						We do not offer returns or exchanges for "change of
						mind" or for the slight color/textural variations
						mentioned in Section 1.
					</li>
				</ul>

				<h2>6. Intellectual Property</h2>
				<p>
					All content on this website, including but not limited to
					product designs, images, text, logos, and graphics, is the
					intellectual property of ArtSite. You may not reproduce,
					distribute, or use our intellectual property for commercial
					purposes without our explicit written consent.
				</p>

				<h2>7. Limitation of Liability</h2>
				<p>
					ArtSite shall not be liable for any direct, indirect,
					incidental, or consequential damages resulting from the use
					or inability to use our products or website. Our liability
					is strictly limited to the purchase price of the item in
					question.
				</p>

				<h2>8. Changes to These Terms</h2>
				<p>
					We reserve the right to update or modify these Terms of
					Service at any time without prior notice. Any changes will
					be effective immediately upon posting to this page. Your
					continued use of the website following any changes
					constitutes your acceptance of the new Terms.
				</p>

				<hr className="my-12" />

				<h2>Contact Information</h2>
				<p>
					If you have any questions or concerns regarding these Terms
					of Service, please reach out to us.
				</p>
				<p>
					<Link
						href="/contact"
						className="font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
					>
						Contact our Studio Support
					</Link>
				</p>
			</article>
		</Section>
	);
}
