"use server";

import sql from "@/app/lib/data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function getArray(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string") return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function createProduct(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const name_en = String(formData.get("name_en") ?? "").trim();
  const category = String(formData.get("category") ?? "");
  const brand = String(formData.get("brand") ?? "").trim();

  const price = Number(formData.get("price"));
  const discount_percent = Number(formData.get("discount_percent") || 0);

  const in_stock = formData.get("in_stock") === "true";
  const stock = Number(formData.get("stock") || 0);
  const sold = Number(formData.get("sold") || 0);

  const image = String(formData.get("image") ?? "").trim();

  const images = getArray(formData, "images");
  const colors = getArray(formData, "colors");
  const key_features = getArray(formData, "key_features");
  
  const rating = 0;
  const comments_count = 0;
  const questions_count = 0;
  const comments = [];
  const questions = [];

  if (
    !name || !category || !Number.isFinite(price) || price <= 0 ||
    !Number.isFinite(discount_percent) ||
    discount_percent < 0 ||
    discount_percent > 100 ||
    !Number.isFinite(stock) ||
    stock < 0 ||
    !Number.isFinite(sold) ||
    sold < 0
  ) {
    throw new Error("اطلاعات محصول معتبر نیستند.");
  }

  await sql`
  INSERT INTO products (
    name,
    name_en,
    category,
    brand,
    price,
    discount_percent,
    in_stock,
    stock,
    sold,
    rating,
    comments_count,
    questions_count,
    image,
    images,
    colors,
    key_features,
    comments,
    questions
  )
  VALUES (
    ${name},
    ${name_en},
    ${category},
    ${brand},
    ${price},
    ${discount_percent},
    ${in_stock},
    ${stock},
    ${sold},
    0,
    0,
    0,
    ${image},
    ${JSON.stringify(images)}::jsonb,
    ${JSON.stringify(colors)}::jsonb,
    ${JSON.stringify(key_features)}::jsonb,
    '[]'::jsonb,
    '[]'::jsonb
  )
`;

  revalidatePath("/admin/products");
  redirect("/admin/products");

}