import { CASHBACK_ROWS } from "../data/pricingTerms";

export default function VolumeCashbackTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[280px] border-collapse text-left text-sm md:text-base">
        <thead>
          <tr className="bg-[#1a3a6b] text-white">
            <th
              scope="col"
              className="border border-white/10 px-4 py-3 font-semibold"
            >
              Monthly volume (USD notional)
            </th>
            <th
              scope="col"
              className="border border-white/10 px-4 py-3 font-semibold"
            >
              Commission cashback
            </th>
            <th
              scope="col"
              className="border border-white/10 px-4 py-3 font-semibold"
            >
              Swap cashback
            </th>
          </tr>
        </thead>
        <tbody>
          {CASHBACK_ROWS.map((row, rowIndex) => (
            <tr
              key={row.volume}
              className={
                rowIndex % 2 === 0 ? "bg-[#132F47]" : "bg-primary-950/90"
              }
            >
              <td className="border border-white/10 px-4 py-3 text-neutral-200">
                {row.volume}
              </td>
              <td className="border border-white/10 px-4 py-3 text-neutral-200">
                {row.commission}
              </td>
              <td className="border border-white/10 px-4 py-3 text-neutral-200">
                {row.swap}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
