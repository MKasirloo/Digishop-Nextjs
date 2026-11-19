
import Link from "next/link";
import Image from "next/image";
import * as Icons from "@/app/assets/icons";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="
        relative flex w-full min-h-[350px] shrink-0 flex-col justify-between
        -m-[0.5px] border border-gray-300 p-4 text-sm
        bg-(--surface) text-(--text-primary)
        hover:z-5 hover:shadow-xl
        dark:border-gray-800 dark:hover:border-gray-600 dark:hover:shadow-black/30
        transition-all
      "
    >
      {product.discount_percent > 0 && (
        <div className="absolute left-0 top-0 -ml-px -mt-px rounded-br-2xl bg-(--offer-color) px-2 py-1 text-xs text-white">
          فروش ویژه!
        </div>
      )}

      <div>
        <div className="center h-50 w-full p-2.5">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={300}
            className="h-auto object-contain"
          />
        </div>

        <div className="mb-2 mt-3 font-medium leading-6 text-(--text-primary)">
          <p>{product.name}</p>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex flex-row-reverse items-center gap-1.5">
          <span className="text-(--text-secondary) line-through">
            {product.price.toLocaleString("fa-IR")}
          </span>

          {product.discount_percent !== 0 && (
            <span className="rounded-lg bg-(--offer-color) px-1 text-white">
              {product.discount_percent}%
            </span>
          )}
        </div>

        <div className="mt-1 flex flex-row-reverse items-center gap-1 font-bold text-(--text-natural) text-base">
          <Icons.TomanIcon className="w-4 dark:invert" />

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