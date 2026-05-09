"use client"

import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Section from "@/components/ui/section"
import { remove, useCart } from "@/lib/store/useCart"
import { Delete } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import Link from "next/link"

export default function Checkout() {
  const cart = useCart((state) => state.items)
  const total = cart.reduce((prev, curr) => prev + curr.discountedPrice, 0)

  return (
    <Section className="grid gap-5 md:grid-cols-2">
      <div className="bg-white p-5">
        <h2 className="text-2xl text-black dark:text-white">Order Summary</h2>
        <div className="grid gap-3 mt-5">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div className="gap-2 flex" key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="object-cover aspect-square rounded-md"
                  />
                  <div>
                    <Link
                      href={"/p/" + item.slug}
                      className="font-serif text-base"
                    >
                      {item.title}
                    </Link>

                    <p className="text-black dark:text-white">
                      ₹{item.discountedPrice}
                    </p>
                  </div>

                  <Button variant="destructive" onClick={() => remove(item.id)}>
                    <HugeiconsIcon className="size-4" icon={Delete} />
                  </Button>
                </div>
              )
            })
          ) : (
            <p>Cart is Empty</p>
          )}
        </div>
      </div>
      <div className="bg-white p-5">
        <p className="text-xl mb-2 text-black dark:text-white">
          Sub Total: ₹{total}
        </p>
        <form>
          <Field className="mb-3">
            <FieldLabel>Coupon Code</FieldLabel>
            <Input />
          </Field>
          <Field className="mb-3">
            <FieldLabel>Mobile Number</FieldLabel>
            <Input required type={"number"} minLength={10} maxLength={10} />
          </Field>
          <Button type="button" size="lg">
            Proceed
          </Button>
        </form>
      </div>
    </Section>
  )
}
