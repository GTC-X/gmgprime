import CommonButton from "../../components/CommonButton";

const Commitments = () => {
    return (
        <section className="bg-[url('/images/bg.svg')] bg-no-repeat bg-top pb-10 xl:pb-14">
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

              
            </div>
        </section>
    )
}

export default Commitments;