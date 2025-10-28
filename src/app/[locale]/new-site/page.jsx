import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Hero from "./components/sections/Hero";
import FeatureLinks from "./components/sections/FeatureLinks";
import PrimeServices from "./components/sections/PrimeServices";
import Rostro from "./components/sections/Rostro";
import GlobalReach from "./components/sections/GlobalReach";
import EcosystemStats from "./components/sections/EcosystemStats";
import ExploreSolutions from "./components/sections/ExploreSolutions";
import PlatformEcosystem from "./components/sections/PlatformEcosystem";
import Awards from "./components/sections/Awards";
import CTA from "./components/sections/CTA";
import Discover from "./components/sections/Discover";
import Footer from "./components/Footer";
import WhoWeAre from "../about-us/components/WhoWeAre";
// import LegalRisk from "@/components/sections/LegalRisk";

export default function Page() {
    return (
        <>
            <div className=" relative">
                <Header />
                <MobileNav />
                <Hero />
            </div>
            <WhoWeAre page="homepage"/>
            <PrimeServices />
            <Rostro />

            <ExploreSolutions />
            {/* <PlatformEcosystem />
                <Awards />
                <CTA /> */}
            {/* <Discover />
            <LegalRisk /> */}
            <Footer />
        </>
    );
}
