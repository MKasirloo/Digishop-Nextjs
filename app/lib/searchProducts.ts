import { categories } from "../data/categories";
import initialProducts from "../data/products";

export default function searchProducts(query: string, products = initialProducts) {
  const q = query.toLowerCase().trim();
  return(products.filter(p => (
    p.name.toLowerCase().includes(q)
    || p.brand.toLowerCase().includes(q)
    || p.name_en.toLowerCase().includes(q)
    || categories[categories.findIndex(c => c.name === p.category)].name_fa.includes(q)
  )));
}