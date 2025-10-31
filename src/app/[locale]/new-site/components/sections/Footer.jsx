export default function NewCommonFooter({
  companyName = "Global Markets Group Prime Limited",
  companyNumber = "09493910",
  fcaRef = "744501",
  address = "Green Park House, 15 Stratton Street, London W1J 8LQ, UK", // Registered Office
  principalOffice = "The Jellicoe, 5 Beaconsfield Street, King’s Cross, London, N1C 4EW",
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
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61582091620011"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/15 hover:ring-white/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-sky-400 group-hover:text-sky-300">
                <path
                  fill="currentColor"
                  d="M13.5 9H15V6h-1.5C11.57 6 11 7.03 11 8.5V10H9v3h2v6h3v-6h2.1l.4-3H14v-1c0-.55.45-1 1-1"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/109300379"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/15 hover:ring-white/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-sky-400 group-hover:text-sky-300">
                <path
                  fill="currentColor"
                  d="M6.94 8.5H4V20h2.94zM5.47 4a1.73 1.73 0 1 0 0 3.46 1.73 1.73 0 0 0 0-3.46M20 20h-2.9v-6.2c0-1.48-.53-2.49-1.84-2.49-.99 0-1.58.67-1.84 1.32-.1.24-.12.58-.12.92V20H10.4s.04-10.18 0-11.5h2.9v1.63c.38-.58 1.06-1.4 2.58-1.4 1.88 0 3.31 1.23 3.31 3.86z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gmgprime_official/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/15 hover:ring-white/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-sky-400 group-hover:text-sky-300">
                <path
                  fill="currentColor"
                  d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7m10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10m-5 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m4.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5z"
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

      {/* Offices & Telephone */}
      <div className="container py-5">
        <div className="grid gap-6 md:grid-cols-3 text-xs leading-7 text-text-mute">
          <div>
            <h4 className="mb-1 text-text-base font-semibold">Principal Office</h4>
            <p>{principalOffice}</p>
          </div>
          <div>
            <h4 className="mb-1 text-text-base font-semibold">Registered Office</h4>
            <p>{address}</p>
          </div>
          <div>
            <h4 className="mb-1 text-text-base font-semibold">Telephone</h4>
            <p>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
              >
                {phone}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border-t border-white/10" />
      </div>
 {/* Secondary Trust Band */}
      <div className="container py-6 text-[14px] leading-7">
        <h3 className="text-[16px] font-semibold text-text-base">Secondary Trust Band</h3>
        <p className="text-text-mute">
          Global Markets Group Limited. Trading name <span className="text-text-base">gmgmarkets.co.uk</span>. Company number{" "}
          {companyNumber}. Authorised and regulated by the Financial Conduct Authority. FRN {fcaRef}.
        </p>
      </div>
      {/* Regulatory text */}
      <div className="container space-y-2 pb-10 text-[14px] leading-7 text-text-mute">
        {/* Important Information */}
        <h3 className="text-[13px] font-semibold text-text-base text-accent-400">Important information</h3>
        <p className="text-sm">
          <span className="text-text-base">{companyName}</span>, trading as{' '}
          <a href="https://gmgmarkets.co.uk" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
            gmgmarkets.co.uk
          </a>{' '}
          and{' '}
          <a href="https://gmgprime.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
            gmgprime.com
          </a>
          , is a company registered in England &amp; Wales under company number {companyNumber}, and authorised and
          regulated by the Financial Conduct Authority with reference number {fcaRef}. Its registered address is {address}.
          You can contact us at{' '}
          <a href={`mailto:${email}`} className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
            {email}
          </a>
          ,{' '}
          <a href="mailto:support@gmgprime.com" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
            support@gmgprime.com
          </a>{' '}
          or {phone}.
        </p>

        {/* Risk Disclaimer */}
        <h3 className="text-[13px] font-semibold text-text-base text-accent-400">Risk Disclaimer</h3>
        <p className="text-sm">
          The information on this website is only directed at{' '}
          <a href="#professional-status" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
            institutional and professional clients
          </a>
          . CFDs and Spread Bets are highly speculative products which carry a high level of risk and can result in
          losses exceeding your deposit. As such, they are not appropriate for every investor. Any information provided
          shall not be considered as investment advice and has been prepared without considering your individual
          objectives, financial situation or needs. Before deciding to trade our products, you should carefully consider
          your objectives, financial situation, and level of experience and risk appetite. If in any doubt, you should
          seek advice from an independent advisor. Past performance is not indicative of future results.{' '}
          <a href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/gmgprime/Risk+Warning+Notice.pdf" target="_blank" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
            View full risk warning
          </a>
          .
        </p>

        {/* Jurisdiction Notice */}
        <h3 className="text-[13px] font-semibold text-text-base text-accent-400">Jurisdiction Notice</h3>
        <p className="text-sm">
          The information on this site is not directed at residents of the United States, Japan, Canada, Belgium or any other jurisdiction where distribution or use would be contrary to local law or regulation. You must be of minimum legal age as determined by your country of origin to use services on this website.
        </p>

        {/* Professional Client Info (footnote) */}
        <div id="professional-status" className="text-[13px] text-text-mute/90 border-l-2 border-sky-400 pl-4 text-sm leading-7">
          Clients are able to obtain ‘professional’ status if they demonstrate experience of trading relevant products on
          their own account above a certain size, experience of working within the financial sector for at least one year
          in a relevant position, and/or a personal investment portfolio worth at least €500,000.
        </div>

        <p className="pt-4 text-[13px] text-text-base">© {year} {companyName} | All rights reserved.</p>
      </div>
    </footer>
  );
}
