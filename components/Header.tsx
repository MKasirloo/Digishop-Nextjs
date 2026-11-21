
"use client";

import { useEffect, useState } from "react";
import { categories } from "../app/data/categories";
import SearchBar from "./UI/Header/SearchBar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BadgePercent,
  BuildingComplex,
  ChevronDown,
  Home,
  Info,
  LayoutGrid,
  LogIn,
  Menu,
  Phone,
  RefreshCcw,
  ShoppingCart,
  UserRound,
  X
} from "lucide-react";
import { useAuthStore } from "@/app/stores/authStore";
import ThemeToggle from "./ThemeToggle";

export default function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

  const mobileNavItems = [
    { href: "/", label: "خانه", icon: Home },
    { href: "/categories", label: "دسته بندی ها", icon: LayoutGrid },
    { href: "/cart", label: "سبد خرید", icon: ShoppingCart },
    { href: "/profile/dashboard", label: "حساب کاربری", icon: UserRound }
  ];

  const pathname = usePathname();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header>
      <div className="h-[68px]"></div>

      <nav className="w-full">
        {/* Top navbar */}
        <div className="flex gap-5 bg-(--background) fixed left-0 right-0 top-0 p-2.5 h-[68px] justify-between items-center shadow-sm z-100">
          <div className="flex h-full gap-2.5 items-center max-w-200 w-full">
            <Link href="/">
              <Image
                width={200}
                height={50}
                src="/images/logo.png"
                alt="logo"
                className="max-md:hidden"
                loading="eager"
              />
              <Image
                width={50}
                height={50}
                src="/images/logo-mini.png"
                alt="logo"
                className="md:hidden"
              />
            </Link>

            <SearchBar />
          </div>

          <div className="navbar-top-left">
            <div className="flex items-center gap-2.5 whitespace-nowrap max-md:hidden!">
              <Link
                href="/cart"
                className="relative rounded-lg p-2 hover:bg-(--primary-color)/10 transition-colors text-(--text-primary)"
              >
                <ShoppingCart strokeWidth="1.5" className="w-6 h-6" />

                {cartCount > 0 && (
                  <span className="absolute bottom-0 right-0 bg-(--primary-color) rounded-full w-4 h-4 text-white mr-0.5 mb-1 flex items-center justify-center text-[10px]">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>

              <ThemeToggle />

              {isLoggedIn ? (
                <Link
                  href="/profile/dashboard"
                  className="rounded-lg py-2 px-4 text-sm flex justify-between items-center gap-2 hover:bg-(--primary-color)/10 transition-colors text-(--text-primary)"
                >
                  <UserRound strokeWidth="1.5" />
                  حساب کاربری
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="rounded-lg py-2 px-4 text-sm flex justify-between items-center gap-2 hover:bg-(--primary-color)/10 transition-colors text-(--text-primary)"
                >
                  <LogIn strokeWidth="1.75" />
                  <span>ورود</span>
                  <span>|</span>
                  <span>ثبت نام</span>
                </Link>
              )}
            </div>

            <button
              type="button"
              aria-label="باز کردن منو"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex size-9 items-center justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-white text-xl text-gray-600 shadow-md hover:text-(--primary-color)"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Desktop navbar */}
        <div className="max-md:hidden mb-1">
          <ul className="flex gap-1.25 items-center text-(--text-primary)">
            <div className="group h-full flex relative items-center justify-between py-2 px-2.5 gap-1.25 font-normal text-sm hover:cursor-pointer hover:text-(--primary-color) transition-colors
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:w-0
              after:h-0.5
              after:bg-(--primary-color)
              after:transition-all
              hover:after:w-full
            ">
              <button className="flex h-full items-center gap-2 text-sm font-semibold transition hover:text-(--primary-color)">
                <Menu />
                دسته‌بندی محصولات
                <ChevronDown />
              </button>

              <div className="invisible absolute right-0 top-full z-50 w-max min-w-[360px] translate-y-2 rounded-b-xl bg-(--background) border border-gray-200 dark:border-gray-700 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="grid grid-cols-2 gap-1 p-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/products?category=${category.name}`}
                        target="_blank"
                        className="flex items-center gap-3 rounded-lg px-3 py-4 text-sm text-(--text-primary) transition hover:bg-violet-50 dark:hover:bg-violet-950"
                      >
                        <span className="shrink-0 rounded-lg bg-violet-100 dark:bg-violet-900 p-2 text-(--primary-color)">
                          <category.icon />
                        </span>
                        <span>{category.name_fa}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <li className="text-gray-300 dark:text-gray-700">|</li>

            <li className="relative text-sm hover:cursor-pointer hover:text-(--offer-color) transition-colors
              after:content-['']
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5
              after:bg-(--offer-color) after:transition-all hover:after:w-full
            ">
              <Link href="/landing/offer" className="py-2 px-2.5 flex items-center gap-1">
                <BadgePercent />
                فروش ویژه!
              </Link>
            </li>

            <li className="flex relative items-center justify-between py-2 px-2.5 gap-1.25 text-sm hover:cursor-pointer hover:text-(--primary-color) transition-colors
              after:content-['']
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5
              after:bg-(--primary-color) after:transition-all hover:after:w-full
            ">
              <RefreshCcw />
              لوازم دست دوم
            </li>

            <li className="flex relative items-center justify-between py-2 px-2.5 gap-1.25 text-sm hover:cursor-pointer hover:text-(--primary-color) transition-colors
              after:content-['']
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5
              after:bg-(--primary-color) after:transition-all hover:after:w-full
            ">
              <BuildingComplex />
              خرید سازمانی
            </li>

            <li className="flex relative items-center justify-between py-2 px-2.5 gap-1.25 text-sm hover:cursor-pointer hover:text-(--primary-color) transition-colors
              after:content-['']
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5
              after:bg-(--primary-color) after:transition-all hover:after:w-full
            ">
              <Phone />
              ارتباط با ما
            </li>

            <li className="relative text-sm hover:cursor-pointer hover:text-(--primary-color) transition-colors
              after:content-['']
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5
              after:bg-(--primary-color) after:transition-all hover:after:w-full
            ">
              <Link href="/about" className="py-2 px-2.5 flex gap-1 items-center justify-between">
                <Info />
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile sidebar */}
        <div
          className={`md:hidden ${!isMobileMenuOpen ? "translate-x-full" : "translate-x-0"} fixed flex flex-col justify-between top-0 bottom-0 right-0 transition-transform bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 w-3/5 z-100000000`}
        >
          <div className="bg-violet-50/70 dark:bg-gray-900 flex justify-between items-center py-4 px-3 absolute w-full h-20">
            <Image width={100} height={40} src="/images/logo.png" alt="Logo" className="sm:max-w-40 w-28 shrink" />

            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-xl bg-white dark:bg-gray-700 text-xl text-gray-600 dark:text-gray-200 shadow-sm hover:text-(--primary-color) transition-colors">
                <ThemeToggle />
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex size-9 items-center justify-center rounded-xl bg-white dark:bg-gray-700 text-xl text-gray-600 dark:text-gray-200 shadow-sm hover:text-(--primary-color) transition-colors"
                aria-label="بستن منو"
              >
                <X />
              </button>
            </div>
          </div>

          <div className="flex-1 mt-20 overflow-auto">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-sm:*:text-sm">
              <li className="overflow-hidden">
                <button
                  onClick={() => setIsCategoriesMenuOpen(!isCategoriesMenuOpen)}
                  className={`flex gap-2 py-3 px-2 justify-between w-full hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors ${
                    isCategoriesMenuOpen ? "text-(--primary-color)!" : ""
                  }`}
                >
                  <div className="flex gap-1 items-center">
                    <Menu />
                    دسته بندی محصولات
                  </div>

                  <ChevronDown className={isCategoriesMenuOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>

                <div className={`w-full ${isCategoriesMenuOpen ? "h-fit" : "h-0"} transition-all`}>
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/products?category=${category.name}`}
                          className="flex items-center gap-3 rounded-lg px-3 py-4 text-sm hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => {
                            setIsCategoriesMenuOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <span className="shrink-0 rounded-lg bg-violet-100 dark:bg-violet-900 p-2 text-(--primary-color)">
                            <category.icon />
                          </span>

                          <span className="text-(--text-primary) transition-colors">
                            {category.name_fa}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="hover:text-red-500! hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                <Link
                  href="/landing/offer"
                  className="px-2 py-3 flex gap-2! justify-start!"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BadgePercent />
                  فروش ویژه!
                </Link>
              </li>

              <li className="flex gap-2! justify-start! px-2 py-3 hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors">
                <RefreshCcw />
                لوازم دست دوم
              </li>

              <li className="flex gap-2! justify-start! px-2 py-3 hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors">
                <BuildingComplex />
                خرید سازمانی
              </li>

              <li className="flex gap-2! justify-start! px-2 py-3 hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors">
                <Phone />
                ارتباط با ما
              </li>

              <li className="flex gap-2! justify-start! px-2 py-3 hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors">
                <Info />
                درباره ما
              </li>
            </ul>
          </div>

          <div className="px-3 py-2 w-full shrink-0 border-t border-gray-200 dark:border-gray-700">
            {isLoggedIn ? (
              <Link
                href="/profile/dashboard"
                className="btn-primary w-full py-2 flex gap-2 justify-center items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserRound />
                <span>ورود به حساب کاربری</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="btn-primary w-full py-2 flex gap-2 justify-center items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn />
                <span>ورود | ثبت نام</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-gray-900/70 z-100002!"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile bottom navigation */}
        <div className="py-5 px-3 fixed bottom-0 w-full z-10">
          <div className="bg-white/80 dark:bg-gray-900/85 backdrop-blur-xl border border-gray-200/70 dark:border-gray-700 shadow-lg md:hidden z-100000 flex justify-between *:flex-1 *:flex *:justify-center *:flex-col *:items-center *:gap-1 rounded-full px-2 py-1.5 *:px-1 *:py-1 *:text-xs">
            {mobileNavItems.map(({ href, label, icon: Icon }) => {
              const active =
                href === "/profile/dashboard"
                  ? pathname.startsWith("/profile")
                  : pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`${
                    active
                      ? "text-(--primary-color) bg-violet-100 dark:bg-violet-950/70"
                      : "text-gray-700 dark:text-gray-300"
                  } px-2 py-2 rounded-full transition-colors`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
