"use client";

import { Cross, LayoutDashboard, List, Menu, Power, ShoppingBag, SquareChevronsRight, TicketPercent, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SidePanel() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const items = [
    { label: "داشبورد", icon: LayoutDashboard, href: "/admin/dashboard" },
    { label: "محصولات", icon: ShoppingBag, href: "/admin/products" },
    { label: "سفارشات", icon: List, href: "/admin/orders" },
    { label: "مشتریان", icon: User, href: "/admin/customers" },
    { label: "تخفیف ها", icon: TicketPercent, href: "/admin/discounts" },
  ]
  const pathname = usePathname();
  return(
    <>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-2 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}
      <header className="bg-(--bg-secondary) flex justify-between py-4 md:hidden">
        {items.map(i => (
          pathname === i.href && (
              <div key={i.label} className="flex gap-2 items-center font-medium text-xl">
              <i.icon />
              {i.label}
            </div>
          )
        ))}
        <button className="p-1 rounded-md bg-white" onClick={() => setIsSidebarOpen(true)}>
          <Menu className="w-7 h-7" />
        </button>
      </header>
      <aside className={`${isMinimized ? "w-14" : "w-50"} transition-all bg-(--bg-secondary) z-3 flex flex-col justify-between max-md:fixed max-md:top-0 max-md:bottom-0 max-md:right-0 max-md:py-2 max-md:transition-transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div>
          <div className="flex justify-between items-center px-2">
            <div className={`font-lalezar text-xl ${isMinimized && "hidden"}`}>
              دیجی&zwnj;شاپ
            </div>
            <button className="p-1 rounded-md bg-white md:hidden" onClick={() => setIsSidebarOpen(false)}>
              <X />
            </button>
            <div className="max-md:hidden p-2 hover:bg-white hover:cursor-pointer transition-colors rounded-md" onClick={() => setIsMinimized(!isMinimized)}>
              <SquareChevronsRight className={`${isMinimized && "rotate-180"} w-6 h-6 transition-transform`} />
            </div>
          </div>
          <div className="my-2">
            <ul>
              {items.map(i => (
                <li key={i.label}>
                  <Link href={i.href} className={`flex gap-2 py-2 overflow-hidden whitespace-nowrap rounded-md font-medium hover:bg-(--bg-primary) hover:cursor-pointer transition-colors px-2 mx-2 my-2 ${pathname.endsWith(i.href) ? "bg-(--bg-primary)" : ''}`}>
                    <i.icon className="shrink-0" />
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Link href="/" className={`flex gap-2 py-2 overflow-hidden whitespace-nowrap rounded-md font-medium hover:bg-(--bg-primary) hover:text-red-600 hover:cursor-pointer transition-colors px-2 mx-2`}>
            <Power className="shrink-0" />
            خروج از حساب
          </Link>
        </div>
      </aside>
    </>
  );
}