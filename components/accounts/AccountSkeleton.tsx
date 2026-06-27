export default function AccountSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-md border border-[#DFE1DF] bg-white p-6"
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="h-6 w-36 rounded bg-gray-200" />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>

          <div className="mb-4 h-4 w-40 rounded bg-gray-200" />

          <div className="h-8 w-44 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
