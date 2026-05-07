import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Section from "@/components/ui/section";
import Link from "next/link";

export default function Contact() {
	return (
		<Section>
			{/* Header Section */}
			<header className="mb-16 md:mb-24 text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl text-black dark:text-white font-extrabold tracking-tight ">
					Get in Touch
				</h1>
				<p className="text-lg font-medium max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400">
					Whether you have a question about a specific piece, need
					help with an order, or want to discuss a custom commission,
					we are here to help.
				</p>
			</header>

			<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
				{/* Left Column: Contact Form */}
				<section>
					<form className="space-y-6">
						<FieldGroup className="grid sm:grid-cols-2 gap-6">
							<Field>
								<FieldLabel
									htmlFor="firstName"
									className="uppercase tracking-wider"
								>
									First Name
								</FieldLabel>
								<Input
									type="text"
									id="firstName"
									name="firstName"
									required
								/>
							</Field>
							<Field>
								<FieldLabel
									htmlFor="lastName"
									className="uppercase tracking-wider"
								>
									Last Name
								</FieldLabel>
								<Input
									type="text"
									id="lastName"
									name="lastName"
									required
								/>
							</Field>
						</FieldGroup>

						<Field>
							<FieldLabel
								htmlFor="email"
								className="uppercase tracking-wider"
							>
								Email Address
							</FieldLabel>
							<Input
								type="email"
								id="email"
								name="email"
								required
							/>
						</Field>

						<Field>
							<FieldLabel
								htmlFor="subject"
								className="uppercase tracking-wider"
							>
								Subject
							</FieldLabel>
							<select
								id="subject"
								name="subject"
								className="w-full transition min-w-0 cursor-pointer rounded-md border border-input bg-input/20 px-2 py-0.5"
							>
								<option value="general">General Inquiry</option>
								<option value="order">
									Order Status / Issue
								</option>
								<option value="commission">
									Custom Commission
								</option>
								<option value="press">
									Press / Collaborations
								</option>
							</select>
						</Field>

						<Field>
							<FieldLabel
								htmlFor="message"
								className="uppercase tracking-wider"
							>
								Message
							</FieldLabel>
							<textarea
								id="message"
								name="message"
								rows="6"
								className="w-full resize-y transition min-w-0 rounded-md border border-input bg-input/20 px-2 py-0.5 focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/3"
								required
							></textarea>
						</Field>

						<Button size="lg" type="submit">
							Send Message
						</Button>
					</form>
				</section>

				{/* Right Column: Contact Info & FAQ via Prose */}
				<section className="prose ">
					<h2>Direct Contact</h2>
					<p>
						If you prefer to email us directly rather than using the
						form, you can reach our studio at:
					</p>
					<p className="font-semibold">
						<a
							href="mailto:studio@artsite.com"
							className="no-underline hover:underline"
						>
							studio@artsite.com
						</a>
					</p>
					<p>
						We aim to respond to all inquiries within 24 to 48 hours
						during our regular business hours (Monday through
						Friday, 9am - 5pm EST).
					</p>

					<hr className="my-10" />

					<h2>Studio Details</h2>
					<p>
						While we operate primarily online to bring our art
						directly to your door, our creative roots and main
						studio are located in the heart of the arts district.
					</p>
					<ul>
						<li>
							<strong>Location:</strong> The Arts District, Kutch
							Region
						</li>
						<li>
							<strong>Visits:</strong> Currently by appointment
							only for bespoke commissions.
						</li>
					</ul>

					<hr className="my-10" />

					<h2>Frequent Inquiries</h2>
					<h3>Do you accept custom commissions?</h3>
					<p>
						Yes. We frequently work with clients and interior
						designers to create bespoke canvases, mud work panels,
						and custom portrait plates. Please select &quot;Custom
						Commission&quot; in the subject line of the contact form
						to begin the conversation.
					</p>

					<h3>Shipping & Returns</h3>
					<p>
						For detailed information on how we carefully package our
						delicate ceramics and oversized canvases, please review
						our full <Link href="/shipping">Shipping Policy</Link>.
					</p>
				</section>
			</div>
		</Section>
	);
}
