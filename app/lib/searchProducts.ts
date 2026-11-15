import products from "../data/products";

export default function searchProducts(query: string) {
  const q = query.toLowerCase().trim();
  return(products.filter(p => (
    p.name.toLowerCase().includes(q)
    || p.brand.toLowerCase().includes(q)
    || p.name_en.toLowerCase().includes(q)
  )));
}