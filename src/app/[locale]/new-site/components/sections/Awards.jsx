import Image from "next/image";

export default function Awards() {
  return (
    <section className="py-20 xl:py-28">
      <div className="container">
        <div className="flex items-center justify-center flex-col xl:flex-row gap-12 *:flex-1">
          <div>
            <h1 className="text-heading-1 font-normal"> Our Awards </h1>
          </div>
          <div className="flex flex-col gap-8 xl:flex-row">
            <Image
              src="/images/best-all-round-liquidity-provider.png"
              alt="Best All-Round Liquidity Provider by Global Forex Awards 2024"
              width={265}
              height={200}
              className="mx-auto"
            />
            <Image
              src="/images/prime-broker-of-the-year.png"
              alt="Prime Broker of the Year"
              width={340}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
