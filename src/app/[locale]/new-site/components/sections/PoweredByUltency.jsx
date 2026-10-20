import Link from "next/link";
import {
  METAQUOTES_ULTENCY_ANNOUNCEMENT_URL,
  ULTENCY_TEASER_PARAGRAPHS,
} from "../../../data/poweredByUltencyContent";

export default function PoweredByUltency() {
  return (
    <section className="border-t border-white/5 bg-[#0a1942] py-12 md:py-16">
      <div className="container">
        <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-accent-400">
          <div className="rounded-2xl bg-primary-950 bg-gradient-to-br from-[#162166] via-primary-800 to-[#0c1447] p-6 xl:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-accent-400 text-sm font-semibold uppercase tracking-wide mb-3">
                  MetaTrader 5 · Ultency
                </p>
                <h2 className="text-heading-1 mb-6 text-[#E77831] capitalize">
                  Powered by Ultency
                </h2>

                <div className="space-y-4 text-neutral-200 text-sm lg:text-base leading-relaxed">
                  {ULTENCY_TEASER_PARAGRAPHS.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/powered-by-ultency"
                    className="inline-flex items-center rounded-xl px-5 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors"
                  >
                    Know more about Ultency
                  </Link>
                  <a
                    href={METAQUOTES_ULTENCY_ANNOUNCEMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl px-5 py-3 border border-white/20 text-white font-medium hover:border-accent-400/60 hover:text-accent-400 transition-colors"
                  >
                    Read the announcement
                  </a>
                </div>
              </div>

              <div
                className="hidden lg:block w-48 xl:w-56 shrink-0 rounded-2xl border border-white/10 bg-[#162166]/60 p-6 text-center"
                aria-hidden
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent-400/15">
                  <span className="text-accent-400 text-xl font-bold">MT5</span>
                </div>
                <p className="text-white text-sm font-semibold">
                  Native MT5 matching
                </p>
                <p className="mt-2 text-neutral-400 text-xs leading-relaxed">
                  Parallel to our core stack — an alternative way to connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
