"use client";

import { use, useState, useEffect } from "react";
import * as Icons from "@/app/assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";

import products from "@/app/data/products";
import brands from "@/app/data/brands"
import Toast from "@/components/Toast";

export default function Product({ params }: { params: Promise<{ id: string }>}) {
  const { id } = use(params);
  const product = products[products.findIndex(p => p.id === +id)];
  const insuranceCost = product.price * 0.1;
  const [currentPhoto, setCurrentPhoto] = useState(product.images[0]);
  const [hasInsurance, setHasInsurance] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [totalCost, setTotalCost] = useState(
    product.price * (1 - product.discount_percent / 100) + insuranceCost
  );
  const [timeLeft, setTimeLeft] = useState(219478);
  const [isLiked, setIsLiked] = useState(false);
  const [color, setColor] = useState(product.colors[0].name);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if(timeLeft <= 0)
      return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);
  function renderAddToCart() {
    if (cartCount === 0) {
      return (
        <button className="btn-primary w-full p-2.5 my-2.5 hover:cursor-pointer" onClick={() => setCartCount(1)}>
          افزودن به سبد خرید
        </button>
      );
    } else {
      return (
        <div className="flex my-2.5 w-full">
          <div className="flex flex-row-reverse justify-between items-center w-25 border border-gray-300 rounded-lg">
            <button
              className="flex items-center h-full hover:cursor-pointer hover:bg-gray-100 transition-colors rounded-l-lg border-r border-gray-300"
              onClick={() => setCartCount(cartCount - 1)}
            >
              {cartCount === 1 ? (
                <Icons.TrashCanIcon />
              ) : (
                <Icons.RemoveLineIcon />
              )}
            </button>
            <div className="flex items-center justify-center w-[25px] h-full text-lg">{cartCount}</div>
            <button
              className="flex items-center h-full hover:cursor-pointer hover:bg-gray-100 transition-colors rounded-r-lg border-l border-gray-300"
              onClick={() => setCartCount(cartCount + 1)}
              disabled={product.stock <= cartCount}
            >
              <Icons.AddIcon className="text-(--text-secondary)" />
            </button>
          </div>
          <Link href="/cart" className="btn-secondary flex flex-1 items-center justify-center w-full p-2.5 rounded-lg mr-1 *:flex *:items-center text-sm">
            <span>مشاهده سبد خرید</span>
            <span>
              <Icons.ChevronLeftIcon />
            </span>
          </Link>
        </div>
      );
    }
  }

  return (
    <>
      <Toast message="کالا با موفقیت به سبد خرید اضافه شد!" type="success" />
      <div>
        <ul className="flex gap-2 my-2.5 mx-5 text-(--text-gray)">
          <li>
            <Link href="/">دیجی شاپ</Link>
          </li>
          <span>{">"}</span>
          <li>
            <Link href="/">محصولات</Link>
          </li>
          <span>{">"}</span>
          <li className="text-(--text-primary)!">
            <Link href="/">موبایل</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-[30px] my-[30px] mx-5 max-lg:flex-wrap max-lg:w-full max-lg:m-0 max-lg:py-0 max-lg:px-10 max-sm:flex-col">
        <div className="w-100 max-lg:w-full">
          {product.discount_percent > 0 && (
            <div className="relative flex justify-center gap-2.5 w-100 p-2.5 text-(--offer-color) font-bold max-lg:w-full
              after:content-['']
              after:absolute
              after:z-10
              after:h-2
              after:w-full
              after:bg-(--offer-color)
              after:bottom-0
              after:rounded-t-lg
              *:flex
              *:flex-col
              *:justify-end
              *:items-center
            ">
              <div>
                <span>ثانیه</span>
                {timeLeft % 60}
              </div>
              <div>:</div>
              <div>
                <span>دقیقه</span>
                {Math.floor(timeLeft / 60) % 60}
              </div>
              <div>:</div>
              <div>
                <span>ساعت</span>
                {Math.floor(timeLeft / 3600) % 24}
              </div>
              <div>:</div>
              <div>
                <span>روز</span>
                {Math.floor(timeLeft / 86400)}
              </div>
            </div>
          )}
          <div className={`relative border border-gray-300 p-5 max-lg:border-none flex justify-center ${product.discount_percent > 0 ? "rounded-b-lg" : "rounded-lg"}`}>
            {product.discount_percent > 0 && (
              <span className="absolute left-5 top-5 bg-(--offer-color) text-white p-2 text-lg rounded-full max-lg:text-xl">
                {product.discount_percent + "%"}
              </span>
            )}
            <Image src={currentPhoto} alt={product.name} width={400} height={400} className="object-cover p-2" />
          </div>
          <Swiper
            className="my-5 flex gap-2.5 w-full"
            modules={[FreeMode]}
            slidesPerView="auto"
            freeMode={true}
            spaceBetween={40}
          >
            {product.images.map((i) => {
              return (
                <SwiperSlide
                  className="w-12.5 h-12.5 border border-gray-300 rounded-lg p-1"
                  onClick={() => setCurrentPhoto(i)}
                >
                  <Image src={i} alt={product.name} width={50} height={50} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex-1">
          <div>
            <h2>{product.name}</h2>
          </div>
          <div className="flex justify-between my-2.5">
            <div className="text-(--text-gray)">
              <h4 className="font-light">{product.english_name}</h4>
            </div>
            <div className="flex flex-row-reverse gap-2.5 [&_svg]:text-(--text-secondary)">
              <div
                className={`hover:cursor-pointer flex justify-center items-center *:transition-colors ${
                  isLiked ? "*:stroke-(--offer-color) *:fill-(--offer-color)" : ""
                }`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Icons.HeartIcon className="fill-transparent" />
              </div>
              <div className="flex justify-center items-center hover:*:text-blue-500! *:transition-colors hover:cursor-pointer">
                <Icons.ShareIcon />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5">
              <Icons.YellowStarIcon />
              <span className="flex items-center text-base">{product.rating}</span>
            </div>
            <div className="flex items-center gap-2 [&>a]:text-(--primary-color)">
              <Link href="#comment">{product.comments + " دیدگاه"}</Link>
              <span className="text-gray-500 -translate-y-[5px] text-2xl">.</span>
              <Link href="#questions">{product.questions + " پرسش"}</Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>
              برند:
            </p>
            {brands.filter(b => (b.name === product.brand)).map(b => {
              return (
                <Link href="#" key={b.name} className="flex gap-2 items-center text-sm">
                  <p>
                    {b.name}
                  </p>
                  <div className="flex items-center w-12.5">
                    <Image src={b.image_src} alt={b.alt} width={40} height={40} />
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
            <p className="my-2.5">
              رنگ:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {product.colors.map(c => {
                return(
                  <button key={c.id} className={`flex gap-1 items-center justify-between py-1 px-2.5 border border-gray-300 rounded-sm transition-colors ${c.name === color ? "border border-(--primary-color)! text-(--text-primary) hover:cursor-pointer" : "text-(--text-secondary)"}`} onClick={() => setColor(c.name)}>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-500" style={{ backgroundColor: c.code }}></div>
                    <p>{c.name}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="my-5">
            <div className="my-2.5">
              <p>ویژگی های کلیدی:</p>
            </div>
            <ul className="text-xs px-2.5 border-y-2 border-gray-300">
              {product.key_features.map(f => {
                return(
                  <li key={f.id} className="border-b-2 border-dotted border-gray-300 flex gap-1 py-2 last:border-none!">
                    <p className="text-(--text-secondary)">
                      {f.name + ": "}
                    </p>
                    <p>
                      {f.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-75 border border-gray-300 rounded-lg p-5 shadow-md h-fit max-sm:w-full">
          <div>
            <div className="flex items-center gap-2.5 [&_span]:flex [&_span]:items-center">
              <span>
                {hasInsurance ? (
                  <Icons.CircleCheckIcon className="text-emerald-600" />
                ) : (
                  <Icons.ShieldIcon className="text-(--primary-color)" />
                )}
              </span>
              <span>
                {hasInsurance
                  ? "بیمه به کالا اضافه شد."
                  : "افزودن بیمه به کالا"}
              </span>
            </div>
            <div className="flex justify-between items-center my-5 pb-5 border-b border-gray-300">
              {hasInsurance ? (
                <button
                  className="rounded-md flex items-center justify-between py-1 px-1.5 [&_span]:flex [&_span]:items-center hover:cursor-pointer border border-red-700 text-red-700 transition-colors hover:bg-red-50"
                  onClick={() => {
                    setHasInsurance(false);
                    setTotalCost(totalCost - insuranceCost);
                  }}
                >
                  حذف بیمه از کالا
                  <span>
                    <Icons.TrashCanIcon />
                  </span>
                </button>
              ) : (
                <button
                  className="rounded-md flex items-center justify-between py-1 px-1.5 [&_span]:flex [&_span]:items-center hover:cursor-pointer border border-blue-700 text-blue-700 transition-colors hover:bg-blue-50"
                  onClick={() => {
                    setHasInsurance(true);
                    setTotalCost(totalCost + insuranceCost);
                  }}
                >
                  افزودن بیمه به کالا
                  <span>
                    <Icons.AddIcon />
                  </span>
                </button>
              )}
              <div className="flex gap-1">
                <span>{insuranceCost.toLocaleString("fa-IR")}</span>
                <Icons.TomanThinIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-[30px] pb-[30px] border-b border-gray-300">
            <Icons.ExpressDeliveryIcon className="w-[30px] h-[30px] text-(--primary-color)" />
            <p>ارسال سریع دیجی شاپ</p>
            <span className="bg-linear-0 from-yellow-300/70 to-yellow-500 py-0.5 px-1 -rotate-12 rounded-sm">زیر 1 روز!</span>
          </div>
          <div className="flex justify-between mt-[30px] pb-[30px] text-sm">
            <p>قابلیت پرداخت اقساطی با اسنپ پی!</p>
            <span>
              <Icons.SnappPayIcon className="w-10" />
            </span>
          </div>
          <div>
            {product.discount_percent > 0 && (
              <div className="bg-red-50 rounded-full py-1.5 px-2.5 text-(--offer-color) w-fit mb-2.5 text-xs">
                {(
                  (product.price * product.discount_percent) /
                  100
                ).toLocaleString("fa-IR") + " "}
                تومان تخفیف!
              </div>
            )}
            <div>
              {product.discount_percent > 0 && (
                <div className="flex gap-2.5 items-center">
                  <div className="text-(--text-secondary) line-through">
                    {product.price.toLocaleString("fa-IR")}
                  </div>
                  <span className="text-white bg-(--offer-color) p-1 rounded-lg text-xs">
                    {product.discount_percent + '%'}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-1 text-2xl text-(--text-natural) font-bold">
                {totalCost.toLocaleString("fa-IR")}
                <span>
                  <Icons.TomanIcon width={20} />
                </span>
              </div>
            </div>
            <div className="flex items-center h-15">{renderAddToCart()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
