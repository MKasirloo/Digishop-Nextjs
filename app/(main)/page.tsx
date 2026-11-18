import Container from "@/components/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MainSlider from "@/components/MainSlider";
import Image from "next/image";
import Link from "next/link";
import Stories from "@/components/Stories";
import OfferProductSlider from "@/components/OfferProductSlider";
import BrandsSlider from "@/components/BrandsSlider";
import { categories } from "@/app/data/categories";
import CategoryCard from "@/components/CategoryCard";

import {
  ArrowLeft,
  BadgeCheck,
  Truck,
  Headset,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  PackageCheck,
  ShoppingBag,
  CreditCard,
  Clock3,
  ChevronLeft,
} from "lucide-react";

export default function Page() {
  return (
    <>
      <MainSlider />

      <Container>

        {/* Stories */}
        <Stories />

        {/* Categories */}
        <section className="my-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="mt-2 text-xl font-black text-gray-900 sm:text-2xl">
                دسته‌بندی محصولات
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                محصول مورد علاقه‌ات رو راحت‌تر پیدا کن
              </p>
            </div>

            <Link
              href="/products"
              className="group hidden items-center gap-2 text-sm font-bold text-(--primary-color) transition-colors hover:bg-(--primary-color)/5 p-2 rounded-lg sm:flex"
            >
              مشاهده همه
              <ArrowLeft
                size={17}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>
          </div>

          <div className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-linear-to-br from-gray-50 dark:from-gray-900 to-violet-50 dark:to-violet-950 p-5 sm:p-8">
            <div className="flex flex-wrap justify-around gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="
          relative isolate my-16 rounded-3xl bg-linear-to-l from-(--offer-color) via-[#dc2945] to-[#f05252] p-5 shadow-xl shadow-red-500/10 sm:p-8
          after:content-['']
          after:w-9/10
          after:absolute
          after:bg-(--offer-color)/50
          after:h-6
          after:rounded-t-3xl
          after:top-0
          after:-translate-y-full
          after:left-1/2
          after:-translate-x-1/2
          before:content-['']
          before:w-8/10
          before:absolute
          before:bg-(--offer-color)/30
          before:h-4
          before:rounded-t-3xl
          before:top-0
          before:-translate-y-10
          before:left-1/2
          before:-translate-x-1/2
        ">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
            <div className="flex shrink-0 flex-col items-center justify-center gap-3 lg:w-40">
              <div className="grid size-32 place-items-center rounded-full border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:size-40">
                <Image
                  width={200}
                  height={200}
                  src="/images/offer.png"
                  alt="پیشنهاد شگفت‌انگیز دیجی‌شاپ"
                  className="w-full object-contain drop-shadow-xl"
                />
              </div>

              <div className="text-center text-white">
                <span className="text-xs font-medium text-white/75">
                  فرصت‌های جذاب خرید
                </span>
                <h2 className="mt-1 font-lalezar text-3xl sm:text-4xl">
                  پیشنهاد شگفت‌انگیز!
                </h2>
              </div>

              <Link
                href="/products"
                className="mt-1 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-red-600 transition-all hover:gap-3 hover:bg-red-50"
              >
                دیدن محصولات
                <ArrowLeft size={17} />
              </Link>
            </div>

            <div className="min-w-0 flex-1 overflow-hidden rounded-2xl p-2 sm:p-4">
              <OfferProductSlider />
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="my-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="mt-2 text-xl font-black text-(--text-primary) sm:text-2xl">
                برندهای محبوب
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                انتخاب از میان معتبرترین برندهای دنیای تکنولوژی
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 dark:border-gray-900 bg-(--background) p-4 shadow-sm sm:p-6">
            <BrandsSlider />
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="relative isolate my-16 overflow-hidden rounded-[32px] bg-[#14083d] text-white">
          <div className="absolute -right-20 -top-24 -z-10 size-80 rounded-full bg-[#4d00ff]/50 blur-[100px]" />
          <div className="absolute -bottom-36 left-1/4 -z-10 size-96 rounded-full bg-[#7c3aed]/40 blur-[110px]" />
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-transparent via-[#4d00ff]/10 to-white/5" />

          <div className="grid items-center gap-10 px-6 py-12 sm:px-10 md:grid-cols-2 md:px-14 md:py-16">
            <div className="space-y-5 text-center md:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-xs font-medium text-violet-100 backdrop-blur">
                <Sparkles size={15} />
                انتخاب هوشمندانه، خرید مطمئن
              </span>

              <h2 className="text-3xl font-black leading-relaxed sm:text-4xl lg:text-5xl">
                دنیای تکنولوژی،
                <span className="block text-[#c4b5fd]">
                  فقط چند کلیک با تو فاصله دارد!
                </span>
              </h2>

              <p className="mx-auto max-w-md text-sm leading-8 text-white/65 md:mx-0">
                جدیدترین محصولات دیجیتال رو کشف کن، ویژگی‌هاشون رو مقایسه کن و
                انتخابی متناسب با نیازت داشته باش.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 rounded-xl btn-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/40"
                >
                  مشاهده محصولات
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
              <div className="absolute inset-5 rounded-full border border-violet-300/15" />
              <div className="absolute inset-12 rounded-full border border-violet-300/20" />
              <div className="absolute inset-16 rounded-full bg-[#4d00ff]/40 blur-3xl" />

              <div className="relative flex size-48 rotate-[-8deg] items-center justify-center rounded-[38px] border border-violet-200/25 bg-linear-to-br from-[#8b5cf6]/35 via-[#4d00ff]/20 to-white/5 p-5 shadow-2xl shadow-[#4d00ff]/30 backdrop-blur-xl transition-transform duration-500 hover:rotate-0 sm:size-56">
                <Image
                  width={500}
                  height={500}
                  className="size-full object-contain drop-shadow-2xl"
                  src="/images/products/iPhone-18-Pro-Max.webp"
                  alt="آیفون"
                />
              </div>

              <div className="absolute right-0 top-12 flex items-center gap-2 rounded-2xl border border-violet-200/15 bg-[#4d00ff]/30 px-4 py-3 text-xs font-bold shadow-lg backdrop-blur-md sm:text-sm">
                <BadgeCheck size={17} />
                کیفیت برتر
              </div>

              <div className="absolute bottom-10 left-0 flex items-center gap-2 rounded-2xl border border-violet-200/15 bg-[#4d00ff]/30 px-4 py-3 text-xs font-bold shadow-lg backdrop-blur-md sm:text-sm">
                <Sparkles size={17} />
                تجربه‌ای متفاوت
              </div>
            </div>
          </div>
        </section>

        {/* Why DigiShop */}
        <section className="my-16 rounded-3xl border border-violet-100 dark:border-violet-900/50 bg-linear-to-br from-white via-violet-50/60 to-white dark:from-gray-900 dark:via-violet-950/40 dark:to-gray-900 p-6 sm:p-10">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 dark:bg-violet-950 px-4 py-2 text-xs font-bold text-(--primary-color)">
              <ShieldCheck size={15} />
              خرید مطمئن
            </span>

            <h2 className="mt-4 text-xl font-black text-gray-900 dark:text-gray-100 sm:text-2xl">
              چرا از دیجی‌شاپ خرید کنیم؟
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
              تجربه‌ای راحت‌تر، سریع‌تر و مطمئن‌تر در خرید محصولات دیجیتال
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "ضمانت اصالت کالا",
                desc: "اطمینان از اصالت محصولات خریداری شده",
              },
              {
                icon: PackageCheck,
                title: "بسته بندی مطمئن",
                desc: "توجه به سلامت کالا هنگام آماده‌سازی سفارش",
              },
              {
                icon: Headset,
                title: "پشتیبانی خرید",
                desc: "پاسخ گویی و راهنمایی در تمام مراحل خرید",
              },
              {
                icon: Clock3,
                title: "پیگیری سفارش",
                desc: "دسترسی آسان به وضعیت سفارش های شما",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="grid size-16 place-items-center rounded-2xl border border-violet-100 dark:border-violet-800 bg-white dark:bg-violet-950/70 text-(--primary-color) shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-(--primary-hover) group-hover:bg-(--primary-color) group-hover:text-white group-hover:shadow-xl group-hover:shadow-violet-500/15">
                    <Icon size={28} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-sm font-black text-gray-800 dark:text-gray-100 sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-52 text-xs leading-7 text-gray-500 dark:text-gray-400 sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
}
