// // app/page.tsx  (App Router)  — or pages/index.tsx if using Pages Router
// import AffiliatedForm from "./components/MainForm";
// import bgOverlay from "./assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build

// export default function HomePage() {
//   return (
//     <>
//       {/* Fixed overlay pinned to the bottom of the viewport */}
//       <div
//         aria-hidden="true"
//         className="fixed inset-x-0 bottom-0 z-10 pointer-events-none select-none"
//       >
//         <div
//           className="w-full h-[220px] md:h-[800px] bg-top bg-cover opacity-80"
//           style={{ backgroundImage: `url(${bgOverlay.src})` }}
//         />
//       </div>

//       {/* Page content */}
//       <section className="relative min-h-screen bg-[#F2F6F9]">
//         {/* Keep content above the overlay */}
//         <div className="relative z-20 container mx-auto py-10">
//           <AffiliatedForm />
//         </div>
//       </section>
//     </>
//   );
// }

// app/page.tsx  (App Router)  — or pages/index.tsx if using Pages Router
import AffiliatedForm from "./components/MainForm";
import bgOverlay from "./assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build
import FxOfferingSection from "./new/components/sectionOne";
import GtcCpaHero from "./new/components/banner";
import ReasonsFlipGrid from "./new/components/sectionTwo";
import ClientsSlider from "./new/components/sectionThree";
import FaqSection from "./new/components/sectionFour";
import PartnerCta from "./new/components/lastSection";
import CommonFooter from "./components/Footer";
import CommonHeader from "./components/Header";
import SliderModalPrime from "./components/SliderModal";
import NewBanner from "./components/NewHeader";
import SolutionsSnapshot from "./components/NewSectionOne";
import TechnologyHighlight from "./components/NewSectionTwo";
import InstrumentsOverview from "./components/NewSectionThree";
import OnboardingHowItWorks from "./components/NewSectionFour";
import PromoStripes from "./components/NewSectionFive";
import Header from "./new-site/components/Header";
import MobileNav from "./new-site/components/MobileNav";
import Hero from "./new-site/components/sections/Hero";
import WhoWeAre from "./about-us/components/WhoWeAre";
import PrimeServices from "./new-site/components/sections/PrimeServices";
import Rostro from "./new-site/components/sections/Rostro";
import ExploreSolutions from "./new-site/components/sections/ExploreSolutions";
import Footer from "./new-site/components/Footer";

export const metadata = {
  title: "Become a GTC Partner & Earn More with Top CPA & Rebates",
  description:
    "Register as a GTC Partner today & earn up to $1,850 CPA as an Affiliate or 80% in rebates as an IB. Fast payouts & loyalty rewards that keep traders active.",
};

export default function HomePage() {
  return (
    <>
      <div className=" relative">
        <Header />
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
      <Footer />
    </>
  );
}
