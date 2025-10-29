// "use client";
// import { useEffect, useMemo, useRef, useState } from "react";
// import Image from "next/image";

// export default function FeatureSlider({
//   items = [],
//   autoPlay = true,
//   interval = 3500,
//   duration = 600,
//   showDots = true,
//   showArrows = true,
//   pauseOnHover = true,
//   className = "",
// }) {
//   // --- group items into pairs (2 per slide) ---
//   const baseSlides = useMemo(() => {
//     const s = [];
//     for (let i = 0; i < items.length; i += 2) s.push(items.slice(i, i + 2));
//     return s.length ? s : [[]];
//   }, [items]);

//   // Clone first & last slide for infinite loop
//   const slides = useMemo(() => {
//     if (baseSlides.length === 1) return baseSlides;
//     return [baseSlides[baseSlides.length - 1], ...baseSlides, baseSlides[0]];
//   }, [baseSlides]);

//   const [index, setIndex] = useState(slides.length > 1 ? 1 : 0); // start at first real
//   const [anim, setAnim] = useState(true); // whether to animate transform
//   const timerRef = useRef(null);
//   const hoveringRef = useRef(false);

//   const realCount = baseSlides.length;

//   const goTo = (i) => setIndex(i);
//   const next = () => goTo(index + 1);
//   const prev = () => goTo(index - 1);

//   // autoplay
//   useEffect(() => {
//     if (!autoPlay || realCount <= 1) return;
//     clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       if (pauseOnHover && hoveringRef.current) return;
//       next();
//     }, interval);
//     return () => clearInterval(timerRef.current);
//   }, [index, autoPlay, interval, pauseOnHover, realCount]);

//   // snap without animation when we hit clones
//   const handleTransitionEnd = () => {
//     if (realCount <= 1) return;
//     if (index === slides.length - 1) {
//       // reached last clone -> snap to first real
//       setAnim(false);
//       setIndex(1);
//     } else if (index === 0) {
//       // reached first clone -> snap to last real
//       setAnim(false);
//       setIndex(slides.length - 2);
//     }
//   };

//   // re-enable animation on next tick after snap
//   useEffect(() => {
//     if (!anim) {
//       const id = requestAnimationFrame(() => setAnim(true));
//       return () => cancelAnimationFrame(id);
//     }
//   }, [anim]);

//   // hover
//   const onMouseEnter = () => (hoveringRef.current = true);
//   const onMouseLeave = () => (hoveringRef.current = false);

//   // swipe
//   const startX = useRef(0);
//   const deltaX = useRef(0);
//   const handleTouchStart = (e) => {
//     startX.current = e.touches[0].clientX;
//     deltaX.current = 0;
//   };
//   const handleTouchMove = (e) => {
//     deltaX.current = e.touches[0].clientX - startX.current;
//   };
//   const handleTouchEnd = () => {
//     const threshold = 50;
//     if (deltaX.current > threshold) prev();
//     else if (deltaX.current < -threshold) next();
//   };

//   const trackStyle = useMemo(
//     () => ({
//       transform: `translateX(${-index * 100}%)`,
//       transition: anim ? `transform ${duration}ms ease-in-out` : "none",
//       willChange: "transform",
//     }),
//     [index, duration, anim]
//   );

//   // Map dots to real slides only
//   const activeDot =
//     realCount > 0
//       ? (index - 1 + realCount) % realCount
//       : 0;

//   return (
//     <div
//       className={`relative w-full select-none ${className}`}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <div
//         className="overflow-hidden rounded-2xl"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div
//           className="flex w-full"
//           style={trackStyle}
//           onTransitionEnd={handleTransitionEnd}
//           aria-live={autoPlay ? "off" : "polite"}
//         >
//           {slides.map((pair, i) => (
//             <div
//               key={i}
//               className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-6 md:p-8"
//             >
//               {pair.map((item, j) => (
//                 <div
//                   key={j}
//                   className="rounded-xl bg-[#081c2e]/90 border border-white/10 p-6 flex flex-col items-start gap-4"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 grid place-items-center">
//                       <Image
//                         src={item.src}
//                         alt={item.alt || "icon"}
//                         width={28}
//                         height={28}
//                         className="opacity-90"
//                       />
//                     </div>
//                     {item.title && (
//                       <h3 className="text-white text-base md:text-lg font-semibold">
//                         {item.title}
//                       </h3>
//                     )}
//                   </div>
//                   <p className="text-[#C9D3E1] text-sm md:text-base leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Arrows */}
//       {showArrows && realCount > 1 && (
//         <>
//           <button
//             aria-label="Previous"
//             onClick={prev}
//             className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2
//                        h-10 w-10 md:h-11 md:w-11 rounded-full
//                        bg-white/10 hover:bg-white/15 border border-white/20
//                        backdrop-blur-sm grid place-items-center text-white"
//           >
//             ‹
//           </button>
//           <button
//             aria-label="Next"
//             onClick={next}
//             className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2
//                        h-10 w-10 md:h-11 md:w-11 rounded-full
//                        bg-white/10 hover:bg-white/15 border border-white/20
//                        backdrop-blur-sm grid place-items-center text-white"
//           >
//             ›
//           </button>
//         </>
//       )}

//       {/* Dots (real slides only) */}
//       {showDots && realCount > 1 && (
//         <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
//           {baseSlides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 // move to the corresponding real slide (offset +1 for clone head)
//                 setAnim(true);
//                 setIndex(i + 1);
//               }}
//               className={`h-2.5 rounded-full transition-all ${
//                 i === activeDot
//                   ? "w-6 bg-[#EE8F43]"
//                   : "w-2.5 bg-white/40 hover:bg-white/70"
//               }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// app/components/FeatureSlider.jsx
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

export default function FeatureSlider({
  items = [],
  className = "",
  delay = 3500,     // autoplay delay
  speed = 600,      // transition speed
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          // show 1 on mobile, 2 on >= md
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          spaceBetween={12}
          // move ONE card at a time
          slidesPerGroup={1}
          // infinite loop without visible jump
          loop
          loopAddBlankSlides={false}
          // motion
          speed={speed}
          // autoplay & pause on hover
          autoplay={{
            delay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // UI
          pagination={{ clickable: true }}
          // minor perf hint
          watchSlidesProgress
          className="!px-2 md:!px-3"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="h-full p-4 md:p-6">
                <div className="rounded-xl border border-white/10 p-6 h-full flex flex-col gap-4 bg-[#162166]/90 ">
                  <div className="flex items-center flex-col text-center gap-3">
                    <div className="w-12 h-12 rounded-full grid place-items-center shrink-0">
                      <Image
                        src={item.src}
                        alt={item.alt || "icon"}
                        width={50}
                        height={50}
                      />
                    </div>
                    {item.title && (
                      <h3 className="text-shadow-accent-700 text-base md:text-lg font-semibold">
                        {item.title}
                      </h3>
                    )}
                  </div>
                  <p className="text-[#C9D3E1] text-center text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
