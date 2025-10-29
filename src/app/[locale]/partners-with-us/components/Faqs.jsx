import SectionTitle from "./SectionTitle";

const Q = ({ q, a }) => (
    <details className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
        <summary className="cursor-pointer list-none text-[14px] font-medium">
            {q}
            <span className="float-right text-text-mute group-open:rotate-180 transition">⌄</span>
        </summary>
        <p className="mt-2 text-[13px] leading-6 text-text-mute">{a}</p>
    </details>
);

export default function FAQ() {
    const faqs = [
        { q: "Who can join?", a: "Agencies, educators, communities and influencers with compliant traffic." },
        { q: "What counts as a qualified referral?", a: "Completed KYC and first deposit (definitions vary by region)." },
        { q: "How quickly are payouts?", a: "Monthly on a set date; higher tiers may offer faster cycles." },
        { q: "Where do I get creatives?", a: "Inside the Partner Portal or via our team on request." },
    ];
    return (
        <section className="bg-navy-950">
            <div className="container py-12">
                <SectionTitle title="Quick FAQs" />
                <div className="mx-auto mt-6 max-w-3xl space-y-3">
                    {faqs.map((f, i) => <Q key={i} {...f} />)}
                </div>
            </div>
        </section>
    );
}
