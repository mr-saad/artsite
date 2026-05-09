"use client"
import { cn } from "@/lib/utils"
import { motion, stagger } from "motion/react"

const variants = {
  visible: {
    transition: {
      delayChildren: stagger(0.1),
    },
  },
  invisible: {},
}

export default function ProductGrid({ children, className }) {
  return (
    <motion.div
      variants={variants}
      initial={"invisible"}
      whileInView={"visible"}
      className={cn(
        "grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
