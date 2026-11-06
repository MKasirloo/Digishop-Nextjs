"use client";

import Link from "next/link";
import * as Icons from "@/app/assets/icons";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="product-card">
      {product.discount_percent > 0 && (
        <div className="productCardDiscountBadge -mt-px -ml-px">فروش ویژه!</div>
      )}
      <div className="product-card__info">
        <div className="product-card__img-container">
          <img src={product.image_src} />
        </div>
        <div className="product-card__product-name">
          <p>{product.name}</p>
        </div>
      </div>
      <div className="product-card__price-wrapper">
        <div className="product-card__offer">
          <span className="product-card__old-price">
            {product.price.toLocaleString("fa-IR")}
          </span>
          {product.discount_percent !== 0 && (
            <span className="product-card__offer-percent">
              {product.discount_percent}%
            </span>
          )}
        </div>
        <div className="product-card__price">
          <span className="toman">
            <Icons.TomanIcon width={16} />
          </span>
          <span>
            {(
              product.price *
              (1 - product.discount_percent / 100)
            ).toLocaleString("fa-IR")}
          </span>
        </div>
      </div>
    </Link>
  );
}
