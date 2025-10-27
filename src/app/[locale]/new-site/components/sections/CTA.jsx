export default function CTA() {
  return (
    <section className="py-20 xl:py-28">
      <div className="container">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-accent-400/0 via-accent-400 to-accent-400/0 p-0 pb-px">
          <div className="h-full rounded-2xl bg-primary-950 p-8 xl:p-10 !p-0">
            <section className="rounded-2xl bg-[url(/images/contact-form-bg.webp)] bg-cover bg-no-repeat p-8 xl:p-16">
              <div className="container">
                <div className="max-w-screen-md py-16">
                  <h1 className="text-heading-1 mb-12 font-normal">
                    Find out how our group’s synergies can open up new potential.
                  </h1>
                  <a
                    className="group overflow-hidden rounded-2xl border-2 border-accent-400 px-8 py-3 text-lg text-accent-400 transition-colors hover:border-accent-700 hover:text-accent-700"
                    href="/contact"
                  >
                    Contact Us
                    <img
                      alt="Icon"
                      width="16"
                      height="16"
                      className="ms-2 inline -translate-y-px group-hover:fill-accent-700"
                      src="/images/icons/arrow-right.svg"
                    />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
