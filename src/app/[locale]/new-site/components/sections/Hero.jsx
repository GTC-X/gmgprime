import Link from "next/link";
import FeatureLinks from "./FeatureLinks";
import FeatureSlider from "./Slider";
import CommonButton from "../../../components/CommonButton";

export default function Hero() {
  const ITEMS = [
    {
      src: "/new/icon1.svg",
      title: "Right-sized liquidity",
      text: "Designed for institutional quality with entry-friendly terms.",
    },
    {
      src: "/new/icon2.svg",
      title: "Transparent pricing",
      text: "Simple commissions or markup with no platform surprises.",
    },
    {
      src: "/new/icon3.svg",
      title: "Custom streams",
      text: "Servers that just “tick”: fulls, tune per symbol.",
    },
    {
      src: "/new/icon4.svg",
      title: "Fast go-live",
      text: "Guided FIX connections and MT5 integrations.",
    },
    {
      src: "/new/icon5.svg",
      title: "Low latency in LD4",
      text: "Cross-connect options and resilient setup.",
    },
    {
      src: "/new/icon6.svg",
      title: "Real-time TCA & reporting",
      text: "Full liquidity, costs and slippage checks in a click.",
    },
  ];
  return (
    <section className="flex min-h-[900px] items-center overflow-hidden  bg-cover bg-center bg-no-repeat">
      <div
        className="pointer-events-none hidden md:block absolute right-0 top-0 h-full w-full"
        style={{
          backgroundImage: "url('/new/bg-new1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
      />
      <div className="container relative">
        <h1 className="text-[48px] mb-4 text-center font-bold md:text-[60px] leading-[72px] capitalize max-w-xl mx-auto">
          Prime liquidity for growing brokers
        </h1>
        <p className="font-sofia font-normal text-base lg:text-lg/[1.625rem] mb-6 text-center text-white">
          Institutional pricing that fits your stage.
          Fast integration, transparent terms, and support that helps you ship.
        </p>

        <div className="flex gap-6 justify-center">
          <CommonButton>Book a call</CommonButton>
          <CommonButton variant="ghost"> Request pricing</CommonButton>
        </div>

        <div className="  max-w-5xl py-10 text-center mx-auto text-white">
          <p className="text-[16px] text-primary leading-relaxed font-semibold pt-2 text-shadow-accent-700 capitalize">
            Authorised and regulated by the FCA. FRN 744501.<br />
          </p>

          {/* Disclaimer */}
          <p className="text-[16px] text-primary leading-relaxed pt-1">
            CFDs and Spread Bets are complex instruments and come with a high
            risk of losing money rapidly due to leverage. 65% of retail investor
            accounts lose money when trading CFDs and Spread Bets with this
            provider. Consider whether you understand how CFDs and Spread Bets
            work and whether you can afford to take the high risk of losing your
            money. There is a possibility of losing all your initial capital.
          </p>
        </div>

        <FeatureSlider
          items={ITEMS}
          autoPlay
          interval={3500}   // slide stay time
          duration={600}    // transition ms
          pauseOnHover
          showDots
          showArrows={false}
          className=""
        />


      </div>
    </section>
  );
}
