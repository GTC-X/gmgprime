import CommonButton from "../../components/CommonButton";

export default function ReadyToTalkSection({
  partnerUrl = "/partners",
  callUrl = "/book-a-call",
}) {
  return (
    <section className="container my-10">
      {/* Gradient border shell */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#F29B62] to-[#5B67E6]">
        {/* Inner card */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] px-6 py-8 md:px-10 md:py-8">
          {/* Left copy */}
          <div>
            <h2 className="text-2xl font-semibold text-[#F29B62]">Ready to talk?</h2>
            <p className="mt-2 text-sm md:text-base text-white/80 max-w-2xl">
              Bring your next business forward. Submit the short form and get onboarded quickly.
            </p>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <CommonButton>Become a Partner</CommonButton>
 </div>
        </div>
      </div>
    </section>
  );
}
