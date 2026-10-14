const HIGHLIGHTS = [
  {
    title: "Who it's for",
    body: "Start-up and small-to-medium brokerages, family offices, hedge funds, and asset and wealth managers.",
  },
  {
    title: "How pricing works",
    body: "You pay on real traded volume. There are no maintenance fees.",
  },
  {
    title: "Getting started",
    body: "Onboarding is streamlined and account structures are flexible, so you can go live quickly and scale from there.",
  },
];

export default function PoweredByUltency() {
  return (
    <section className="border-t border-white/5 bg-[#0a1942] py-12 md:py-16">
      <div className="container">
        <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-accent-400">
          <div className="rounded-2xl bg-primary-950 bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] p-6 xl:p-12">
            <h2 className="text-heading-1 mb-6 text-[#E77831] capitalize">
              Powered by Ultency
            </h2>

            <div className="max-w-4xl space-y-4 text-neutral-200 text-sm lg:text-base leading-relaxed">
              <p>
                In January 2026 we integrated MetaQuotes&apos; Ultency Matching
                Engine directly into our MT5 environment. Ultency handles
                aggregation and order matching natively inside MetaTrader 5,
                which means brokers and institutional clients can reach GMG
                Prime&apos;s liquidity pool with much less reliance on
                third-party bridges or middleware.
              </p>
              <p>
                We combine Ultency&apos;s aggregation and matching logic with
                GMG Prime&apos;s liquidity network. The engine scales
                horizontally and is built to stay stable when volumes spike, so
                execution holds up at the moments that matter most.
              </p>
              <p>
                You keep control of order routing and risk settings, and you
                deal with a UK counterparty: trades are executed with Global
                Markets Group Limited, authorised and regulated by the Financial
                Conduct Authority (FRN 744501).
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#162166]/80 p-5 md:p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm lg:text-base">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
