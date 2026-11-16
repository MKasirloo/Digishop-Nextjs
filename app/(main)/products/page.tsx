"use client";

import { useEffect, useState } from "react";
import ProductGrid from "@/components/ProductsGrid";
import ProductsFilter from "@/components/ProductsFilter";
import * as Icons from "@/app/assets/icons";
import "./Products.css";
import { useSearchParams } from "next/navigation";
import searchProducts from "@/app/lib/searchProducts";
import ProductsSkeleton from "@/components/Skeletons/ProductsSkeleton";

export default function Products() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const category = searchParams.get("category");

    const [products, setProducts] = useState([]);
    const [currentOrderBy, setCurrentOrderBy] = useState("bestSelling");
    const [isOrderByClosed, setIsOrderByClosed] = useState(true);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
		const [isLoading, setIsLoading] = useState(true);
		
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
				} catch(e) {
					console.log(e);
				} finally {
					setIsLoading(false);
				}
			}
			getProducts();
		}, []);
		
		const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
			setFilteredProducts(
				query
					? searchProducts(query)
					: products.filter(p => category ? p.category === category : true)
        );
    }, [query, category, products]);

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
			<div className={`mobileFilterMenuOverlay ${isFilterMenuOpen ? "open" : ''}`} onClick={() => setIsFilterMenuOpen(false)}></div>
			<div className={`fixed inset-0 bg-black/50 z-50 ${isOrderByClosed ? "hidden" : ''}`} onClick={() => setIsOrderByClosed(true)}></div>
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
							<div className={`flex gap-1.25 *:p-2.5 ${isOrderByClosed ? 'closed' : ''} *:rounded-lg *:hover:bg-(--primary-color)/10! transition-colors py-2`}>
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
						<button className="flex lg:hidden btn-primary justify-between items-center gap-1.5 py-0.5 px-2.5" onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
							<p>فیلترها</p>
							<Icons.FilterIcon />
						</button>
					</div>
					{
						isLoading ? <ProductsSkeleton /> : <ProductGrid products={filteredProducts} />
					}
				</div>
				<div className={`w-1/5 justify-center mx-2 border border-gray-300 rounded-lg shadow-md h-fit max-lg:h-full max-md:z-10001 max-lg:m-0 max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bottom-0 max-lg:w-75 ${isFilterMenuOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"} bg-white transition-transform ${isFilterMenuOpen ? "open" : ''}`}>
					<h2 className="font-bold text-(--text-natural) text-2xl py-2 px-3">
						فیلتر ها 
					</h2>
					<ProductsFilter
						products={filteredProducts}
						setFilteredProducts={setFilteredProducts}
					/>
				</div>
			</div>
    </>
  );
}
