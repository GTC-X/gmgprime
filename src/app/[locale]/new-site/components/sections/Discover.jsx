import Image from "next/image";
import Link from "next/link";

export default function Discover() {
  return (
    <section className="py-20 xl:py-28 bg-[url(/images/bg.png)] bg-cover pb-4 xl:pb-4">
      <div className="container">
        <h1 className="text-heading-1 mb-12 text-center font-normal text-white xl:mb-24">
          Discover Scope Prime Today
        </h1>

        <div className="flex flex-col xl:flex-row gap-12 mb-16 xl:mb-36">
          <div className="basis-1/2">
            <div className="mb-9">
              <Image src="/images/logo.svg" alt="Scope Prime" width={220} height={63} className="mx-auto xl:mx-0" />
            </div>
            <div className="space-y-6">
              <p className="font-sofia font-normal text-sm lg:text-base text-neutral-400">
                Scope Prime is a powerhouse of liquidity, trading and fintech expertise that equips institutional
                investors and businesses like hedge funds and brokers to thrive in the global financial marketplace.
              </p>
              <p className="font-sofia font-normal text-sm lg:text-base text-neutral-400">
                Whether you are interested in accessing multi-asset liquidity to hedge your exposure or want to develop a
                white-label trading proposition for your client base, we have a wide range of products available to meet
                your individual needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-12 basis-1/2 justify-center">
            <div className="xl:basis-[300px]">
              <h4 className="text-xl mb-10 font-normal text-white">Quick Links</h4>
              <ul className="grid gap-6 xl:grid-cols-2">
                {[
                  ["About Us", "/about-us"],
                  ["Solutions", "/solutions"],
                  ["Products", "/products"],
                  ["Platforms", "/platforms"],
                  ["Partners", "/partners"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link className="text-neutral-400 transition-colors hover:text-accent-400 xl:whitespace-nowrap" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <p className="font-sofia font-normal text-sm lg:text-base text-neutral-400">Follow us</p>
          <a href="https://www.linkedin.com/company/scope-prime-rostro/">
            <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={27} height={27} />
          </a>
        </div>
      </div>
    </section>
  );
}
