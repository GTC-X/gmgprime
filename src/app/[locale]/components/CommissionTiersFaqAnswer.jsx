import PricingTermsTable from "./PricingTermsTable";
import VolumeCashbackTable from "./VolumeCashbackTable";
import { CASHBACK_FOOTNOTE } from "../data/pricingTerms";

export default function CommissionTiersFaqAnswer() {
  return (
    <div className="space-y-6 text-neutral-300">
      <p>
        We offer simple commissions or markup with no platform surprises.
      </p>

      <div>
        <h3 className="text-accent-400 font-semibold text-base md:text-lg mb-3">
          Pricing and terms
        </h3>
        <PricingTermsTable />
      </div>

      <div>
        <h3 className="text-accent-400 font-semibold text-base md:text-lg mb-3">
          Volume Cashback on Commission and Swaps
        </h3>
        <p className="mb-4 text-neutral-400">
          Cashback rises with your monthly traded volume, rewarding consistent
          flow and lowering your cost base as you grow.
        </p>
        <VolumeCashbackTable />
        <p className="text-neutral-400 text-sm mt-4 italic">{CASHBACK_FOOTNOTE}</p>
      </div>
    </div>
  );
}
