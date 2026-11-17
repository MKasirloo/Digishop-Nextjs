
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BadgePercent,
  Clock3,
  Flame,
  Headphones,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";
import OfferProductSlider from "@/components/OfferProductSlider";

const benefits = [
  {
    icon: Truck,
    title: "ارسال سریع",
    description: "تحویل سفارش در کوتاه‌ترین زمان",
  },
  {
    icon: ShieldCheck,
    title: "خرید مطمئن",
    description: "تجربه خرید امن و آسوده",
  },
  {
    icon: Headphones,
    title: "پشتیبانی",
    description: "همراهی در تمام مراحل خرید",
  },
];

const categories = [
  {
    title: "گوشی موبایل",
    subtitle: "پیشنهادهای ویژه موبایل",
    href: "/products?category=mobile",
    image: "/images/offers/mobile.png",
  },
  {
    title: "لپ‌تاپ",
    subtitle: "تخفیف‌های جذاب لپ‌تاپ",
    href: "/products?category=laptop",
    image: "/images/offers/laptop.png",
  },
  {
    title: "لوازم جانبی",
    subtitle: "انتخاب‌های اقتصادی",
    href: "/products?category=accessories",
    image: "/images/offers/accessories.png",
  },
];

export default function OffersPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#fafafa]">
      <section className="relative mx-auto max-w-[1500px] px-4 pt-7 sm:px-7 lg:pt-10">
        <div className="relative isolate overflow-hidden rounded-[30px] bg-(--offer-color) px-6 py-14 text-white shadow-xl shadow-red-200/40 sm:px-12 sm:py-20 lg:rounded-[40px] lg:px-16">
          <div className="absolute -left-24 -top-32 -z-10 size-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-48 right-1/3 -z-10 size-96 rounded-full bg-[#9f1720]/30 blur-3xl" />

          <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-linear(#fff_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Flame size={17} />
                جشنواره پیشنهادهای ویژه دیجی‌شاپ
              </div>

              <h1 className="mt-7 text-4xl font-black leading-[1.5] sm:text-5xl lg:text-6xl">
                وقتشه
                <br />
                <span className="text-[#ffe5a3]">هوشمندانه‌تر</span>
                <br />
                خرید کنی!
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/85 sm:text-base">
                محصولات دیجیتال موردعلاقه‌ات رو با پیشنهادهای ویژه و قیمت‌های
                جذاب پیدا کن. فرصت‌های خوب رو از دست نده!
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="#offer-products"
                  className="group flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-(--offer-color) transition hover:-translate-y-1 hover:shadow-xl"
                >
                  مشاهده تخفیف‌ها
                  <ArrowLeft
                    size={19}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </Link>

                <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <Zap size={18} />
                  پیشنهادهای محدود
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center">
              <div className="absolute size-[85%] rounded-full border border-white/20" />
              <div className="absolute size-[65%] rounded-full border border-dashed border-white/30" />

              <div className="relative flex size-[70%] rotate-[-8deg] items-center justify-center rounded-[45px] border border-white/30 bg-white/15 shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-3 rounded-[35px] border border-white/15" />
                <BadgePercent
                  size={150}
                  strokeWidth={1.2}
                  className="text-[#ffe5a3] drop-shadow-2xl sm:size-48"
                />
              </div>

              <div className="absolute right-0 top-[15%] rotate-6 rounded-2xl bg-[#ffe5a3] px-5 py-3 text-[#a51e28] shadow-xl">
                <span className="block text-xs font-semibold">فرصت‌های ویژه</span>
                <span className="text-2xl font-black">SALE</span>
              </div>

              <div className="absolute bottom-[10%] left-0 -rotate-6 rounded-2xl border border-white/30 bg-white/15 px-5 py-3 backdrop-blur-xl">
                <span className="text-sm font-bold">انتخاب هوشمندانه</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pt-16 sm:px-7 lg:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-(--offer-color)">
              فرصت‌های جذاب
            </span>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              پیشنهادهای داغ امروز
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              محصول موردعلاقه‌ات رو از بین پیشنهادهای ویژه پیدا کن.
            </p>
          </div>

          <Link
            href="/products"
            className="flex items-center gap-2 text-sm font-bold text-(--offer-color) hover:bg-(--offer-color)/5 p-2 rounded-lg transition-colors"
          >
            همه محصولات
            <ArrowLeft size={17} />
          </Link>
        </div>

        <div
          id="offer-products"
          className="mt-9 rounded-[28px] border border-gray-100 p-4 shadow-sm sm:p-7 bg-linear-to-tr from-(--offer-color) to-rose-500"
        >
          <div className="mb-6 flex items-center gap-2 text-white">
            <Flame color="white" size={22} />
            <h3 className="font-extrabold">محصولات تخفیف‌دار</h3>
          </div>

          <OfferProductSlider />
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-7 lg:py-28">
        <div className="mb-9">
          <span className="text-sm font-bold text-(--offer-color)">
            دسته‌بندی پیشنهادها
          </span>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            دنبال چی می‌گردی؟
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative flex min-h-56 items-end overflow-hidden rounded-4xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 transition duration-500 group-hover:scale-105 ${
                  index === 0
                    ? "bg-linear-to-br from-red-50 to-rose-100"
                    : index === 1
                      ? "bg-linear-to-br from-orange-50 to-red-100"
                      : "bg-linear-to-br from-gray-50 to-red-50"
                }`}
              />

              <div className="relative z-10">
                <span className="text-xs font-bold text-(--offer-color)">
                  پیشنهاد ویژه دیجی‌شاپ
                </span>
                <h3 className="mt-3 text-xl font-black">{category.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {category.subtitle}
                </p>
                <span className="mt-5 flex items-center gap-2 text-sm font-bold text-(--offer-color)">
                  مشاهده محصولات
                  <ArrowLeft size={16} />
                </span>
              </div>

              <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-white text-(--offer-color) shadow-sm">
                <ArrowUpLeft size={21} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-20 sm:px-7">
        <div className="relative overflow-hidden rounded-[30px] bg-[#24171a] px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -left-20 -top-28 size-72 rounded-full bg-(--offer-color)/30 blur-[90px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-sm font-bold text-[#ff9298]">
                خریدی آسوده‌تر
              </span>
              <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                تجربه خریدی که ارزشش رو داره
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-8 text-gray-300">
                از انتخاب محصول تا ثبت سفارش، تلاش می‌کنیم تجربه‌ای ساده و
                قابل‌اعتماد برات فراهم کنیم.
              </p>
            </div>

            <Link
              href="/products"
              className="flex w-fit items-center gap-3 rounded-xl bg-(--offer-color) px-6 py-4 font-bold transition hover:bg-[#c72e38]"
            >
              شروع خرید
              <ArrowLeft size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white px-4 py-10 sm:px-7">
        <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-(--offer-color)">
                <Icon size={23} />
              </div>
              <div>
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-1 text-xs leading-6 text-gray-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
