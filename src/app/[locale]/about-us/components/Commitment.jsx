const Commitments = () => {
    return (
        <section className="bg-primary-800 bg-[url('/images/bg.svg')] bg-no-repeat bg-top py-16 xl:py-24">
            <div className="container grid gap-10 xl:grid-cols-2 xl:items-center">
                <div>
                    <h3 className="text-heading-2 font-normal text-[#ED8946]">Our<br />Commitments</h3>
                </div>
                <ul className="space-y-3 text-neutral-100">
                    <li>Fair, clear and not misleading in every piece of client-facing content.</li>
                    <li>Never over-promise; we keep delivery realistic and measurable.</li>
                    <li>Price transparency via clear, contract-matched terms.</li>
                    <li>Security, regional segmentation and named owners for critical processes.</li>
                    <li>Partner-level support: proactive insights, rapid fixes and practical help.</li>
                </ul>

                <div className="xl:col-start-2">
                    <button
                        type="button"
                        className="transition-colors bg-[#ED8946] text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                    >
                        <span>View disclosures</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                            <path
                                fill="currentColor"
                                d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Commitments;