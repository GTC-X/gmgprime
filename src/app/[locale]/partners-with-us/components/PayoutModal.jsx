// import SectionTitle from "./SectionTitle";
// import Button from "./Button";

// const Tile = ({ title, desc }) => (
//   <div className="relative rounded-2xl bg-navy-900/60 ring-1 ring-white/10 p-5 shadow-glow">
//     <div className="absolute -top-3 left-4 h-6 w-10 -skew-x-12 rounded bg-white/10" />
//     <h4 className="mt-3 text-[15px] font-semibold">{title}</h4>
//     <p className="mt-1 text-[12.5px] leading-6 text-text-mute">{desc}</p>
//   </div>
// );

// export default function PayoutModel() {
//   const items = [
//     { title:"Up to $100 CPA per client", desc:"Higher tiers unlock bigger commissions." },
//     { title:"Volume accelerators", desc:"Earn more as your monthly volume scales." },
//     { title:"Monthly payouts", desc:"Payments processed reliably on a fixed schedule." },
//   ];
//   return (
//     <section className="bg-navy-950">
//       <div className="container py-12">
//         <SectionTitle title="Payout Model" />
//         <div className="mt-7 grid gap-5 md:grid-cols-3">{items.map((t,i)=><Tile key={i} {...t} />)}</div>
//         <div className="mt-6 text-center">
//           <Button>Request Payout Tiers</Button>
//         </div>
//       </div>
//     </section>
//   );
// }


import SectionTitle from "./SectionTitle";
import Button from "./Button";
import CommonButton from "../../components/CommonButton";
function KiteCard({ title, desc, icon = "💠", slope = "down-right" }) {
    // slope: "down-right" (left high → right low) or "down-left"
    const clip =
        "polygon(0% 0%, 100% 62%, 100% 100%, 0% 100%)";

    return (
        <div className="relative">
            {/* Outer shell: rounded, ring, subtle shadow */}
            <div className=" ">
                {/* Slanted top using clip-path (keeps rounded bottoms) */}
                <div
                    className="rounded-b-2xl p-5 md:p-6 flex flex-col justify-end h-full  min-h-[320px]"
                    style={{ clipPath: clip, background: "#FFFFFF" }}
                >
                    {/* icon */}
                    <div className="mb-4 grid h-10 w-10 place-items-center rounded-full  text-[13px]">
                        <img src={icon} alt="" className="h-10 w-10 object-contain" />
                    </div>

                    {/* text */}
                    <h4 className="text-[15px] font-semibold text-[#112940]">{title}</h4>
                    <p className="mt-1 text-[13px] leading-6 text-[#5A728F]">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default function PayoutKite() {
    return (
        <section className="bg-navy-950">
            <div className="container py-12">
                <SectionTitle title="Payout Model" />

                <div className="grid gap-6 md:grid-cols-3">
                    <KiteCard
                        slope="down-left"
                        icon="/partner/payout1.svg"
                        title="CPA up to 1,500 USD per referral based on agreed milestones"
                        desc=""
                    />
                    <KiteCard
                        slope="down-right"
                        icon="/partner/payout2.svg"
                        title="Optional tiers for affiliate partners who deliver consistent quality"
                        desc=""
                    />
                    <KiteCard
                        slope="down-right"
                        icon="/partner/payout3.svg"
                        title="Payment cadence monthly after milestone verification"
                        desc=""
                    />
                </div>

                {/* tiny line under tiles like screenshot */}
                {/* <p className="mx-auto mt-6 max-w-xl text-center text-[11.5px] text-white/70">
                    Note: full terms are shared in the <span className="font-semibold text-white">Partner Agreement</span>.
                </p> */}

                <div className="mt-4 text-center">
                    <CommonButton>Request Affiliate Agreement</CommonButton>
                </div>
            </div>
        </section>
    );
}
