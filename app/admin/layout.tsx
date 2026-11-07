import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="w-dvw h-dvh bg-(--bg-secondary) px-5 md:py-5 flex max-md:flex-col">
      <Sidebar />
      <div className="bg-(--bg-primary) rounded-lg w-full h-full">
        {children}
      </div>
    </div>
  );
}
