// import React from 'react'
// import BannerPartners from './components/BannerPartners'
// import WhoThisIsFor from './components/WhoThisIsFor'

// const page = () => {
//   return (
//     <>
//     <BannerPartners />
//     <WhoThisIsFor />
//     </>
//   )
// }

// export default page


import BannerPartners from './components/BannerPartners'
import CoMarketing from './components/CoMarketing';
import ComplianceNote from './components/Compliencenotes';
import CTA from './components/Cta';
import FAQ from './components/Faqs';
import PayoutModel from './components/PayoutModal';
import SplitNote from './components/SplitNotes';
import Steps from './components/Steps';
import WhatYouGet from './components/WhatYouGet';
import WhyGrid from './components/WhyGrid';
import WhoThisIsFor from './components/WhoThisIsFor'
import WhyPartner from './components/WhyPartner';
import NewCommonFooter from '../new-site/components/sections/Footer';

export const metadata = {
  title: "Grow together with a partner that actually helps | GMG Prime",
  description:
    "If you bring quality broker leads or run a network, we’ll give you clear tracking, fair rewards and support that makes your life easier.",
};

export default function PartnersPage() {
  return (
    <main className="bg-navy-950">
      <BannerPartners />
      <WhoThisIsFor />
      <WhyPartner />
      <Steps />
      <WhatYouGet />
      <div className="bg-navy-950">
        <SplitNote
          title="Referral Criteria"
          image="/partner/img1.jpg"
          bullets={[
            "We focus on start-up and small-to-medium brokerages that intend to trade multi-asset, connect by FIX or MT5, and can complete KYB quickly. We reserve the right to decline referrals that do not meet FCA expectations or our risk appetite."
          ]}
        />
      </div>
      <div className='relative'>
        <div
          className="pointer-events-none hidden md:block absolute right-0 top-0 h-full w-full"
          style={{
            backgroundImage: "url('/partner/bg-2.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
          }}
        />
        <PayoutModel />
        <CoMarketing />
      </div>
      <ComplianceNote />
      <FAQ />
      <CTA />
      <NewCommonFooter />
    </main>
  );
}
