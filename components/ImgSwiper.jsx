"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs, Pagination, Keyboard, Mousewheel } from "swiper/modules"
import Image from "next/image"
import { useState } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { cn } from "@/lib/utils"

function SlideContent({ img, className, index }) {
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
      loading={index === 0 ? "eager" : "lazy"}
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="min-w-0">
      <Swiper
        modules={[Thumbs, Pagination, Keyboard]}
        keyboard
        pagination={{ dynamicBullets: true, clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="bg-white max-w-lg"
        onSlideChange={(d) => setActiveIndex(d.activeIndex)}
      >
        {imgs.map((img, index) => {
          return (
            <SwiperSlide key={`main-slide-${index}`}>
              <SlideContent index={index} img={img.image} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        slidesPerView={4}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        onDestroy={() => setThumbsSwiper(null)}
        modules={[Keyboard, Mousewheel]}
        keyboard
        mousewheel
        className="bg-white "
      >
        {imgs.map((img, index) => {
          return (
            <SwiperSlide
              className={cn(
                "opacity-65",
                index === activeIndex && "opacity-100",
              )}
              key={`thumb-slide-${index}`}
            >
              <SlideContent
                index={index}
                img={img.image}
                className="cursor-pointer active:cursor-grabbing"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
