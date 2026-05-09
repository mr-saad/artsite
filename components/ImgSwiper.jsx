"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs, Pagination, Keyboard, Mousewheel } from "swiper/modules"
import Image from "next/image"
import { useState } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { cn } from "@/lib/utils"

function SlideContent({ img, className }) {
  const [imgSrc, setImgSrc] = useState(
    img.url ||
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
  )

  return (
    <Image
      onError={() =>
        setImgSrc(
          "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
        )
      }
      src={imgSrc}
      alt={img.alt}
      width={400}
      height={400}
      className={cn(
        "aspect-square object-cover w-full cursor-grab active:cursor-grabbing",
        className,
      )}
    />
  )
}

export default function ImgSwiper({ imgs }) {
  const [thumbsSwiper, setThumbsSwiper] = useState()

  return (
    <div className="min-w-0">
      <Swiper
        modules={[Thumbs, Pagination, Keyboard]}
        keyboard
        pagination={{ dynamicBullets: true, clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          slideThumbActiveClass: "opacity-100",
        }}
        className="bg-white max-w-lg"
      >
        {imgs.map((img, index) => {
          return (
            <SwiperSlide key={img.alt + index}>
              <SlideContent img={img} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        slidesPerView={4}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, Keyboard, Mousewheel]}
        keyboard
        mousewheel
        className="bg-white "
      >
        {imgs.map((img, index) => {
          return (
            <SwiperSlide className="opacity-65" key={img.alt + index}>
              <SlideContent
                img={img}
                className="cursor-pointer active:cursor-grabbing"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
