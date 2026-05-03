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
import Link from "next/link";

export default function CartBtn() {
	const cart = useCart((state) => state.items);
	const total = cart.reduce((prev, curr) => prev + curr.discountedPrice, 0);

	return (
		<Sheet>
			<SheetTrigger>
				<div className="cursor-pointer relative transition hover:text-black dark:hover:text-white">
					{cart.length > 0 && (
						<span className="absolute text-xs rounded-full -top-3 -right-3  text-white bg-zinc-950 w-5 h-5 flex items-center justify-center">
							{cart.length}
						</span>
					)}
					<HugeiconsIcon icon={ShoppingBag02Icon} />
				</div>
			</SheetTrigger>
			<SheetContent
				showCloseButton={false}
				className={"grid grid-rows-[auto_1fr_auto]"}
			>
				<SheetHeader className={"text-3xl"}>Your Cart</SheetHeader>
				<div className="p-5 overflow-y-auto">
					{cart.length ? (
						cart.map((item) => {
							return (
								<div
									key={item.id}
									className="flex justify-between gap-2 mb-3"
								>
									<div className="flex items-center gap-2">
										<Image
											src={item.image}
											alt={item.title}
											width={50}
											height={50}
											className="object-cover aspect-square rounded-md"
										/>
										<div>
											<SheetClose
												nativeButton={false}
												render={
													<Link
														href={"/p/" + item.slug}
														className="font-serif text-base"
													>
														{item.title}
													</Link>
												}
											/>
											<p className="text-black dark:text-white">
												₹{item.discountedPrice}
											</p>
										</div>
									</div>
									<Button
										variant="destructive"
										onClick={() => remove(item.id)}
									>
										<HugeiconsIcon
											className="size-4"
											icon={Delete}
										/>
									</Button>
								</div>
							);
						})
					) : (
						<p>Empty</p>
					)}
				</div>
				<SheetFooter>
					<div className="border-t py-3">
						<p className="text-xl text-black dark:text-white">
							Total: ₹{total}
						</p>
					</div>
					<SheetClose
						render={<Button variant="outline">Close</Button>}
					/>
					<SheetClose render={<Button>Checkout</Button>} />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
