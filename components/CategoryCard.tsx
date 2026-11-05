import Image from "next/image";

export default function CategoryCard({ category }: { category: any }) {
  return(
    <div className="flex flex-col gap-2.5 mg-5 hover:cursor-pointer">
      <Image width={100} height={100} className="w-25 h-25"
        src={category.image_src}
        alt={category.name}
      />
      <span className="flex justify-center items-center">{category.name_fa}</span>
    </div>
  );
}