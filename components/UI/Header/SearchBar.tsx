"use client";

import { CrossIcon, OpenInIcon, SearchIcon, TomanThinIcon } from "@/app/assets/icons";
import searchProducts from "@/app/lib/searchProducts";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [searchInput, setSearchInput] = useState(query ?? '');
  const [debouncedSearch, setDebouncedSearch] = useState(searchInput);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();
  const topSearchs = ["موبایل", "iPhone", "اپل"];
  
  function handleSearch() {
    if(searchInput === '')
      return;
    router.replace(`/products?query=${encodeURIComponent(searchInput)}`);
    setIsSearchOpen(false);
    inputRef.current.blur();
  }
  
  useEffect(() => {
    const timeOut = setTimeout(() => setDebouncedSearch(searchInput), 200);
    
    return () => clearTimeout(timeOut);
  }, [searchInput]);
  
  const res = (debouncedSearch.trim() !== '' ? searchProducts(debouncedSearch.trim()) : []);

  useEffect(() => {
    function handleKeyDown(e) {
      if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        document.getElementById("search-input")?.focus();
        setIsSearchOpen(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return(
    <>
      {isSearchOpen && (<div className="fixed inset-0 bg-black/30 z-100" onClick={() => setIsSearchOpen(false)}></div>)}
      <div className={`z-100001! flex items-center gap-2.5 bg-gray-200/70 h-10 max-w-150 w-full pr-2.5 relative text-gray-500! hover:bg-gray-200 focus-within:bg-gray-200 transition-colors ${isSearchOpen ? "rounded-t-lg bg-white! border-b border-b-gray-300" : "rounded-lg"}`}
        onClick={() => {
          setIsSearchOpen(true);
          inputRef.current?.focus();
        }}
      >
        <label htmlFor="search-input">
          <Search className="w-6" />
        </label>
        {
          searchInput === '' 
          ? <label htmlFor="search-input" className="w-fit flex gap-1 items-center absolute right-11.5">
            <p className="whitespace-nowrap text-xs">جستجو در </p>
            <span className="font-lalezar text-(--primary-color) text-lg">
              دیجی&zwnj;شاپ
            </span>
          </label>
          : ''
        }
        <input
          id="search-input"
          value={searchInput}
          type="text"
          ref={inputRef}
          onKeyDown={(e) => {if(e.key === "Enter") handleSearch()}}
          onChange={(e) => setSearchInput(e.target.value)}
          className="placeholder:text-gray-500 text-xs font-medium w-full h-full outline-none"
        />
        {(searchInput === '' && !isSearchOpen) ? (
          <div className="max-md:hidden absolute left-2.5 top-1/2 -translate-y-1/2 bg-gray-300/60 shadow-sm text-xs px-2 py-1 rounded-md">
            Ctrl + K
          </div>
        ) : ''}
        {(isSearchOpen && searchInput !== '') && (
          <button onClick={(e) => {e.stopPropagation(); setSearchInput('');}} className="absolute left-2 p-1 rounded-md bg-red-200 text-red-500">
            <X className="w-4 h-4" />
          </button>
        )}
        {isSearchOpen && (
          <>
            <div className="absolute border-t border-gray-300 bg-white right-0 left-0 top-full h-fit p-5 rounded-b-lg shadow-md z-100001 max-h-100 overflow-auto">
              {searchInput === '' && (
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <div>جستجو های محبوب:</div>
                    {topSearchs.map(s => (
                      <div key={s} className="rounded-full py-1 px-2 text-sm flex gap-1 items-center border border-gray-300 text-neutral-700 hover:bg-gray-100 hover:cursor-pointer transition-colors" onClick={() => setSearchInput(s)}>
                        <Search className="w-4 h-4" />
                        {s}
                      </div>
                    ))}
                  </div>
                  <Image src="/images/posters/iPhone-18.png" alt="iPhone 18" height={450} width={800} />
                </div>
              )}
              {res.map(p => (
                <Link href={`/products/${p.id}`} target="_blank" onClick={() => setIsSearchOpen(false)} key={p.id} className="group relative flex w-full my-2 items-center hover:bg-violet-100/80 transition-colors hover:cursor-pointer rounded-md py-1 px-2">
                  <div className="ml-1">
                    <Image src={p.image} alt={p.name_en} width={50} height={50} className="w-12.5 h-12.5 object-contain" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="text-(--text-primary) font-medium">{p.name}</div>
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