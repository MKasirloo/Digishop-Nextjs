import Container from "@/components/Container";
import * as Icons from '@/app/assets/icons'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

import MainSlider from "@/components/MainSlider";
// import Stories from "@/components/Stories";
import Image from "next/image";
import Link from "next/link";
import Stories from "@/components/Stories";
import OfferProductSlider from "@/components/OfferProductSlider";
import BrandsSlider from "@/components/BrandsSlider";
import categories from "@/app/data/categories";
import CategoryCard from "@/components/CategoryCard";

export default function Page() {
  return (
    <>
      <MainSlider />
      <Container>
        <Stories />
        <div className="my-10 text-xl relative p-2
          before:content-['']
          before:absolute
          before:bg-linear-to-l
          before:from-[#004cff]
          before:to-[#aa00ff]
          before:w-50
          before:h-1
          before:bottom-0
        ">
          <h2>دسته بندی ها</h2>
        </div>
        <div className="flex flex-wrap gap-10 justify-around">
          {categories.map(c => (<CategoryCard key={c.id} category={c} />))}
        </div>
        <div className="offer">
          <div className="offer-title">
						<div className="offerTitleImageContainer">
            	<Image width={500} height={500} className="w-full" src="/images/offer.png" alt="offer-icon" />
						</div>
            <div className="offerTitleTextContainer">
              <p>
                پیشنهاد <br />
                شگفت انگیز!
              </p>
            </div>
          </div>
          <OfferProductSlider />
        </div>
				<div className="my-10 text-xl relative p-2
          before:content-['']
          before:absolute
          before:bg-linear-to-l
          before:from-[#004cff]
          before:to-[#aa00ff]
          before:w-50
          before:h-1
          before:bottom-0
        ">
					<h2>برند های برتر</h2>
				</div>
				<BrandsSlider />
        <div className="relative isolate my-14 overflow-hidden rounded-[28px] bg-[#1b075c] text-white">
          <div className="absolute -right-16 -top-24 -z-10 size-80 rounded-full bg-[#4d00ff]/70 blur-[90px]" />
          <div className="absolute -bottom-32 left-1/4 -z-10 size-80 rounded-full bg-[#7c3aed]/50 blur-[100px]" />
          <div className="absolute -left-20 top-1/3 -z-10 size-64 rounded-full bg-[#4d00ff]/30 blur-[80px]" />

          <div className="grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:px-14 md:py-14">
            <div className="space-y-5 text-center md:text-right">
              <span className="inline-flex rounded-full border border-violet-300/20 bg-[#4d00ff]/25 px-4 py-2 text-xs text-violet-100 backdrop-blur">
                انتخاب هوشمندانه، خرید مطمئن
              </span>
              <h2 className="text-3xl font-black leading-relaxed sm:text-4xl lg:text-5xl">
                تکنولوژی جدید،
                <span className="block text-[#ddd4ff]">
                  تجربه‌ای متفاوت!
                </span>
              </h2>
              <p className="mx-auto max-w-md text-sm leading-8 text-white/70 md:mx-0">
                محصولات دیجیتال مورد علاقه‌ات رو پیدا کن و با چند کلیک خرید کن.
              </p>
              <Link href="/products" className="inline-flex items-center gap-3 rounded-xl bg-[#4d00ff] px-6 py-3 font-bold text-white shadow-lg shadow-[#4d00ff]/30">
                مشاهده محصولات
                <span>
                  <Icons.ArrowLeftIcon />
                </span>
              </Link>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-violet-300/15" />
              <div className="absolute inset-14 rounded-full border border-violet-300/20" />
              <div className="absolute inset-12 rounded-full bg-[#4d00ff]/30 blur-2xl" />
              <div className="relative flex size-44 rotate-[-8deg] items-center justify-center rounded-[36px] border border-violet-200/25 bg-linear-to-br from-[#8b5cf6]/35 via-[#4d00ff]/20 to-white/5 shadow-2xl shadow-[#4d00ff]/30 backdrop-blur-xl sm:size-52">
                <span className="text-8xl drop-shadow-[0_0_25px_rgba(167,139,250,0.5)] sm:text-9xl">
                  <Image width={500} height={500} className="w-full" src="/images/products/iPhone-18-Pro-Max.webp" alt="iPhone 15 Pro Max" />
                </span>
              </div>

              <span className="absolute right-2 top-12 rounded-2xl border border-violet-200/15 bg-[#4d00ff]/30 px-4 py-3 text-sm font-bold shadow-lg shadow-[#4d00ff]/10 backdrop-blur-md">
                کیفیت بهتر
              </span>

              <span className="absolute bottom-10 left-0 rounded-2xl border border-violet-200/15 bg-[#4d00ff]/30 px-4 py-3 text-sm font-bold shadow-lg shadow-[#4d00ff]/10 backdrop-blur-md">
                انتخاب هوشمند
              </span>
            </div>
          </div>
        </div>
        <div className="my-14 rounded-3xl border border-violet-100 bg-linear-to-br from-white via-violet-50/60 to-white p-5 sm:p-8">
          <div className="mb-8 text-center">
            <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-xs font-bold text-[#4d00ff]">
              خرید مطمئن
            </span>
            <h2 className="mt-4 text-xl font-black text-gray-900 sm:text-2xl">
              چرا از دیجی‌شاپ خرید کنیم؟
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-500">
              تجربه‌ای راحت‌تر و مطمئن‌تر در خرید محصولات دیجیتال
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <div className="group flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-[#4d00ff] shadow-sm transition duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-7">
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-black text-gray-800 sm:text-base">
                ضمانت اصالت کالا
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-6 text-gray-500 sm:text-sm">
                اطمینان از اصالت محصولات خریداری‌شده
              </p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-[#4d00ff] shadow-sm transition duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-7">
                  <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" />
                  <path d="M3 8v9l9 5 9-5V8M12 13v9" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-black text-gray-800 sm:text-base">
                بسته‌بندی مطمئن
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-6 text-gray-500 sm:text-sm">
                توجه به سلامت کالا هنگام آماده‌سازی سفارش
              </p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-[#4d00ff] shadow-sm transition duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-7">
                  <path d="M3 14v-3a9 9 0 0 1 18 0v3" strokeLinecap="round" />
                  <path d="M5 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Zm14 0h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4Z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-black text-gray-800 sm:text-base">
                پشتیبانی خرید
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-6 text-gray-500 sm:text-sm">
                پاسخ‌گویی به پرسش‌ها و راهنمایی پیش از خرید
              </p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-[#4d00ff] shadow-sm transition duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-7">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-black text-gray-800 sm:text-base">
                پیگیری سفارش
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-6 text-gray-500 sm:text-sm">
                دسترسی به وضعیت سفارش از حساب کاربری
              </p>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}
