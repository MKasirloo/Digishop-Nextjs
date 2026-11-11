import sql from "../lib/data";

export default async function Page() {
  const products = await sql`SELECT * FROM products`;
  return(
    <div>
      {products.map(p => (p.name))}
    </div>
  );
}