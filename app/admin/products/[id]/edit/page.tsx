import initialProducts from "@/app/data/products";
import EditForm from "./EditForm";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  const product = initialProducts[initialProducts.findIndex(p => p.id === Number(id))];
  if(!product)
    notFound();
  
  return <EditForm product={product} />;
}