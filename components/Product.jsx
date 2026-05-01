'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ShoppingBagAddIcon,
  ShoppingBagRemoveIcon,
} from "@hugeicons/core-free-icons";
import { add, remove, useCart } from "@/lib/store/useCart";

export default function Product({
  id,
  title,
  image,
  price,
  discountedPrice,
  discountPercent,
  slug,
}) {
  const cart = useCart((state) => state.items);

  const isInCart = cart.some((item) => item.id === id);

  return (
    <div
      title={title}
      className="active:cursor-grabbing bg-white block h-full group overflow-clip"
    >
      <Link href={"/p/"+slug} className="relative">
        <div className="absolute top-0 left-0 z-1 bg-black text-white px-1 rounded-br-lg text-sm">
          {discountPercent}% off
        </div>
        <Image
          width={400}
          height={400}
          alt={title}
          className="object-cover aspect-square w-full transition will-change-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
          src={
            "https://dessineart.com/cdn/shop/files/Image-1-Quantum-Waves.jpg"
          }
        />
      </Link>
      <div className="p-5 gap-3">
        <Link href={"/p/"+slug}>
          <b className="text-xl font-serif">{title}</b>
          <div className="flex items-center gap-2">
            <s>₹{price}</s>
            <span className="text-green-600 text-xl">₹{discountedPrice}</span>
          </div>
        </Link>
         {isInCart ? (
          <Button
            title="Remove from Cart"
            onClick={() => remove(id)}
            variant="destructive"
          >
            <HugeiconsIcon className="size-4" icon={ShoppingBagRemoveIcon} />
          </Button>
        ) : (
          <Button
            title="Add to Cart"
            onClick={() =>
              add({
                id,
                title,
                price,
                discountedPrice,
                discountPercent,
                slug,
                image:
                  "https://dessineart.com/cdn/shop/files/Image-1-Quantum-Waves.jpg",
              })
            }
          >
            <HugeiconsIcon className="size-4" icon={ShoppingBagAddIcon} />
          </Button>
        )}
      </div>
    </div>
  );
}
