import React from "react";
import Image from "next/image";

export default function OnboardingHowItWorks() {
  return (
    <section className="w-full bg-white grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 py-10">
      <div className="relative">
        <div className="relative w-full md:h-full h-[250px] rounded-r-3xl overflow-hidden shadow-[0_12px_28px_rgba(16,30,54,0.12)]">
          <Image
            src="/new/section-img2.svg" // swap with your asset
            alt="Onboarding workspace"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
        {/* Left image */}


        {/* Right content */}
        <div className="text-[#132F47] max-w-lg p-4 md:p-0 text-center md:text-left">
          <h3 className="text-[28px] md:text-[32px] font-extrabold leading-[40px] mb-4">
            How onboarding works
          </h3>

          <ul className="space-y-4">
            <li className="leading-7 md:text-[22px] text-[20px]">
              <span className="font-semibold text-[#265B9F]">
                <span className=" font-extrabold">1. </span>
                KYB and categorisation
              </span>
              <br />
              <span className="text-[#132F47]  md:text-[22px] text-[20px] leading-[32px]">
                Submit the corporate pack. We classify clients and confirm protections in line with FCA rules.
              </span>
            </li>

            <li className="leading-7  md:text-[22px] text-[20px]">
              <span className="font-semibold text-[#265B9F]">
                <span className="text-[#265B9F] font-extrabold">2. </span>
                Sandbox and certification
              </span>
              <br />
              <span className="text-[#132F47]  md:text-[22px] text-[20px] leading-[32px]">
                Spin up a guided sandbox, run FIX protocol tests, validate tags and sessions.
              </span>
            </li>

            <li className="leading-7  md:text-[22px] text-[20px]">
              <span className="font-semibold text-[#265B9F]">
                <span className="text-[#265B9F] font-extrabold">3. </span>
                Parallel run
              </span>
              <br />
              <span className="text-[#132F47]  md:text-[22px] text-[20px] leading-[32px]">
                Operate new and legacy flows together for a smooth migration.
              </span>
            </li>

            <li className="leading-7  md:text-[22px] text-[20px]">
              <span className="font-semibold text-[#265B9F]">
                <span className="text-[#265B9F] font-extrabold">4. </span>
                Go live
              </span>
              <br />
              <span className="text-[#132F47]  md:text-[22px] text-[20px] leading-[32px]">
                Switch keys, monitor with real-time reporting, and scale with your named engineer.
              </span>
            </li>
          </ul>

          <div className="pt-6">
            <button
              type="button"
              className="transition-colors text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-3 rounded-lg"
            >
              <span>Read More</span>
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
