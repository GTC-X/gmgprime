"use client";

import { useState } from "react";
import Link from "next/link";
import { ULTENCY_FAQS } from "../../../data/ultencyFaqs";

export default function HomeUltencyFaqs() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className="border-t border-white/5 py-12 md:py-16">
      <div className="container">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-heading-2 mb-2 text-white">FAQs</h2>
          <p className="text-neutral-400 text-body-2">
            Common questions about Ultency, pricing, onboarding, and how to
            reach our institutional desk.
          </p>
        </div>

        <div className=" space-y-3">
          {ULTENCY_FAQS.map((item, idx) => {
            const key = `ultency-${idx}`;
            const isOpen = openKey === key;
            return (
              <div
                key={key}
                className="overflow-hidden rounded-2xl p-px bg-[linear-gradient(66deg,var(--tw-gradient-stops))] from-accent-400 via-sky-blue-500 to-sky-blue-600"
              >
                <div className="rounded-2xl bg-[#132F47]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenKey(isOpen ? null : key)}
                  >
                    <span className="text-body-1-semibold text-white">
                      {item.q}
                    </span>
                    <span
                      className={`ms-2 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-500 transition-transform ${isOpen ? "rotate-90" : ""}`}
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-neutral-400 text-body-2">
                        {item.contact ? (
                          <>
                            Our institutional desk:{" "}
                            <a
                              href={`mailto:${item.contact.email}`}
                              className="text-accent-400 underline hover:text-accent-400/80"
                            >
                              {item.contact.email}
                            </a>
                            ,{" "}
                            <a
                              href={item.contact.phoneHref}
                              className="text-accent-400 underline hover:text-accent-400/80"
                            >
                              {item.contact.phone}
                            </a>
                          </>
                        ) : (
                          item.a
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/faqs"
            className="text-accent-400 text-sm font-medium underline-offset-4 hover:underline"
          >
            View all FAQs
          </Link>
        </p>
      </div>
    </section>
  );
}
