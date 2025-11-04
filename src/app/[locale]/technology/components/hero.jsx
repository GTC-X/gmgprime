import Button from "./button";

export default function Hero() {
    return (
        <section className=" overflow-hidden flex min-h-[600px] items-center ">
            <div className="absolute inset-0 bg-dots opacity-30" />
            <div
                className="pointer-events-none hidden md:block absolute right-0 top-0 h-full w-full"
                style={{
                    backgroundImage: "url('/new/banner-tech.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center right",
                }}
            />
            <div className="container relative grid gap-10 py-16 md:grid-cols-2 md:py-20 lg:py-24">
                {/* Left */}
                <div className="max-w-[520px]">
                    <h2 className=" text-heading-1 text-[#E77831] font-semibold">
                        Built on proven <br /> infrastructure
                    </h2>
                    <p className="mt-4 text-[20px] leading-7 text-text-mute">
                        You want low latency, stability and deep <br className="hidden md:block" />
                        connectivity. Our customizable, private L1/2 <br className="hidden md:block" />
                        network stack lets you build once and <br className="hidden md:block" />
                        trade with confidence.
                    </p>
                 
                </div>
                {/* Right visual */}
                <div className="relative">


                </div>
            </div>
        </section>
    );
}
