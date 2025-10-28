const Governance = () => {
    return (
        <section className="container py-12 xl:py-16">
            <h4 className="text-heading-2 mb-3 font-normal text-[#ED8946] ">Our governance and compliance</h4>
            <p className="text-neutral-300 max-w-[800px]">
                FCA authorisation (FRN 744501) with permissions that cover margin-trading client money, agency & principal,
                plus related activities. Client oversight led by the Counterparty, Privacy and Financial Crime frameworks
                with named owners and cross-business controls. Jurisdiction notice: this site is not directed at residents of
                the United States, Japan, Canada, Belgium or any region where use would contravene local law or regulation.
            </p>
            <div className="mt-4">
                <button
                    type="button"
                    className="transition-colors bg-[#ED8946] text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                >
                    <span>View Disclosures</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                        <path
                            fill="currentColor"
                            d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                        />
                    </svg>
                </button>

            </div>
        </section>
    )
}

export default Governance;