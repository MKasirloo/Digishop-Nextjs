import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function GET() {
  try {
    const products = await sql`
      SELECT * FROM products ORDER BY id
    `;

    return Response.json(products);
  } catch (error) {
    return Response.json(
      { error: "خطا در دریافت محصولات" },
      { status: 500 }
    );
  }
}