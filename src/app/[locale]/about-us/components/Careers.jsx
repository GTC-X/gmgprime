export default function CareersSection({
  careersUrl = "https://www.linkedin.com/company/109300379"
}) {
  return (
    <section className="container mb-10 mt:mb-14">
      {/* Gradient border container */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#F29B62] to-[#5B67E6]">
        {/* Inner content box */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#162166] via-primary-800 to-[#0c1447] px-6 py-8 md:px-10 md:py-8">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl md:text-2xl font-semibold text-[#F29B62]">
              Careers
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/80 max-w-2xl">
              We hire people who like solving hard problems for brokers. 
              If you are a strong fit for technology, operations, or client service, 
              we would like to hear from you.
            </p>
          </div>

          {/* Right CTA */}
          <div className="shrink-0">
            <a
              href={careersUrl}
              target="_blank"
              className="inline-flex items-center capitalize justify-center rounded-lg bg-[#F29B62] px-6 py-3 text-sm font-medium text-[#0B1C2B] hover:opacity-90 transition"
            >
              See open roles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
