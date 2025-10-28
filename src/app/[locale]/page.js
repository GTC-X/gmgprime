import Header from "./new-site/components/Header";
import MobileNav from "./new-site/components/MobileNav";
import Hero from "./new-site/components/sections/Hero";
import WhoWeAre from "./about-us/components/WhoWeAre";
import PrimeServices from "./new-site/components/sections/PrimeServices";
import Rostro from "./new-site/components/sections/Rostro";
import ExploreSolutions from "./new-site/components/sections/ExploreSolutions";
 import NewCommonFooter from "./new-site/components/sections/Footer";

export const metadata = {
  title: "Become a GTC Partner & Earn More with Top CPA & Rebates",
  description:
    "Register as a GTC Partner today & earn up to $1,850 CPA as an Affiliate or 80% in rebates as an IB. Fast payouts & loyalty rewards that keep traders active.",
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
      <Rostro />

      <ExploreSolutions />
      {/* <PlatformEcosystem />
                <Awards />
                <CTA /> */}
      {/* <Discover />
            <LegalRisk /> */}
      <NewCommonFooter />
    </>
  );
}
