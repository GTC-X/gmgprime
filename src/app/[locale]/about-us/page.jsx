// app/(site)/about/page.tsx  OR  pages/about.tsx
"use client";

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
import Header from "../new-site/components/Header";




export default function AboutPage() {
    return (
        <main className=" text-white">
            {/* Who we are */}
            <Header />
            <WhoWeAre />
            <WhatWeDo />
            <WhoWeServe />
            <WhoWeWork />
            <Governance />
            <Technology />
            {/* <Leadership /> */}
            <Commitments />
            <Careers />
        </main>
    );
}




