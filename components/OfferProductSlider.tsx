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
      slidesPerView="auto"
      spaceBetween={8}
      navigation
      freeMode={true}
      modules={[Navigation, FreeMode]}
      className="offer-cards"
    >
      {products.map(p => {
        if(p.discount_percent > 0) {
          return(
            <SwiperSlide className="offerCardSlide">
              <SliderProductCard product={p} />
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
}