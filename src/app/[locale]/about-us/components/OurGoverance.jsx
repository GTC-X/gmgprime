const Governance = () => {
    return (
        <section className="container py-12 xl:py-16">
            <h4 className="text-heading-3 mb-3 font-normal text-[#ED8946] ">Our governance and compliance</h4>
            <p className="text-neutral-300 max-w-[800px]">
                FCA authorisation (FRN 744501) with permissions that cover margin-trading client money, agency & principal,
                plus related activities. Client oversight led by the Counterparty, Privacy and Financial Crime frameworks
                with named owners and cross-business controls. Jurisdiction notice: this site is not directed at residents of
                the United States, Japan, Canada, Belgium or any region where use would contravene local law or regulation.
            </p>
            <div className="mt-4">
                <a
                    href="#disclosures"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-4 py-2 text-sm hover:bg-primary-700 transition-colors"
                >
                    View Disclosures
                </a>
            </div>
        </section>
    )
}

export default Governance;