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
      <WhoWeAre page="homepage" />

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
