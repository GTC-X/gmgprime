export const PRICING_ROWS = [
  { item: "Pricing-only API fee", terms: "$1,000 per month" },
  { item: "Minimum initial deposit (STP)", terms: "$20,000" },
  {
    item: "Commission",
    terms: "$8 per $1m notional, charged on open only",
  },
];

export const CASHBACK_ROWS = [
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

export const EXAMPLE_ROWS = [
  { label: "Gross commission on $1bn", value: "$8,000" },
  { label: "Cashback", value: "-$1,000" },
  { label: "Net cost", value: "$7,000" },
];

export const INCLUDED_WITH_ACCOUNT = [
  "No set-up fees",
  "API fee waived for monthly volume of $200m or more",
  "First three months of API fees free of charge",
  "24/5 personalised technical support",
];
