import Button from "./button";

const Row = ({ label, value }) => (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 py-2 last:border-none">
        <span className="text-[12px] text-text-mute">{label}</span>
        <span className="text-[12px] text-text-base">{value}</span>
    </div>
);

export default function TechSpecs() {
    return (
        <section className="bg-navy-950">
            <div className="container grid gap-8 py-10 md:grid-cols-2">
                <div className="img-frame card-ring">
                    <img src="/new/tech-img11.jpg" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-navy-900/50 p-6 shadow-glow">
                    <h3 className="text-sec-h font-semibold">Quick tech specs</h3>
                    <div className="mt-4 space-y-2">
                        <Row label="Access" value="FIX 4.4 & 4.2, MT5 gateway, TIB" />
                        <Row label="Core hub" value="LD4 (Slough, UK) + LDN core" />
                        <Row label="Connectivity" value="Dedicated cross-connect, private overlay, 4+ pops" />
                        <Row label="Risk" value="Pre-trade, in-position caps, circuit breaker, per-instrument" />
                        <Row label="Reporting" value="Daily statements, custom exports, TCA" />
                        <Row label="Resilience" value="Active failover, geo-redundant backups, 99.9%+" />
                    </div>
                    <div className="mt-5 flex gap-3">
                        <Button size="sm">Request a demo</Button>
                        <Button size="sm" variant="ghost">See our API</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
