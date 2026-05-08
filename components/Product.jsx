"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ShoppingBagAddIcon,
  ShoppingBagRemoveIcon,
} from "@hugeicons/core-free-icons"
import { add, remove, useCart } from "@/lib/store/useCart"
import { useState } from "react"

export default function Product({
  id,
  title,
  image,
  price,
  discountedPrice,
  discountPercent,
  slug,
}) {
  const [imgSrc, setImgSrc] = useState(
    image ||
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
  )

  const cart = useCart((state) => state.items)

  const isInCart = cart.some((item) => item.id === id)

  return (
    <div
      title={title}
      className="active:cursor-grabbing bg-white block h-full group"
    >
      <Link href={"/p/" + slug} className="relative block overflow-clip">
        <div className="absolute top-0 left-0 z-1 bg-black text-white px-1 rounded-br-lg text-sm">
          {discountPercent}% off
        </div>
        <Image
          width={300}
          height={300}
          alt={title}
          className="object-cover aspect-square w-full transition will-change-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
          src={imgSrc}
          onError={() =>
            setImgSrc(
              // "https://dessineart.com/cdn/shop/files/Image-1-Quantum-Waves.jpg",
              "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
            )
          }
        />
      </Link>
      <div className="p-5 gap-3">
        <Link href={"/p/" + slug}>
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
                image: imgSrc,
              })
            }
          >
            <HugeiconsIcon className="size-4" icon={ShoppingBagAddIcon} />
          </Button>
        )}
      </div>
    </div>
  )
}
