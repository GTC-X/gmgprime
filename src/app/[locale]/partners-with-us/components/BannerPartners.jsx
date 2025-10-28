"use client";

import Image from "next/image";
import Link from "next/link";

export default function BannerPartners({
  bgImage = "/partner/banner-overlay.webp",          // replace with your background
  peopleImage = "/partner/partner.webp" // replace with your right image
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-80 md:opacity-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay (optional – adjust opacity if needed) */}
      <div className="absolute inset-0" />

      <div className="relative z-10 container mx-auto grid md:grid-cols-2 items-center">
        {/* Left content */}
        <div className="text-left space-y-5">
          <h2 className="text-[#ED8946] font-bold leading-tight text-4xl sm:text-5xl 2xl:text-[48px] uppercase max-w-xl">
            Grow together
           with a partner
           that actually helps
          </h2>

          <p className="text-[#fff] text-base sm:text-lg leading-relaxed max-w-md pt-5 pb-8">
            If you bring quality broker leads or run a network, we’ll give you
            clear tracking, fair rewards and support that makes your life easier.
          </p>
          <Link href="#" className="bg-accent-400 text-white py-3 px-5 rounded-lg">Become a Partner
          </Link>
        </div>

        {/* Right image */}
        <div className="relative mt-10 md:mt-0 h-[340px] sm:h-[420px] md:h-[520px]">
          <Image
            src={peopleImage}
            alt="Handshake partners"
            fill
            priority
            className="object-contain object-bottom md:object-right-bottom select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
