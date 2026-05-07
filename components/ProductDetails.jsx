"use client"
import { add, remove, useCart } from "@/lib/store/useCart"
import { Button } from "./ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ShoppingBagAddIcon,
  ShoppingBagRemoveIcon,
} from "@hugeicons/core-free-icons"
import Markdown from "react-markdown"
import { RichText } from "@payloadcms/richtext-lexical/react"

export default function ProductDetails({
  id,
  slug,
  title,
  description,
  body,
  price,
  discountedPrice,
  discountPercent,
}) {
  const cart = useCart((state) => state.items)

  const isInCart = cart.some((item) => item.id === id)

  return (
    <div>
      <h1 className="font-serif text-2xl text-black dark:text-white font-bold">
        {title}
      </h1>
      <p>
        <s>{price}</s>{" "}
        <span className="text-green-600 text-xl">₹{discountedPrice}</span>
      </p>
      <div className="my-2 mb-5 flex gap-2">
        {isInCart ? (
          <Button
            size="lg"
            title="Remove from Cart"
            onClick={() => remove(id)}
            variant="destructive"
          >
            <HugeiconsIcon className="size-4" icon={ShoppingBagRemoveIcon} />
          </Button>
        ) : (
          <Button
            size="lg"
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
        <Button size="lg">Buy it Now</Button>
      </div>
      <div className="prose">
        <p>{description}</p>
        <RichText data={body} />
      </div>
    </div>
  )
}
