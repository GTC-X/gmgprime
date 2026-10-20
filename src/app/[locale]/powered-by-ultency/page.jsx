import Link from "next/link";
import NewCommonFooter from "../new-site/components/sections/Footer";
import UltencyFaqAccordion from "../components/UltencyFaqAccordion";
import {
  METAQUOTES_ULTENCY_ANNOUNCEMENT_URL,
  ULTENCY_DETAIL_PARAGRAPHS,
  ULTENCY_HIGHLIGHTS,
} from "../data/poweredByUltencyContent";

export const metadata = {
  title: "Powered by Ultency | GMG Prime",
  description:
    "How GMG Prime integrates MetaQuotes' Ultency Matching Engine with MT5 — parallel architecture, native matching, and institutional onboarding.",
};

export default function PoweredByUltencyPage() {
  return (
    <main className="text-white">
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(237, 137, 70, 0.15), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 100%, rgba(29, 120, 223, 0.2), transparent)",
          }}
        />
        <div className="container relative mx-auto px-4 py-16 xl:py-24">
          <Link
            href="/"
            className="text-sm text-neutral-400 hover:text-accent-400 transition-colors"
          >
            ← Back to home
          </Link>
          <p className="mt-6 text-accent-400 text-sm font-semibold uppercase tracking-wide">
            MetaTrader 5 · Ultency
          </p>
          <h1 className="text-heading-1 mt-2 max-w-3xl capitalize">
            Powered by Ultency
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-400 text-body-1">
            Institutional liquidity with native matching inside MetaTrader 5 —
            running in parallel with GMG Prime&apos;s established infrastructure.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 xl:grid-cols-12">
          <article className="xl:col-span-7 space-y-5 text-neutral-200 text-sm lg:text-base leading-relaxed">
            {ULTENCY_DETAIL_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </article>

          <aside className="xl:col-span-5">
            <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-accent-400 xl:sticky xl:top-8">
              <div className="rounded-2xl bg-[#132F47] p-6 md:p-8">
                <h2 className="text-lg font-semibold text-white mb-4">
                  At a glance
                </h2>
                <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                    <span className="text-neutral-300">
                      Ultency runs <strong className="text-white">in parallel</strong> with our high-performance architecture.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                    <span className="text-neutral-300">
                      Aggregation and matching natively inside MT5.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                    <span className="text-neutral-300">
                      UK counterparty: Global Markets Group Limited (FCA FRN 744501).
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex w-full justify-center rounded-xl px-5 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors"
                >
                  Talk to our desk
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0a1942]/80 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-heading-2 mb-8 text-center text-[#E77831]">
            Why it matters for your desk
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {ULTENCY_HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl p-px bg-gradient-to-b from-white/10 to-transparent"
              >
                <div className="h-full rounded-2xl bg-[#162166]/90 border border-white/5 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 pt-4 md:pb-28">
        <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-[#265B9F] via-primary-800 to-accent-400">
          <div className="rounded-2xl bg-primary-950 bg-gradient-to-br from-primary-900 via-[#132F47] to-primary-950 p-6 md:p-10 xl:p-12">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-heading-2 mb-2 text-[#E77831]">FAQs</h2>
              <p className="text-neutral-400 text-body-2">
                Common questions about Ultency, pricing, onboarding, and how to
                reach our institutional desk.
              </p>
            </div>
            <UltencyFaqAccordion />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-neutral-400 text-sm md:text-base">
            Read MetaQuotes&apos; official release on GMG Prime&apos;s Ultency
            integration into MetaTrader 5.
          </p>
          <a
            href={METAQUOTES_ULTENCY_ANNOUNCEMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl px-6 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors"
          >
            Read the announcement
          </a>
        </div>
      </section>

      <NewCommonFooter />
    </main>
  );
}
