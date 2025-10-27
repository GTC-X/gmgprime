import FeatureLinks from "./FeatureLinks";

export default function Hero() {
  return (
    <section className="py-20 xl:py-28 relative  flex min-h-[900px] items-center overflow-hidden  bg-cover bg-center bg-no-repeat">
      <div className="container">
        <h1 className="text-heading-1 mb-4 text-center font-normal xl:text-[4rem]/[4.25rem]">
          Prime liquidity for growing brokers
        </h1>
        <p className="font-sofia font-normal text-base lg:text-lg/[1.625rem] mb-8 text-center text-neutral-400">
          Institutional pricing that fits your stage.
          Fast integration, transparent terms, and support that helps you ship.
        </p>
              <FeatureLinks/>

      </div>
    </section>
  );
}
