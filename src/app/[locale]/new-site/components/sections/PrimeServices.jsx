import Image from "next/image";

const items = [
  {
    title: "Liquidity for Brokers",
    img: "/new/img1.svg",
    desc: "Aggregated depth from banks, non-banks, ECNs and internal pools. Streams tailored to your model.",
  },
  {
    title: "Pricing Models",
    img: "/new/img2.svg",
    desc: "Commission plus raw, embedded mark-up, or a hybrid that scales with volume.",
  },
  {
    title: "Risk & Controls",
    img: "/new/img3.svg",
    desc: "Pre-trade limits, throttles, kill-switch, market impact controls, symbol-level settings.",
  },
  {
    title: "Connectivity & Access",
    img: "/icons/p1.svg",
    desc: "FIX 4.4, PrimeXM and TFB bridges, MT5. One integration across multiple sources.",
  },
  {
    title: "Reporting & TCA",
    img: "/icons/p2.svg",
    desc: "Daily statements, activity, exposure, downloadable PDF, Excel or XML. Real-time TCA available.",
  },
  {
    title: "Onboarding & Go-Live",
    img: "/icons/p3.svg",
    desc: "Dedicated sandbox, FIX testing, parallel run support, named engineer, 24/5 technical coverage.",
  },
];

export default function PrimeServices() {
  return (
    <section className="py-16 border border-white/5">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center text-[28px] md:text-[34px] font-bold text-[#E77831] mb-12">
          Solutions Snapshot
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {items.map((c, i) => (
            <div
              key={i}
              className="bg-[#162166] rounded-2xl border border-white/10 p-6 flex flex-col justify-start hover:shadow-[0_8px_24px_rgba(13,43,69,0.25)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#265B9F]/20">
                  <Image src={c.img} alt={c.title} width={28} height={28} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {c.title}
                </h3>
              </div>

              <p className="text-sm md:text-base text-white/70 leading-relaxed pl-14 md:pl-14">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button className="bg-[#E77831] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#cc692c] transition-all">
            See all solutions
          </button>
        </div>
      </div>
    </section>
  );
}
