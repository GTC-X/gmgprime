import Image from "next/image";
import Link from "next/link";

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
                    <Link href="/technology">
                        <button
                            type="button"
                            className="transition-colors bg-[#ED8946] text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                        >
                            <span>See our technology</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                                <path
                                    fill="currentColor"
                                    d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                />
                            </svg>
                        </button>
                    </Link>

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