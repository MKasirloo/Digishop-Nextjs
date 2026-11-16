
export default function Loading() {
  return (
      <div className="productsWrapper animate-pulse">
          <div className="productsContainer">
              <div className="flex justify-between items-center mb-6">
                  <div className="h-8 w-32 rounded-lg bg-gray-200" />
                  <div className="h-8 w-24 rounded-lg bg-gray-200" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="rounded-xl border border-gray-100 p-3">
                          <div className="aspect-square rounded-lg bg-gray-200 mb-4" />
                          <div className="h-4 w-4/5 rounded bg-gray-200 mb-3" />
                          <div className="h-3 w-2/3 rounded bg-gray-200 mb-5" />
                          <div className="flex justify-between">
                              <div className="h-4 w-1/3 rounded bg-gray-200" />
                              <div className="h-5 w-1/4 rounded bg-gray-200" />
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}
