import SectionTitle from "./SectionTitle";

const Step = ({ n, title, desc, accent = false }) => (
    <div className="text-center">
        <div className={`mx-auto grid h-20 w-20 place-items-center rounded-full border-[6px] ${accent ? "border-accent-orange" : "border-sky-400"} bg-navy-950 shadow-card`}>
            <span className="text-[22px] font-bold text-text-base leading-none">{String(n).padStart(2, "0")}</span>
        </div>
        <h4 className="mt-3 text-[14px] font-semibold">{title}</h4>
        <p className="mx-auto mt-1 max-w-[220px] text-[12px] leading-6 text-text-mute">{desc}</p>
    </div>
);

const StepDisk = ({ n, color = "orange" }) => {
  // theme colors (fallbacks if you didn't extend Tailwind)
  const clr = color === "orange"
    ? { ring: "#F59A53", ringDark: "#E2853A", text: "#0E243D" }
    : { ring: "#265B9F", ringDark: "#1F8BFF", text: "#0E243D" };

  return (
    <div className="relative mx-auto h-[176px] w-[176px]">
      {/* SIDE DOTS */}
      <span
        className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white"
        style={{ boxShadow: `0 0 0 4px ${clr.ring}` }}
      />
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white"
        style={{ boxShadow: `0 0 0 4px ${clr.ring}` }}
      />

      {/* RINGS (SVG keeps strokes perfectly round & crisp) */}
      <svg
        viewBox="0 0 220 220"
        className="absolute inset-0 m-auto h-[176px] w-[176px]"
        aria-hidden="true"
      >
        {/* OUTER RING */}
        <circle cx="110" cy="110" r="98" fill="transparent" stroke={clr.ring} strokeWidth="14" />
        {/* WHITE RING GAP */}
        <circle cx="110" cy="110" r="84" fill="transparent" stroke="#FFFFFF" strokeWidth="18" />
        {/* INNER RING */}
         {/* INNER FILL */}
        <circle cx="110" cy="110" r="52" fill="#FFFFFF" />
      </svg>

      {/* NUMBER */}
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-[40px] font-extrabold tracking-tight text-[#25415E]">
          {String(n).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

const StepItem = ({ idx, title, desc }) => {
  const color = idx % 2 === 1 ? "orange" : "blue"; // 01,02,03 show as orange/blue/blue in your shot? -> We’ll alternate O/B/O/B/O/B
  return (
    <div className="text-center">
      <StepDisk n={idx} color={color === "orange" ? "orange" : "blue"} />
      <h4 className="mt-3 text-[18px] font-semibold text-white">{title}</h4>
      <p className="mx-auto mt-1 max-w-[240px] text-[13px] leading-6 text-white/70">{desc}</p>
    </div>
  );
};

export default function Steps() {
    const steps = [
        { n: 1, title: "Apply", desc: "share your profile and audience fit" },
        { n: 2, title: "Agree terms", desc: "CPA, attribution window and compliance checks", accent: true },
        { n: 3, title: "Activate tracking", desc: "get unique links and a portal login" },
        { n: 4, title: "Introduce", desc: "warm intro or tracked link to our team" },
        { n: 5, title: "Onboard", desc: "KYB, sandbox, FIX cert, parallel run", accent: true },
        { n: 6, title: "Earn", desc: "earn payouts as referrals reach agreed milestones" },
    ];
    return (
        <section className=" relative">
            <div
                className="pointer-events-none hidden md:block absolute opacity-5 right-0 top-0 h-full w-full"
                style={{
                    backgroundImage: "url('/partner/bg-img.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center right",
                }}
            />
            <div className="container py-12 relative">
                <SectionTitle title="How It Works" />
                <div className="grid gap-10 md:grid-cols-3">
          {steps.slice(0, 3).map((s, i) => (
            <StepItem key={i} idx={i + 1} {...s} />
          ))}
        </div>
        {/* Bottom row 3 */}
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {steps.slice(3).map((s, i) => (
            <StepItem key={i + 3} idx={i + 4} {...s} />
          ))}
        </div>
            </div>
        </section>
    );
}
