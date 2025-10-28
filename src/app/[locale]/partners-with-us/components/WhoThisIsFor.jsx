// components/WhoThisIsFor.jsx
"use client";

export default function WhoThisIsFor({
  title = "Who This Is For",
  items = [
    {
      icon: "users",
      text: "IB networks focused on start-up and SMB brokerages",
    },
    {
      icon: "antenna",
      text: "Consultancies and tech integrators who guide brokers from idea to go-live",
    },
    {
      icon: "screen",
      text: "Media and communities with verified broker audiences",
    },
  ],
}) {
  const Icon = ({ type }) => {
    const common = "w-5 h-5";
    switch (type) {
      case "users":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M16 3.13a3 3 0 0 1 0 5.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        );
      case "antenna":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <path d="M12 20v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="12" cy="9" r="2" fill="currentColor"/>
            <path d="M7 9a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M4.5 9a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".6"/>
          </svg>
        );
      default: // "screen"
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        );
    }
  };

  return (
    <section className="bg-[#132f47] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-[26px] md:text-[28px] xl:text-[36px] font-bold text-[#F29120] mb-5">
          {title}
        </h2>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white shadow-[0_8px_24px_rgba(13,43,69,0.06)] border border-black/5 p-6 md:p-7
                         flex flex-col items-center text-center min-h-[150px] hover:shadow-[0_10px_28px_rgba(13,43,69,0.10)]
                         transition-shadow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0D2B45]/10">
                <span className="text-[#0D2B45]">
                  <Icon type={item.icon} />
                </span>
              </div>

              <p className="text-[14.5px] leading-6 text-[#0D2B45]/90 max-w-[280px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
