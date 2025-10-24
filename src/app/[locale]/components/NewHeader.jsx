// import React from "react";
// import Image from "next/image";

// export default function NewBanner() {
//     return (
//         <section className="w-full bg-white text-[#0A2640] font-[Poppins]">
//             {/* Hero Section */}
//             <div className="container mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//                 {/* Left content */}
//                 <div className="space-y-6">
//                     <h1 className="text-[60px] font-bold text-primary leading-tight">
//                         Prime liquidity for <br />
//                         <span className="text-[#0A2640]">growing brokers</span>
//                     </h1>
//                     <p className="text-primary text-[22px] leading-relaxed max-w-md">
//                         Institutional pricing that fits your stage. Fast integration,
//                         transparent terms, and support that helps you ship.
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex gap-4 pt-2">
//                         <button className="transition-colors min-w-44 hover:bg-secondary bg-secondary text-white font-medium px-4 py-2 rounded-lg">
//                             Book a call
//                         </button>
//                         <button className="transition-colors min-w-44 hover:bg-[#265B9F] bg-[#265B9F] text-white font-medium px-4 py-2 rounded-lg">
//                             Request pricing
//                         </button>
//                     </div>
//                     <div>
//                         <p className="text-[16px] text-primary leading-relaxed font-semibold max-w-lg pt-2">
//                             Authorised and regulated by the FCA. FRN 744501.<br />

//                         </p>
//                         {/* Disclaimer */}
//                         <p className="text-[16px] text-primary leading-relaxed max-w-lg pt-1">
//                             CFDs and Spread Bets are complex instruments and come with a high
//                             risk of losing money rapidly due to leverage. 65% of retail investor
//                             accounts lose money when trading CFDs and Spread Bets with this
//                             provider. Consider whether you understand how CFDs and Spread Bets
//                             work and whether you can afford to take the high risk of losing your
//                             money. There is a possibility of losing all your initial capital.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Right image */}
//                 <div className="relative flex justify-center lg:justify-end">
//                     <div className="relative w-full h-[450px]">
//                         <Image
//                             src="/new/banner.png" // replace with your actual image path
//                             alt="Trading Screens"
//                             fill
//                             className="object-contain"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Feature Bar */}
//             <div className="bg-primary rounded-2xl container mx-auto text-white">
//                 <div className=" px-6 py-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
//                     <div className="flex flex-col items-center">
//                         <img src="/new/icon1.svg" alt="" className="w-10 h-10 mb-2" />
//                         <p className="text-sm leading-snug">
//                             Right-sized liquidity designed for institutional quality with
//                             entry-friendly terms.
//                         </p>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img src="/new/icon2.svg" alt="" className="w-10 h-10 mb-2" />
//                         <p className="text-sm leading-snug">
//                             Transparent pricing simple commissions or markup with no platform
//                             surprises.
//                         </p>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img src="/new/icon3.svg" alt="" className="w-10 h-10 mb-2" />
//                         <p className="text-sm leading-snug">
//                             Custom streams for servers that just “tick”: fulls, tune per symbol.
//                         </p>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img src="/new/icon4.svg" alt="" className="w-10 h-10 mb-2" />
//                         <p className="text-sm leading-snug">
//                             Fast go-live guided FIX connections and MT5 integrations.
//                         </p>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img src="/new/icon5.svg" alt="" className="w-10 h-10 mb-2" />
//                         <p className="text-sm leading-snug">
//                             Low latency in LD4 class-connect options and resilient setup.
//                         </p>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img src="/new/icon6.svg" alt="" className="w-10 h-10 mb-2" />
//                         <p className="text-sm leading-snug">
//                             Real-time TCA and reporting for full liquidity, costs and
//                             slippage checks.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function NewBanner() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // trigger animations after initial paint
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full bg-white text-[#0A2640] font-[Poppins] overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-10 md:py-16 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div
          className={[
            "space-y-6 transform transition-all duration-800 ease-out",
            ready ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
          ].join(" ")}
        >
          <h1 className="md:text-[60px] text-center md:text-left text-[40px] font-bold text-primary leading-tight">
            Prime liquidity for <br className="md:block hidden"/>
            <span className="text-[#0A2640]">growing brokers</span>
          </h1>

          <p className="text-primary md:text-[22px] text-center md:text-left text-[18px] leading-relaxed max-w-md">
            Institutional pricing that fits your stage. Fast integration,
            transparent terms, and support that helps you ship.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button className="transition-colors text-sm md:text-base inline-flex items-center justify-center gap-1 md:min-w-44 min-w-24 hover:bg-secondary bg-secondary text-white font-medium px-4 py-2 rounded-lg">
              Book a call
              <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                <path
                  fill="currentColor"
                  d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                />
              </svg>
            </button>
            <button className="transition-colors text-sm md:text-base inline-flex items-center gap-1 justify-center md:min-w-44 min-w-24 hover:bg-[#265B9F] bg-[#265B9F] text-white font-medium px-4 py-2 rounded-lg">
              Request pricing
              <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                <path
                  fill="currentColor"
                  d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                />
              </svg>
            </button>
          </div>

          <div>
            <p className="text-[16px] text-primary leading-relaxed font-semibold max-w-lg pt-2">
              Authorised and regulated by the FCA. FRN 744501.<br />
            </p>

            {/* Disclaimer */}
            <p className="text-[16px] text-primary leading-relaxed max-w-lg pt-1">
              CFDs and Spread Bets are complex instruments and come with a high
              risk of losing money rapidly due to leverage. 65% of retail investor
              accounts lose money when trading CFDs and Spread Bets with this
              provider. Consider whether you understand how CFDs and Spread Bets
              work and whether you can afford to take the high risk of losing your
              money. There is a possibility of losing all your initial capital.
            </p>
          </div>
        </div>

        {/* Right image */}
        <div
          className={[
            "relative flex justify-center lg:justify-end transform transition-all duration-800 ease-out",
            // slight longer delay than text
            ready ? "opacity-100 translate-x-0 delay-100" : "opacity-0 translate-x-8",
          ].join(" ")}
        >
          <div className="relative w-full md:h-[450px] h-[250px]">
            <Image
              src="/new/banner.png" // replace with your actual image path
              alt="Trading Screens"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div
        className={[
          "bg-primary rounded-2xl container mx-auto text-white",
          "transform transition-all duration-700 ease-out",
          ready ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <div className="md:px-6 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { src: "/new/icon1.svg", text: "Right-sized liquidity designed for institutional quality with entry-friendly terms." },
            { src: "/new/icon2.svg", text: "Transparent pricing simple commissions or markup with no platform surprises." },
            { src: "/new/icon3.svg", text: "Custom streams for servers that just “tick”: fulls, tune per symbol." },
            { src: "/new/icon4.svg", text: "Fast go-live guided FIX connections and MT5 integrations." },
            { src: "/new/icon5.svg", text: "Low latency in LD4 class-connect options and resilient setup." },
            { src: "/new/icon6.svg", text: "Real-time TCA and reporting for full liquidity, costs and slippage checks." },
          ].map((item, idx) => (
            <div
              key={idx}
              className={[
                "flex flex-col items-center transform transition-all duration-700 ease-out",
                ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                // nice cascading effect
                `delay-[${250 + idx * 60}ms]`,
              ].join(" ")}
            >
              <img src={item.src} alt="" className="w-10 h-10 mb-2" />
              <p className="text-sm leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
