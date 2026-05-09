"use client"

import { ArrowUp } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useEffect, useState } from "react"

export default function BackToTop() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const scrlEvt = window.addEventListener("scroll", (e) => {
      setShowTop(scrollY > 200)
    })
    ;() => window.removeEventListener("scroll", scrlEvt)
  }, [])

  return (
    showTop && (
      <button
        onClick={() => scrollTo({ top: 0 })}
        className="fixed z-2 shadow cursor-pointer bottom-5 right-5 bg-white h-8 w-8 rounded-full flex items-center justify-center"
      >
        <HugeiconsIcon icon={ArrowUp} />
      </button>
    )
  )
}
