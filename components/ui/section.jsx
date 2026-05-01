import { cn } from "@/lib/utils";

export default function Section ({children, className, parentClassName}){
	return <section className={cn("p-5",parentClassName)}>
		<div className={cn("container mx-auto", className)}>{children}</div>
	</section>
}