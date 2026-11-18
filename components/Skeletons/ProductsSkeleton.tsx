export default function ProductsSkeleton() {
    return (
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 animate-pulse">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col justify-between shrink-0 min-h-[350px] p-4 bg-white dark:bg-gray-900 w-full border border-gray-300 dark:border-gray-800 -m-[0.5px]"
          >
            <div>
              <div className="w-full h-50 center p-2.5">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
              </div>
  
              <div className="mt-3 mb-2 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              </div>
            </div>
  
            <div className="mt-auto">
              <div className="flex flex-row-reverse items-center gap-1.5 mb-2">
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
  
              <div className="flex flex-row-reverse items-center gap-1">
                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }