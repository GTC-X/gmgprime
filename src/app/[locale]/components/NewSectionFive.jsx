import React from "react";
import Image from "next/image";

export default function PromoStripes() {
    return (
        <section className="w-full bg-white">
            {/* Row 1: Text left / Image right */}
            <div className="w-full bg-white grid md:grid-cols-2 grid-cols-1 md:gap-10gap-2 md:py-10 items-center">
                <div className=" py-4 text-center   p-4 md:p-0 ">
                    <h3 className="text-[#132F47] font-extrabold text-[28px] md:text-[32px] leading-[40px] mb-2">
                        For partners and affiliates
                    </h3>
                    <p className="md:text-[22px] text-[20px] leading-[32px] mx-auto text-[#132F47] max-w-[520px] mb-6">
                        CPA available for qualified partners, with tracking tools and co-marketing
                        support. Up to 1,000 USD per referral.
                    </p>
                    <div className="pt-6">
                        <button
                            type="button"
                            className="transition-colors text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-3 rounded-lg"
                        >
                            <span>                        Partner with GMG Prime
                            </span>
                            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                                <path
                                    fill="currentColor"
                                    d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative w-full h-[240px] md:h-[410px] lg:h-[410px] rounded-l-3xl overflow-hidden shadow-[0_12px_28px_rgba(16,30,54,0.12)]">
                        <Image
                            src="/new/section-img3.svg" // swap with your asset
                            alt="Partners"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Row 2: Image left / Text right */}
            <div className="w-full bg-white grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:py-10 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="relative w-full h-[240px] md:h-[340px] lg:h-[340px] rounded-r-3xl overflow-hidden shadow-[0_12px_28px_rgba(16,30,54,0.12)]">
                        <Image
                            src="/new/section-img4.svg" // swap with your asset
                            alt="Compliance"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="order-1 lg:order-2 pl-4 lg:pl-8 text-center md:text-left p-4 md:p-0">
                    <h3 className="text-[#265B9F] font-extrabold text-[28px] md:text-[32px] leading-[40px] mb-2">
                        Compliance and jurisdiction notice
                    </h3>
                    <p className="md:text-[22px] text-[20px] leading-[32px] text-[#132F47] max-w-[560px]">
                        The information on this site is not directed at residents of the United States,
                        Japan, Canada, Belgium or any other jurisdiction where distribution or use
                        would be contrary to local law or regulation. You must be of minimum legal
                        age as determined by your country of origin to use services on this website.
                    </p>
                </div>
            </div>

            {/* Row 3: Text left / Image right */}
            <div className="w-full bg-white grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 py-10 items-center">
                <div className="pr-0 lg:pr-8 max-w-[560px] mx-auto text-center md:text-left p-4 md:p-0">
                    <h3 className="text-[#265B9F] font-extrabold text-[28px] md:text-[32px] leading-[40px] mb-2">
                        Secondary trust band
                    </h3>
                    <p className="md:text-[22px] text-[20px] leading-[32px] text-[#132F47] ">
                        Global Markets Group Limited. Trading name gmgmarkets.co.uk. Company number{" "}
                        <span className="font-semibold text-[#E77831]">09493910</span>.
                        <br />
                        Authorised and regulated by the{" "}<br/>
                        <span className="font-semibold text-[#E77831]">
                            Financial Conduct Authority. FRN 744501
                        </span>.
                    </p>
                </div>

                <div className="relative">
                    <div className="relative w-full h-[240px] md:h-[410px] lg:h-[410px] rounded-l-3xl overflow-hidden shadow-[0_12px_28px_rgba(16,30,54,0.12)]">
                        <Image
                            src="/new/section-img5.svg" // swap with your asset
                            alt="Trust"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
