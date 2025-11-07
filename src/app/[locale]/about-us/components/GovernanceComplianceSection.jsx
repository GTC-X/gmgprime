/* Our governance & compliance — matches the attached "How Onboarding Works" layout */
import Link from "next/link";
import CommonButton from "../../components/CommonButton";
export default function GovernanceComplianceSection({
  disclosuresUrl = "/disclosures"
}) {
  return (
    <section className="container mt-10 md:mt-14">
      {/* Gradient border shell */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#F29B62] to-[#5B67E6]">
        {/* Inner card */}
        <div className="rounded-2xl bg-primary-950 bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] px-6 py-8 md:px-10 md:py-10">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F29B62] capitalize">
            Our governance and compliance
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/70">
            A simple, transparent framework to keep you protected and compliant.
          </p>

          {/* Two-column items (1–4) */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* 1 */}
            <div className="flex items-start gap-4">
              <Badge>1</Badge>
              <div>
                <h3 className="font-semibold text-white">FCA authorisation</h3>
                <p className="mt-1 text-white/70">
                  FRN 744501 with permissions that cover arranging and dealing
                  in investments as agent or principal, plus related activities.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-4">
              <Badge>2</Badge>
              <div>
                <h3 className="font-semibold text-white">Client categorisation</h3>
                <p className="mt-1 text-white/70">
                  Eligible Counterparty, Professional and Retail (Investment)
                  in line with policy and assessment.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-4">
              <Badge>3</Badge>
              <div>
                <h3 className="font-semibold text-white">Policies available</h3>
                <p className="mt-1 text-white/70">
                  <a href="GLOBAL-MARKETS-GROUP_ORDER_EXECUTION_POLICY.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                    Risk Disclosure</a>,{" "}
                  <a href="GLOBAL-MARKETS-GROUP_CLIENT-CATEGORISATION-POLICY.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                    Client Categorisation</a>,{" "}
                  <a href="GLOBAL-MARKETS-GROUP-LIMITED_COMPLAINTS_HANDLING_AND_DISPUTES_PROCEDURE_AND_POLICY-1.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                    Conflicts of Interest</a>,{" "}
                  <a href="GLOBAL-MARKETS-GROUP-LIMITED_CONFLICTS_OF_INTEREST_POLICY.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                    Complaints Handling and Disputes</a>,{" "}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                    Privacy Policy.</a>
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex items-start gap-4">
              <Badge>4</Badge>
              <div>
                <h3 className="font-semibold text-white">Jurisdiction limits</h3>
                <p className="mt-1 text-white/70">
                  The information on this website is not directed at residents of any jurisdiction where FX trading and/or CFD trading is restricted or prohibited by local laws or regulations. 
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

/* Small number badge like the design */
function Badge({ children }) {
  return (
    <div className="grid h-7 w-7 place-items-center rounded-full bg-accent-700 ring-1 ring-white/15">
      <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white text-sm font-semibold">
        {children}
      </span>
    </div>
  );
}
