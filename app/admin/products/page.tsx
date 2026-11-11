"use client";

import Link from "next/link";
import {
  Plus,
  Search,
  Package,
  Boxes,
  ShoppingBag,
  AlertCircle,
  Pencil,
  Trash2,
  Filter,
  LayoutGrid,
  List,
  Download,
  ChevronRight,
  ChevronLeft,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react";

import initialProducts from "@/app/data/products";
import { TomanThinIcon } from "@/app/assets/icons";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import searchProducts from "@/app/lib/searchProducts";

const stats = [
  {
    title: "کل محصولات",
    value: "1248",
    description: "محصول ثبت شده در فروشگاه",
    icon: Package,
    color: "text-(--primary-color)",
    bg: "bg-[#f1ecff]",
  },
  {
    title: "محصولات موجود",
    value: "1,120",
    description: "قابل سفارش و خرید",
    icon: ShoppingBag,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "محصولات ناموجود",
    value: "128",
    description: "نیازمند تأمین موجودی",
    icon: AlertCircle,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "مجموع موجودی",
    value: "8,420",
    description: "تعداد کالا در انبار",
    icon: Boxes,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price);
}

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page")) || 1;
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const lastPage = Math.ceil(products.length / 5) || 1;
  const currentPage = Math.min(page, Math.max(lastPage, 1));
  const currentProducts = products.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);
    const filteredProducts = value === ""
      ? initialProducts
      : searchProducts(value);
    setProducts(filteredProducts);
    router.replace(`/admin/products?page=1`);
  }

  function renderPagination() {
    if(lastPage <= 1)
      return null;

    else if(lastPage === 2) {
      return(
        <>
          <Link href={`/admin/products?page=1`}><button className={`flex justify-center items-center w-8 h-8 opacity-100! ${page === 1 ? "btn-primary" : "btn-secondary"}`} disabled={page === 1}>1</button></Link>
          <Link href={`/admin/products?page=2`}><button className={`flex justify-center items-center w-8 h-8 opacity-100! ${page === 2 ? "btn-primary" : "btn-secondary"}`} disabled={page === 2}>2</button></Link>
        </>
      );
    }
    else {
      if(page === 1) {
        return(
          <>
            <Link href={`/admin/products?page=1`}><button className="flex justify-center items-center w-8 h-8 opacity-100! btn-primary" disabled>1</button></Link>
            <Link href={`/admin/products?page=2`}><button className="flex justify-center items-center w-8 h-8 btn-secondary">2</button></Link>
            <Link href={`/admin/products?page=2`}><button className="flex justify-center items-center w-8 h-8 btn-secondary">3</button></Link>
          </>
        );
      }
      else if(page === lastPage) {
        return(
          <>
            <Link href={`/admin/products?page=${page - 2}`}><button className="flex justify-center items-center w-8 h-8 btn-secondary">{page - 2}</button></Link>
            <Link href={`/admin/products?page=${page - 1}`}><button className="flex justify-center items-center w-8 h-8 btn-secondary">{page - 1}</button></Link>
            <Link href={`/admin/products?page=${page}`}><button className="flex justify-center items-center w-8 h-8 opacity-100! btn-primary" disabled>{page}</button></Link>
          </>
        );
      }
      return(
        <>
          <Link href={`/admin/products?page=${page - 1}`}><button className="flex justify-center items-center w-8 h-8 btn-secondary">{page - 1}</button></Link>
          <Link href={`/admin/products?page=${page}`}><button className="flex justify-center items-center w-8 h-8 opacity-100! btn-primary" disabled>{page}</button></Link>
          <Link href={`/admin/products?page=${page + 1}`}><button className="flex justify-center items-center w-8 h-8 btn-secondary">{page + 1}</button></Link>
        </>
      );
    }
  }
  return (
    <div className="max-w-7xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">مدیریت محصولات</h1>
          <p className="text-sm text-(--text-secondary) mt-2">
            محصولات فروشگاه، قیمت‌ها و موجودی انبار را مدیریت کنید.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="h-10 px-4 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-sm hover:bg-gray-50 transition-colors"
          >
            <Download size={18} />
            خروجی گرفتن
          </button>

          <Link
            href="/admin/products/create"
            className="h-10 px-4 flex items-center justify-center gap-2 rounded-lg btn-primary text-sm"
          >
            <Plus size={18} />
            محصول جدید
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white border border-gray-200 rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  <stat.icon size={19} />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {stat.title}
                </span>
              </div>
            </div>

            <p className="text-2xl font-bold mt-5 tabular-nums">
              {stat.value}
            </p>
            <p className="text-xs text-(--text-secondary) mt-2">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-4 md:p-5 border-b border-gray-200 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold">لیست محصولات</h2>
              <p className="text-xs text-(--text-secondary) mt-1">
                مدیریت و بررسی تمام محصولات فروشگاه
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="h-9 px-3 rounded-lg border border-gray-300 flex items-center gap-2 text-sm hover:bg-gray-50"
              >
                <Filter size={16} />
                فیلتر
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-500"
              >
                <LayoutGrid size={17} />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-(--primary-color) bg-[#f1ecff]"
              >
                <List size={17} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={search}
                onChange={onSearchChange}
                placeholder="جست‌وجو بر اساس نام محصول یا شناسه..."
                className="w-full h-10 pr-10 pl-3 rounded-lg border border-gray-300 text-sm outline-none focus:border-(--primary-color) transition-colors"
              />
            </div>

            <div className="flex items-center gap-1 text-xs bg-gray-100 p-1 rounded-lg">
              <button className="px-4 py-2 rounded-md bg-white shadow-sm font-medium">
                همه
              </button>
              <button className="px-4 py-2 rounded-md text-gray-500">
                موجود
              </button>
              <button className="px-4 py-2 rounded-md text-gray-500">
                ناموجود
              </button>
            </div>
          </div>
        </div>
        {currentProducts.length === 0 ? (
          <div className="w-full h-100 text-gray-600 flex justify-center items-center">
            <h2>
              محصولی با مشخصات مورد نظر یافت نشد.
            </h2>
          </div>
        ) : (
        <div className="overflow-x-auto w-full">
          <table className="text-right w-full">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500">
                <th className="px-5 py-4 font-medium">محصول</th>
                <th className="px-5 py-4 font-medium">شناسه</th>
                <th className="px-5 py-4 font-medium">قیمت</th>
                <th className="px-5 py-4 font-medium">موجودی</th>
                <th className="px-5 py-4 font-medium">فروش</th>
                <th className="px-5 py-4 font-medium">وضعیت</th>
                <th className="px-5 py-4 font-medium text-center">عملیات</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {currentProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-100/70 transition-colors"
                >
                  <td className="px-5 py-4 min-w-100">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 p-1 shrink-0 rounded-lg bg-[#f1ecff] flex items-center justify-center">
                        <Image src={product.image} alt={product.name} width={40} height={40} className="object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1" dir="ltr">
                          {product.name_en}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    #{product.id}
                  </td>

                  <td className="px-5 py-4 flex gap-1 items-center">
                    <p className="text-sm font-semibold tabular-nums">
                      {formatPrice(product.price)}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      <TomanThinIcon className="w-4 -translate-y-0.5" />
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm tabular-nums">
                    {formatPrice(product.stock)}
                  </td>

                  <td className="px-5 py-4 text-sm tabular-nums">
                    {formatPrice(product.sold)}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium ${
                        product.stock > 0
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {product.stock > 0 ? "موجود" : "ناموجود"}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        title="ویرایش محصول"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        type="button"
                        title="حذف محصول"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-red-500 bg-red-50 hover:bg-red-100 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}

        <div className="p-4 border-t border-gray-200 flex items-center justify-between gap-3 max-sm:flex-col">
          <p className="text-xs text-gray-500">
            نمایش 5 محصول از {products.length} محصول
          </p>
          <div className="flex gap-2">
            <Link href={`/admin/products?page=1`}>
              <button className="w-8 h-8 p-1 flex justify-center items-center btn-secondary disabled:border-gray-300! disabled:text-(--text-secondary)" disabled={page === 1}>
                <ChevronsRight className="w-full" />
              </button>
            </Link>
            <Link href={`/admin/products?page=${page - 1}`}>
              <button className="w-8 h-8 p-1 flex justify-center items-center btn-secondary disabled:border-gray-300! disabled:text-(--text-secondary)" disabled={page === 1}>
                <ChevronRight className="w-full" />
              </button>
            </Link>
            {renderPagination()}
            <Link href={`/admin/products?page=${page + 1}`}>
              <button className="w-8 h-8 p-1 flex justify-center items-center btn-secondary disabled:border-gray-300! disabled:text-(--text-secondary)" disabled={page === lastPage}>
                <ChevronLeft className="w-full" />
              </button>
            </Link>
            <Link href={`/admin/products?page=${lastPage}`}>
              <button className="w-8 h-8 p-1 flex justify-center items-center btn-secondary disabled:border-gray-300! disabled:text-(--text-secondary)" disabled={page === lastPage}>
                <ChevronsLeft className="w-full" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
