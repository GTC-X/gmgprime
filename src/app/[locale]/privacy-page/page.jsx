/* app/privacy-policy/page.tsx */

 import Header from "../new-site/components/Header";

export const metadata = {
    title: "Privacy Policy | GMG Prime",
    description: "How GMG Prime collects, uses and protects your data.",
};

const sections = [
    { id: "who-we-are", label: "1) Who we are" },
    { id: "data-we-collect", label: "2) The data we collect" },
    { id: "how-we-obtain", label: "3) How we obtain your data" },
    { id: "why-we-use", label: "4) Why we use your data (purposes & lawful bases)" },
    { id: "who-we-share", label: "5) Who we share data with" },
    { id: "international-transfers", label: "6) International transfers" },
    { id: "retention", label: "7) How long we keep your data" },
    { id: "your-rights", label: "8) Your rights" },
    { id: "cookies", label: "9) Cookies & similar technologies" },
    { id: "security", label: "10) Security" },
    { id: "marketing", label: "11) Marketing" },
    { id: "third-party-links", label: "12) Third-party links" },
    { id: "children", label: "13) Children" },
    { id: "complaints", label: "14) Complaints" },
    { id: "changes", label: "15) Changes to this policy" },
    { id: "notices", label: "Important notices (regulatory)" },
];

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className=" text-white">
                {/* Hero */}
                <section className="relative overflow-hidden">
                    <div className="container mx-auto px-4 py-16 xl:py-28">
                        <div className="max-w-[800px]">
                            <h1 className="text-heading-1 xl:text-[4rem]/[4.25rem] font-normal">
                                Privacy Policy
                            </h1>
                            <p className="text-neutral-400 text-body-1 mt-4">
                                Last updated: <span className="text-white font-medium">21 October 2025</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content + TOC */}
                <section className="container mx-auto px-4 pb-24">
                    <div className="grid xl:grid-cols-5 gap-8">
                        {/* TOC */}
                        <aside className="xl:col-span-1 xl:sticky xl:top-8 h-fit">
                            <div className="rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600">
                                <nav className="rounded-2xl bg-primary-950 p-6">
                                    <h2 className="text-subtitle-2 mb-3">Contents</h2>
                                    <ul className="space-y-2 text-sm text-neutral-400">
                                        {sections.map((s) => (
                                            <li key={s.id}>
                                                <a
                                                    href={`#${s.id}`}
                                                    className="hover:text-accent-400 transition-colors"
                                                >
                                                    {s.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            {/* Quick contact card */}
                            <div className="mt-6 rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600">
                                <div className="rounded-2xl bg-primary-950 p-6">
                                    <h3 className="text-heading-3 mb-2">Questions?</h3>
                                    <p className="text-neutral-400 text-sm">
                                         <a
                                            className="underline hover:text-accent-400 break-words"
                                            href="mailto:compliance_team@gmgmarkets.co.uk"
                                        >
                                            compliance_team@gmgmarkets.co.uk
                                        </a>{" "}
                                        <br/> <span className="text-white">(+44) 0203 865 3306</span>.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* Main */}
                        <article className="xl:col-span-4 space-y-6">
                            {/* Section wrapper helper */}
                            <PolicyCard id="who-we-are" title="1) Who we are">
                                <p className="text-neutral-200">
                                    Global Markets Group Limited trading as gmgmarkets.co.uk (“GMG Prime”, “we”, “us”). Company number:{" "}
                                    <span className="text-white">09493910</span>. Authorised and regulated by the{" "}
                                    <span className="text-white">Financial Conduct Authority (FRN 744501)</span>.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-4">
                                    <div>
                                        <h4 className="text-subtitle-1 mb-2">Principal Office</h4>
                                        <p className="text-neutral-400">
                                            The Jellicoe, 5 Beaconsfield Street, King’s Cross, London, N1C 4EW
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-subtitle-1 mb-2">Registered Office</h4>
                                        <p className="text-neutral-400">
                                            Green Park House, 15 Stratton Street, London, W1J 8LQ
                                        </p>
                                    </div>
                                </div>
                                <p className="text-neutral-400 mt-4">
                                    GMG Prime is the data controller of the personal data described below.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="data-we-collect" title="2) The data we collect">
                                <ul className="list-disc list-outside pl-6 space-y-2 text-neutral-200">
                                    <li>
                                        <strong className="text-white">Identity data:</strong> names, titles, date of birth, nationality, KYC/KYB identifiers, corporate role.
                                    </li>
                                    <li>
                                        <strong className="text-white">Contact data:</strong> business email, phone, addresses.
                                    </li>
                                    <li>
                                        <strong className="text-white">Corporate/KYB data:</strong> incorporation documents, directors/shareholders registers, ownership charts, financial statements, proof of address, authorised signatories and traders.
                                    </li>
                                    <li>
                                        <strong className="text-white">Verification data:</strong> copies of passports/driving licences; recent utility bills/bank statements (certified where required).
                                    </li>
                                    <li>
                                        <strong className="text-white">Technical data:</strong> IP address, device info, portal login data, audit logs.
                                    </li>
                                    <li>
                                        <strong className="text-white">Transaction & account data:</strong> orders, fills, balances, statements, margin, exposure, activity logs.
                                    </li>
                                    <li>
                                        <strong className="text-white">Communications:</strong> enquiries, meetings, support tickets, call notes.
                                    </li>
                                    <li>
                                        <strong className="text-white">Marketing preferences:</strong> opt-ins, unsubscribe choices, events attendance.
                                    </li>
                                </ul>
                                <p className="mt-4 text-neutral-400">
                                    We do not intentionally collect special category data (e.g., health, biometric, religion). Please do not submit such data to us.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="how-we-obtain" title="3) How we obtain your data">
                                <ul className="list-disc list-outside pl-6 space-y-2 text-neutral-200">
                                    <li>Directly from you/your organisation via enquiry forms, onboarding and ongoing service.</li>
                                    <li>From corporate documents and public registers.</li>
                                    <li>From third parties (credit reference agencies, verification providers, sanctions/PEP screening).</li>
                                    <li>From your use of our websites, portals and APIs (cookies, logs and similar technologies).</li>
                                </ul>
                            </PolicyCard>

                            <PolicyCard id="why-we-use" title="4) Why we use your data (purposes & lawful bases)">
                                <div className="space-y-4">
                                    <Purpose
                                        title="Respond to enquiries & provide information"
                                        basis="Legitimate interests (to operate our business and answer prospective client queries)."
                                    />
                                    <Purpose
                                        title="Onboard clients; KYC/KYB & due diligence"
                                        basis="Legal obligation (financial services/AML-CTF) and legitimate interests."
                                    />
                                    <Purpose
                                        title="Deliver services, operate accounts, perform contracts"
                                        basis="Contract (to provide liquidity, connectivity and reporting)."
                                    />
                                    <Purpose
                                        title="Manage risk, monitor transactions & market integrity"
                                        basis="Legal obligation and legitimate interests."
                                    />
                                    <Purpose
                                        title="Security, audit trails & service quality"
                                        basis="Legitimate interests and, where required, legal obligation."
                                    />
                                    <Purpose
                                        title="Service communications (changes, outages, reports)"
                                        basis="Contract and legitimate interests."
                                    />
                                    <Purpose
                                        title="B2B marketing to business contacts"
                                        basis="Legitimate interests (B2B soft opt-in). You can opt out any time."
                                    />
                                    <Purpose
                                        title="Comply with law & regulators; establish/defend legal claims"
                                        basis="Legal obligation and legitimate interests."
                                    />
                                </div>
                                <p className="mt-4 text-neutral-400">
                                    We do not use your data for automated decision-making that produces legal or similarly significant effects.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="who-we-share" title="5) Who we share data with">
                                <ul className="list-disc list-outside pl-6 space-y-2 text-neutral-200">
                                    <li>Regulators and authorities (e.g., FCA) where required by law.</li>
                                    <li>Verification/screening providers for KYC/KYB, sanctions and PEP checks.</li>
                                    <li>Technology vendors & hosting providers (portals, bridges, infrastructure).</li>
                                    <li>Professional advisers, auditors, lawyers & consultants under confidentiality.</li>
                                    <li>Payment & banking partners for settlement and reconciliations.</li>
                                    <li>Group/transactional parties in restructure, acquisition or sale (with safeguards).</li>
                                </ul>
                                <p className="mt-4 text-neutral-400">
                                    We require all third parties to respect the security of your data and process it in line with UK-GDPR.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="international-transfers" title="6) International transfers">
                                <p className="text-neutral-200">
                                    Your data may be transferred and stored outside the UK. Where this occurs, we use one or more of:
                                </p>
                                <ul className="list-disc list-outside pl-6 space-y-2 text-neutral-200 mt-2">
                                    <li>UK adequacy regulations for the destination country;</li>
                                    <li>UK International Data Transfer Agreement (IDTA) or SCC Addendum;</li>
                                    <li>Other recognised safeguards.</li>
                                </ul>
                                <p className="mt-4 text-neutral-400">
                                    You can ask us for a copy of the relevant safeguards.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="retention" title="7) How long we keep your data">
                                <p className="text-neutral-200">
                                    We retain data only as long as necessary for the purposes above and legal/regulatory requirements.
                                </p>
                                <ul className="list-disc list-outside pl-6 space-y-2 text-neutral-200 mt-2">
                                    <li>Prospect enquiries: up to 24 months from last interaction.</li>
                                    <li>Client onboarding & KYC/KYB: at least 5 years after relationship ends (longer if AML/CTF rules require).</li>
                                    <li>Transactional/account records: at least 7 years.</li>
                                </ul>
                                <p className="mt-4 text-neutral-400">When no longer needed, data is securely deleted or anonymised.</p>
                            </PolicyCard>

                            <PolicyCard id="your-rights" title="8) Your rights">
                                <ul className="list-disc list-outside pl-6 space-y-2 text-neutral-200">
                                    <li>Access, rectify, erase, restrict/object (incl. direct marketing).</li>
                                    <li>Portability (where processing is based on consent/contract and automated).</li>
                                    <li>Withdraw consent where relied upon (we mostly rely on other bases).</li>
                                </ul>
                                <p className="mt-4 text-neutral-400">
                                    To exercise these rights, email{" "}
                                    <a className="underline hover:text-accent-400" href="mailto:compliance_team@gmgmarkets.co.uk">
                                        compliance_team@gmgmarkets.co.uk
                                    </a>. We may need to verify your identity.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="cookies" title="9) Cookies & similar technologies">
                                <p className="text-neutral-200">
                                    We use essential cookies for site functionality and, with your consent where required, analytics to improve our services.
                                </p>
                                <p className="text-neutral-400 mt-2">
                                    See our Cookie Notice and manage preferences via the site banner/settings.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="security" title="10) Security">
                                <p className="text-neutral-200">
                                    We apply technical and organisational measures including segregated environments (production/UAT/sandbox), access controls, encryption in transit, audit logging, backups and tested recovery procedures.
                                </p>
                                <p className="text-neutral-400 mt-2">
                                    While no system is perfectly secure, we work to minimise risk and respond promptly to incidents.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="marketing" title="11) Marketing">
                                <p className="text-neutral-200">
                                    We may send B2B marketing to corporate contacts where permitted. You can opt out any time using the unsubscribe link or by emailing us. Service messages (non-marketing) will still be sent.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="third-party-links" title="12) Third-party links">
                                <p className="text-neutral-200">
                                    Our site may link to third-party websites/portals. Those sites have their own privacy policies and we are not responsible for their practices.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="children" title="13) Children">
                                <p className="text-neutral-200">
                                    Our services are intended for organisations and adult professionals. We do not knowingly collect data relating to children.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="complaints" title="14) Complaints">
                                <p className="text-neutral-200">
                                    If you have concerns, contact{" "}
                                    <a className="underline hover:text-accent-400" href="mailto:compliance_team@gmgmarkets.co.uk">
                                        compliance_team@gmgmarkets.co.uk
                                    </a>{" "}
                                    and we will do our best to help.
                                </p>
                                <p className="text-neutral-400 mt-2">
                                    You can also complain to the UK regulator: Information Commissioner’s Office (ICO) — see{" "}
                                    <a className="underline hover:text-accent-400" href="https://ico.org.uk" target="_blank" rel="noreferrer">
                                        ico.org.uk
                                    </a>{" "}
                                    | Tel: +44 303 123 1113
                                </p>
                            </PolicyCard>

                            <PolicyCard id="changes" title="15) Changes to this policy">
                                <p className="text-neutral-200">
                                    We may update this policy from time to time. The latest version will always be available on this page with the date shown at the top.
                                </p>
                            </PolicyCard>

                            <PolicyCard id="notices" title="Important notices (regulatory)">
                                <h4 className="text-subtitle-1 mb-2">Risk Disclaimer</h4>
                                <p className="text-neutral-200">
                                    The information on this website is only directed at institutional and professional clients. CFDs and Spread Bets are highly speculative products which carry a high level of risk and can result in losses exceeding your deposit. They are not appropriate for every investor. Any information provided shall not be considered as investment advice and has been prepared without considering your individual objectives, financial situation or needs. Consider your objectives, financial situation, level of experience and risk appetite. If in doubt, seek independent advice. Past performance is not indicative of future results. View full risk warning.
                                </p>

                                <h4 className="text-subtitle-1 mt-6 mb-2">Jurisdiction notice</h4>
                                <p className="text-neutral-200">
                                    The information on this website is not directed at residents of any jurisdiction where FX and/or CFD trading is restricted or prohibited by local laws or regulations.
                                </p>
                            </PolicyCard>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
}

/** ——— Small subcomponents ——— */

function PolicyCard({
    id,
    title,
    children,
}) {
    return (
        <section id={id} className="overflow-hidden rounded-2xl">
    <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-[#265B9F] via-primary-800 to-accent-400">
          <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-primary-800 via-primary-800 to-primary-800 p-8 xl:p-8">                <h2 className="text-heading-2 mb-4">{title}</h2>
                <div className="text-body-1 text-neutral-300">{children}</div>
            </div>
            </div>
        </section>
    );
}

function Purpose({ title, basis }) {
    return (
        <div className="rounded-xl border border-primary-500/50 p-4 bg-primary-500/50">
            <p className="text-white font-medium">{title}</p>
            <p className="text-neutral-300 text-sm mt-1">{basis}</p>
        </div>
    );
}
