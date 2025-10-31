import Image from "next/image";
import CommonButton from "../../components/CommonButton";

const steps = [
    { title: "Listen first", text: "We map your model, workflows and priorities.", icon: "/new/about-icon6.svg" },
    { title: "Design your stream", text: "Pricing, risk and routing aligned to your commercial aims.", icon: "/new/about-icon7.svg" },
    { title: "Prove in sandbox", text: "Guided testing, FIX validation and parallel run plan.", icon: "/new/about-icon8.svg" },
    { title: "Go live with support", text: "A named engineer and 24/5 coverage from day one.", icon: "/new/about-icon9.svg" },
];
const WhoWeWork = () => {
    return (
        <section className="bg-[url('/images/bg.svg')] bg-no-repeat bg-top">
            <div className="container">
                <h3 className="text-heading-2 text-center mb-10 font-normal text-[#ED8946]">How we work</h3>

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    {steps.map((s) => (
                        <div key={s.title} className="rounded-2xl bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] p-10 border border-white/10 hover:shadow-[0_8px_24px_rgba(13,43,69,0.25)] transition-all duration-300 text-center flex flex-col justify-center items-center">
                            <Image src={s.icon} alt="" width={36} height={36} className="mb-4" />
                            <p className="text-subtitle-1 mb-1">{s.title}</p>
                            <p className="text-neutral-300 text-sm">{s.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <CommonButton>Start in Sandbox</CommonButton>
                </div>
            </div>
        </section>
    )
}

export default WhoWeWork;