import Header from "./new-site/components/Header";
import MobileNav from "./new-site/components/MobileNav";
import Hero from "./new-site/components/sections/Hero";
import WhoWeAre from "./about-us/components/WhoWeAre";
import PrimeServices from "./new-site/components/sections/PrimeServices";
import Rostro from "./new-site/components/sections/Rostro";
import ExploreSolutions from "./new-site/components/sections/ExploreSolutions";
import NewCommonFooter from "./new-site/components/sections/Footer";
import SliderModalPrime from "./components/SliderModal";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Prime Liquidity for Growing Brokers | GMG Prime",
  description:
    "Institutional pricing that fits your stage. Fast integration, transparent terms, and support that helps you ship.",
};

export default function HomePage() {
  return (
    <>
      <div className=" relative">
        <MobileNav />
        <Hero />
      </div>
           <section className="bg-[#0a1942]">
      
           
              <div className="container pb-10 md:pb-16">
                  <div className="grid gap-8 xl:grid-cols-2 xl:items-center">
                      <div>
                          <h2 className={`text-heading-1 mb-4 text-white capitalize`}>Who we are</h2>
                          <p className="text-neutral-200 text-sm lg:text-base mb-4">
                              GMG Prime is the liquidity partner built for start-up and small-to-medium brokerages. We pair institutional pricing with practical onboarding so you can launch fast, trade confidently and scale with clarity.
                          </p>
                          <p className="text-neutral-200 text-sm lg:text-base mb-4">
                             Authorised and regulated by the Financial Conduct Authority (FRN 744501). Global Markets Group Limited, trading as gmgmarkets.co.uk and gmgprime.com. Company number 09493910.
      
                          </p>
                          <p className="text-neutral-200 text-sm lg:text-base mb-4">
                              Principal Office: The Jellicoe, 5 Beaconsfield Street, King’s Cross, London N1C 4EW, UK 
      
                          </p>
      
                          <p className="text-neutral-200 text-sm lg:text-base mb-6">
                              Registered Office: Green Park House, 15 Stratton Street, London, W1J 8LQ. Telephone: (+44) 0203 865 3306.
      
                          </p>

                          <p>
                             <Link
                href="/about-us"
                className="inline-flex items-center rounded-xl px-5 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors whitespace-nowrap"
              >
                Read More About Us
              </Link>
                          </p>
       
                       
                      </div>
      
                      <div className="relative xl:justify-end">
                          <Image
                              src="/new/about.svg"
                              alt="Trading laptop"
                              width={640}
                              height={420}
                              className="w-full max-w-[560px] mx-auto"
                              priority
                          />
                      </div>
                  </div>
              </div>
                 </section>

      <section className="py-5 border-t border-white/5">
        <div className="container">
          <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-accent-400">
      <div className="rounded-2xl bg-primary-950 bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] p-6 xl:p-10 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
              <h2 className="text-heading-2 mb-2">For partners and affiliates</h2>
              <p className="text-body-1">
                CPA available for qualified partners, with tracking tools and co-marketing support. Up to 1,500 USD per referral.
              </p>
            </div>
            <div>
              <Link
                href="/partners-with-us"
                className="inline-flex items-center rounded-xl px-5 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors whitespace-nowrap"
              >
                Partner with GMG Prime
              </Link>
            </div>
      </div>
    </div>
        </div>
      </section>
      
      <PrimeServices />


      <ExploreSolutions />
      <SliderModalPrime />
      <NewCommonFooter />
    </>
  );
}
