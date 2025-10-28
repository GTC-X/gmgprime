// app/(site)/about/page.tsx  OR  pages/about.tsx
"use client";

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


const steps = [
    { title: "Listen first", text: "We map your model, workflows and priorities.", icon: "/new/about-icon6.svg" },
    { title: "Design your stream", text: "Pricing, risk and routing aligned to your commercial aims.", icon: "/new/about-icon7.svg" },
    { title: "Prove in sandbox", text: "Guided testing, FIX validation and parallel run plan.", icon: "/new/about-icon8.svg" },
    { title: "Go live with support", text: "A named engineer and 24/5 coverage from day one.", icon: "/new/about-icon9.svg" },
];

const leaders = [
    { name: "Christinane Vasiladou", role: "Chief Compliance Officer", img: "/images/leadership/1.jpg" },
    { name: "Ross Donghour", role: "Chief Operating Officer", img: "/images/leadership/2.jpg" },
    { name: "Kosta Pourglias", role: "Head of Liquidity", img: "/images/leadership/3.jpg" },
    { name: "Gregory Hay", role: "Head of Engineering", img: "/images/leadership/4.jpg" },
];

export default function AboutPage() {
    return (
        <main className=" text-white">
            {/* Who we are */}
            <section className="container py-16 xl:py-24">
                <div className="grid gap-8 xl:grid-cols-2 xl:items-center">
                    <div>
                        <h1 className="text-heading-1 mb-4 text-[#ED8946] font-normal">Who we are</h1>
                        <p className="text-neutral-200 text-base lg:text-lg/[1.625rem] mb-4">
                            GMG Prime is the liquidity partner built to fit where a growth broker is—today and tomorrow.
                            We combine right-sized prime liquidity with clear commercial terms and dependable operations.
                        </p>
                        <p className="text-neutral-400 text-sm lg:text-base">
                            Authorised and regulated by the Financial Conduct Authority (FRN 744501).
                            Registered office: 20-22 Wenlock Road, London N1 7GU, United Kingdom.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a
                                href="#contact"
                                className="rounded-full bg-accent-400 px-5 py-3 text-black font-medium hover:bg-accent-400/80 transition-colors"
                            >
                                Book a call
                            </a>
                            <a
                                href="#pricing"
                                className="rounded-full border border-neutral-500 px-5 py-3 text-white hover:bg-primary-800 transition-colors"
                            >
                                Request pricing
                            </a>
                        </div>
                    </div>

                    <div className="relative xl:justify-end">
                        <Image
                            src="/new/about.svg"
                            alt="Trading laptop"
                            width={640}
                            height={420}
                            className="w-full max-w-[560px] mx-auto"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* What we do */}
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

            {/* Who we serve */}
            <section className="container py-16 xl:py-24">
                <div className="grid gap-10 xl:grid-cols-2 xl:items-center">
                    <div className="order-2 xl:order-1">
                        <h3 className="text-heading-2 mb-4 font-normal text-[#ED8946]">Who we serve</h3>
                        <p className="text-neutral-200 text-base lg:text-lg/[1.625rem]">
                            We back growth-stage and established brokerages that want to scale into new markets with confidence.
                            Our team helps your staff and clients get quickly to value with clear, practical onboarding.
                        </p>
                    </div>
                    <div className="order-1 xl:order-2">
                        <Image
                            src="/new/about-img2.svg"
                            alt="Who we serve"
                            width={640}
                            height={420}
                            className="w-full rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* How we work (on dark panel) */}
            <section className="py-16 xl:py-24 bg-primary-800 bg-[url('/images/bg.svg')] bg-no-repeat bg-top">
                <div className="container">
                    <h3 className="text-heading-2 text-center mb-10 font-normal text-[#ED8946]">How we work</h3>

                    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                        {steps.map((s) => (
                            <div key={s.title} className="rounded-2xl bg-primary-950/60 p-6 border border-primary-500">
                                <Image src={s.icon} alt="" width={36} height={36} className="mb-4" />
                                <p className="text-subtitle-1 mb-1">{s.title}</p>
                                <p className="text-neutral-300 text-sm">{s.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="#onboarding"
                            className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-5 py-3 text-black font-medium hover:bg-accent-400/80 transition-colors"
                        >
                            Start in Sandbox
                        </a>
                    </div>
                </div>
            </section>

            {/* Governance & compliance strip */}
            <section className="container py-12 xl:py-16">
                <h4 className="text-heading-3 mb-3 font-normal text-[#ED8946] ">Our governance and compliance</h4>
                <p className="text-neutral-300 max-w-[800px]">
                    FCA authorisation (FRN 744501) with permissions that cover margin-trading client money, agency & principal,
                    plus related activities. Client oversight led by the Counterparty, Privacy and Financial Crime frameworks
                    with named owners and cross-business controls. Jurisdiction notice: this site is not directed at residents of
                    the United States, Japan, Canada, Belgium or any region where use would contravene local law or regulation.
                </p>
                <div className="mt-4">
                    <a
                        href="#disclosures"
                        className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-4 py-2 text-sm hover:bg-primary-700 transition-colors"
                    >
                        View Disclosures
                    </a>
                </div>
            </section>

            {/* Technology you can trust */}
            <section className="bg-primary-800 py-16 xl:py-24">
                <div className="container grid gap-10 xl:grid-cols-2 xl:items-center">
                    <div>
                        <h3 className="text-heading-2 mb-3 font-normal text-[#ED8946]">Technology you can trust</h3>
                        <p className="text-neutral-200 text-base lg:text-lg/[1.625rem] mb-4">
                            Built on a dedicated global network for low latency and failover protection, with real-time
                            reporting and reliable redundancy. Bridges supported include PrimeXM and TFB; integrated to MetaTrader 5.
                        </p>
                        <a
                            href="#technology"
                            className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-5 py-3 text-black font-medium hover:bg-accent-400/80 transition-colors"
                        >
                            See our technology
                        </a>
                    </div>

                    <Image
                        src="/new/about-img3.svg"
                        alt="Technology"
                        width={640}
                        height={420}
                        className="w-full rounded-2xl"
                    />
                </div>
            </section>

            {/* Leadership */}
            <section className="container py-16 xl:py-24">
                <h3 className="text-heading-2 text-center mb-10 font-normal text-[#ED8946]">Leadership</h3>
                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    {leaders.map((m) => (
                        <div key={m.name} className="rounded-2xl border border-primary-500 bg-primary-900/40">
                            <div className="h-40 w-full overflow-hidden rounded-t-2xl bg-red-400/80">
                                <Image
                                    src={m.img}
                                    alt={m.name}
                                    width={480}
                                    height={240}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-subtitle-1">{m.name}</p>
                                <p className="text-neutral-400 text-sm">{m.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="#leadership"
                        className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-4 py-2 text-sm hover:bg-primary-700 transition-colors"
                    >
                        Meet the Leadership Team
                    </a>
                </div>
            </section>

            {/* Commitments (on blue background) */}
            <section className="bg-primary-800 bg-[url('/images/bg.svg')] bg-no-repeat bg-top py-16 xl:py-24">
                <div className="container grid gap-10 xl:grid-cols-2 xl:items-center">
                    <div>
                        <h3 className="text-heading-2 font-normal text-[#ED8946]">Our<br />Commitments</h3>
                    </div>
                    <ul className="space-y-3 text-neutral-100">
                        <li>Fair, clear and not misleading in every piece of client-facing content.</li>
                        <li>Never over-promise; we keep delivery realistic and measurable.</li>
                        <li>Price transparency via clear, contract-matched terms.</li>
                        <li>Security, regional segmentation and named owners for critical processes.</li>
                        <li>Partner-level support: proactive insights, rapid fixes and practical help.</li>
                    </ul>

                    <div className="xl:col-start-2">
                        <a
                            href="#disclosures"
                            className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-4 py-2 text-black text-sm font-medium hover:bg-accent-400/80 transition-colors"
                        >
                            View disclosures
                        </a>
                    </div>
                </div>
            </section>

            {/* Careers */}
            <section className="bg-[url('/images/bg.svg')] bg-no-repeat bg-top py-16 xl:py-24">
                <div className="container text-center">
                    <h3 className="text-heading-2 mb-3 font-normal text-[#ED8946]">Careers</h3>
                    <p className="mx-auto max-w-[760px] text-neutral-300">
                        We hire people who like solving hard problems for brokers. If you are strong in technology,
                        operations or client service, we’d love to hear from you.
                    </p>
                    <div className="mt-6">
                        <a
                            href="#careers"
                            className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-5 py-3 text-sm hover:bg-primary-700 transition-colors"
                        >
                            See open roles
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

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



