// app/(site)/about/page.tsx  OR  pages/about.tsx

import Image from "next/image";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeServe from "./components/WhoWeServe";
import WhoWeWork from "./components/WhoWeWork";
import Governance from "./components/OurGoverance";
import Technology from "./components/Technology";
import Leadership from "./components/Leadership";
import Commitments from "./components/Commitment";
import Careers from "./components/Careers";

import NewCommonFooter from "../new-site/components/sections/Footer";
import Link from "next/link";
import GovernanceComplianceSection from "./components/GovernanceComplianceSection";
import CareersSection from "./components/Careers";
export const metadata = {
    title: "About us | GMG Prime",
    description:
        "GMG Prime is the liquidity partner built for start-up and small-to-medium brokerages. We pair institutional pricing with practical onboarding so you can launch fast, trade confidently and scale with clarity.",
};


export default function AboutPage() {
    return (
        <main className=" text-white">
            {/* Who we are */}

            <WhoWeAre />
            <WhatWeDo />
                
            <GovernanceComplianceSection />
            <WhoWeServe />
            <WhoWeWork />
       
            <Technology />
            {/* <Leadership /> */}
            <Commitments />
           <CareersSection />
            <NewCommonFooter />
        </main>
    );
}




