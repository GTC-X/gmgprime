import Link from "next/link";
import Image from "next/image";

export default function FeatureLinks() {
  return (
    <section className="py-20 xl:py-28 !py-0  ">
      <div className="container">
        <div class=" grid md:grid-cols-6 grid-cols-2 flex-wrap gap-6 mb-24 border  border-accent-400 rounded-2xl">
          {[
            { src: "/new/icon1.svg", text: "Right-sized liquidity designed for institutional quality with entry-friendly terms." },
            { src: "/new/icon2.svg", text: "Transparent pricing simple commissions or markup with no platform surprises." },
            { src: "/new/icon3.svg", text: "Custom streams for servers that just “tick”: fulls, tune per symbol." },
            { src: "/new/icon4.svg", text: "Fast go-live guided FIX connections and MT5 integrations." },
            { src: "/new/icon5.svg", text: "Low latency in LD4 class-connect options and resilient setup." },
            { src: "/new/icon6.svg", text: "Real-time TCA and reporting for full liquidity, costs and slippage checks." },
          ]?.map(single =>

            <div class="flex-1 overflow-hidden rounded-2xl">
              <div class="h-full rounded-2xl bg-[#081c2e] p-6 flex flex-col items-start">
                <img src={single?.src} alt="Indices" class="mb-4 w-12 h-12" />
                <p class="font-sofia text-white text-lg leading-relaxed">{single?.text}</p>
              </div>
            </div>
          )}



        </div>

        {/* <div className="flex items-center justify-center flex-col xl:flex-row gap-12 xl:justify-evenly *:xl:basis-64">
              {[
                ["Bespoke Prime Solutions", "/solutions"],
                ["State-of-the-art Platforms", "/platforms"],
                ["Expansive Range of Products", "/products"],
              ].map(([label, href]) => (
                <div key={href}>
                  <Link className="hover:text-accent-400 text-4xl inline-block" href={href}>
                    {label}{" "}
                    <Image
                      src="/images/icons/arrow-right.svg"
                      alt="→"
                      width={16}
                      height={16}
                      className="ms-px inline -translate-y-px size-4"
                    />
                  </Link>
                </div>
              ))}
            </div> */}

      </div>
    </section>
  );
}
