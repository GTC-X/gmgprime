import React from "react";
import Image from "next/image";

export default function InstrumentsOverview() {
  return (
    <section className="relative w-full bg-white">
      {/* subtle candlestick background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src={"/new/bg-img-3.svg"} // put your cut-out person here (transparent PNG)
          alt="Businessman"
          style={{ width: "100%" }}
          className="h-full"
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left copy */}
          <div className="text-[#132F47] text-center md:text-left">
            <h3 className="text-[28px] md:text-[32px] font-bold leading-[40px] mb-3">
              Instruments overview
            </h3>

            <p className="md:text-[22px] text-[20px] leading-[32px] text-[#04417B] max-w-xl mb-6">-
              Trade multi-asset with confidence.<br />
              FX spot and forwards, precious and base
              metals, global indices and equity CFDs,
              energies, single stocks, and
              cryptocurrencies.
            </p>

            <button
              type="button"
              className="transition-colors text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-3 rounded-lg"
            >
              <span>View all product list</span>
              <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                <path
                  fill="currentColor"
                  d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                />
              </svg>
            </button>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[420px] h-[230px] md:w-[500px] md:h-[320px] drop-shadow-xl">
              {/* replace with your image path */}
              <Image
                src="/new/laptop-img.svg"
                alt="Trading laptop"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
