export default function FAQsLoading() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="h-12 w-12 md:h-16 md:w-16 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse" />
          <div className="h-8 md:h-10 bg-gray-200 rounded-lg mb-6 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-lg max-w-2xl mx-auto animate-pulse" />
        </div>

        <div className="mb-6 md:mb-8">
          <div className="bg-white border rounded-lg p-4 md:p-6">
            <div className="flex flex-col gap-4">
              <div className="h-10 bg-gray-200 rounded-lg animate-pulse" />
              <div className="flex flex-wrap gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white border rounded-lg p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse" />
                  </div>
                  <div className="h-6 bg-gray-200 rounded-lg animate-pulse" />
                </div>
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
