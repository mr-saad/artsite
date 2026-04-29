import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete, ShoppingBag02Icon } from "@hugeicons/core-free-icons";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from "./ui/sheet";
import { remove, useCart } from "@/lib/store/useCart";
import Image from "next/image";

export default function CartBtn() {
	const cart = useCart((state) => state.items);
	const total = cart.reduce((prev, item) => prev + item.discountedPrice, 0);

	return (
		<Sheet>
			<SheetTrigger>
				<div className="cursor-pointer relative transition hover:text-black dark:hover:text-white">
					{cart.length>0&&<span className="absolute text-xs rounded-full -top-3 -right-3  text-white bg-zinc-950 w-5 h-5 flex items-center justify-center">
											{cart.length}
										</span>}
					<HugeiconsIcon icon={ShoppingBag02Icon} />
				</div>
			</SheetTrigger>
			<SheetContent showCloseButton={false}>
				<SheetHeader className={"text-3xl"}>Your Cart</SheetHeader>
				<div className="p-5">
					{cart.length ? (
						cart.map((item) => {
							return (
								<div
									key={item.id}
									className="flex justify-between items-center gap-2"
								>
									<div className="flex items-center gap-2">
										<Image
											src={item.image}
											alt={item.title}
											width={50}
											height={50}
											className="object-cover aspect-square rounded-md"
										/>
										<p className="font-serif text-base">
											{item.title}
										</p>
									</div>
									<Button
										variant="ghost"
										onClick={() => remove(item.id)}
									>
										<HugeiconsIcon icon={Delete} />
									</Button>
								</div>
							);
						})
					) : (
						<p>Empty</p>
					)}
				</div>
				<SheetFooter>
					<SheetClose
						render={<Button variant="outline">Close</Button>}
					/>
					<SheetClose render={<Button>Checkout</Button>} />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
