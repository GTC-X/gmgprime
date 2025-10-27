import Image from "next/image";

export default function GlobalReach() {
  return (
    <section className="py-20 xl:py-28">
      <div className="container max-w-none">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-36 *:flex-1 mb-16 gap-y-8 xl:justify-end">
            <div>
              <h1 className="text-heading-1 mb-4 font-normal">Innovative Solutions with a Global Reach</h1>
              <p className="font-sofia font-normal text-sm lg:text-base text-neutral-400">
                250+ professionals servicing 200+ countries as part of Rostro
              </p>
            </div>
            <div>
              <p className="font-sofia font-normal text-base lg:text-lg/[1.625rem] text-white">
                Our goal is to be at the heart of the financial industry, acting as a one-stop solution providing the tools
                to scale your business across global markets.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image src="/images/world-map.svg" alt="World map" width={1200} height={600} className="block w-full" />
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-accent-400/0 via-accent-400 to-accent-400/0 p-0 pb-px">
            <div className="h-full rounded-2xl bg-primary-950 p-4 xl:p-6">
              <div className="flex items-center justify-center flex-col xl:flex-row gap-12">
                <div>
                  <Image
                    src="/images/regulators.svg"
                    alt="Regulator logos"
                    width={850}
                    height={75}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
}
