import Link from "next/link";
import Image from "next/image"
import * as Icons from "@/app/assets/icons";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="flex flex-col justify-between shrink-0 min-h-[350px] p-4 bg-white w-full text-sm border border-gray-300 -m-[0.5px] hover:shadow-xl transition-all hover:z-5 relative">
      {product.discount_percent > 0 && (
        <div className="absolute left-0 top-0 py-1 px-2 bg-(--offer-color) text-white rounded-br-2xl text-xs -mt-px -ml-px">فروش ویژه!</div>
      )}
      <div className="product-card__info">
        <div className="w-full h-50 center p-2.5">
          <Image src={product.image} alt={product.name} width={200} height={300} className="object-contain" />
        </div>
        <div className="font-medium mt-3 mb-2 leading-6">
          <p>{product.name}</p>
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex flex-row-reverse items-center gap-1.5">
          <span className="text-(--text-secondary) line-through">
            {product.price.toLocaleString("fa-IR")}
          </span>
          {product.discount_percent !== 0 && (
            <span className="bg-(--offer-color) text-white rounded-lg px-1">
              <div className="translate-y-px">
                {product.discount_percent}%
              </div>
            </span>
          )}
        </div>
        <div className="flex items-center flex-row-reverse mt-auto gap-1 font-bold text-(--text-natural)! text-base">
          <span>
            <Icons.TomanIcon className="w-4" />
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
