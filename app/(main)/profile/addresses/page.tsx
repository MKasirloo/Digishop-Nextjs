"use client";

import { useState } from "react";
import Container from "@/components/Container";
import ProfileSidebar from "@/components/ProfileSidebar";
import * as Icons from "@/app/assets/icons";

type Address = {
  id: number;
  title: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  address: string;
  postalCode: string;
  isDefault: boolean;
};

const initialAddresses: Address[] = [
  {
    id: 1,
    title: "خانه",
    name: "محمدحسین",
    phone: "09123456789",
    province: "تهران",
    city: "تهران",
    address: "خیابان ولیعصر، خیابان توانیر، کوچه دوازدهم، پلاک ۲۴",
    postalCode: "1435678910",
    isDefault: true,
  },
  {
    id: 2,
    title: "محل کار",
    name: "محمدحسین",
    phone: "09123456789",
    province: "تهران",
    city: "تهران",
    address: "خیابان مطهری، خیابان مفتح، پلاک ۱۲",
    postalCode: "1587654321",
    isDefault: false,
  },
];

const emptyAddress: Omit<Address, "id"> = {
  title: "",
  name: "",
  phone: "",
  province: "",
  city: "",
  address: "",
  postalCode: "",
  isDefault: false,
};

export default function Addresses() {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyAddress);

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyAddress);
    setModalOpen(true);
  };

  const openEditModal = (address: Address) => {
    setEditingId(address.id);
    setForm({
      title: address.title,
      name: address.name,
      phone: address.phone,
      province: address.province,
      city: address.city,
      address: address.address,
      postalCode: address.postalCode,
      isDefault: address.isDefault,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
    setForm(emptyAddress);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingId !== null) {
      setAddresses((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...form } : item
        )
      );
    } else {
      setAddresses((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    if (form.isDefault) {
      setAddresses((prev) =>
        prev.map((item) =>
          item.id === editingId || (editingId === null && item.id === prev[prev.length - 1]?.id)
            ? { ...item, isDefault: true }
            : { ...item, isDefault: false }
        )
      );
    }

    closeModal();
  };

  const deleteAddress = (id: number) => {
    setAddresses((prev) => prev.filter((item) => item.id !== id));
  };

  const updateForm = (key: keyof typeof emptyAddress, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Container>
      <div className="flex max-md:flex-col gap-4">
        <ProfileSidebar
          active="addresses"
          className="max-sm:grow shrink-0 max-md:w-full md:sticky md:self-start md:top-20"
        />

        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <section className="border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between items-center gap-3 mb-5">
              <h3 className="relative w-fit pb-1 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-1/2 before:h-0.5 before:bg-(--primary-color)">
                آدرس‌های من
              </h3>

              <button
                onClick={openAddModal}
                className="flex items-center gap-2 text-sm text-(--primary-color) hover:opacity-70 transition cursor-pointer"
              >
                <span className="text-lg">+</span>
                افزودن آدرس
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-full h-40 border-2 border-dashed border-gray-500 text-gray-500 rounded-lg flex justify-center items-center hover:cursor-pointer hover:border-neutral-700 hover:text-neutral-700 transition-colors">
                <div className="flex gap-1">
                  <p>انتخاب آدرس از روی نقشه</p>
                  <Icons.LocationIcon className="w-5 h-5" />
                </div>
              </div>
              {addresses.length > 0 ? (
                addresses.map((address) => (
                  <div
                    key={address.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition"
                  >
                    <div className="flex justify-between items-center gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {address.title}
                        </span>

                        {address.isDefault && (
                          <span className="text-xs bg-purple-50 text-(--primary-color) px-2 py-1 rounded-full">
                            آدرس پیش فرض
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <button
                          onClick={() => openEditModal(address)}
                          className="text-(--primary-color) hover:text-(--primary-hover) transition cursor-pointer"
                        >
                          ویرایش
                        </button>

                        <button
                          onClick={() => deleteAddress(address.id)}
                          className="text-red-500 hover:text-red-600 transition cursor-pointer"
                        >
                          حذف
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 text-sm text-(--text-secondary)">
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <span>گیرنده: {address.name}</span>
                        <span dir="ltr">{address.phone}</span>
                      </div>

                      <p className="leading-7">
                        {address.province}، {address.city}، {address.address}
                      </p>

                      <div>کد پستی: {address.postalCode}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-(--text-secondary)">
                  <div className="text-4xl mb-3">⌖</div>
                  <p className="text-sm">هنوز آدرسی ثبت نکرده‌اید.</p>
                  <button
                    onClick={openAddModal}
                    className="mt-4 text-sm text-(--primary-color) hover:opacity-70 cursor-pointer"
                  >
                    افزودن اولین آدرس
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-150 bg-black/40 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-xl mt-15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h3 className="font-semibold">
                {editingId !== null ? "ویرایش آدرس" : "افزودن آدرس جدید"}
              </h3>

              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-red-500 transition cursor-pointer"
              >
                <Icons.CrossIcon />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm block mb-2">عنوان آدرس</label>
                  <input
                    required
                    value={form.title}
                    onChange={(e) => updateForm("title", e.target.value)}
                    placeholder="مثلاً خانه"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-(--primary-color) transition"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-2">نام گیرنده</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="نام و نام خانوادگی"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-(--primary-color) transition"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-2">شماره موبایل</label>
                  <input
                    required
                    type="tel"
                    dir="ltr"
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="09123456789"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-(--primary-color) transition"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-2">استان</label>
                  <input
                    required
                    value={form.province}
                    onChange={(e) => updateForm("province", e.target.value)}
                    placeholder="استان"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-(--primary-color) transition"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-2">شهر</label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => updateForm("city", e.target.value)}
                    placeholder="شهر"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-(--primary-color) transition"
                  />
                </div>

                <div>
                  <label className="text-sm block mb-2">کد پستی</label>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    dir="ltr"
                    maxLength={10}
                    value={form.postalCode}
                    onChange={(e) => updateForm("postalCode", e.target.value)}
                    placeholder="1234567890"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-(--primary-color) transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm block mb-2">آدرس دقیق</label>
                <textarea
                  required
                  rows={3}
                  value={form.address}
                  onChange={(e) => updateForm("address", e.target.value)}
                  placeholder="خیابان، کوچه، پلاک و واحد..."
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-(--primary-color) transition resize-none"
                />
              </div>

              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.isDefault}
                  onChange={(e) => updateForm("isDefault", e.target.checked)}
                  className="accent-(--primary-color) w-4 h-4"
                />
                انتخاب به عنوان آدرس پیش‌فرض
              </label>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="btn-primary flex-1 p-3"
                >
                  {editingId !== null ? "ذخیره تغییرات" : "ثبت آدرس"}
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer"
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}