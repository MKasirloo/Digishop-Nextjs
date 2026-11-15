import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }: { category: any }) {
  return(
    <Link href={`/products?category=${category.name}`} className="flex flex-col gap-2.5 mg-5 hover:cursor-pointer">
      <Image width={100} height={100} className="w-25 h-25"
        src={category.image_src}
        alt={category.name}
      />
      <span className="flex justify-center items-center">{category.name_fa}</span>
    </Link>
  );
}