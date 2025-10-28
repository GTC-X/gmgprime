import Image from "next/image";

const cards = [
  { icon: "/images/icons/share.svg", text: "Liquidity for Brokers" },
  { icon: "/images/icons/futures.svg", text: "DMA Futures & Options" },
  {
    icon: "/images/icons/equities.svg",
    text: "DMA Equities and ETFs",
    extra: "bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-sky-blue-400/25 via-sky-blue-400/0",
  },
  { icon: "/images/icons/wallet.svg", text: "Fixed Income" },
  { icon: "/images/icons/bank.svg", text: "Funds" },
];

  const items = [
        {
            title: "Liquidity for Brokers",
            icon: "bar",
            img: "/new/img1.svg"
        },
        {
            title: "Pricing Models",
            icon: "pricing",
            img: "/new/img2.svg"
        },
        {
            title: "Risk & Controls",
            icon: "shield",
            img: "/new/img3.svg"
        },
        {
            title: "Connectivity & Access",
            icon: "link",
            img: "/new/img2.svg"
        },
        {
            title: "Reporting & TCA",
            icon: "report",
            img: "/new/img2.svg"
        },
        {
            title: "Onboarding & Go-Live",
            icon: "play",
            img: "/new/img2.svg"
        },
    ];

export default function PrimeServices() {
  return (
    <section className="pb-20 xl:pb-28">
      <div className="container">
        <h1 className="text-heading-1 mx-auto mb-16 max-w-screen-sm text-center font-normal">
          Solutions snapshot
        </h1>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/* <div className="flex items-center justify-center flex-col xl:flex-row gap-12">
            <div>
              <h1 className="text-heading-1 text-center font-normal text-accent-400">40,000+</h1>
              <h2 className="text-heading-2 text-center font-normal">Financial Assets</h2>
            </div>
          </div> */}

          {items.map((c, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl p-px bg-gradient-to-t from-[#265B9F] via-primary-800 to-accent-400"
            >
              <div className={`h-full rounded-2xl bg-[#265B9F]  p-8 xl:p-10 ${c.extra || ""}`}>
                <Image src={c.img} alt="Icon" width={50} height={50} className="mb-6" />
                <p className="font-sofia font-normal text-base lg:text-lg/[1.625rem] text-white">{c.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
