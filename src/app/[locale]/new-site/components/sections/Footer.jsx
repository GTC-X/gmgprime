export default function NewCommonFooter({
    companyName = "Global Markets Group Limited",
    companyNumber = "09493910",
    fcaRef = "744501",
    address = "Green Park House, 15 Stratton Street, London W1J 8LQ, United Kingdom",
    email = "info@gmgmarkets.co.uk",
    phone = "+44 203 865 3306",
    year = new Date().getFullYear(),
}) {
    return (
        <footer className="bg-navy-950 text-text-base">
            {/* Top divider */}
            <div className="container">
                <div className="border-t border-white/10" />
            </div>

            {/* Social Icons */}
            <div className="container py-6 md:py-7">
                <div className="flex items-center justify-between gap-6">
                    {/* Social */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="group grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/15 hover:ring-white/25"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                className="text-sky-400 group-hover:text-sky-300"
                            >
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
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                className="text-sky-400 group-hover:text-sky-300"
                            >
                                <path
                                    fill="currentColor"
                                    d="M6.94 8.5H4V20h2.94zM5.47 4a1.73 1.73 0 1 0 0 3.46 1.73 1.73 0 0 0 0-3.46M20 20h-2.9v-6.2c0-1.48-.53-2.49-1.84-2.49-.99 0-1.58.67-1.84 1.32-.1.24-.12.58-.12.92V20H10.4s.04-10.18 0-11.5h2.9v1.63c.38-.58 1.06-1.4 2.58-1.4 1.88 0 3.31 1.23 3.31 3.86z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="container">
                <div className="border-t border-white/10" />
            </div>

            {/* Regulatory text */}
            <div className="container space-y-6 py-8 text-[14px] leading-7 text-text-mute">
                {/* Important Information */}
                <h3 className="text-[16px] font-semibold text-text-base">Important information</h3>
                <p>
                    <span className="text-text-base">{companyName}</span>, trading as{" "}
                    <a
                        href="https://gmgmarkets.co.uk"
                        className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                    >
                        gmgmarkets.co.uk
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://gmgprime.com"
                        className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                    >
                        gmgprime.com
                    </a>
                    , is a company registered in England &amp; Wales under company number {companyNumber}, and authorised and regulated by the Financial Conduct Authority with reference number {fcaRef}. Its registered address is {address}. You can contact us at{" "}
                    <a
                        href="mailto:info@gmgmarkets.co.uk"
                        className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                    >
                        info@gmgmarkets.co.uk
                    </a>
                    ,{" "}
                    <a
                        href="mailto:support@gmgprime.com"
                        className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                    >
                        support@gmgprime.com
                    </a>{" "}
                    or {phone}.
                </p>

                {/* Risk Disclaimer */}
                <h3 className="text-[16px] font-semibold text-text-base">Risk Disclaimer</h3>
                <p>
                    The information on this website is only directed at{" "}
                    <a
                        href="#professional-status"
                        className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                    >
                        institutional and professional clients
                    </a>
                    . CFDs and Spread Bets are highly speculative products which carry a high level of risk and can result in losses exceeding your deposit. As such, they are not appropriate for every investor. Any information provided shall not be considered as investment advice and has been prepared without considering your individual objectives, financial situation or needs. Before deciding to trade our products, you should carefully consider your objectives, financial situation, and level of experience and risk appetite. If in any doubt, you should seek advice from an independent advisor. Past performance is not indicative of future results.{" "}
                    <a
                        href="#risk-warning"
                        className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                    >
                        View full risk warning
                    </a>
                    .
                </p>

                {/* Jurisdiction Notice */}
                <h3 className="text-[16px] font-semibold text-text-base">Jurisdiction Notice</h3>
                <p>
                    The information on this website is not directed at residents of any jurisdiction where FX trading
                    and/or CFD trading is restricted or prohibited by local laws or regulations.
                </p>

                {/* Professional Client Info (footnote) */}
                <div id="professional-status" className="text-[13px] text-text-mute/90 border-l-2 border-sky-400 pl-4">
                    Clients are able to obtain ‘professional’ status if they demonstrate experience of trading relevant
                    products on their own account above a certain size, experience of working within the financial
                    sector for at least one year in a relevant position, and/or a personal investment portfolio worth at
                    least €500,000.
                </div>

                <p className="pt-4 text-[13px] text-text-base">
                    © {year} {companyName} | All rights reserved.
                </p>
            </div>
        </footer>
    );
}
