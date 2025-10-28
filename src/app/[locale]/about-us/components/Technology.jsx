import Image from "next/image";

const Technology = () => {
    return (
        <section className="bg-primary-800 py-16 xl:py-24">
            <div className="container grid gap-10 xl:grid-cols-2 xl:items-center">
                <div>
                    <h3 className="text-heading-2 mb-3 font-normal text-[#ED8946]">Technology you can trust</h3>
                    <p className="text-neutral-200 text-base lg:text-lg/[1.625rem] mb-4">
                        Built on a dedicated global network for low latency and failover protection, with real-time
                        reporting and reliable redundancy. Bridges supported include PrimeXM and TFB; integrated to MetaTrader 5.
                    </p>
                    <a
                        href="#technology"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-5 py-3 text-black font-medium hover:bg-accent-400/80 transition-colors"
                    >
                        See our technology
                    </a>
                </div>

                <Image
                    src="/new/about-img3.svg"
                    alt="Technology"
                    width={640}
                    height={420}
                    className="w-full rounded-2xl"
                />
            </div>
        </section>
    )
}

export default Technology;