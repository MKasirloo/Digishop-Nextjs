"use client";

import { useEffect, useState } from "react";
import ProductGrid from "@/components/ProductsGrid";
import ProductsFilter from "@/components/ProductsFilter";
import * as Icons from "@/app/assets/icons";
import ProductsSkeleton from "@/components/Skeletons/ProductsSkeleton";
import { SearchX } from "lucide-react";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [currentOrderBy, setCurrentOrderBy] = useState("bestSelling");
    const [isOrderByClosed, setIsOrderByClosed] = useState(true);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
		const [isLoading, setIsLoading] = useState(true);
		const [filteredProducts, setFilteredProducts] = useState([]);
		
    const orderByText: Record<string, string> = {
			bestSelling: "پرفروش ترین",
			mostExpensive: "گران ترین",
			cheapest: "ارزان ترین",
			mostPopular: "محبوب ترین",
    };

    useEffect(() => {
			async function getProducts() {
				try {
					const response = await fetch("/api/products");
					if(!response.ok)
						throw new Error("Failed to fetch products");
					const data = await response.json();
					setProducts(data);
					setFilteredProducts(data);
				} catch(e) {
					console.log(e);
				} finally {
					setIsLoading(false);
				}
			}
			getProducts();
		}, []);

    function orderProducts(action: string) {
			const sortedProducts = [...filteredProducts];

			switch (action) {
				case "bestSelling":
					sortedProducts.sort((a, b) => b.sold - a.sold);
					break;

				case "cheapest":
					sortedProducts.sort((a, b) => a.price - b.price);
					break;

				case "mostExpensive":
					sortedProducts.sort((a, b) => b.price - a.price);
					break;

				case "mostPopular":
					sortedProducts.sort((a, b) => b.rating - a.rating);
					break;
			}

			setFilteredProducts(sortedProducts);
    }

  return (
    <>
			<div className={isFilterMenuOpen ? "max-lg:fixed max-lg:inset-0 max-lg:bg-black/50 max-lg:z-1000" : "max-lg:hidden"} onClick={() => setIsFilterMenuOpen(false)}></div>
			<div className={`fixed inset-0 bg-black/50 z-1000 ${isOrderByClosed ? "hidden" : ''}`} onClick={() => setIsOrderByClosed(true)}></div>
			<div className="flex flex-row-reverse justify-between">
				<div className="flex-1">
					<div className=" flex justify-between items-center">
						<div className="flex items-center gap-1 max-md:px-2 max-md:py-3">
							<div className="max-md:border-2 max-md:border-(--primary-color) max-md:text-(--primary-color) max-md:flex max-md:gap-1 max-md:w-fit max-md:text-xs max-md:items-center max-md:px-2 max-md:py-1 max-md:rounded-lg max-md:font-medium">
								<div className="flex items-center gap-1 md:pointer-events-none" onClick={() => setIsOrderByClosed(false)}>
									<Icons.OrderIcon className="w-5 h-5" />
									<span>مرتب سازی بر اساس:</span>
								</div>
								<div className="hidden max-md:block">
									{orderByText[currentOrderBy]}
								</div>
							</div>
							<div className={`flex gap-1.25 *:p-2.5 ${isOrderByClosed ? "max-md:hidden" : "bg-white flex-col divide-y divide-gray-300 fixed top-1/2 left-1/2 z-10001 -translate-y-1/2 -translate-x-1/2 rounded-md"} *:rounded-lg *:hover:bg-(--primary-color)/10! transition-colors py-2`}>
								<button
									className={`${currentOrderBy === 'bestSelling' ? "text-(--primary-color)" : ''}`}
									onClick={() => {
										setCurrentOrderBy("bestSelling");
										orderProducts("bestSelling");
										setIsOrderByClosed(true);
									}}
								>
									پرفروش ترین
								</button>
								<button
									className={`${currentOrderBy === 'cheapest' ? "text-(--primary-color)" : ''}`}
									onClick={() => {
										setCurrentOrderBy("cheapest");
										orderProducts("cheapest");
										setIsOrderByClosed(true);
									}}
								>
									ارزان ترین
								</button>
								<button
									className={`${currentOrderBy === 'mostExpensive' ? "text-(--primary-color)" : ''}`}
									onClick={() => {
										setCurrentOrderBy("mostExpensive");
										orderProducts("mostExpensive");
										setIsOrderByClosed(true);
									}}
								>
									گران ترین
								</button>
								<button
									className={`${currentOrderBy === 'mostPopular' ? "text-(--primary-color)" : ''}`}
									onClick={() => {
										setCurrentOrderBy("mostPopular");
										orderProducts("mostPopular");
										setIsOrderByClosed(true);
									}}
								>
									محبوب ترین
								</button>
							</div>
						</div>
						<button className="flex ml-2 lg:hidden btn-primary justify-between items-center gap-1.5 py-0.5 px-2.5" onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
							<p>فیلترها</p>
							<Icons.FilterIcon />
						</button>
					</div>
					{
						isLoading
						? (<ProductsSkeleton />) 
						: filteredProducts.length === 0
							? <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
									<div className="flex items-center justify-center w-20 h-20 rounded-full bg-(--primary-color)/10">
										<SearchX size={38} className="text-(--primary-color)" />
									</div>
									<div className="flex flex-col gap-2">
										<h2 className="text-lg font-bold text-gray-800">
											محصولی پیدا نشد!
										</h2>
										<p className="text-sm text-gray-500 max-w-sm leading-7">
											متأسفانه محصولی با این مشخصات پیدا نشد.
											فیلترها رو تغییر دهید یا دوباره امتحان کنید.
										</p>
									</div>
								</div> 
							: <ProductGrid products={filteredProducts} />
					}
				</div>
				<div className={`sticky top-20 w-1/5 justify-center mx-2 border border-gray-300 rounded-lg shadow-md h-fit max-lg:h-full max-md:z-10001 max-lg:m-0 max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bottom-0 max-lg:w-75 ${isFilterMenuOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"} bg-white transition-transform ${isFilterMenuOpen ? "open" : ''}`}>
					<h2 className="font-bold text-(--text-natural) text-2xl py-2 px-3">
						فیلتر ها 
					</h2>
					<ProductsFilter
						products={products}
						setFilteredProducts={setFilteredProducts}
					/>
				</div>
			</div>
    </>
  );
}
