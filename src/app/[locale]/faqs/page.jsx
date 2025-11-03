// app/faq/page.jsx (Next.js App Router) or pages/faq.jsx (Pages Router)
"use client";
import { useMemo, useState } from "react";
import Header from "../new-site/components/Header";
import NewCommonFooter from "../new-site/components/sections/Footer";
import Meta from "../components/Meta";

const sections = [
    {
        id: "getting-started",
        title: "Getting started",
        items: [
            {
                q: "Who is GMG Prime for?",
                a: "Start-up and small-to-medium brokerages that want institutional quality liquidity with practical onboarding, FIX or MT5 connectivity, and clear commercial terms.",
            },
            {
                q: "Are you regulated?",
                a: "Yes. Global Markets Group Limited is authorised and regulated by the Financial Conduct Authority. FRN 744501.",
            },
            {
                q: "What client categories do you work with?",
                a: "Eligible Counterparties and Professional clients. Retail classification is available where appropriate under our Client Categorisation Policy.",
            },
            {
                q: "Do you accept clients from every country?",
                a: "No. Our website and services are not directed at residents of the United States, Japan, Canada, Belgium or any jurisdiction where distribution or use would be contrary to local law or regulation.",
            },
        ],
    },
    {
        id: "onboarding",
        title: "Onboarding & go-live",
        items: [
            {
                q: "What documents do you need to open an account?",
                a: "A completed Corporate Account Application plus the corporate KYB pack (incorporation docs, registers, verification for directors, shareholders and authorised persons, ownership chart, recent financials, and proof of addresses). A Certificate of Incumbency may be required for non-UK or non-EEA entities.",
            },
            {
                q: "How long does onboarding take?",
                a: "We acknowledge and review within 24 hours. If the submission is complete and valid, approval may be possible within 48 hours.",
            },
            {
                q: "What is the go-live process?",
                a: "Sandbox connection, FIX certification, optional parallel run, then production keys. A named engineer and RM support you throughout.",
            },
            {
                q: "Can I test before signing?",
                a: "Yes. We provide a guided sandbox and FIX message validation so you can verify flows and behaviour.",
            },
        ],
    },
    {
        id: "connectivity",
        title: "Connectivity & platforms",
        items: [
            {
                q: "How do we connect?",
                a: "FIX 4.4 is available. We also support MetaTrader 5 via PrimeXM and TFB bridges. One integration can route across multiple sources with real-time P&L and centralised margin.",
            },
            {
                q: "Where are you hosted?",
                a: "Core hub in Equinix LD4, London, with cross-connect options and resilient setup.",
            },
            {
                q: "Do you offer drop copy and user controls?",
                a: "Yes. Drop copy is available. The portal provides symbol controls, report downloads and user permissions.",
            },
        ],
    },
    {
        id: "liquidity",
        title: "Liquidity & execution",
        items: [
            {
                q: "What instruments can we access?",
                a: "FX spot and forwards, precious and base metals, global indices and equity CFDs, energies, single stocks, and a broad list of cryptocurrency CFDs. A full symbol list is available on request.",
            },
            {
                q: "Do you support last look and no last look?",
                a: "Yes. You can choose last look or no last look. Median hold times and reject logic are monitored for fairness.",
            },
            {
                q: "Can we customise streams?",
                a: "Yes. Firm or skewed pricing, spread targets and toxicity filters are available. Controls can be applied per symbol or asset class.",
            },
            {
                q: "How do you handle large tickets?",
                a: "Configurable min/max notionals, smart sweep logic, adaptive partial fills and market impact controls.",
            },
        ],
    },
    {
        id: "pricing",
        title: "Pricing & commercial terms",
        items: [
            {
                q: "What pricing models do you offer?",
                a: "Commission + raw, embedded mark-up or a hybrid. Volume tiers are available.",
            },
            {
                q: "What are your current commission tiers?",
                a: "10 per million under 1B, 8 per million from 1B to 5B, and 6 per million above 5B. Monthly minimum of USD 1,000 applies (volume discounts may be available).",
            },
            {
                q: "What leverage is available?",
                a: "Up to 1:100 on FX, metals, indices and commodities. 1:5 on crypto. Margin call at 100%, stop-out at 50%.",
            },
            {
                q: "What are your settlement terms?",
                a: "T+2 for FX, indices, commodities and metals. Instant settlement for crypto. For Share CFDs, please contact us.",
            },
        ],
    },
    {
        id: "risk",
        title: "Risk controls & reliability",
        items: [
            {
                q: "What pre-trade risk controls are available?",
                a: "Order size limits, position/exposure caps, and notional-per-minute rate limits. An instant kill switch is available.",
            },
            {
                q: "How do you ensure uptime and recovery?",
                a: "Active redundancy, frequent automated backups, geo-separated copies and rapid restore procedures. SLA-backed availability with continuous monitoring.",
            },
            {
                q: "Do you provide TCA?",
                a: "Yes. Real-time TCA to measure slippage, fill quality and costs.",
            },
        ],
    },
    {
        id: "reporting",
        title: "Reporting",
        items: [
            {
                q: "What reports do we get?",
                a: "Daily statements, activity/transaction logs, risk and margin data. Custom downloads (PDF, Excel or XML) and portal dashboards for exposure and performance.",
            },
        ],
    },
    {
        id: "partners",
        title: "Partners & affiliates",
        items: [
            {
                q: "Do you have an affiliate partner programme?",
                a: "Yes. CPA for qualified affiliate partners with tracking tools and co-marketing support. Up to USD 1,500 per referral, with terms in the Affiliate Agreement.",
            },
            {
                q: "How is attribution handled?",
                a: "Unique links plus offline intro capture. Attribution windows are defined in your agreement.",
            },
        ],
    },
    {
        id: "support",
        title: "Support",
        items: [
            {
                q: "What are your support hours?",
                a: "Dedicated technical support 24 hours, 5 days a week. You’ll have a named engineer plus an RM with defined response times.",
            },
            {
                q: "Can we speak to someone technical before we commit?",
                a: "Yes. Book a call to review your model, connectivity and stream design with an engineer.",
            },
        ],
    },
    {
        id: "compliance",
        title: "Compliance & policies",
        items: [
            {
                q: "Where can I find your policies?",
                a: "Risk Disclosure, Client Categorisation, Conflicts of Interest, Complaints Handling & Disputes, and Privacy Policy are available from the footer or on request.",
            },
            {
                q: "Do you provide advice?",
                a: "No. Services are provided on an execution-only basis. Any communication is not advice.",
            },
        ],
    },
];

const important = {
    id: "important",
    title: "Important information",
    risk:
        "The information on this website is only directed at institutional and professional clients. CFDs and Spread Bets are highly speculative and can result in losses exceeding your deposit. This is not investment advice. Consider your objectives, financial situation, experience and risk appetite. Seek independent advice if in doubt. Past performance is not indicative of future results.",
    jurisdiction:
        "The information on this website is not directed at residents of any jurisdiction where FX and/or CFD trading is restricted or prohibited by local laws or regulations.",
};

export default function FaqPage() {
    const [query, setQuery] = useState("");
    const [openKey, setOpenKey] = useState(null);

    const filtered = useMemo(() => {
        if (!query.trim()) return sections;
        const q = query.toLowerCase();
        return sections
            .map((s) => ({
                ...s,
                items: s.items.filter(
                    (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
                ),
            }))
            .filter((s) => s.items.length > 0);
    }, [query]);

    return (
        <>
        <Meta title="FAQs | GMG Prime " description="Answers to common questions about onboarding, connectivity, pricing, risk controls, and support."/>
        <main className=" text-white">
            {/* Hero */}
 
            <section className="relative overflow-hidden">
                <div className="container mx-auto px-4 py-16 xl:py-28">
                    <div className="max-w-[800px]">
                        <h1 className="text-heading-1 mb-4">FAQs</h1>
                        <p className="text-neutral-400 text-body-1">
                            Answers to common questions about onboarding, connectivity,
                            pricing, risk controls, and support.
                        </p>
                    </div>

                    {/* search */}
                    <div className="mt-8 max-w-96">
                        <div className="rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600">
                            <div className="rounded-2xl bg-[#132F47]">
                                <label className="sr-only" htmlFor="faq-search">
                                    Search FAQs
                                </label>
                                <input
                                    id="faq-search"
                                    type="search"
                                    placeholder="Search FAQs..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full bg-transparent text-white placeholder-neutral-500 rounded-2xl px-4 py-3 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid xl:grid-cols-3 gap-8">
                    {/* Left: sticky section nav */}
                    <aside className="xl:col-span-1">
                        <nav className="xl:sticky xl:top-8">
                            <ul className="space-y-2">
                                {sections.map((s) => (
                                    <li key={s.id}>
                                        <a
                                            href={`#${s.id}`}
                                            className="block rounded-lg px-3 py-2 text-neutral-400 hover:text-white hover:bg-primary-800 transition-colors"
                                        >
                                            {s.title}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href={`#${important.id}`}
                                        className="block rounded-lg px-3 py-2 text-neutral-400 hover:text-white hover:bg-primary-800 transition-colors"
                                    >
                                        {important.title}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Right: sections */}
                    <div className="xl:col-span-2 space-y-8">
                        {filtered.map((section) => (
                            <SectionBlock
                                key={section.id}
                                section={section}
                                openKey={openKey}
                                setOpenKey={setOpenKey}
                            />
                        ))}

                        {/* Important information */}
                        <div id={important.id} className="space-y-4">
                            <h2 className="text-heading-2">Important information</h2>

                            {/* Risk disclaimer card */}
                            <div className="overflow-hidden rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600">
                                <div className="rounded-2xl bg-[#132F47] p-6">
                                    <h3 className="text-heading-3 mb-2">Risk Disclaimer</h3>
                                    <p className="text-neutral-400 text-body-2">{important.risk}</p>
                                </div>
                            </div>

                            {/* Jurisdiction notice card */}
                            <div className="overflow-hidden rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600">
                                <div className="rounded-2xl bg-[#132F47] p-6">
                                    <h3 className="text-heading-3 mb-2">Jurisdiction notice</h3>
                                    <p className="text-neutral-400 text-body-2">
                                        {important.jurisdiction}
                                    </p>
                                </div>
                            </div>

                            {/* Contact help */}
                            <div className="rounded-2xl bg-primary-800 p-6">
                                <p className="text-body-2">
                                    Still need help? Email{" "}
                                    <a
                                        className="text-accent-400 underline"
                                        href="mailto:support@gmgprime.com"
                                    >
                                        support@gmgprime.com
                                    </a>, {" "}
                                    <a
                                        className="text-accent-400 underline"
                                        href="mailto:compliance_team@gmgmarkets.co.uk"
                                    >
                                        compliance_team@gmgmarkets.co.uk
                                    </a>{" "}
                                    or{" "}
                                    <a className="text-accent-400 underline" href="/contact">
                                        book a call
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                        <NewCommonFooter />

        </main>
        </>
    );
}

function SectionBlock({ section, openKey, setOpenKey }) {
    return (
        <>
            <div id={section.id} className="space-y-4">
                <h2 className="text-heading-2">{section.title}</h2>

                <div className="space-y-3">
                    {section.items.map((item, idx) => {
                        const key = `${section.id}-${idx}`;
                        const isOpen = openKey === key;
                        return (
                            <div
                                key={key}
                                className="overflow-hidden rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600"
                            >
                                <div className="rounded-2xl bg-[#132F47]">
                                    <button
                                        className="w-full flex items-center justify-between text-left px-5 py-4"
                                        aria-expanded={isOpen}
                                        onClick={() => setOpenKey(isOpen ? null : key)}
                                    >
                                        <span className="text-body-1-semibold">{item.q}</span>
                                        <span
                                            className={`ms-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-500 transition-transform ${isOpen ? "rotate-90" : ""
                                                }`}
                                            aria-hidden="true"
                                        >
                                            ▸
                                        </span>
                                    </button>
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 pb-5 text-neutral-400 text-body-2">
                                                {item.a}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
