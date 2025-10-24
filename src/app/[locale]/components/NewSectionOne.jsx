import React from "react";

export default function SolutionsSnapshot() {
    const items = [
        {
            title: "Liquidity for Brokers",
            icon: "bar",
            img: "/new/img1.svg"
        },
        {
            title: "Pricing Models",
            icon: "pricing",
            img: "/new/img2.svg"
        },
        {
            title: "Risk & Controls",
            icon: "shield",
            img: "/new/img3.svg"
        },
        {
            title: "Connectivity & Access",
            icon: "link",
            img: "/new/img2.svg"
        },
        {
            title: "Reporting & TCA",
            icon: "report",
            img: "/new/img2.svg"
        },
        {
            title: "Onboarding & Go-Live",
            icon: "play",
            img: "/new/img2.svg"
        },
    ];

    const Icon = (type) => {
        // minimal inline icons to match the orange circular glyphs
        const common = "w-3.5 h-3.5";
        switch (type) {
            case "bar":
                return (
                    <svg viewBox="0 0 24 24" className={common} fill="currentColor">
                        <rect x="4" y="12" width="3" height="8" rx="1" />
                        <rect x="10.5" y="8" width="3" height="12" rx="1" />
                        <rect x="17" y="4" width="3" height="16" rx="1" />
                    </svg>
                );
            case "pricing":
                return (
                    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 7h10v10H7z" />
                        <path d="M7 13h10" />
                    </svg>
                );
            case "shield":
                return (
                    <svg viewBox="0 0 24 24" className={common} fill="currentColor">
                        <path d="M12 2l8 3v6c0 5.25-3.438 9.75-8 11-4.562-1.25-8-5.75-8-11V5l8-3z" />
                    </svg>
                );
            case "link":
                return (
                    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 1 0-7.07-7.07L10 5" />
                        <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L14 19" />
                    </svg>
                );
            case "report":
                return (
                    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 4h9l3 3v13H6z" />
                        <path d="M9 12h6M9 16h6M9 8h3" />
                    </svg>
                );
            default:
                return (
                    <svg viewBox="0 0 24 24" className={common} fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                );
        }
    };

    return (
        <section className="relative w-full bg-white py-14 md:py-20">
            {/* subtle background “candlesticks” */}

            {/* <div >
                        <img
                            src={ "/new/section2-bg.svg"} // put your cut-out person here (transparent PNG)
                            alt="Businessman"
                            className="  left-[5%] absolute bottom-0 right-0 z-20 mx-auto max-w-full select-none"
                            style={{ width: "100%" }}
                        />
                    </div> */}
            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <img
                    src={"/new/section2-bg.svg"} // put your cut-out person here (transparent PNG)
                    alt="Businessman"
                    style={{ width: "100%" }}
                />
            </div>

            <div className="relative container mx-auto px-6">
                <h2 className="text-center text-primary font-semibold tracking-tight md:text-[40px] text-[32px] leading-[1.2]">
                    Solutions snapshot
                </h2>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 relative z-10 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((it) => (
                        <div
                            key={it.title}
                            className="group flex-col relative min-h-[200px] rounded-2xl bg-white shadow-[0_10px_30px_rgba(16,30,54,0.08)] ring-1 ring-[#E8EDF4] px-8 py-8 flex items-center justify-center text-center transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#FFE9D6] text-[#F28C3A] mb-3">
                                <img src={it?.img} alt="" />
                            </div>
                            <div className="text-[18px] font-semibold text-primary leading-snug">
                                {it.title}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex justify-center">
                    <button className="inline-flex items-center gap-2 transition-colors min-w-44 hover:bg-secondary bg-secondary text-white font-medium px-4 py-2 rounded-lg">
                        <span>See all solutions</span>
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
    );
}
