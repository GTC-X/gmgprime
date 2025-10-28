const Careers = () => {
    return (
        <section className="bg-[url('/images/bg.svg')] bg-no-repeat bg-top py-16 xl:py-24">
            <div className="container text-center">
                <h3 className="text-heading-2 mb-3 font-normal text-[#ED8946]">Careers</h3>
                <p className="mx-auto max-w-[760px] text-neutral-300">
                    We hire people who like solving hard problems for brokers. If you are strong in technology,
                    operations or client service, we’d love to hear from you.
                </p>
                <div className="mt-6">
                    <button
                        type="button"
                        className="transition-colors bg-[#ED8946] text-[18px] inline-flex items-center gap-1 hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                    >
                        <span>See open roles</span>
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

export default Careers;