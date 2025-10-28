import Header from "../new-site/components/Header";
import NewCommonFooter from "../new-site/components/sections/Footer";

export const metadata = {
    title: "Contact Us | GMG Prime",
    description: "Get in touch with the GMG Prime team. Speak with our engineers, sales or compliance.",
};

export default function ContactUsPage() {
    return (
        <main className="  text-white">

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="container mx-auto px-4 py-16 xl:py-28">
                    <div className="max-w-3xl">
                        <h1 className="text-heading-1 xl:text-[4rem]/[4.25rem] font-normal">
                            Contact Us
                        </h1>
                        <p className="text-neutral-400 text-body-1 mt-4">
                            Speak to our team — the fastest way to move forward is a quick call with an engineer and RM.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Details & Form */}
            <section className="container mx-auto px-4 pb-24 space-y-12">
                {/* Book a Call Card */}
                <div className="overflow-hidden rounded-2xl">
                    <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-sky-blue-400/25 via-primary-800 to-primary-800 p-8 xl:p-10">
                        <h2 className="text-3xl font-normal mb-4">Speak to the Team</h2>
                        <p className="text-neutral-300 mb-6 max-w-3xl">
                            Share a few details and we’ll line up a technical review, pricing discussion, and sandbox slot.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-accent-400 px-10 py-3 rounded-lg font-medium text-primary-950 hover:opacity-90 transition">
                                Book a Call
                            </button>
                            <button className="bg-transparent border border-sky-blue-500 px-10 py-3 rounded-lg text-white hover:bg-sky-blue-500/10 transition">
                                Request Pricing
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enquiry Form */}
                <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-b from-[#265B9F] via-primary-800 to-accent-400">
                    <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-sky-blue-400/25 via-primary-800 to-primary-800 p-8 xl:p-10">
                        <h2 className="text-3xl font-normal mb-6">Enquiry Form</h2>
                        <p className="text-neutral-400 mb-8">
                            Keep it short on first pass — we’ll collect docs at onboarding.
                        </p>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="First Name*" />
                            <Input label="Last Name*" />
                            <Input label="Work Email*" type="email" />
                            <Input label="Phone (incl. country code)" />
                            <Input label="Company" />
                            <Input label="Legal Entity Name*" />
                            <Input label="Website" />
                            <Input label="Country of Incorporation*" />
                            <Input label="Operating Countries" />
                            <Select label="Client Category*" options={["Eligible Counterparty", "Professional", "Not sure"]} />
                            <Select label="Platform and Access*" options={["FIX 4.4", "MT5 via Bridge", "Both"]} />
                            <Input label="Target Go-Live Date*" type="date" />
                            <Select
                                label="Estimated Monthly Volume (USD Notional)*"
                                options={["< 1B", "1–5B", "> 5B", "Not sure"]}
                            />
                            <MultiCheckbox
                                label="Instruments of Interest"
                                options={["FX", "Metals", "Indices", "Energies", "Single Stocks", "Crypto"]}
                            />
                            <Select
                                label="Preferred Pricing Model"
                                options={["Commission plus raw", "Embedded mark-up", "Hybrid", "Not sure"]}
                            />
                            <div className="md:col-span-2">
                                <label className="block text-sm text-neutral-300 mb-2">
                                    Notes for our engineers (optional)
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-lg bg-transparent border border-neutral-400/50 text-white p-3 focus:ring-2 focus:ring-sky-blue-500 outline-none"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 flex items-start gap-3 mt-4">
                                <input type="checkbox" className="mt-1 h-4 w-4 accent-sky-blue-500" />
                                <p className="text-sm text-neutral-400">
                                    I agree that GMG Prime may contact me about my enquiry and process my data in line
                                    with the{" "}
                                    <a
                                        href="/privacy-policy"
                                        className="text-accent-400 underline hover:text-accent-300"
                                    >
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    className="bg-accent-400 px-8 py-3 rounded-lg text-primary-950 font-medium hover:opacity-90 transition"
                                >
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Talk to the Right Team */}
                <div className="grid xl:grid-cols-3 gap-6">
                    <InfoCard
                        title="Onboarding & Categorisation"
                        text="Email"
                        link="mailto:compliance_team@gmgmarkets.co.uk"
                        linkLabel="compliance_team@gmgmarkets.co.uk"
                    />
                    <InfoCard
                        title="General Enquiries & Sales"
                        text="Use the form above or call the number below."
                    />
                    <InfoCard title="Technical & FIX" text="Select FIX 4.4 in the form to route to engineering." />
                </div>

                {/* Offices & Phone */}
                <div className="overflow-hidden rounded-2xl">
                    <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-sky-blue-400/25 via-primary-800 to-primary-800 p-8 xl:p-10">
                        <h2 className="text-3xl font-normal mb-6">Offices & Contact</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-medium text-lg mb-1">Phone</h3>
                                <p className="text-neutral-300">
                                    +44 203 865 3306
                                    <br />
                                    <span className="text-sm text-neutral-500">
                                        24/5 for live clients. Sales line during UK business hours.
                                    </span>
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg mb-1">Principal Office</h3>
                                <p className="text-neutral-300">
                                    The Jellicoe, 5 Beaconsfield Street, King’s Cross, London, N1C 4EW
                                </p>
                                <h3 className="font-medium text-lg mt-4 mb-1">Registered Office</h3>
                                <p className="text-neutral-300">
                                    Green Park House, 15 Stratton Street, London, W1J 8LQ
                                </p>
                                <p className="text-sm text-neutral-500 mt-2">
                                    Visits by appointment only.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What Happens Next */}
                <div className="overflow-hidden rounded-2xl">
                    <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-sky-blue-400/25 via-primary-800 to-primary-800 p-8 xl:p-10">
                        <h2 className="text-3xl font-normal mb-6">What Happens Next</h2>
                        <ol className="list-decimal pl-6 space-y-2 text-neutral-200">
                            <li>We review your details and confirm a time.</li>
                            <li>You meet an engineer and RM.</li>
                            <li>If there’s a fit, we start sandbox and FIX certification.</li>
                        </ol>
                    </div>
                </div>

                {/* Important Information */}
                <div className="overflow-hidden rounded-2xl">
                    <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-sky-blue-400/25 via-primary-800 to-primary-800 p-8 xl:p-10 space-y-4">
                        <h2 className="text-3xl font-normal mb-4">Important Information</h2>
                        <p className="text-neutral-300">
                            Global Markets Group Limited trading as gmgmarkets.co.uk and gmgprime.com. Company
                            number 09493910. Authorised and regulated by the Financial Conduct Authority (FRN
                            744501).
                        </p>
                        <h3 className="text-lg font-medium mt-4">Risk Disclaimer</h3>
                        <p className="text-neutral-300">
                            The information on this website is only directed at institutional and professional
                            clients. CFDs and Spread Bets are highly speculative products which carry a high level
                            of risk and can result in losses exceeding your deposit. They are not appropriate for
                            every investor. Before deciding to trade, consider your objectives, financial
                            situation, and level of experience. If in doubt, seek independent advice.
                        </p>
                        <h3 className="text-lg font-medium mt-4">Jurisdiction Notice</h3>
                        <p className="text-neutral-300">
                            The information on this website is not directed at residents of any jurisdiction where
                            FX and/or CFD trading is restricted or prohibited by local laws or regulations.
                        </p>
                        <h3 className="text-lg font-medium mt-4">Data Protection</h3>
                        <p className="text-neutral-300">
                            We process enquiries in line with our{" "}
                            <a
                                href="/privacy-policy"
                                className="text-accent-400 underline hover:text-accent-300"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
            <NewCommonFooter />
        </main>
    );
}

/* Reusable Input Components */

function Input({ label, type = "text" }) {
    return (
        <div>
            <label className="block text-sm text-neutral-300 mb-2">{label}</label>
            <input
                type={type}
                className="w-full  rounded-lg bg-transparent border border-neutral-400/50 text-white p-3 focus:ring-2 focus:ring-sky-blue-500 outline-none"
            />
        </div>
    );
}

function Select({ label, options }) {
    return (
        <div>
            <label className="block text-sm text-neutral-300 mb-2">{label}</label>
            <select className="w-full rounded-lg bg-transparent border border-neutral-400/50 text-white p-3 focus:ring-2 focus:ring-sky-blue-500 outline-none">
                <option value="">Select</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}

function MultiCheckbox({ label, options }) {
    return (
        <div className="md:col-span-2">
            <label className="block text-sm text-neutral-300 mb-2">{label}</label>
            <div className="flex flex-wrap gap-4">
                {options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-neutral-300">
                        <input type="checkbox" className="accent-sky-blue-500" /> {opt}
                    </label>
                ))}
            </div>
        </div>
    );
}

function InfoCard({
    title,
    text,
    link,
    linkLabel,
}) {
    return (
        <div className="overflow-hidden rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600">
            <div className="rounded-2xl bg-primary-950 p-6 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-medium mb-2">{title}</h3>
                    <p className="text-neutral-400 text-sm">
                        {text}{" "}
                        {link && (
                            <a href={link} className="text-accent-400 underline hover:text-accent-300">
                                {linkLabel}
                            </a>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}
