export default function EcosystemStats() {
  return (
    <section className="py-20 xl:py-28">
      <div className="container max-w-screen-lg">
        <h1 className="text-heading-1 mb-8 text-center font-normal">
          An Ecosystem of Global Financial Services at Your Fingertips
        </h1>
        <p className="font-sofia font-normal text-sm lg:text-base mb-16 text-center text-neutral-400">
          Access the world’s financial exchanges and liquidity pools with reduced complexity. Scale your offering with
          services and solutions tailored to your unique business needs.
        </p>

        <div className="space-y-12">
          {[
            ["40,000+", "financial assets"],
            ["20+", "exchanges"],
            ["100+", "OTC markets"],
          ].map(([big, small]) => (
            <div key={big}>
              <h2 className="text-heading-2 text-center font-normal text-accent-400 md:text-[4rem]/[4rem] lg:text-[5rem]/[5rem]">
                {big}
              </h2>
              <p className="font-sofia font-normal text-sm lg:text-base text-center text-neutral-400">{small}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
