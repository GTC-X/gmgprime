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
                    <a
                        href="#careers"
                        className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-5 py-3 text-sm hover:bg-primary-700 transition-colors"
                    >
                        See open roles
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Careers;