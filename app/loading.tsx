"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf9ff]">
      <div className="flex flex-col items-center">
        <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-3xl bg-[#4D00FF]/10" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-[#4D00FF] shadow-xl shadow-[#4D00FF]/25">
            <span className="text-3xl font-black text-white">D</span>
          </div>
        </div>

        <h1 className="text-3xl font-black tracking-tight text-[#24212e]">
          Digi<span className="text-[#4D00FF]">Shop</span>
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          در حال آماده‌سازی فروشگاه...
        </p>

        <div className="mt-8 h-1.5 w-44 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/2 animate-loading rounded-full bg-[#4D00FF]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(200%);
          }
          100% {
            transform: translateX(-200%);
          }
        }

        .animate-loading {
          animation: loading 1.3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}