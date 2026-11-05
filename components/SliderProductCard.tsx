import Link from "next/link";
import Image from "next/image";
import { TomanThinIcon } from "@/app/assets/icons";

export default function SliderProductCard({ product }: { product: any }) {
  return(
    <Link href="/single-product" className="offer-card">
      <div className="offer-card__info">
        <div className="offer-card__img-container">
            <Image width={500} height={500} className="w-full" src={product.image_src} alt={product.name} />
        </div>
        <div className="offer-card__product-name">
            <p>{product.name}</p>
        </div>
        <div className="offer-card__offer">
            <span className="offer-card__old-price">{product.price.toLocaleString("fa-IR")}</span>
            <span className="offer-card__offer-percent">{product.discount_percent}%</span>
        </div>
      </div>
      <div className="offer-card__price-wrapper">
        <div className="offer-card__price">
          <span className="toman">
            <TomanThinIcon className="w-4 h-4" />
          </span>
          <span>{(product.price * (1 - (product.discount_percent / 100))).toLocaleString("fa-IR")}</span>
        </div>
      </div>
    </Link>
  );
}