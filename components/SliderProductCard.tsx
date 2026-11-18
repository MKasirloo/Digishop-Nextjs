import Link from "next/link";
import Image from "next/image";
import { TomanIcon } from "@/app/assets/icons";

export default function SliderProductCard({ product, className = "" }) {
  return(
    <Link href={`/products/${product.id}`} className={`flex flex-col justify-between shrink-0 h-70 p-4 bg-white dark:bg-(--bg-secondary) text-sm w-45 ${className}`}>
      <div>
        <div className="size-37.5 flex items-center">
            <Image width={150} height={150} className="w-full" src={product.image} alt={product.name} />
        </div>
        <div className="my-1 font-medium line-clamp-2">
            <p>{product.name}</p>
        </div>
      </div>
      <div>
        <div className="flex flex-row-reverse items-center gap-1">
            <span className="line-through text-(--text-secondary)">{product.price.toLocaleString("fa-IR")}</span>
            <span className="bg-(--offer-color) text-white rounded-md px-1">{product.discount_percent}%</span>
        </div>
        <div className="flex items-center flex-row-reverse gap-1 font-bold text-(--text-natural) text-base">
          <TomanIcon className="size-4 dark:invert" />
          <span className="translate-y-1">{(product.price * (1 - (product.discount_percent / 100))).toLocaleString("fa-IR")}</span>
        </div>
      </div>
    </Link>
  );
}