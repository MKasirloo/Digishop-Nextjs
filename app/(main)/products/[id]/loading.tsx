export default function Loading() {
  return (
    <div className="animate-pulse">
      <ul className="flex gap-2 my-2.5 mx-5">
        <li className="w-16 h-4 bg-gray-200 rounded" />
        <li className="w-2 h-4 bg-gray-200 rounded" />
        <li className="w-20 h-4 bg-gray-200 rounded" />
        <li className="w-2 h-4 bg-gray-200 rounded" />
        <li className="w-16 h-4 bg-gray-200 rounded" />
      </ul>

      <div className="flex gap-[30px] my-[30px] mx-5 max-lg:flex-wrap max-lg:mx-0 max-lg:px-10 max-sm:flex-col">

        <div className="w-100 max-lg:w-full">
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="w-full aspect-square bg-gray-200 rounded-lg" />
          </div>

          <div className="flex gap-2.5 my-5">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-12.5 h-12.5 shrink-0 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="w-3/4 h-7 bg-gray-200 rounded mb-5" />

          <div className="flex justify-between my-2.5">
            <div className="w-1/2 h-4 bg-gray-200 rounded" />
            <div className="flex gap-2.5">
              <div className="w-6 h-6 bg-gray-200 rounded-full" />
              <div className="w-6 h-6 bg-gray-200 rounded-full" />
            </div>
          </div>

          <div className="flex gap-3 my-5">
            <div className="w-12 h-4 bg-gray-200 rounded" />
            <div className="w-20 h-4 bg-gray-200 rounded" />
            <div className="w-16 h-4 bg-gray-200 rounded" />
          </div>

          <div className="w-32 h-5 bg-gray-200 rounded my-5" />

          <div className="flex gap-2.5 my-5">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-20 h-9 bg-gray-200 rounded" />
            ))}
          </div>

          <div className="w-32 h-5 bg-gray-200 rounded my-5" />

          <div className="space-y-4 border-y-2 border-gray-200 py-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-3">
                <div className="w-24 h-3 bg-gray-200 rounded" />
                <div className="w-40 h-3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-75 max-sm:w-full border border-gray-200 rounded-lg p-5 h-fit shadow-md">
          <div className="w-40 h-5 bg-gray-200 rounded mb-5" />

          <div className="flex justify-between items-center pb-5 border-b border-gray-200">
            <div className="w-28 h-8 bg-gray-200 rounded" />
            <div className="w-20 h-4 bg-gray-200 rounded" />
          </div>

          <div className="h-8 bg-gray-200 rounded my-7" />
          <div className="h-8 bg-gray-200 rounded mb-7" />

          <div className="w-28 h-4 bg-gray-200 rounded mb-3" />
          <div className="w-36 h-8 bg-gray-200 rounded mb-5" />

          <div className="h-11 bg-gray-200 rounded-lg" />
        </div>

      </div>
    </div>
  );
}
