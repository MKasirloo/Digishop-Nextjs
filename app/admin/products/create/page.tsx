"use client";

import { useState } from "react";
import {
  ArrowRight,
  Save,
  Package,
  ImagePlus,
  DollarSign,
  Boxes,
  Plus,
  X,
  ChevronDown,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import categories from "@/app/data/categories";
import { createProduct } from "@/app/lib/actions";

function Field({
  label,
  name,
  placeholder,
  type = "text",
  dir,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  dir?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        dir={dir}
        className="w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-sm outline-none transition-all focus:border-(--primary-color) placeholder:text-[#aaa]"
      />
    </div>
  );
}

function Section({
  title,
  description,
  icon: Icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 p-5 border-b border-gray-200">
        <div className="w-10 h-10 rounded-lg bg-(--bg-secondary) flex items-center justify-center text-(--primary-color)">
          <Icon size={20} />
        </div>
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-xs text-(--text-secondary) mt-1">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5">{children}</div>
    </section>
  );
}

function TagInput({
  label,
  placeholder,
  values,
  setValues,
}: {
  label: string;
  placeholder: string;
  values: string[];
  setValues: (values: string[]) => void;
}) {
  const [value, setValue] = useState("");

  const addValue = () => {
    const trimmed = value.trim();

    if (trimmed && !values.includes(trimmed)) {
      setValues([...values, trimmed]);
      setValue("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium">{label}</label>

      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addValue();
            }
          }}
          placeholder={placeholder}
          className="flex-1 min-w-0 h-11 px-3 rounded-lg border border-gray-300 text-sm outline-none focus:border-(--primary-color)"
        />

        <button
          type="button"
          onClick={addValue}
          className="w-11 h-11 shrink-0 rounded-lg bg-(--bg-primary) text-(--primary-color) flex items-center justify-center hover:bg-[#e8ddff] transition-colors"
        >
          <Plus size={19} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {values.map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 bg-(--bg-primary) text-(--primary-color) text-xs px-3 py-2 rounded-lg"
          >
            {item}
            <button
              type="button"
              onClick={() =>
                setValues(values.filter((v) => v !== item))
              }
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureInput({
  features,
  setFeatures,
}: {
  features: { title: string; value: string }[];
  setFeatures: (features: { title: string; value: string }[]) => void;
}) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const addFeature = () => {
    if (!title.trim() || !value.trim()) return;

    setFeatures([
      ...features,
      {
        title: title.trim(),
        value: value.trim(),
      },
    ]);

    setTitle("");
    setValue("");
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium">ویژگی‌های کلیدی</label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان، مثلاً حافظه"
          className="h-11 px-3 rounded-lg border border-gray-300 text-sm outline-none focus:border-(--primary-color)"
        />

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addFeature();
            }
          }}
          placeholder="مقدار ویژگی، مثلاً 256 گیگابایت"
          className="h-11 px-3 rounded-lg border border-gray-300 text-sm outline-none focus:border-(--primary-color)"
        />
      </div>

      <button
        type="button"
        onClick={addFeature}
        className="h-10 rounded-lg bg-(--bg-primary) text-(--primary-color) text-sm flex items-center justify-center gap-2 hover:bg-[#e8ddff] transition-colors"
      >
        <Plus size={17} />
        افزودن ویژگی
      </button>

      <div className="space-y-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-300 text-sm"
          >
            <div className="flex flex-wrap gap-2">
              <span className="font-medium">{feature.title}:</span>
              <span className="text-gray-500">{feature.value}</span>
            </div>

            <button
              type="button"
              onClick={() =>
                setFeatures(features.filter((_, i) => i !== index))
              }
              className="text-[#dd3d46] shrink-0"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const [inStock, setInStock] = useState(true);
  const [colors, setColors] = useState<string[]>([]);
  console.log(colors);
  const [features, setFeatures] = useState<{ title: string; value: string }[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");

  const addImage = () => {
    const trimmed = imageUrl.trim();

    if (trimmed && !images.includes(trimmed)) {
      setImages([...images, trimmed]);
      setImageUrl("");
    }
  };

  return (
    <div className="max-w-350 mx-auto space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-5" />
          </Link>

          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              ایجاد محصول جدید
            </h1>
            <p className="text-xs md:text-sm text-(--text-secondary) mt-1">
              اطلاعات محصول جدید فروشگاه را وارد کنید.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href="/admin/products"
            className="flex-1 sm:flex-none h-10 px-4 flex items-center justify-center rounded-lg border border-gray-300 text-sm hover:bg-red-100/30 hover:text-red-700 transition-colors"
          >
            انصراف
          </Link>

          <button
            type="submit"
            form="create-product-form"
            className="flex-1 sm:flex-none h-10 px-4 flex items-center justify-center gap-2 btn-primary text-sm"
          >
            <Save className="w-5" />
            ثبت محصول
          </button>
        </div>
      </div>

      <form
        id="create-product-form"
        action={createProduct}
        className="grid grid-cols-1 gap-5 items-start"
      >
        <input type="hidden" name="in_stock" value={String(inStock)} />
        <input type="hidden" name="images" value={JSON.stringify(images)} />
        <input type="hidden" name="colors" value={JSON.stringify(colors)} />
        <input type="hidden" name="key_features" value={JSON.stringify(features)} />
        <div className="space-y-5">
          <Section
            title="اطلاعات اصلی"
            description="مشخصات پایه محصول را وارد کنید."
            icon={Package}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="نام محصول"
                name="name"
                placeholder="مثلاً آیفون 17 پرو مکس"
              />

              <Field
                label="نام انگلیسی"
                name="name_en"
                placeholder="iPhone 17 Pro Max"
              />

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  دسته‌بندی
                </label>

                <div className="relative">
                  <select
                    name="category"
                    required
                    className="w-full h-10 px-3 pl-9 rounded-lg border border-gray-300 bg-white text-sm outline-none focus:border-(--primary-color) appearance-none"
                  >
                    <option value="">انتخاب دسته‌بندی</option>
                    {categories.map((c) => (
                      <option value={c.name} key={c.name}>
                        {c.name_fa}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={16}
                    className="absolute left-3 top-3.5 text-(--text-secondary) pointer-events-none"
                  />
                </div>
              </div>

              <Field
                label="برند"
                name="brand"
                placeholder="Apple"
              />
            </div>
          </Section>

          <Section
            title="قیمت‌گذاری"
            description="قیمت و تخفیف محصول را مشخص کنید."
            icon={DollarSign}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="قیمت (تومان)"
                name="price"
                type="number"
                placeholder="150000000"
              />

              <Field
                label="درصد تخفیف"
                name="discount_percent"
                type="number"
                placeholder="10"
              />
            </div>
          </Section>

          <Section
            title="موجودی و فروش"
            description="وضعیت انبار و تعداد فروش محصول."
            icon={Boxes}
          >
            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-100 mb-5">
              <div>
                <p className="text-sm font-medium">
                  موجود بودن محصول
                </p>
                <p className="text-xs text-(--text-secondary) mt-1">
                  امکان خرید این محصول را فعال کنید.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setInStock(!inStock)}
                className={`w-12 h-6 rounded-full relative transition-colors ${
                  inStock ? "bg-(--primary-color)" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                    inStock ? "right-1" : "right-7"
                  }`}
                />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="موجودی انبار"
                name="stock"
                type="number"
                placeholder="50"
              />

              <Field
                label="تعداد فروش"
                name="sold"
                type="number"
                placeholder="0"
              />
            </div>
          </Section>

          <Section
            title="تصاویر محصول"
            description="تصویر اصلی و تصاویر گالری محصول."
            icon={ImagePlus}
          >
            <div className="flex flex-col gap-4">
              <Field
                label="آدرس تصویر اصلی"
                name="image"
                placeholder="iPhone-12-Pro-Max.png"
                dir="ltr"
              />

              <div className="flex gap-2">
                <input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addImage();
                    }
                  }}
                  placeholder="آدرس تصویر جدید..."
                  className="flex-1 min-w-0 h-11 px-3 rounded-lg border border-gray-300 text-sm outline-none focus:border-(--primary-color)"
                />

                <button
                  type="button"
                  onClick={addImage}
                  className="px-4 rounded-lg bg-(--bg-primary) text-(--primary-color) text-sm flex items-center gap-2"
                >
                  <Plus size={17} />
                  افزودن
                </button>
              </div>

              {images.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-(--text-secondary)">
                    تصاویر گالری ({images.length})
                  </p>

                  {images.map((image, index) => (
                    <div
                      key={image}
                      className="flex items-center gap-2 p-2 rounded-lg border border-gray-300"
                    >
                      <ImagePlus
                        size={17}
                        className="text-(--primary-color)"
                      />

                      <span className="text-xs text-gray-600 flex-1 truncate">
                        {image}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setImages(images.filter((_, i) => i !== index))
                        }
                        className="text-[#dd3d46]"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Section>

          <Section
            title="ویژگی های محصول"
            description="رنگ ها و ویژگی های کلیدی محصول را اضافه کنید."
            icon={Package}
          >
            <div className="space-y-6">
              <TagInput
                label="رنگ ها"
                placeholder="مثلاً مشکی تیتانیومی"
                values={colors}
                setValues={setColors}
              />

              <div className="border-t border-gray-300" />

              <FeatureInput
                features={features}
                setFeatures={setFeatures}
              />
            </div>
          </Section>
        </div>
      </form>
    </div>
  );
}
