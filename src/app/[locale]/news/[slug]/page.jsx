import Link from "next/link";
import { notFound } from "next/navigation";
import NewCommonFooter from "../../new-site/components/sections/Footer";
import { NEWS_ITEMS, getNewsItem } from "../newsItems";

export function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return {};

  return {
    title: `${item.displayTitle} | GMG Prime`,
    description: item.excerpt,
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  return (
    <main className="text-white">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 xl:py-28">
          <div className="max-w-[800px]">
            <Link
              href="/news"
              className="text-sm text-accent-400 hover:text-accent-400/80 mb-6 inline-block"
            >
              ← Back to news
            </Link>
            <time
              dateTime={item.date}
              className="block text-neutral-400 text-body-2"
            >
              {item.dateLabel}
            </time>
            <h1 className="text-heading-1 mt-3 font-normal">{item.title}</h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <article className="max-w-3xl space-y-5 text-neutral-300 text-body-1 leading-relaxed">
          <p>
            GMG Prime, the institutional division of Global Markets Group
            Limited, has integrated MetaQuotes&apos; Ultency Matching Engine,
            bringing its institutional-grade liquidity directly into the
            MetaTrader 5 trading environment. The integration allows brokers to
            connect to GMG Prime&apos;s liquidity pool natively through
            MetaTrader 5, reducing reliance on external bridges and middleware.
          </p>
          <p>
            The integration is designed to support tighter spreads, faster
            execution, and greater control over order routing and risk
            management for institutional workflows.
          </p>
          <blockquote className="border-l-4 border-accent-400 pl-5 italic text-neutral-200">
            &ldquo;This integration strengthens our ability to deliver bespoke
            liquidity and advanced execution workflows to institutional
            clients,&rdquo; said Christiana Vasiadou, CEO of Global Markets
            Group Limited. &ldquo;By combining Ultency&apos;s proprietary
            aggregation and matching logic with GMG Prime&apos;s liquidity
            network, brokers gain access to tighter spreads, faster execution,
            and greater control over order routing and risk management.&rdquo;
          </blockquote>
          <p>
            Ultency Matching Engine delivers institutional-grade performance for
            liquidity aggregation, execution, and risk management. It is built
            natively into MetaTrader 5 to support fast order processing, robust
            system reliability, and scalable high-throughput trading operations.
            Brokers can connect to the system and access extensive liquidity with
            no maintenance fees, paying only for actual traded volume.
          </p>
          <p>
            According to GMG Prime, the integration enhances its ability to
            offer institutional clients direct access to multi-source liquidity
            with greater operational transparency. Brokers connecting to GMG
            Prime through Ultency can benefit from reduced latency, advanced risk
            controls, and scalable infrastructure to support growth.
          </p>
          <p>
            For onboarding and technical questions, contact our institutional
            desk at{" "}
            <a
              href="mailto:support@gmgprime.com"
              className="text-accent-400 underline hover:text-accent-400/80"
            >
              support@gmgprime.com
            </a>{" "}
            or{" "}
            <a
              href="tel:+442038653306"
              className="text-accent-400 underline hover:text-accent-400/80"
            >
              +44 203 865 3306
            </a>
            .
          </p>
        </article>
      </section>

      <NewCommonFooter />
    </main>
  );
}
