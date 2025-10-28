import Button from "./button";

export default function FeatureGrid({ items = [] }) {
    return (
        <section className="bg-navy-950">
            <div className="container grid gap-8 py-8 md:grid-cols-2 md:py-12">
                {items.map((card, i) => (
                    <article key={i} className="grid grid-cols-1 gap-5 md:grid-cols-[1.1fr_1fr]">
                        <div className="img-frame card-ring">
                            <img src={card.image} alt="" className="h-full w-full object-cover" />
                        </div>
                        <CardGradient>
                            <div className="rounded-2xl  shadow-glow h-full">
                                <h3 className="text-sec-h font-semibold">{card.title}</h3>
                                <p className="mt-3 text-[13px] leading-6 text-text-mute">{card.desc}</p>
                                <Button className="mt-4" size="sm" variant={card.variant || "primary"}>
                                    {card.cta || "Learn more"}
                                </Button>
                            </div>
                        </CardGradient>
                    </article>
                ))}
            </div>
        </section>
    );
}


function CardGradient({ children }) {
    return (
        <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-sky-blue-600">
            <div className="rounded-2xl bg-primary-950 bg-gradient-to-r from-sky-blue-400/25 via-primary-800 to-primary-800 h-full p-6">
                {children}
            </div>
        </div>
    );
}