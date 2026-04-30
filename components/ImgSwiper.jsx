"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs,Pagination,Keyboard,Mousewheel } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function ImgSwiper({ imgs, title }) {
	const [thumbsSwiper, setThumbsSwiper] = useState();

	return (
		<div className="min-w-0">
			<Swiper
				modules={[Thumbs,Pagination,Keyboard]}
				keyboard
				pagination={{dynamicBullets:true, clickable:true}}
				thumbs={{
					swiper: thumbsSwiper,
					slideThumbActiveClass: "opacity-100",
				}}
				loop
				className="max-w-lg bg-white"
			>
				{imgs.map((img, index) => {
					return (
						<SwiperSlide key={img + index}>
							<Image
								src={img}
								alt={title}
								width={400}
								height={400}
								className="aspect-square object-cover w-full"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Swiper
				slidesPerView={4}
				watchSlidesProgress
				onSwiper={setThumbsSwiper}
				modules={[Thumbs,Keyboard,Mousewheel]}
				keyboard
				mousewheel
				className="max-w-lg bg-white"
			>
				{imgs.map((img, index) => {
					return (
						<SwiperSlide className="opacity-70 cursor-pointer" key={img + index}>
							<Image
								src={img}
								alt={title}
								width={200}
								height={200}
								className="aspect-square object-cover w-full"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
