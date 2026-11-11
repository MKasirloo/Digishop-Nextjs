import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="w-full bg-(--bg-secondary) px-4 md:pr-0 md:py-5 max-md:pb-5 flex max-md:flex-col relative">
      <Sidebar />
      <div className="bg-(--bg-primary) rounded-lg p-2 flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}