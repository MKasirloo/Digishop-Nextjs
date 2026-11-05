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
      className="brandCarousel"
    >
      {brands.map(b => {
        return(
          <SwiperSlide className="brandCarouselItem">
            <Image width={500} height={500} className="w-full" src={b.image_src} alt={b.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}