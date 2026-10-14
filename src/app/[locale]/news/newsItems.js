export const NEWS_ITEMS = [
  {
    slug: "gmg-prime-integrates-metaquotes-ultency-matching-engine",
    title: "GMG Prime integrates MetaQuotes' Ultency Matching Engine",
    displayTitle:
      "GMG Prime integrates MetaQuotes' Ultency Matching Engine (26 January 2026)",
    date: "2026-01-26",
    dateLabel: "26 January 2026",
    excerpt:
      "GMG Prime has integrated MetaQuotes' Ultency Matching Engine, bringing institutional-grade liquidity directly into MetaTrader 5 with fewer bridges and middleware layers.",
  },
];

export function getNewsItem(slug) {
  return NEWS_ITEMS.find((item) => item.slug === slug);
}
