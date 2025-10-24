import React from "react";
import Image from "next/image";

export default function TechnologyHighlight() {
    return (
        <section className="w-full bg-white grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:py-10">
            <div className="relative flex-1 h-full">
                <div className="relative w-full md:h-full  h-[250px] rounded-r-3xl overflow-hidden shadow-[0_12px_32px_rgba(16,30,54,0.10)]">
                    <Image
                        src="/new/section-img1.svg" // <-- replace with your image
                        alt="Technology highlight"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            <div className="flex-1 p-4 md:p-0">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                    {/* Left media (rounded on the right like the mock) */}


                    {/* Right content */}
                    <div className="text-primary text-center md:text-left">
                        <h3 className="text-[28px] text-primary md:text-[32px] font-bold leading-tight mb-1">
                            Technology highlight
                        </h3>

                        {/* Sub-heading (blue link-style) */}
                        <div className="text-[#03A7D9] font-semibold text-[20px] md:text-[22px] mb-3">
                            Built on PrimeXM in LD4
                        </div>

                        {/* Body copy */}
                        <p className="md:text-[22px] text-[20px] leading-[32px] text-primary5 mb-4 max-w-[560px]">
                            A dedicated global network with low latency and failover
                            protection for continuous access.
                        </p>

                        <div className="md:text-[22px] text-[20px] leading-[32px] text-primary mb-8 max-w-[560px]">
                            <span className="block font-semibold text-[#03A7D9] mb-1">What you get</span>
                            Real-time P and L, centralised margin, quick order entry, drop copy, and reliable redundancy.
                            <br />
                            Bridges supported include PrimeXM and TFB. Integrated to MetaTrader 5.
                        </div>

                        {/* CTA */}
                        <button
                            type="button"
                            className="transition-colors text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-3 rounded-lg"
                        >
                            <span>Explore our technology</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                                <path
                                    fill="currentColor"
                                    d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
