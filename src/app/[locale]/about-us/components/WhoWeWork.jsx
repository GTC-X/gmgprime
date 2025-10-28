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
                    <button
                        type="button"
                        className="transition-colors bg-[#ED8946] text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                    >
                        <span> Start in Sandbox</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                            <path
                                fill="currentColor"
                                d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default WhoWeWork;