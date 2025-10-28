import Image from "next/image";

const whatWeDo = [
    {
        title: "Right-sized prime liquidity",
        icon: "/new/about-icon1.svg",
        desc: "Institutional depth that fits your stage and capital plan."
    },
    {
        title: "Clear commercial terms",
        icon: "/new/about-icon2.svg",
        desc: "Simple commission or mark-up with sensible tiers."
    },
    {
        title: "Fast integration",
        icon: "/new/about-icon3.svg",
        desc: "FIX 4.4 access, MT5 via PrimeXM and TFB, guided certification."
    },
    {
        title: "Operational reliability",
        icon: "/new/about-icon4.svg",
        desc: "LD4 hub with resilience, monitoring and rapid recovery."
    },
    {
        title: "Reporting that proves value",
        icon: "/new/about-icon5.svg",
        desc: "Daily statements, custom exports and real-time TCA."
    },
];
const WhatWeDo = () => {
    return (
        <section className="container py-12 xl:py-16">
            <h2 className="text-heading-2 mb-10 text-[#ED8946] text-center font-normal">What we do</h2>

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


            <div className="mt-6 text-center">
                <a
                    href="#solutions"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-4 py-2 text-sm hover:bg-primary-700 transition-colors"
                >
                    Explore our solutions
                </a>
            </div>
        </section>
    )
}

export default WhatWeDo;


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