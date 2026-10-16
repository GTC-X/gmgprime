import {
  CASHBACK_ROWS,
  EXAMPLE_ROWS,
  INCLUDED_WITH_ACCOUNT,
} from "../data/pricingTerms";
import PricingDataTable from "./PricingDataTable";

const CASHBACK_COLUMNS = [
  { key: "volume", header: "Monthly volume (USD notional)" },
  { key: "commission", header: "Commission cashback" },
  { key: "swap", header: "Swap cashback" },
];

const EXAMPLE_COLUMNS = [
  { key: "label", header: "" },
  { key: "value", header: "" },
];

/**
 * @param {"inline" | "cards"} variant
 * inline — nested inside technology latency card
 * cards — standalone gradient cards on /term-condition
 */
export default function PricingTermsExtendedSections({ variant = "inline" }) {
  const sections = (
    <>
      <VolumeCashbackBlock variant={variant} />
      <ExampleBlock variant={variant} />
      <IncludedBlock variant={variant} />
    </>
  );

  if (variant === "cards") {
    return <div className="space-y-8">{sections}</div>;
  }

  return <div className="mt-10 space-y-10 border-t border-white/10 pt-10">{sections}</div>;
}

function SectionShell({ id, title, variant, children }) {
  if (variant === "cards") {
    return (
      <section id={id} className="overflow-hidden rounded-2xl">
        <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-[#265B9F] via-primary-800 to-accent-400">
          <div className="rounded-2xl bg-primary-950 bg-gradient-to-r from-primary-800 via-primary-800 to-primary-800 p-6 xl:p-8">
            <h2 className="text-[18px] md:text-[20px] text-accent-400 font-semibold mb-5">
              {title}
            </h2>
            <div className="text-body-1">{children}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="scroll-mt-28">
      <h3 className="text-[18px] md:text-[20px] text-accent-400 font-semibold mb-4">
        {title}
      </h3>
      {children}
    </section>
  );
}

function VolumeCashbackBlock({ variant }) {
  return (
    <SectionShell
      id="volume-cashback"
      title="Volume Cashback on Commission and Swaps"
      variant={variant}
    >
      <p className="text-neutral-300 mb-6">
        Cashback rises with your monthly traded volume, rewarding consistent
        flow and lowering your cost base as you grow.
      </p>
      <PricingDataTable columns={CASHBACK_COLUMNS} rows={CASHBACK_ROWS} />
      <p className="text-neutral-400 text-sm mt-4 italic">
        Swap cashback is calculated as a percentage of swap charges paid.
        Cashback applies to all volume in the month once a tier is reached.
      </p>
    </SectionShell>
  );
}

function ExampleBlock({ variant }) {
  return (
    <SectionShell
      id="example-cashback"
      title="Example: Cashback at Scale"
      variant={variant}
    >
      <p className="text-neutral-300 mb-6">
        Once your monthly volume reaches $1bn, a cashback of $1.00 per $1m
        applies, bringing your effective commission down from $8 to $7 per $1m.
      </p>
      <PricingDataTable
        columns={EXAMPLE_COLUMNS}
        rows={EXAMPLE_ROWS}
        hideHeader
      />
    </SectionShell>
  );
}

function IncludedBlock({ variant }) {
  return (
    <SectionShell
      id="included-with-account"
      title="Included with every account"
      variant={variant}
    >
      <ul className="space-y-3">
        {INCLUDED_WITH_ACCOUNT.map((text) => (
          <li
            key={text}
            className="flex gap-3 text-neutral-200 text-body-1"
          >
            <span
              className="mt-2 inline-block h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-accent-400"
              aria-hidden
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
