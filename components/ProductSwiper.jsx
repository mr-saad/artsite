"use client"

import "swiper/css"
// import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import Product from "./Product"
import { Keyboard, Navigation, Pagination } from "swiper/modules"

export default function ProductSwiper({ products }) {
  return (
    <Swiper
      className="my-5"
      modules={[Navigation, Pagination, Keyboard]}
      // navigation
      keyboard
      loop
      pagination={{ dynamicBullets: true, clickable: true }}
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {products.map((prod) => {
        return (
          <SwiperSlide key={prod.title} className="h-auto!">
            <Product {...prod} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
