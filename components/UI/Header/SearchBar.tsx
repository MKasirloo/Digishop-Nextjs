"use client";

import { CrossIcon, OpenInIcon, SearchIcon, TomanThinIcon } from "@/app/assets/icons";
import searchProducts from "@/app/lib/searchProducts";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const res = searchProducts(searchInput);
  return(
    <>
      {searchInput !== '' && (<div className="fixed inset-0 bg-black/30 z-100" onClick={() => setSearchInput('')}></div>)}
      <div className={`z-100001! flex items-center gap-2.5 bg-gray-200/70 h-10 max-w-150 w-full pr-2.5 relative text-gray-500! hover:bg-gray-200 focus-within:bg-gray-200 transition-colors ${searchInput !== '' ? "rounded-t-lg bg-white! border-b border-b-gray-300" : "rounded-lg"}`}>
        <SearchIcon className="w-[25px]" />
        <input
          id="search-input"
          value={searchInput}
          type="text"
          placeholder="جستجو در محصولات..."
          onChange={(e) => setSearchInput(e.target.value)}
          className="placeholder:text-gray-500 text-xs font-medium w-full h-full outline-none"
        />
        {searchInput !== '' && (
          <button onClick={() => setSearchInput('')} className="absolute left-2 rounded-md bg-red-200 text-red-500"><CrossIcon /></button>
        )}
        {searchInput !== '' && (
          <>
            <div className="absolute border-t border-gray-300 bg-white right-0 left-0 top-full h-fit p-5 rounded-b-lg shadow-md z-100001 max-h-100 overflow-auto">
              {res.map(p => (
                <Link href={`/products/${p.id}`} target="_blank" key={p.id} className="group relative flex w-full my-2 items-center hover:bg-violet-100/80 transition-colors hover:cursor-pointer rounded-md py-1 px-2">
                  <div className="ml-1">
                    <Image src={p.image_src} alt={p.english_name} width={50} height={50} className="w-12.5 h-12.5 object-contain" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="text-(--text-primary)">{p.name}</div>
                    <div className="text-xs text-(--text-secondary) my-0.5">{p.brand}</div>
                    <div className="flex gap-1 items-center text-lg text-neutral-700">
                      <div>
                        {p.price.toLocaleString("fa-IR")}
                      </div>
                      <span>
                        <TomanThinIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <OpenInIcon className="absolute left-2 top-3 text-white w-4 h-4 group-hover:text-neutral-500" />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}