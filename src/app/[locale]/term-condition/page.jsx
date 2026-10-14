import NewCommonFooter from "../new-site/components/sections/Footer";

export const metadata = {
  title: "Pricing and terms | GMG Prime",
  description:
    "GMG Prime pricing, commission, volume cashback on commission and swaps, and what is included with every account.",
};

const PRICING_ROWS = [
  { item: "Pricing-only API fee", terms: "$1,000 per month" },
  { item: "Minimum initial deposit (STP)", terms: "$20,000" },
  {
    item: "Commission",
    terms: "$8 per $1m notional, charged on open only",
  },
];

const CASHBACK_ROWS = [
  {
    volume: "$500m to under $1bn",
    commission: "$0.50 per $1m",
    swap: "5%",
  },
  {
    volume: "$1bn to under $3bn",
    commission: "$1.00 per $1m",
    swap: "8%",
  },
  {
    volume: "$3bn to under $4bn",
    commission: "$2.00 per $1m",
    swap: "10%",
  },
  {
    volume: "$4bn and above",
    commission: "$3.00 per $1m",
    swap: "12%",
  },
];

const EXAMPLE_ROWS = [
  { label: "Gross commission on $1bn", value: "$4,000" },
  { label: "Cashback", value: "-$500" },
  { label: "Net cost", value: "$3,500" },
];

const INCLUDED = [
  "No set-up fees",
  "API fee waived for monthly volume of $200m or more",
  "First three months of API fees free of charge",
  "24/5 personalised technical support",
];

const TOC = [
  { id: "pricing-and-terms", label: "Pricing and terms" },
  { id: "volume-cashback", label: "Volume cashback" },
  { id: "example", label: "Example at scale" },
  { id: "included", label: "Included with every account" },
];

export default function TermConditionPage() {
  return (
    <main className="text-white">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 xl:py-28">
          <div className="max-w-[800px]">
            <h1 className="text-heading-1 font-normal">Pricing and terms</h1>
            <p className="text-neutral-400 text-body-1 mt-4">
              Commercial terms for GMG Prime institutional connectivity and
              liquidity.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid xl:grid-cols-5 gap-8">
          <aside className="xl:col-span-1 xl:sticky xl:top-8 h-fit">
            <div className="rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600">
              <nav className="rounded-2xl bg-primary-950 p-6">
                <h2 className="text-subtitle-2 mb-3">Contents</h2>
                <ul className="space-y-2 text-sm text-neutral-400">
                  {TOC.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="hover:text-accent-400 transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <article className="xl:col-span-4 space-y-8">
            <ContentCard id="pricing-and-terms" title="Pricing and terms">
              <DataTable
                columns={[
                  { key: "item", header: "Item" },
                  { key: "terms", header: "Terms" },
                ]}
                rows={PRICING_ROWS}
              />
            </ContentCard>

            <ContentCard
              id="volume-cashback"
              title="Volume Cashback on Commission and Swaps"
            >
              <p className="text-neutral-300 mb-6">
                Cashback rises with your monthly traded volume, rewarding
                consistent flow and lowering your cost base as you grow.
              </p>
              <DataTable
                columns={[
                  {
                    key: "volume",
                    header: "Monthly volume (USD notional)",
                  },
                  { key: "commission", header: "Commission cashback" },
                  { key: "swap", header: "Swap cashback" },
                ]}
                rows={CASHBACK_ROWS}
              />
              <p className="text-neutral-400 text-sm mt-4 italic">
                Swap cashback is calculated as a percentage of swap charges paid.
                Cashback applies to all volume in the month once a tier is
                reached.
              </p>
            </ContentCard>

            <ContentCard id="example" title="Example: Cashback at Scale">
              <p className="text-neutral-300 mb-6">
                Once your monthly volume reaches $1bn, a cashback of $1.00 per
                $1m applies, bringing your effective commission down from $8 to
                $7 per $1m.
              </p>
              <DataTable
                columns={[
                  { key: "label", header: "" },
                  { key: "value", header: "" },
                ]}
                rows={EXAMPLE_ROWS}
                hideHeader
              />
            </ContentCard>

            <ContentCard id="included" title="Included with every account">
              <ul className="space-y-3">
                {INCLUDED.map((text) => (
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
            </ContentCard>
          </article>
        </div>
      </section>

      <NewCommonFooter />
    </main>
  );
}

function ContentCard({ id, title, children }) {
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

function DataTable({ columns, rows, hideHeader = false }) {
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
