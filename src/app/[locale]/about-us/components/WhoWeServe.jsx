import Image from "next/image";

const WhoWeServe = () => {
    return (
        <section className="container py-16">
            <div className="grid gap-10 xl:grid-cols-2 xl:items-center">
                <div className="order-2 xl:order-1">
                    <h3 className="text-heading-2 mb-4 font-normal text-[#ED8946]">Who we serve</h3>
                    <p className="text-neutral-200 text-base lg:text-lg/[1.625rem]">
                        We back growth-stage and established brokerages, as well as family offices, hedge funds, asset and wealth managers, that want to scale into new markets with confidence. Our team helps your staff and clients get quickly to value with clear, practical onboarding.
                    </p>
                </div>
                <div className="order-1 xl:order-2">
                    <Image
                        src="/new/about-img2.svg"
                        alt="Who we serve"
                        width={640}
                        height={420}
                        className="w-full rounded-2xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default WhoWeServe;