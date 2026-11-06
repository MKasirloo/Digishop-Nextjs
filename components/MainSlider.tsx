"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MainSlider() {
  return(
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      className="mainSlider *:w-full w-full [&_img]:object-cover [&_img]:w-full [&_img]:h-full"
    >
      <SwiperSlide>
        <div className="w-full h-100 max-md:h-[250px]">
          <Image src="/images/posters/iPhone-13-sale.png" alt="iPhone 13 sale" width={1500} height={400} className="hidden md:block object-cover" />
          <Image src="/images/posters-mobile/iPhone-13-sale-off.png" alt="iPhone 13 sale" className="hidden max-md:block object-cover" width={400} height={300} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-100 max-md:h-[250px]">
          <Image src="/images/posters/iPhone-14.png" alt="iPhone 14 show" width={1500} height={400} className="hidden md:block object-cover" />
          <Image src="/images/posters-mobile/iPhone-14-mobile.png" alt="iPhone 14" className="hidden max-md:block object-cover" width={400} height={300} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-100 max-md:h-[250px]">
          <Image src="/images/posters/Gifts.png" alt="Gifts" width={1500} height={400} className="hidden md:block object-cover" />
          <Image src="/images/posters-mobile/Gifts.png" alt="Gifts" className="hidden max-md:block object-cover" width={400} height={300} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}