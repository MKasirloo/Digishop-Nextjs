import sql from "@/app/lib/data";

export async function getProducts() {
  const products = await sql`SELECT * FROM products`;
  return products;
}