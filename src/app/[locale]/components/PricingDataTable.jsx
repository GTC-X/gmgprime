export default function PricingDataTable({ columns, rows, hideHeader = false }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[280px] border-collapse text-left text-sm md:text-base">
        {!hideHeader && (
          <thead>
            <tr className="bg-[#1a3a6b] text-white">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="border border-white/10 px-4 py-3 font-semibold"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex % 2 === 0 ? "bg-[#132F47]" : "bg-primary-950/90"
              }
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="border border-white/10 px-4 py-3 text-neutral-200"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
