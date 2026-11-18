"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import brands from "@/app/data/brands";

export default function BrandsSlider() {
  return(
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      speed={2000}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false
      }}
      allowTouchMove={false}
    >
      {brands.map(b => {
        return(
          <SwiperSlide className="shrink-0 size-25! p-4 flex! items-center! justify-center! rounded-lg dark:bg-gray-800">
            <Image width={100} height={100} className="w-full object-contain" src={b.image_src} alt={b.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}