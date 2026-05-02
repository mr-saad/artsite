import Section from "@/components/ui/section";
import Link from "next/link";

export default function PrivacyPolicy() {
	return (
		<Section>
			{/* Header Section */}
			<header className="mb-12 md:mb-16">
				<h1 className="text-4xl text-black dark:text-white md:text-5xl font-extrabold tracking-tight">
					Privacy Policy
				</h1>
				<p className=" text-gray-500 font-medium uppercase tracking-wide">
					Last Updated: May 2026
				</p>
			</header>

			{/* Main Content Area using Tailwind Typography (prose) */}
			<article className="prose mx-auto max-w-none">
				<p>
					At ArtSite, we are committed to protecting your privacy and
					ensuring that your personal information is handled safely
					and responsibly. This Privacy Policy outlines how we
					collect, use, and safeguard your data when you visit our
					website or make a purchase.
				</p>

				<h2>1. Information We Collect</h2>
				<p>
					To provide you with our handcrafted art and a seamless
					shopping experience, we collect the following types of
					information:
				</p>
				<ul>
					<li>
						<strong>Personal Identification Information:</strong>{" "}
						When you place an order or contact us, we collect your
						name, email address, phone number, and shipping address.
					</li>
					<li>
						<strong>Payment Information (UPI Only):</strong> ArtSite
						exclusively processes payments through the Unified
						Payments Interface (UPI). Because of this,{" "}
						<strong>
							we do not collect, process, or store credit card
							numbers, debit card details, or bank routing
							information on our servers.
						</strong>{" "}
						We only collect your UPI ID (Virtual Payment Address)
						and the transaction reference number to verify and
						fulfill your order securely.
					</li>
					<li>
						<strong>Device and Browsing Data:</strong> We
						automatically collect standard analytical data, such as
						your IP address, browser type, and time spent on the
						site, to help us improve our website's functionality.
					</li>
				</ul>

				<h2>2. A Note on Website Imagery and Product Displays</h2>
				<p>
					While browsing our site, your device downloads image data to
					display our collections. In the interest of full
					transparency regarding how our digital content represents
					our physical products, please be aware that{" "}
					<strong>
						slight differences in colors and textures may occur
					</strong>
					.
				</p>
				<p>
					Due to varying screen calibrations, lighting conditions, and
					the inherently unique, handcrafted nature of our mud work,
					canvases, and ceramics, the physical piece you receive may
					vary slightly from its digital representation. By using our
					site and placing an order, you acknowledge and understand
					these natural artisanal variations.
				</p>

				<h2>3. How We Use Your Information</h2>
				<p>
					We use the information we collect strictly for the following
					business purposes:
				</p>
				<ul>
					<li>
						To process, verify, and fulfill your orders (including
						bespoke commissions).
					</li>
					<li>
						To communicate with you regarding order updates,
						shipping delays, or customer support inquiries.
					</li>
					<li>
						To coordinate with our shipping and logistics partners
						to deliver your art safely to your door.
					</li>
					<li>
						To improve our website layout, product offerings, and
						overall customer experience.
					</li>
				</ul>

				<h2>4. Sharing Your Information</h2>
				<p>
					ArtSite respects your privacy. We do not sell, rent, or
					trade your personal information to third-party marketers. We
					only share your data with trusted third parties under the
					following circumstances:
				</p>
				<ul>
					<li>
						<strong>Logistics Partners:</strong> We must share your
						name, shipping address, and phone number with our
						courier services to ensure the delivery of your physical
						products.
					</li>
					<li>
						<strong>Legal Compliance:</strong> We may disclose your
						information if required to do so by law, or if we
						believe such action is necessary to comply with legal
						proceedings or protect the rights and safety of ArtSite
						and our users.
					</li>
				</ul>

				<h2>5. Data Security</h2>
				<p>
					We implement standard security measures to protect your
					personal information against unauthorized access,
					alteration, or disclosure. While no internet transmission is
					100% secure, we strive to use commercially acceptable means
					to protect your personal data, particularly regarding your
					UPI transaction references.
				</p>

				<h2>6. Your Rights</h2>
				<p>
					You have the right to access, correct, or request the
					deletion of the personal information we hold about you. If
					you wish to update your shipping details or request that we
					remove your contact information from our active records
					after an order is completed, please reach out to our studio.
				</p>

				<h2>7. Changes to This Policy</h2>
				<p>
					We may update this Privacy Policy periodically to reflect
					changes in our practices, technologies, or legal
					requirements. We encourage you to review this page
					occasionally. Your continued use of ArtSite after any
					modifications indicates your acceptance of the updated
					policy.
				</p>

				<hr className="my-12" />

				<h2>Contact Us</h2>
				<p>
					If you have any questions, concerns, or requests regarding
					this Privacy Policy or how your data is handled, please do
					not hesitate to contact us.
				</p>
				<p>
					<Link
						href="/contact"
						className="font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors"
					>
						Reach out via our Contact Page
					</Link>
				</p>
			</article>
		</Section>
	);
}
