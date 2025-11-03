import Image from "next/image";
import CommonButton from "../../components/CommonButton";

const whatWeDo = [
  {
    title: "FCA-regulated credibility",
    icon: "/partner/icon1.svg",
    desc: "London-based, regulated counterparty",
  },
  {
    title: "Fair CPA",
    icon: "/partner/icon2.svg",
    desc: "Earn up to 1,500 USD per qualified referral",
  },
  {
    title: "Co-marketing support",
    icon: "/partner/icon3.svg",
    desc: "Joint webinars, case studies and warm intros where appropriate",
  },
  {
    title: "Hands-on onboarding",
    icon: "/partner/icon4.svg",
    desc: "Dedicated engineer and RM to get your referrals live faster",
  },
  {
    title: "Real reporting",
    icon: "/partner/icon5.svg",
    desc: "Go-live dates, approvals and payouts status.",
  },
];

export default function WhyPartner() {
  return (
    <section className="container py-10 xl:py-12">
      {/* Heading */}
      <h2 className="text-center text-[26px] md:text-[28px] xl:text-[36px] font-bold text-[#F29120] mb-8">
        Why Partner With GMG Prime
      </h2>

      {/* Grid: first 3 cards span 4 columns each; last 2 cards span 6 each (like the design) */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-8 xl:grid-cols-12">
        {whatWeDo.map((item, i) => (
          <WhatWeDoCard
            key={item.title}
            title={item.title}
            icon={item.icon}
            desc={item.desc}
            className={
              i < 3
                ? "md:col-span-4 xl:col-span-4" // first row (3 items)
                : "md:col-span-8 xl:col-span-6" // second row (2 wide items)
            }
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
       <CommonButton>Become a Partner</CommonButton>
      </div>
    </section>
  );
}

/* Card to match the screenshot style */
function WhatWeDoCard({ title, icon, desc, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] px-6 py-6 md:px-7 md:py-7 shadow-[0_8px_20px_rgba(0,0,0,0.25)] ring-1 ring-white/5 " +
        className
      }
    >
      <div className="flex items-start gap-4 relative z-50">
        {/* Icon badge */}
        <span className="inline-grid h-10 w-10 place-items-center rounded-full">
          <Image src={icon} alt={title} width={40} height={40} />
        </span>

        {/* Text block */}
        <div>
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#F29120]">
            {title}
          </h3>
          <p className="mt-2 text-[14.5px] md:text-[15px] leading-6 text-white/80">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
