import * as Icons from "@/app/assets/icons"
import Link from "next/link";

export default function ProfileSidebar({ className, active }: { className: string, active: string }) {
  const items = [
    {
      id: 1,
      name: "dashboard",
      name_fa: "داشبورد",
      icon: Icons.DashboardIcon
    },
    {
      id: 2,
      name: "orders",
      name_fa: "سفارش ها",
      icon: Icons.BagIcon
    },
    {
      id: 3,
      name: "wishlist",
      name_fa: "علاقه مندی ها",
      icon: Icons.HeartIcon
    },
    {
      id: 4,
      name: "addresses",
      name_fa: "آدرس ها",
      icon: Icons.LocationIcon
    },
    {
      id: 5,
      name: "messages",
      name_fa: "پیام ها",
      icon: Icons.NotificationIcon
    },
    {
      id: 6,
      name: "info",
      name_fa: "اطلاعات حساب کاربری",
      icon: Icons.AccountIcon
    },
    {
      id: 7,
      name: "logout",
      name_fa: "خروج از حساب کاربری",
      icon: Icons.LogoutIcon
    },
  ];

  return(
    <aside className={`w-60 divide-y divide-gray-300 border border-gray-300 rounded-lg h-fit sticky ` + className}>
      <div>
        <div className="flex gap-2 items-center justify-between p-4">
          <div className="flex flex-col gap-1">
            <span className="text-(--text-natural) font-bold">
              محمدحسین کثیرلو
            </span>
            <span className="text-xs text-(--text-secondary)">
              09915455887
            </span>
          </div>
          <Link href="/profile/info" className="text-(--primary-color)">
            <Icons.EditIcon />
          </Link>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-1">
              <Icons.WalletIcon />
              <span>
                کیف پول
              </span>
            </div>
            <div>
              <Link href="#" className="text-(--primary-color) text-xs flex items-center pr-5">
                افزایش موجودی
                <Icons.ChevronLeftIcon className="w-3 " />
              </Link>
            </div>
          </div>
          <div className="flex gap-1 items-center text-sm">
            <span>
              3,986,040
            </span>
            <Icons.TomanThinIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
      <ul className="w-full divide-y divide-gray-300">
        {items.map(i => {
          if(active === i.name) {
            return(
              <li key={i.id}>
                <Link href={`profile/${i.name}`} className="w-full flex gap-1 py-2 px-4 relative
                  before:content-['']
                  before:absolute
                  before:top-1
                  before:bottom-1
                  before:right-0
                  before:w-1
                  before:bg-(--primary-color)
                  before:rounded-l-lg
                ">
                  <i.icon />
                  <span>
                    {i.name_fa}
                  </span>
                </Link>
              </li>
            );
          }
          else if(i.name === "logout") {
            return(
              <li key={i.id}>
                <Link href="/" className="w-full flex gap-1 py-2 px-4 text-red-700">
                  <i.icon />
                  <span>
                    {i.name_fa}
                  </span>
                </Link>
              </li>
            );
          }
          else {
            return(
              <li key={i.id}>
                <Link href={`/profile/${i.name}`} className="w-full flex gap-1 py-2 px-4">
                  <i.icon />
                  <span>
                    {i.name_fa}
                  </span>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </aside>
  );
}