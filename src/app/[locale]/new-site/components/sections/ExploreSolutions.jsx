// import Image from "next/image";

// const items = [
//   {
//     icon: "/images/icons/currency-exchange.svg",
//     title: "Technology highlight",
//     desc: "Best-in-class Liquidity and Execution combined with a wide range of markets.",
//   },
//   {
//     icon: "/images/icons/diamond-crown.svg",
//     title: "Prime Brokerage",
//     desc:
//       "Comprehensive access to a full range of global exchanges coupled with advanced algorithmic execution capabilities.",
//   },
//   {
//     icon: "/images/icons/data.svg",
//     title: "Portfolio and Asset Financing",
//     desc:
//       "Financing solutions for existing and evolving portfolios through CFD and Share Finance.",
//   },
//   {
//     icon: "/images/icons/risk-management.svg",
//     title: "Risk Management",
//     desc:
//       "Tailor our pricing and liquidity streams to manage your risk offering, using Scope Prime’s industry-leading toolbox.",
//   },
//   {
//     icon: "/images/icons/license.svg",
//     title: "Licensing Solutions",
//     desc: "Market data access and redistribution of CFD products.",
//   },
// ];

// export default function ExploreSolutions() {
//   return (
//     <section className="py-20 xl:py-28">
//       <div className="container">
//         <div className="overflow-hidden rounded-2xl bg-gradient-to-l p-px from-[#265B9F] via-primary-800 to-accent-400 pb-px">
//           <div className="h-full rounded-2xl bg-[#081c2e]  bg-cover bg-center bg-no-repeat p-10 xl:p-16">

//             <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
//               {items.map((it) => (
//                 <div key={it.title} className="overflow-hidden rounded-2xl border border-neutral-400/50 p-0">
//                   <div className="h-full rounded-2xl p-8 xl:p-10 bg-transparent space-y-4">
//                     <Image src={it.icon} alt="Icon" width={50} height={50} className="block" />
//                     <p className="font-sofia font-normal text-base lg:text-lg/[1.625rem] text-white">{it.title}</p>
//                     <p className="font-sofia font-normal text-sm lg:text-base text-neutral-400">{it.desc}</p>
//                   </div>
//                 </div>
//               ))}

//               <div className="flex items-center justify-center flex-col gap-0 py-8">
//                 <div className="mb-8 space-y-4">
//                   {[
//                     "Proprietary Back Office solutions",
//                     "Portfolio & Asset Financing",
//                     "Transactional Reporting (EMIR, CySEC), provided by the Rostro Group",
//                   ].map((text) => (
//                     <div key={text} className="xl:flex-row gap-12 flex flex-row gap-x-4">
//                       <div className="shrink-0">
//                         <Image src="/images/icons/arrow-right-circle.svg" alt="Icon" width={24} height={24} />
//                       </div>
//                       <div>
//                         <p className="font-sofia font-normal text-sm lg:text-base text-neutral-400">{text}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <a
//                   className="group overflow-hidden rounded-2xl border-2 border-accent-400 px-8 py-3 text-lg text-accent-400 transition-colors hover:border-accent-700 hover:text-accent-700"
//                   href="/solutions"
//                 >
//                   Discover all solutions
//                   <Image
//                     src="/images/icons/arrow-right.svg"
//                     alt="Icon"
//                     width={16}
//                     height={16}
//                     className="ms-2 inline -translate-y-px group-hover:fill-accent-700"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// app/components/HighlightsLanding.jsx  (or pages/anywhere.jsx)
"use client";

import CommonButton from "../../../components/CommonButton";
import Link from "next/link";

export default function HighlightsLanding() {
  return (
    <main className=" text-white">
      <div className="container mx-auto px-4 py-10 xl:py-14 space-y-8">


        {/* Instruments overview */}
        <CardGradient>
          <section className="flex flex-col gap-4">
            <h2 className="text-heading-2">Instruments overview</h2>
            <p className="text-neutral-400 text-body-2">
              Trade multi-asset with confidence.
            </p>
            <p className="text-body-1">
              FX spot and forwards, precious and base metals, global indices and equity CFDs, energies, single stocks, and cryptocurrencies.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/GMGPrime_Product_Specifications.pdf"
              className="text-accent-400 underline text-body-2 w-fit"
            >
              View full product list
            </a>
          </section>
        </CardGradient>

        {/* How onboarding works */}
        <CardGradient>
          <section>
            <div className="mb-6">
              <h2 className="text-heading-2 mb-2">How onboarding works</h2>
              <p className="text-neutral-400 text-body-2">
                A simple, guided path to go-live.
              </p>
            </div>

            <ol className="grid lg:grid-cols-2 gap-6">
              <Step
                n={1}
                title="KYB and categorisation"
                body="Submit the corporate pack. We classify clients and confirm protections in line with FCA rules."
              />
              <Step
                n={2}
                title="Sandbox and certification"
                body="Spin up a guided sandbox, run FIX protocol tests, validate tags and sessions."
              />
              <Step
                n={3}
                title="Parallel run"
                body="Operate new and legacy flows together for a smooth migration."
              />
              <Step
                n={4}
                title="Go live"
                body="Switch keys, monitor with real-time reporting, and scale with your named engineer."
              />
            </ol>

            <div className="mt-6">
              <CommonButton>Start the process</CommonButton>
            </div>
          </section>
        </CardGradient>

        {/* Partners & affiliates */}





      </div>
    </main>
  );
}

/* ---------- Small shared pieces ---------- */

function CardGradient({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-accent-400">
      <div className="rounded-2xl bg-primary-950 bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] p-6 xl:p-10">
        {children}
      </div>
    </div>
  );
}

function FeatureList({ items = [] }) {
  return (
    <ul className="space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 text-body-2 text-neutral-200">
          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-400 shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Step({ n, title, body }) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0">
        <span className="grid place-content-center h-10 w-10 rounded-full bg-primary-800 border border-primary-400 text-white font-semibold">
          {n}
        </span>
      </div>
      <div className="space-y-1">
        <h3 className="text-subtitle-1">{title}</h3>
        <p className="text-neutral-400 text-body-2">{body}</p>
      </div>
    </li>
  );
}
