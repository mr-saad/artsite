import Section from "@/components/ui/section";
import Link from "next/link";

export default function NotFound() {
	return (
		<Section>
			<p className="text-xl">404 Not Found</p>
			<p>
				<Link href="/">Go back Home</Link>
			</p>
		</Section>
	);
}
