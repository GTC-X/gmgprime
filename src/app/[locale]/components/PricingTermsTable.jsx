import { PRICING_ROWS } from "../data/pricingTerms";

export default function PricingTermsTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[280px] border-collapse text-left text-sm md:text-base">
        <thead>
          <tr className="bg-[#1a3a6b] text-white">
            <th
              scope="col"
              className="border border-white/10 px-4 py-3 font-semibold"
            >
              Item
            </th>
            <th
              scope="col"
              className="border border-white/10 px-4 py-3 font-semibold"
            >
              Terms
            </th>
          </tr>
        </thead>
        <tbody>
          {PRICING_ROWS.map((row, rowIndex) => (
            <tr
              key={row.item}
              className={
                rowIndex % 2 === 0 ? "bg-[#132F47]" : "bg-primary-950/90"
              }
            >
              <td className="border border-white/10 px-4 py-3 text-neutral-200">
                {row.item}
              </td>
              <td className="border border-white/10 px-4 py-3 text-neutral-200">
                {row.terms}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
