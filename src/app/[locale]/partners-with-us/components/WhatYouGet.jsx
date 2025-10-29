import SectionTitle from "./SectionTitle";

const Card = ({ title, desc, img }) => (
    <div className="rounded-2xl bg-navy-900/60 ring-1 ring-white/10 p-5 shadow-glow">
        <div className="mb-2 h-12 w-12 rounded-full bg-accent-orange/20 grid place-items-center mx-auto text-[12px]">
            <img src={img} alt="" className="h-12 w-12 object-contain" />

        </div>
        <h4 className="text-[18px] font-semibold text-center">{title}</h4>
        <p className="mt-1 text-[14px] leading-6 text-text-mute text-center">{desc}</p>
    </div>
);

export default function WhatYouGet() {
    const items = [
        { title: "Partner Portal", desc: "Live stats, referrals, payouts, and tracking.", img: "/partner/what-icon1.svg" },
        { title: "Attribution Tools", desc: "Unique links, QR, postbacks and dashboards.", img: "/partner/what-icon2.svg" },
        { title: "Creatives Kit", desc: "Ready-to-use banners, emails, and landing pages.", img: "/partner/what-icon3.svg" },
        { title: "Event Support", desc: "Co-branded events & local workshops.", img: "/partner/what-icon4.svg" },
        { title: "Priority Onboarding", desc: "Faster KYC and personalized support.", img: "/partner/what-icon5.svg" },
    ];
    return (
        <section className="relative">
            <div
                className="pointer-events-none hidden md:block absolute opacity-20 right-0 top-0 h-full w-full"
                style={{
                    backgroundImage: "url('/partner/bg-img2.svg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center right",
                }}
            />
            <div className="container relative py-12">
                <SectionTitle title="What You Get" />
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.slice(0, 3).map((c, i) => <Card key={i} {...c} />)}
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
                    {items.slice(3).map((c, i) => <Card key={i} {...c} />)}
                </div>
            </div>
        </section>
    );
}
