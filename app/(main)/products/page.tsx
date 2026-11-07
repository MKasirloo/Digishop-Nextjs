"use client";

import { useEffect, useState } from "react";
import ProductGrid from "@/components/ProductsGrid";
import ProductsFilter from "@/components/ProductsFilter";
import products from "@/app/data/products";
import * as Icons from "@/app/assets/icons";
import "./Products.css";
import { useSearchParams } from "next/navigation";
import searchProducts from "@/app/lib/searchProducts";

export default function Products() {
	const searchParams = useSearchParams();
	const query = searchParams.get("query");
	const category = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState(products.filter(p => (category ? p.category === category : true)));
	const [currentOrderBy, setCurrentOrderBy] = useState("bestSelling");
	const [isOrderByClosed, setIsOrderByClosed] = useState(true);
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false); 
	const orderByText: any = {
		bestSelling: "پرفروش ترین",
		mostExpensive: "گران ترین",
		cheapest: "ارزان ترین",
		mostPopular: "محبوب ترین",
	}

	function orderProducts(action: string) {
		const tempFilteredProducts = [...filteredProducts];
		switch(action) {
			case "bestSelling":
				setFilteredProducts(tempFilteredProducts.sort((a, b) => a.sold - b.sold));
				break;
			case "cheapest":
				setFilteredProducts(tempFilteredProducts.sort((a, b) => a.price - b.price));
				break;
			case "mostExpensive":
				setFilteredProducts(tempFilteredProducts.sort((a, b) => b.price - a.price));
				break;
			case "mostPopular":
				setFilteredProducts(tempFilteredProducts.sort((a, b) => a.rating - b.rating));
				break;
		}
	}
	useEffect(() => {
		setFilteredProducts(
			query
				? searchProducts(query)
				: products.filter(p => category ? p.category === category : true)
		);
	}, [query, category]);

  return (
    <>
		<div className={`mobileFilterMenuOverlay ${isFilterMenuOpen ? "open" : ''}`} onClick={() => setIsFilterMenuOpen(false)}></div>
			<div className={`OrderListOverlay ${isOrderByClosed ? 'hidden' : ''}`} onClick={() => setIsOrderByClosed(true)}></div>
			<div className="productsWrapper">
				<div className="productsContainer">
					<div className="productsContainerTop flex justify-between items-center">
						<div className="orderBySection max-md:px-2 max-md:py-3">
							<div className="max-md:border-2 max-md:border-(--primary-color) max-md:text-(--primary-color) max-md:flex max-md:gap-1 max-md:w-fit max-md:text-xs max-md:items-center max-md:px-2 max-md:py-1 max-md:rounded-lg max-md:font-medium">
								<div className="orderByText" onClick={() => setIsOrderByClosed(false)}>
									<Icons.OrderIcon className="w-5 h-5" />
									<span>مرتب سازی بر اساس:</span>
								</div>
								<div className="currentOrderBy">
									{orderByText[currentOrderBy]}
								</div>
							</div>
							<div className={`orderByList ${isOrderByClosed ? 'closed' : ''} *:rounded-lg *:hover:bg-(--primary-color)/10! transition-colors py-2`}>
								<button
									className={`orderByListItem ${currentOrderBy === 'bestSelling' ? 'selected' : ''}`}
									onClick={() => {
										setCurrentOrderBy("bestSelling");
										orderProducts("bestSelling");
										setIsOrderByClosed(true);
									}}
								>
									پرفروش ترین
								</button>
								<button
									className={`orderByListItem ${currentOrderBy === 'cheapest' ? 'selected' : ''}`}
									onClick={() => {
										setCurrentOrderBy("cheapest");
										orderProducts("cheapest");
										setIsOrderByClosed(true);
									}}
								>
									ارزان ترین
								</button>
								<button
									className={`orderByListItem ${currentOrderBy === 'mostExpensive' ? 'selected' : ''}`}
									onClick={() => {
										setCurrentOrderBy("mostExpensive");
										orderProducts("mostExpensive");
										setIsOrderByClosed(true);
									}}
								>
									گران ترین
								</button>
								<button
									className={`orderByListItem ${currentOrderBy === 'mostPopular' ? 'selected' : ''}`}
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
						<button className="showFiltersButton btn-primary!" onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
							<p>فیلترها</p>
							<Icons.FilterIcon />
						</button>
					</div>
					<ProductGrid products={filteredProducts} />
				</div>
				<div className={`productFilters ${isFilterMenuOpen ? "open" : ''}`}>
					<ProductsFilter
						products={products}
						setFilteredProducts={setFilteredProducts}
					/>
				</div>
			</div>
    </>
  );
}
