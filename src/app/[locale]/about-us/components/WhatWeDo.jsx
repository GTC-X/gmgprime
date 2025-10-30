import Image from "next/image";
import CommonButton from "../../components/CommonButton";

const whatWeDo = [
  {
    title: "Right-sized prime liquidity",
    icon: "/new/about-icon1.svg",
    desc: "Institutional depth that fits your stage and capital plan.",
  },
  {
    title: "Clear commercial terms",
    icon: "/new/about-icon2.svg",
    desc: "Simple commission or mark-up with sensible tiers.",
  },
  {
    title: "Fast integration",
    icon: "/new/about-icon3.svg",
    desc: "FIX 4.4 access, MT5 via PrimeXM and TFB, guided certification.",
  },
  {
    title: "Operational reliability",
    icon: "/new/about-icon4.svg",
    desc: "LD4 hub with resilience, monitoring and rapid recovery.",
  },
  {
    title: "Reporting that proves value",
    icon: "/new/about-icon5.svg",
    desc: "Daily statements, custom exports and real-time TCA.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="container">
      {/* Section Title */}
      <h2 className="text-center text-[28px] md:text-[34px] font-bold text-[#E77831] mb-10">
        What We Do
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-6">
        {whatWeDo.map((item, idx) => (
          <div
            key={item.title}
            className={idx < 3 ? "xl:col-span-2" : "xl:col-span-3"}
          >
            <Card icon={item.icon} title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <CommonButton>Explore our solutions</CommonButton>
      </div>
    </section>
  );
}

/* Simple Card Component */
function Card({ icon, title, desc }) {
  return (
    <div className="bg-[#162166] rounded-2xl p-6 shadow-[0_8px_24px_rgba(13,43,69,0.08)] border border-[#f0f0f0]/10 hover:shadow-[0_10px_28px_rgba(13,43,69,0.12)] transition-all duration-300">
      <div className="flex flex-col items-start gap-4">
        {/* Icon */}
        <Image src={icon} alt={title} width={48} height={48} className="object-contain" />

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-accent-700">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-white/80 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
