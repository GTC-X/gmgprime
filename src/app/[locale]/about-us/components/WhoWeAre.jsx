import Image from "next/image";

const WhoWeAre = ({ page = "" }) => {
    return (
        <section className="container py-16 xl:py-24">
            <div className="grid gap-8 xl:grid-cols-2 xl:items-center">
                <div>
                    <h1 className={`text-heading-1 mb-4 ${page=="homepage"?" text-white":"text-[#ED8946]"} font-normal`}>Who we are</h1>
                    <p className="text-neutral-200 text-base lg:text-lg/[1.625rem] mb-4">
                        GMG Prime is the liquidity partner built to fit where a growth broker is—today and tomorrow.
                        We combine right-sized prime liquidity with clear commercial terms and dependable operations.
                    </p>
                    <p className="text-neutral-400 text-sm lg:text-base">
                        Authorised and regulated by the Financial Conduct Authority (FRN 744501).
                        Registered office: 20-22 Wenlock Road, London N1 7GU, United Kingdom.
                    </p>

                    <div className="flex gap-6 mt-4">
                        <button
                            type="button"
                            className="transition-colors bg-[#ED8946] text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                        >
                            <span>Book a call</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                                <path
                                    fill="currentColor"
                                    d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="transition-colors bg-[#265B9F] text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                        >
                            <span> Request pricing</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                                <path
                                    fill="currentColor"
                                    d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative xl:justify-end">
                    <Image
                        src="/new/about.svg"
                        alt="Trading laptop"
                        width={640}
                        height={420}
                        className="w-full max-w-[560px] mx-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre;