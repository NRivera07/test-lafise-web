export default function TransactionSkeleton() {
  return (
    <div className="overflow-hidden rounded-md border border-[#DFE1DF] bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#DFE1DF] bg-[#FAFAFA]">
            <th className="px-10 py-5 text-left text-sm font-medium text-text-secondary">
              Fecha
            </th>
            <th className="px-10 py-5 text-left text-sm font-medium text-text-secondary">
              Descripción
            </th>
            <th className="px-10 py-5 text-right text-sm font-medium text-text-secondary">
              Débito USD
            </th>
            <th className="px-10 py-5 text-right text-sm font-medium text-text-secondary">
              Balance USD
            </th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 6 }).map((_, index) => (
            <tr
              key={index}
              className="border-b border-[#F3F3F3] last:border-none"
            >
              <td className="px-10 py-6">
                <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
              </td>

              <td className="px-10 py-6">
                <div className="h-4 w-52 animate-pulse rounded bg-gray-200" />
              </td>

              <td className="px-10 py-6 text-right">
                <div className="ml-auto h-4 w-24 animate-pulse rounded bg-gray-200" />
              </td>

              <td className="px-10 py-6 text-right">
                <div className="ml-auto h-4 w-24 animate-pulse rounded bg-gray-200" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
