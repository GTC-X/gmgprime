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
                <SectionTitle title="Co-marketing Options" />

                <div className="grid gap-6 md:grid-cols-3">
                    <KiteCard
                        slope="down-left"
                        icon="/partner/payout4.svg"
                        title="Joint webinar: you host, we provide speakers and a demo"
                        desc=""
                    />
                    <KiteCard
                        slope="down-right"
                        icon="/partner/payout5.svg"
                        title="Case study after go-live, subject to client consent"
                        desc=""
                    />
                    <KiteCard
                        slope="down-right"
                        icon="/partner/payout6.svg"
                        title="Guides and checklists: white-label materials you can share with your audience"
                        desc=""
                    />
                </div>


                <div className="mt-4 text-center">
                    <Button>Plan a Campaign</Button>
                </div>
            </div>
        </section>
    );
}
