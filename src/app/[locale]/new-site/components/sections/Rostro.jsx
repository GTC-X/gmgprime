import Image from "next/image";

export default function Rostro() {
  return (
    <section className="">
      <div className="container">
        <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-[#265B9F] via-primary-800 to-accent-400">
          <div className="h-full rounded-2xl bg-primary-950 bg-gradient-to-r from-primary-800 via-primary-800 to-primary-800 p-10 xl:p-16">
            <div className="  flex gap-12">
              <div className="my-4 shrink-0 xl:my-0 xl:self-center">
                <Image src="/new/laptop-img.svg" alt="Rostro" width={120} height={100} />
              </div>
              <div>
                <h1 className="text-heading-1 mb-4 font-normal">Instruments overview</h1>
                <p className="font-sofia font-normal text-sm lg:text-base text-neutral-400">
                 Trade multi-asset with confidence. FX spot and forwards, precious and base metals, global indices and equity CFDs, energies, single stocks, and cryptocurrencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
