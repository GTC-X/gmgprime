
import CommonButton from "../components/CommonButton";
import NewCommonFooter from "../new-site/components/sections/Footer";
import ContactForm from "./ContactForm";

export const metadata = {
    title: "Contact Us | GMG Prime",
    description:
        "Speak to our team — the fastest way to move forward is a quick call with an engineer and RM.",
};

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



export default function ContactUsPage() {
    return (
        <main className="text-white">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="container mx-auto px-4 py-16 xl:py-28">
                    <div className="max-w-3xl">
                        <h1 className="text-heading-1 xl:text-[4rem]/[4.25rem] font-normal">Contact Us</h1>
                        <p className="text-neutral-400 text-body-1 mt-4">
                            Speak to our team — the fastest way to move forward is a quick call with an engineer
                            and RM.
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
                            Share a few details and we’ll line up a technical review, pricing discussion, and
                            sandbox slot.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <CommonButton>Book a Call</CommonButton>
                            <button className="bg-transparent border border-sky-blue-500 px-10 py-3 rounded-lg text-white hover:bg-sky-blue-500/10 transition">
                                Request Pricing
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enquiry Form (Formik) */}
                <ContactForm />

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
                                   The Jellicoe, 5 Beaconsfield Street, King’s Cross, London N1C 4EW, UK
                                </p>
                                <h3 className="font-medium text-lg mt-4 mb-1">Registered Office</h3>
                                <p className="text-neutral-300">Green Park House, 15 Stratton Street, London, W1J 8LQ</p>
                                <p className="text-sm text-neutral-500 mt-2">Visits by appointment only.</p>
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

             
            </section>

            <NewCommonFooter />
        </main>
    );
}



