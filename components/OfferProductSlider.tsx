"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import products from "@/app/data/products";
import SliderProductCard from "./SliderProductCard";

export default function OfferProductSlider() {
  return(
    <Swiper
      spaceBetween={8}
      navigation
      freeMode={true}
      modules={[Navigation, FreeMode]}
      className="w-full"
      slidesPerView="auto"
    >
      {products.map(p => {
        if(p.discount_percent > 0) {
          return(
            <SwiperSlide className="w-fit! first:rounded-r-lg last:rounded-l-lg overflow-hidden">
              <SliderProductCard product={p} />
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
}