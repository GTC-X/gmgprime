import Header from "./new-site/components/Header";
import MobileNav from "./new-site/components/MobileNav";
import Hero from "./new-site/components/sections/Hero";
import WhoWeAre from "./about-us/components/WhoWeAre";
import PrimeServices from "./new-site/components/sections/PrimeServices";
import Rostro from "./new-site/components/sections/Rostro";
import ExploreSolutions from "./new-site/components/sections/ExploreSolutions";
import NewCommonFooter from "./new-site/components/sections/Footer";
import SliderModalPrime from "./components/SliderModal";

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
      
      <PrimeServices />


      <ExploreSolutions />
      <SliderModalPrime />
      <NewCommonFooter />
    </>
  );
}
