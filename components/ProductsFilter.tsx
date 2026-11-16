"use client";

import { useEffect, useState } from "react";
import { TomanIcon } from "@/app/assets/icons";
import { Check, ChevronDown } from "lucide-react";
import Switch from "./UI/Switch";
import Button from "./UI/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import searchProducts from "@/app/lib/searchProducts";
import { categories as allCategories } from "@/app/data/categories";

export default function ProductsFilter({ products, setFilteredProducts }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const categoryParam = searchParams.get("categories");
  const categories = categoryParam?.split(",") ?? [];
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || 1_000_000_000;
  const inStockOnly = searchParams.get("inStockOnly") === "true";
  const offerOnly = searchParams.get("offerOnly") === "true";
  const router = useRouter();

  const [filters, setFilters] = useState({
    inStockOnly: inStockOnly ?? false,
    offerOnly: offerOnly ?? false,
    price: {
      min: minPrice,
      max: maxPrice,
    },
    categories: categories,
  });

  useEffect(() => {
    let filteredProducts = search
      ? searchProducts(search, products)
      : [...products];
    if (categories.length > 0)
      filteredProducts = filteredProducts.filter((p) => categories.includes(p.category));

    if (inStockOnly)
      filteredProducts = filteredProducts.filter((p) => p.stock > 0);

    if (offerOnly)
      filteredProducts = filteredProducts.filter((p) => p.discount_percent > 0);

    filteredProducts = filteredProducts.filter((p) => (p.price >= minPrice && p.price <= maxPrice));

    setFilteredProducts(filteredProducts);
  }, [products, search, categoryParam, inStockOnly, offerOnly, minPrice, maxPrice]);

  function applyFilters() {
    const params = new URLSearchParams(searchParams.toString());

    if(filters.inStockOnly)
      params.set("inStockOnly", "true");
    else
      params.delete("inStockOnly");
    
    if(filters.offerOnly)
      params.set("offerOnly", "true");
    else
      params.delete("offerOnly");

    if(filters.price.min > 0)
      params.set("minPrice", String(filters.price.min));
    else
      params.delete("minPrice");

    if(filters.price.max < 1_000_000_000)
      params.set("maxPrice", String(filters.price.max));
    else
      params.delete("maxPrice");

    if(search)
      params.set("search", search);

    if(filters.categories.length > 0)
      params.set("categories", filters.categories.join(','));
    else
      params.delete("categories");

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col justify-between">
      <ul className="w-full overflow-y-auto font-medium *:p-2 *:border-b *:border-gray-300 *:last:border-none *:w-full">
        <li>
          <div className="flex justify-between items-center gap-2 h-10">
            <p>فقط نمایش کالا های موجود: </p>
            <Switch
              checked={filters.inStockOnly}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  inStockOnly: !prev.inStockOnly,
                }))
              }
            />
          </div>
        </li>
        <li>
          <div className="flex justify-between items-center h-10">
            <p>فقط نمایش کالا های تخفیف دار: </p>
            <Switch
              checked={filters.offerOnly}
              onChange={() =>
                setFilters((prev) => ({ ...prev, offerOnly: !prev.offerOnly }))
              }
              className="peer-checked:bg-(--offer-color)!"
            />
          </div>
        </li>
        <li>
          <details className="group">
            <summary className="flex justify-between items-center h-10 hover:cursor-pointer">
              <p>فیلتر قیمت</p>
              <ChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="w-full">
              <div className="flex gap-2 my-5">
                <label htmlFor="min-filter" className="text-(--text-secondary)">
                  از
                </label>
                <input
                  id="min-filter"
                  type="text"
                  value={filters.price.min}
                  step={100000}
                  onChange={(e) => setFilters(prev => ({...prev, price: {...prev.price, min: Number(e.target.value)}}))}
                  className="flex-1 outline-none border-b border-gray-300 text-center text-xl transition-colors focus:border-(--primary-color)"
                />
                <TomanIcon width={20} />
              </div>
              <div className="flex gap-2 my-5">
                <label htmlFor="max-filter" className="text-(--text-secondary)">
                  تا
                </label>
                <input
                  id="max-filter"
                  type="text"
                  value={filters.price.max}
                  step={100000}
                  onChange={(e) => setFilters(prev => ({...prev, price: {...prev.price, max: Number(e.target.value)}}))}
                  className="flex-1 outline-none border-b border-gray-300 text-center text-xl transition-colors focus:border-(--primary-color)"
                />
                <TomanIcon width={20} />
              </div>
              <div
                dir="ltr"
                className="
                flex items-center relative h-5 *:absolute *:pointer-events-none *:bg-none *:appearance-none *:w-full *:[-webkit-appearance:none]
                [&>*::-webkit-slider-thumb]:pointer-events-auto
                [&>*::-webkit-slider-thumb]:appearance-none
                [&>*::-webkit-slider-thumb]:w-5
                [&>*::-webkit-slider-thumb]:h-5
                [&>*::-webkit-slider-thumb]:rounded-full
                [&>*::-webkit-slider-thumb]:bg-(--primary-color)
                [&>*::-webkit-slider-thumb]:cursor-grab

                [&>*::-moz-range-thumb]:pointer-events-auto
                [&>*::-moz-range-thumb]:appearance-none
                [&>*::-moz-range-thumb]:w-5
                [&>*::-moz-range-thumb]:h-5
                [&>*::-moz-range-thumb]:rounded-full
                [&>*::-moz-range-thumb]:bg-(--primary-color)
                [&>*::-moz-range-thumb]:cursor-grab
                "
              >
                <div className="absolute h-1 bg-gray-300 rounded-lg"></div>
                <div
                  className="rounded-full h-1 absolute bg-(--primary-color)"
                  style={{
                    left: Math.round(filters.price.min / 10_000_000) + '%',
                    right: (100 - Math.round(filters.price.max / 10_000_000)) + '%',
                    width: "auto"
                  }}
                ></div>
                <input
                  id="minPriceSlider"
                  type="range"
                  step={500000}
                  min={0}
                  max={1_000_000_000}
                  value={filters.price.min}
                  onChange={(e) => setFilters(prev => ({...prev, price: {...prev.price, min: Number(e.target.value)}}))}
                  className="z-2"
                />
                <input
                  id="maxPriceSlider"
                  type="range"
                  step={500000}
                  min={0}
                  max={1_000_000_000}
                  value={filters.price.max}
                  onChange={(e) => setFilters(prev => ({...prev, price: {...prev.price, max: Number(e.target.value)}}))}
                  className="z-2"
                />
              </div>
            </div>
          </details>
        </li>
        <li>
          <details className="group">
            <summary className="flex justify-between items-center h-10 hover:cursor-pointer">
              <p>دسته بندی ها</p>
              <ChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="w-full">
              <ul className="divide-y divide-gray-300/70 px-2">
                {allCategories.map((c) => (
                  <li
                    key={c.id}
                    className="text-(--text-primary)"
                    >
                    <label
                      htmlFor={`category-checkbox-${c.id}`}
                      className="flex items-center gap-2 cursor-pointer w-full hover:bg-gray-100/90 transition-colors p-2"
                    >
                      <input
                        id={`category-checkbox-${c.id}`}
                        type="checkbox"
                        checked={filters.categories.includes(c.name)}
                        className="peer sr-only"
                        onChange={() =>
                          setFilters((prev) => ({
                            ...prev,
                            categories: prev.categories.includes(c.name)
                              ? prev.categories.filter(
                                  (category) => category !== c.name
                                )
                              : [...prev.categories, c.name],
                          }))
                        }
                      />
                      <span
                        className="w-5 h-5 border-2 border-black rounded-md flex justify-center items-center
                        peer-checked:border-(--primary-color)
                        peer-checked:bg-(--primary-color)"
                      >
                        <Check color="white" />
                      </span>
                      {c.name_fa}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </li>
        <li>
          <Button className="btn-primary w-full py-2" onClick={applyFilters}>اعمال فیلتر ها</Button>
        </li>
      </ul>
    </div>
  );
}
