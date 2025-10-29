import Image from "next/image";

const whatWeDo = [
    {
        title: "FCA-regulated credibility",
        icon: "/partner/icon1.svg",
        desc: "You’re introducing a London-based, regulated counterparty"
    },
    {
        title: "Fair CPA",
        icon: "/partner/icon2.svg",
        desc: "Earn up to 1,000 USD per qualified referral"
    },
    {
        title: "Co-marketing support",
        icon: "/partner/icon3.svg",
        desc: "Joint webinars, case studies and warm intros where appropriate"
    },
    {
        title: "Hands-on onboarding",
        icon: "/partner/icon4.svg",
        desc: "Dedicated engineer and RM to get your referrals live faster"
    },
    {
        title: "Real reporting",
        icon: "/partner/icon5.svg",
        desc: "Da portal with status, approvals, go-live dates and revenue snapshots "
    },
];
const WhyPartner = () => {
    return (
        <section className="container py-12 xl:py-16">
            <h2 className="text-center text-[26px] md:text-[28px] xl:text-[36px] font-bold text-[#F29120] mb-8">
                Why Partner With GMG Prime</h2>

            <div className="grid gap-6 justify-center lg:grid-cols-2 xl:grid-cols-3">
                {whatWeDo.map((item) => (
                    <GradientCard
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        desc={item.desc}
                    />
                ))}
            </div>


            <div className="mt-8 text-center">
                <button
                    type="button"
                    className="transition-colors bg-[#ED8946] text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                >
                    <span>Become a Partner</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                        <path
                            fill="currentColor"
                            d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                        />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default WhyPartner;


/* Smooth 3D flip card */
function GradientCard({
    title,
    icon,
    desc,
}) {
    return (
        <div className="group perspective w-full h-52 md:h-56">
            <div className="card-inner">
                {/* FRONT SIDE */}
                <div className="card-face card-front">
                    <div className="flex flex-col items-center justify-center gap-4 h-full rounded-2xl bg-primary-950 p-6 xl:p-8 text-center">
                        <Image src={icon} alt={title} width={48} height={48} />
                        <p className="font-sofia text-base lg:text-lg/[1.625rem] text-white">
                            {title}
                        </p>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="card-face card-back">
                    <p className="text-sm leading-6 text-neutral-200 text-center max-w-[90%]">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}