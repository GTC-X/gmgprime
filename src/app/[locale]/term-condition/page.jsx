import NewCommonFooter from "../new-site/components/sections/Footer";
import PricingTermsTable from "../components/PricingTermsTable";
import PricingTermsExtendedSections from "../components/PricingTermsExtendedSections";

export const metadata = {
  title: "Pricing and terms | GMG Prime",
  description:
    "GMG Prime pricing, commission, volume cashback on commission and swaps, and what is included with every account.",
};

const TOC = [
  { id: "pricing-and-terms", label: "Pricing and terms" },
  { id: "volume-cashback", label: "Volume cashback" },
  { id: "example-cashback", label: "Example at scale" },
  { id: "included-with-account", label: "Included with every account" },
];

function PricingCard({ id, title, children }) {
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
            <PricingCard id="pricing-and-terms" title="Pricing and terms">
              <PricingTermsTable />
            </PricingCard>

            <PricingTermsExtendedSections variant="cards" />
          </article>
        </div>
      </section>

      <NewCommonFooter />
    </main>
  );
}
