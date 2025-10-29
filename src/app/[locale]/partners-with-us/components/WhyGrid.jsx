import PillCard from "./PillCard";
import SectionTitle from "./SectionTitle";

export default function WhyGrid({ kicker, title, items = [] }) {
    return (
        <section className="bg-navy-950">
            <div className="container py-10 md:py-12">
                <SectionTitle kicker={kicker} title={title} />
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((it, i) => <PillCard key={i} {...it} />)}
                </div>
            </div>
        </section>
    );
}
