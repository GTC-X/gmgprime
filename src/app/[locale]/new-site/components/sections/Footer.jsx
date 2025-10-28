export default function NewCommonFooter({
    companyName = "Global Markets Group Limited",
    companyNumber = "09493910",
    fcaRef = "744501",
    address = "Green Park House, 15 Stratton Street, London W1J 8LQ, United Kingdom",
    email = "info@gmgmarkets.co.uk",
    phone = "+44 203 865 3306",
    warningPercent = "56.0%",
    year = new Date().getFullYear(),
}) {
    return (
        <footer className="bg-navy-950 text-text-base">
            {/* Top divider */}
            <div className="container">
                <div className="border-t border-white/10" />
            </div>

            {/* Social + payments */}
            <div className="container py-6 md:py-7">
                <div className="flex items-center justify-between gap-6">
                    {/* Social */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="group grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/15 hover:ring-white/25"
                        >
                            {/* fb */}
                            <svg width="20" height="20" viewBox="0 0 24 24" className="text-sky-400 group-hover:text-sky-300">
                                <path
                                    fill="currentColor"
                                    d="M13.5 9H15V6h-1.5C11.57 6 11 7.03 11 8.5V10H9v3h2v6h3v-6h2.1l.4-3H14v-1c0-.55.45-1 1-1"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="group grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/15 hover:ring-white/25"
                        >
                            {/* in */}
                            <svg width="20" height="20" viewBox="0 0 24 24" className="text-sky-400 group-hover:text-sky-300">
                                <path
                                    fill="currentColor"
                                    d="M6.94 8.5H4V20h2.94zM5.47 4a1.73 1.73 0 1 0 0 3.46 1.73 1.73 0 0 0 0-3.46M20 20h-2.9v-6.2c0-1.48-.53-2.49-1.84-2.49-.99 0-1.58.67-1.84 1.32-.1.24-.12.58-.12.92V20H10.4s.04-10.18 0-11.5h2.9v1.63c.38-.58 1.06-1.4 2.58-1.4 1.88 0 3.31 1.23 3.31 3.86z"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Payment badges */}
                    {/* <div className="hidden items-center gap-5 md:flex">
                         <div className="rounded-lg bg-white/5 px-3 py-2 text-[12px] leading-none ring-1 ring-white/10">
                            <span className="font-semibold tracking-wider">VISA</span>
                        </div>
                         <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                            <span className="inline-flex">
                                <span className="mr-[-6px] h-3.5 w-3.5 rounded-full bg-[#EA001B]" />
                                <span className="h-3.5 w-3.5 rounded-full bg-[#FF5F00] opacity-90" />
                            </span>
                            <span className="text-[11px]">mastercard</span>
                        </div>
                         <div className="rounded-lg bg-white/5 px-3 py-2 text-[12px] ring-1 ring-white/10">
                            Google Pay
                        </div>
                         <div className="rounded-md bg-white px-3 py-1.5 text-[12px] font-medium text-black">
                             Pay
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Divider */}
            <div className="container">
                <div className="border-t border-white/10" />
            </div>

            {/* Regulatory text */}
            <div className="container space-y-6 py-8 text-[14px] leading-7 text-text-mute">
                <p>
                    <span className="text-text-base">{companyName}</span>, a company registered in England &amp; Wales
                    under company number {companyNumber}, is authorised and regulated by the Financial Conduct Authority with
                    reference number {fcaRef}. Its registered address is {address}. You can contact us at{" "}
                    <a href={`mailto:${email}`} className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                        {email}
                    </a>{" "}
                    or {phone}.
                </p>

                <p className="text-text-base">
                    <span className="font-semibold">HIGH RISK INVESTMENT WARNING: </span>
                    CFDs and Spreadbets are complex instruments and come with a high risk of losing money rapidly due to leverage.{" "}
                    <span className="font-extrabold">{warningPercent} of retail investor accounts lose money when trading in CFDs and Spreadbets with this provider.</span>{" "}
                    You should consider whether you understand how CFDs and Spreadbets work and whether you can afford to take the high risk of losing your
                    money. CFDs and Spreadbets are provided by {companyName} on an execution-only basis; we do not provide any
                    advice and any written or verbal communication with us should not be considered as such.
                </p>

                <p>
                    All news, research, analysis, or other information is provided as general market commentary and not as
                    investment advice and all potential results discussed are not guaranteed to be achieved. The information is
                    derived from publicly available sources, research or surveys. Past performance is not indicative of future
                    performance.
                </p>

                <p>
                    The information on this website is not directed at residents of the United States, Japan, Canada, Belgium or
                    any other jurisdiction, where such distribution or use may be contrary to local laws or regulation. You must
                    be of minimum legal age as determined by your country of origin to use services on this website.
                </p>

                <p className="pt-2 text-[13px] text-text-base">
                    © {year} {companyName} | All rights reserved.
                </p>
            </div>
        </footer>
    );
}
