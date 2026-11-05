import products from "../data/products";

export default function searchProducts(query: string) {
  const q = query.toLowerCase().trim();
  return(products.filter(p => p.name.toLocaleLowerCase().includes(q)));
}