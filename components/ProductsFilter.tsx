"use client";

import { useState } from 'react';
import './ProductsFilter.css'
import { TomanIcon } from '@/app/assets/icons';
import { ChevronDown } from 'lucide-react';

export default function ProductsFilter({ products, setFilteredProducts }) {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [offerOnly, setOfferOnly] = useState(false);
  const productsMaxPrice = Math.max(0, ...products.map(p => p.price));
  const [price, setPrice] = useState({min: 0, max: productsMaxPrice});
  function onMinChange(e) {
    let newPrice = {...price, min: Number(e.target.value)};
    newPrice.min = Math.max(newPrice.min, 0);
    if(newPrice.min > price.max) {
      newPrice.min = price.max;
    }
    setPrice(newPrice);
    filterProducts(newPrice);
  }

  function onMaxChange(e) {
    let newPrice = {...price, max: (e.target.value === '' ? productsMaxPrice : Number(e.target.value))};
    newPrice.max = Math.min(newPrice.max, productsMaxPrice);
    if(newPrice.max < price.min) {
      newPrice.max = price.min;
    }
    setPrice(newPrice);
    filterProducts(newPrice);
  }

  function onInStockChange() {
    setInStockOnly(!inStockOnly);
    filterProducts(price, !inStockOnly, offerOnly);
  }

  function onOfferOnlyChange() {
    setOfferOnly(!offerOnly);
    filterProducts(price, inStockOnly, !offerOnly);
  }

  function filterProducts(price, inStockOnly?: boolean, offerOnly?: boolean) {
    setFilteredProducts(products.filter(
      p => ((
        p.price * (1 - p.discount_percent / 100)) >= price.min
        && (p.price * (1 - p.discount_percent / 100)) <= price.max
        && (!inStockOnly || p.in_stock)
        && (!offerOnly || (p.discount_percent > 0))
      )
    ));
  }
  return(
    <>
      <ul className="w-full font-medium *:p-2 *:border-b *:border-gray-300 *:last:border-none *:w-full">
        <li>
          <div className="flex justify-between items-center gap-2">
            <p>فقط نمایش کالا های موجود: </p>
            <div className={`switch ${inStockOnly ? "on" : ''}`} onClick={onInStockChange}></div>
          </div>
        </li>
        <li>
          <div className="flex justify-between items-center">
            <p>فقط نمایش کالا های تخفیف دار: </p>
            <div className={`switch ${offerOnly ? "bg-(--offer-color)" : ''}`} onClick={onOfferOnlyChange}></div>
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
                <label htmlFor="min-filter" className="text-(--text-secondary)">از</label>
                <input id="min-filter" type="text" className="flex-1 outline-none border-b border-gray-300 text-center text-xl transition-colors focus:border-(--text-natural)" onChange={onMinChange} value={(price.min > 0 ? price.min : 0)} />
                <TomanIcon width={20} />
              </div>
              <div className="flex gap-2 my-5">
                <label htmlFor="max-filter" className="text-(--text-secondary)">تا</label>
                <input id="max-filter" type="text" className="flex-1 outline-none border-b border-gray-300 text-center text-xl transition-colors focus:border-(--text-natural)" onChange={onMaxChange} value={price.max} />
                <TomanIcon width={20} />
              </div>
              <div className="priceRange">
                <div className="priceRangeDefault"></div>
                <div className="priceRangeProgressBar"
                  style={{
                    left: Math.floor((price.min / productsMaxPrice) * 100) + '%',
                    right: Math.floor(100 - ((price.max / productsMaxPrice) * 100)) + '%'
                  }}>
                </div>
                <input id="minPriceSlider" type="range" step={500000} min={0} max={productsMaxPrice} onChange={onMinChange} value={price.min} />
                <input id="maxPriceSlider" type="range" step={500000} min={0} max={productsMaxPrice} onChange={onMaxChange} value={price.max} />
              </div>
            </div>
          </details>
        </li>
      </ul>
    </>
  );
}