/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FiCheckCircle, FiHome, FiCalendar, FiExternalLink } from "react-icons/fi";
import NewCommonFooter from "../new-site/components/sections/Footer";

export const metadata = {
  title: "Thank You | GMG Prime",
  description:
    "Thank you for getting started with GMG Prime. Our onboarding team is reviewing your details. We'll be in touch shortly with next steps.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage({ searchParams }) {
  const ref = (searchParams && searchParams.ref) || "";
  const email = (searchParams && searchParams.email) || "";

  return (
    <main className="min-h-dvh bg-[#0a1942] text-white">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
 

        {/* Hero Card */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.35)]">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-[#0e2559] border border-[#24396f] p-2">
              <FiCheckCircle className="size-6" aria-hidden />
            </div>
            <div className="w-full">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e27c2f]" />
                Application Received
              </p>
              <h1 className="mt-2 text-2xl md:text-3xl font-semibold">
                Thank you for getting started with GMG Prime
              </h1>
              <p className="mt-3 text-white/90 leading-relaxed">
                Our onboarding team is reviewing your details. You’ll receive a follow-up email
                with the next steps shortly. We’re here to ensure fast integration and institutional
                pricing tailored to your brokerage’s stage.
              </p>

              {/* Reference / Email Summary */}
              {(ref || email) && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {ref ? (
                    <div className="rounded-lg border border-[#24396f] bg-[#0e2559] p-3 text-sm">
                      <div className="text-white/70">Reference</div>
                      <div className="font-semibold text-white">{ref}</div>
                    </div>
                  ) : null}
                  {email ? (
                    <div className="rounded-lg border border-[#24396f] bg-[#0e2559] p-3 text-sm">
                      <div className="text-white/70">Email</div>
                      <div className="font-semibold text-white break-all">{email}</div>
                    </div>
                  ) : null}
                </div>
              )}

              {/* Next Steps */}
              <div className="mt-6 rounded-xl border border-[#24396f] bg-[#0e2559] p-5">
                <p className="text-sm font-semibold" style={{ color: "#e27c2f" }}>
                  What happens next?
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/90">
                  <li>• You’ll receive an email with onboarding instructions.</li>
                  <li>• We may request documents to complete compliance checks.</li>
                  <li>• A relationship manager will reach out to support your integration.</li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e27c2f] px-4 py-2.5 text-sm font-semibold text-[#0a1942] transition-opacity hover:opacity-90"
                >
                  <FiHome className="size-4" aria-hidden />
                  Back to Home
                </Link>

               
              </div>
            </div>
          </div>
        </section>

        {/* Support strip */}
        <section className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 mb-20">
          <p className="text-sm text-white/90">
            Need help right now? Email{" "}
            <a
              href="mailto:support@gmgprime.com"
              className="font-semibold"
              style={{ color: "#e27c2f" }}
            >
              support@gmgprime.com
            </a>{" "}
            or call (+44) 0203 865 3306.
          </p>
        </section>

        {/* Legal / Footer */}
        <NewCommonFooter />
        
      </div>
    </main>
  );
}
