export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Navigation Skeleton */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 md:h-8 md:w-8 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="hidden md:flex items-center gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
            <div className="md:hidden">
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4 md:py-8 max-w-7xl">
        {/* Header Skeleton */}
        <div className="mb-6 md:mb-8">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-5 w-64 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Profile Completion Skeleton */}
        <div className="mb-6 md:mb-8">
          <div className="bg-white border rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full animate-pulse" />
              <div className="flex-1">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-1" />
                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="mb-4 md:mb-6">
          <div className="flex gap-2 overflow-x-auto">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded animate-pulse flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border rounded-lg p-4 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-200 rounded-full animate-pulse" />
                <div className="flex-1">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-1" />
                  <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex gap-2">
                <div className="h-8 flex-1 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
