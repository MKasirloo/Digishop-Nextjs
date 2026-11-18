import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }: { category: any }) {
  return(
    <Link href={`/products?category=${category.name}`} className="flex hover:bg-white dark:hover:bg-gray-900 hover:-translate-y-1 flex-col gap-2.5 mg-5 hover:cursor-pointer p-2 rounded-lg hover:shadow-md transition-all">
      <Image width={100} height={100} className="w-25 h-25"
        src={category.image_src}
        alt={category.name}
      />
      <span className="flex justify-center items-center font-medium">{category.name_fa}</span>
    </Link>
  );
}