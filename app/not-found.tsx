"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-5 py-16 bg-[#faf9ff]">
      <div className="w-full max-w-xl text-center">
        <div className="relative mx-auto mb-8 w-fit">
          <div className="absolute inset-0 rounded-full bg-[#4D00FF]/10 blur-3xl scale-150" />
          <h1 className="relative text-[130px] sm:text-[180px] leading-none font-black tracking-tighter text-[#4D00FF]">
            404
          </h1>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#242424]">
          این صفحه پیدا نشد!
        </h2>

        <p className="mt-4 text-sm sm:text-base leading-8 text-[#6B6B6B]">
          به نظر می‌رسد صفحه‌ای که دنبالش هستید وجود ندارد یا آدرس آن تغییر کرده است.
          در صورت تمایل، می‌توانید به فروشگاه برگردید و ادامه دهید.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto px-8 py-3 text-center"
          >
            بازگشت به صفحه اصلی
          </Link>

          <button onClick={() => window.history.back()} className="btn-secondary w-full sm:w-auto px-8 py-3">
            صفحه قبلی
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-4xl font-lalezar text-[#4D00FF]">
          دیجی&zwnj;شاپ
        </div>
      </div>
    </main>
  );
}