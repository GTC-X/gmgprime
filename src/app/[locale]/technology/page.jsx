import Image from "next/image";
import Header from "../new-site/components/Header";
import CTA from "./components/CTA";
import FeatureGrid from "./components/featureGrid";
import FeatureRow from "./components/featureRow";
import Hero from "./components/hero";
import TechSpecs from "./components/techSpecs";
import Link from "next/link";
import NewCommonFooter from "../new-site/components/sections/Footer";



export default function Page() {
    return (
        <>
            <div className=" relative">
                <Header />
                <Hero />
            </div>

            <section className=" pt-16">
                <div className="container">
                    <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-[#265B9F] via-primary-800 to-accent-400">
                        <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-primary-800 via-primary-800 to-primary-800 p-10 xl:p-16">
                            <div className="  flex gap-12">
                                <div className="my-4 shrink-0 xl:my-0 xl:self-center">
                                    <Image src="/new/tech-img1.jpg" className=" rounded-2xl" alt="Rostro" width={180} height={200} />
                                </div>
                                <div>
                                    <h1 className="text-heading-1 mb-4 font-normal">Architecture at a glance</h1>
                                    <p className="font-sofia font-normal text-sm lg:text-base text-neutral-400">
                                        Core hub in LD4; redundant cores in the primary venue with carrier-neutral options. Aggregating top-tier PMMs and partner banks; fast, rich market data. Bridge and OMS platform (FIX & MT5 supported), 24/7 monitoring, SLOs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" container mx-auto pt-10">
                <CardGradient>
                    <section className="flex flex-col xl:flex-row items-start gap-6">
                        <div className="flex-1">
                            <h2 className="text-heading-2 mb-2">Latency and Proximity</h2>
                            <p className="text-body-1">
                                CPA available for qualified partners, with tracking tools and co-marketing support. Up to 1,000 USD per referral.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/partners"
                                className="inline-flex items-center rounded-xl px-5 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors whitespace-nowrap"
                            >
                                Discover hosting
                            </Link>
                        </div>
                    </section>
                </CardGradient>
            </div>
            {/* Two-up grids (repeat blocks as needed) */}
            <FeatureGrid
                items={[
                    {
                        title: "Connectivity and Access",
                        desc: "FIX 4.4/4.2, curated message flows, drop-copy available. Vendor neutral connectivity integrations and on-premises support.",
                        cta: "Request an overview",
                        image: "/new/tech-img3.png",
                    },
                    {
                        title: "Reliability by Design",
                        desc: "Resilient network plus dual network routes and mirrored services. Blue/green deployment & instant rollback. Real-time monitors and SLAs.",
                        cta: "See our SLA",
                        image: "/new/tech-img4.jpg",
                        variant: "ghost",
                    },
                ]}
            />

            <FeatureGrid
                items={[
                    {
                        title: "Pre-Trade Risk Controls",
                        desc: "Portfolio & per-instrument caps; max order size; fat-finger & runaway checks. Parallel and aggregate risk control with instant resets.",
                        cta: "Talk to an expert",
                        image: "/new/tech-img5.jpg",
                    },
                    {
                        title: "Execution Quality Controls",
                        desc: "Limit max lot per tick; smart throttle; symbol filters; latency floors; advanced queueing and anomaly filters.",
                        cta: "View flow rules",
                        image: "/new/tech-img6.jpg",
                        variant: "ghost",
                    },
                ]}
            />

            <FeatureGrid
                items={[
                    {
                        title: "Reporting and TCA",
                        desc: "Daily statements, client money, ledger and P/L. Real-time TCA, post-trade analytics and cost metrics via custom exports.",
                        cta: "View reporting",
                        image: "/new/tech-img7.jpg",
                    },
                    {
                        title: "Sandbox, certification and go-live",
                        desc: "Isolated cert environment, full FIX validation, and controlled migration schedule.",
                        cta: "Start a sandbox",
                        image: "/new/tech-img8.jpg",
                        variant: "ghost",
                    },
                ]}
            />

            <FeatureGrid
                items={[
                    {
                        title: "Operations Portal",
                        desc: "Real-time PnL & book controls. Session, symbols, and risk switches. Alerts, notifications and summaries aligned to desk workflows.",
                        cta: "Request a portal demo",
                        image: "/new/tech-img9.jpg",
                    },
                    {
                        title: "Security and Compliance",
                        desc: "Hardened environments, production UAT, audit trails and sandbox isolation. Data protection controls aligned to regional obligations.",
                        cta: "Talk about controls",
                        image: "/new/tech-img10.jpg",
                        variant: "ghost",
                    },
                ]}
            />

            <TechSpecs />
            <CTA />
            <NewCommonFooter/>
        </>
    );
}


function CardGradient({ children }) {
    return (
        <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-sky-blue-600">
            <div className="rounded-2xl bg-primary-950 bg-gradient-to-r from-sky-blue-400/25 via-primary-800 to-primary-800 p-6 xl:p-10">
                {children}
            </div>
        </div>
    );
}