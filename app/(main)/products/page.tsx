"use client";

import { useEffect, useState } from "react";
import ProductGrid from "@/components/ProductsGrid";
import ProductsFilter from "@/components/ProductsFilter";
import products from "@/app/data/products";
import * as Icons from "@/app/assets/icons";
import "./Products.css";
import { useSearchParams } from "next/navigation";

export default function Products() {
	const searchParams = useSearchParams();
	const category = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState(products.filter(p => (category ? p.category === category : true)));
	useEffect(() => {
		setFilteredProducts(products.filter(p => (category ? p.category === category : true)));
	}, [category]);
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

  return (
    <>
		<div className={`mobileFilterMenuOverlay ${isFilterMenuOpen ? "open" : ''}`} onClick={() => setIsFilterMenuOpen(false)}></div>
			<div className={`OrderListOverlay ${isOrderByClosed ? 'hidden' : ''}`} onClick={() => setIsOrderByClosed(true)}></div>
			<div className="productsWrapper">
				<div className="productsContainer">
					<div className="productsContainerTop">
						<div className="orderBySection">
							<div className="mobileOrderByButton">
								<div className="orderByText" onClick={() => setIsOrderByClosed(false)}>
									<Icons.OrderIcon />
									<span>مرتب سازی بر اساس:</span>
								</div>
								<div className="currentOrderBy">
									{orderByText[currentOrderBy]}
								</div>
							</div>
							<div className={`orderByList ${isOrderByClosed ? 'closed' : ''}`}>
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
						<button className="showFiltersButton" onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
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
