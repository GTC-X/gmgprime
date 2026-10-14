import Link from "next/link";
import NewCommonFooter from "../new-site/components/sections/Footer";
import { NEWS_ITEMS } from "./newsItems";

export const metadata = {
  title: "News | GMG Prime",
  description: "Announcements and updates from GMG Prime.",
};

export default function NewsPage() {
  return (
    <main className="text-white">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 xl:py-28">
          <div className="max-w-[800px]">
            <h1 className="text-heading-1 mb-4">News</h1>
            <p className="text-neutral-400 text-body-1">
              Announcements and updates from GMG Prime.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <ul className="max-w-3xl space-y-4">
          {NEWS_ITEMS.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/news/${item.slug}`}
                className="block overflow-hidden rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600 transition-opacity hover:opacity-95"
              >
                <article className="rounded-2xl bg-[#132F47] px-6 py-5">
                  <time
                    dateTime={item.date}
                    className="text-sm text-neutral-400"
                  >
                    {item.dateLabel}
                  </time>
                  <h2 className="text-body-1-semibold mt-2 text-white">
                    {item.title}
                  </h2>
                  <p className="text-neutral-400 text-body-2 mt-2">
                    {item.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-accent-400 text-sm font-medium">
                    Read more →
                  </span>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <NewCommonFooter />
    </main>
  );
}
