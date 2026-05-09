"use client"
import { motion } from "motion/react"

export default function Hero() {
  return (
    <div className="max-w-2xl text-center">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="sm:text-7xl text-5xl tracking-tight font-black text-black dark:text-white"
      >
        Bring the Earth Indoors
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        className="mb-2"
      >
        Canvas, Clay and Culture.
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
      >
        Make a definitive statement in your living space. Discover oversized
        mixed-media canvases, heavily textured palette knife art and custom
        portrait plates that turn everyday empty walls into extraordinary visual
        experiences.
      </motion.p>
    </div>
  )
}
