import FeatureSlider from "./Slider";
import CommonButton from "../../../components/CommonButton";

export default function Hero() {
  const ITEMS = [
    {
      src: "/new/icon1.svg",
      title: "Right-sized liquidity",
      text: "Designed for institutional quality with entry-friendly terms.",
      href: "/technology",
    },
    {
      src: "/new/icon2.svg",
      title: "Transparent pricing",
      text: "Simple commissions or markup with no platform surprises.",
      href: "/technology",
    },
    {
      src: "/new/icon3.svg",
      title: "Custom streams",
      text: "Servers that just “tick”: fulls, tune per symbol.",
      href: "/technology",
    },
    {
      src: "/new/icon4.svg",
      title: "Fast go-live",
      text: "Guided FIX connections and MT5 integrations.",
      href: "/technology",
    },
    {
      src: "/new/icon5.svg",
      title: "Low latency in LD4",
      text: "Cross-connect options and resilient setup.",
      href: "/technology",
    },
    {
      src: "/new/icon6.svg",
      title: "Real-time TCA & reporting",
      text: "Full liquidity, costs and slippage checks in a click.",
      href: "/technology",
    },
  ];

  return (
    <section className="relative flex items-center overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-[800px]">
      {/* Background image (desktop only) */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/new/bg-new1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
      />

      <div className="container relative">
        {/* Title */}
        <h1 className="pt-12 mx-auto mb-4 max-w-xl text-center text-[30px] font-bold text-white md:text-[60px] md:leading-[72px]">
          Prime liquidity for growing brokers
        </h1>

        {/* Sub */}
        <p className="mx-auto mb-6 max-w-lg text-center text-base text-white/90 lg:text-lg/[1.625rem]">
          Institutional pricing that fits your stage. Fast integration, transparent terms, and support that helps you ship.
        </p>

        {/* CTAs */}
        <div className="flex justify-center gap-6 pb-8">
          <CommonButton>Book a call</CommonButton>
          <CommonButton variant="ghost">Request pricing</CommonButton>
        </div>

        {/* Slider */}
        <FeatureSlider
          items={ITEMS}
          autoPlay
          interval={3500}
          duration={600}
          pauseOnHover
          showDots
          showArrows={false}
        />
      </div>
    </section>
  );
}
