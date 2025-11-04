"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
// If you haven't already, include Swiper styles once in your app entry:
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

export default function FeatureSlider({
  items = [],
  className = "",
  delay = 3500,   // autoplay delay (ms)
  speed = 600,    // transition speed (ms)
}) {
  if (!items.length) return null;

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          spaceBetween={12}
          slidesPerGroup={1}
          loop
          loopAddBlankSlides={false}
          speed={speed}
          autoplay={{
            delay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          watchSlidesProgress
          className="!px-2 md:!px-3"

          // 👇 These make links clickable (Swiper otherwise swallows clicks on drags)
          preventClicks={false}
          preventClicksPropagation={false}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="h-full p-4 md:p-6">
                <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-accent-400">
                  <div className="relative rounded-2xl bg-primary-950 bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] p-6 xl:p-10 cursor-pointer">
                    {/* Full-card link overlay */}
                    <Link
                      href={item.href || "/technology"}
                      className="absolute inset-0 z-10"
                      aria-label={item.title || "Open"}
                    />

                    {/* Card content */}
                    <div className="relative z-0 flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full grid place-items-center shrink-0">
                        <Image
                          src={item.src}
                          alt={item.alt || item.title || "icon"}
                          width={50}
                          height={50}
                          priority={i === 0}
                        />
                      </div>

                      {item.title && (
                        <h3 className="text-shadow-accent-700 text-base md:text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                      )}
                    </div>

                    {item.text && (
                      <p className="mt-2 text-[#C9D3E1] text-center text-sm md:text-base leading-relaxed">
                        {item.text}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
