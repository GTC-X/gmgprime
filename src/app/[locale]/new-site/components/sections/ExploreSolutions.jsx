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

import Link from "next/link";

export default function HighlightsLanding() {
  return (
    <main className=" text-white">
      <div className="container mx-auto px-4 py-16 xl:py-24 space-y-8">

        {/* Technology highlight */}
        <CardGradient>
          <section className="grid xl:grid-cols-3 gap-8 items-start">
            <div className="space-y-2">
              <h2 className="text-heading-2">Technology highlight</h2>
              <p className="text-neutral-400 text-body-2">
                Built on PrimeXM in LD4
              </p>
            </div>

            <div className="xl:col-span-2 space-y-4">
              <p className="text-body-1">
                A dedicated global network with low latency and failover protection for continuous access.
              </p>
              <FeatureList
                items={[
                  "Real-time P&L, centralised margin, quick order entry, drop copy, and reliable redundancy.",
                  "Bridges supported include PrimeXM and TFB. Integrated to MetaTrader 5.",
                ]}
              />
              <div>
                <Link
                  href="/technology"
                  className="inline-flex items-center rounded-xl px-5 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors"
                >
                  Explore our technology
                </Link>
              </div>
            </div>
          </section>
        </CardGradient>

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
            <Link
              href="/products"
              className="text-accent-400 underline text-body-2 w-fit"
            >
              View full product list
            </Link>
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
              <Link
                href="/onboarding"
                className="inline-flex items-center rounded-xl px-5 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors"
              >
                Start the process
              </Link>
            </div>
          </section>
        </CardGradient>

        {/* Partners & affiliates */}
        <CardGradient>
          <section className="flex flex-col xl:flex-row items-start gap-6">
            <div className="flex-1">
              <h2 className="text-heading-2 mb-2">For partners and affiliates</h2>
              <p className="text-body-1">
                CPA available for qualified partners, with tracking tools and co-marketing support. Up to 1,000 USD per referral.
              </p>
            </div>
            <div>
              <Link
                href="/partners"
                className="inline-flex items-center rounded-xl px-5 py-3 bg-accent-400 text-white font-medium hover:bg-accent-400/80 transition-colors whitespace-nowrap"
              >
                Partner with GMG Prime
              </Link>
            </div>
          </section>
        </CardGradient>

        {/* Compliance notice */}
        <CardGradient>
          <section>
            <h2 className="text-heading-3 mb-3">Compliance & jurisdiction notice</h2>
            <p className="text-neutral-400 text-body-2">
              The information on this site is not directed at residents of the United States, Japan, Canada, Belgium or any other jurisdiction where distribution or use would be contrary to local law or regulation. You must be of minimum legal age as determined by your country of origin to use services on this website.
            </p>
          </section>
        </CardGradient>

        {/* Secondary trust band */}
        <div className="rounded-2xl bg-primary-800 p-6">
          <p className="text-body-2">
            Global Markets Group Limited. Trading name <span className="text-white">gmgmarkets.co.uk</span>. Company number 09493910. Authorised and regulated by the Financial Conduct Authority. FRN 744501.
          </p>
        </div>
      </div>
    </main>
  );
}

/* ---------- Small shared pieces ---------- */

function CardGradient({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600">
      <div className="rounded-2xl bg-primary-950 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-sky-blue-400/25 via-primary-800 to-primary-800 p-6 xl:p-10">
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
