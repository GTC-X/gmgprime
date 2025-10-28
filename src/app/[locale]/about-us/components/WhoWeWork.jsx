import Image from "next/image";

const steps = [
    { title: "Listen first", text: "We map your model, workflows and priorities.", icon: "/new/about-icon6.svg" },
    { title: "Design your stream", text: "Pricing, risk and routing aligned to your commercial aims.", icon: "/new/about-icon7.svg" },
    { title: "Prove in sandbox", text: "Guided testing, FIX validation and parallel run plan.", icon: "/new/about-icon8.svg" },
    { title: "Go live with support", text: "A named engineer and 24/5 coverage from day one.", icon: "/new/about-icon9.svg" },
];
const WhoWeWork = () => {
    return (
        <section className="py-16 xl:py-24 bg-primary-800 bg-[url('/images/bg.svg')] bg-no-repeat bg-top">
            <div className="container">
                <h3 className="text-heading-2 text-center mb-10 font-normal text-[#ED8946]">How we work</h3>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    {steps.map((s) => (
                        <div key={s.title} className="rounded-2xl bg-primary-950/60 p-6 border border-primary-500">
                            <Image src={s.icon} alt="" width={36} height={36} className="mb-4" />
                            <p className="text-subtitle-1 mb-1">{s.title}</p>
                            <p className="text-neutral-300 text-sm">{s.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="#onboarding"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-5 py-3 text-black font-medium hover:bg-accent-400/80 transition-colors"
                    >
                        Start in Sandbox
                    </a>
                </div>
            </div>
        </section>
    )
}

export default WhoWeWork;