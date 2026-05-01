import { cn } from "@/lib/utils";

export default function ProductGrid ({children,className}){
	return <div className={cn("grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4", className)}>
		{children}
	</div>
}