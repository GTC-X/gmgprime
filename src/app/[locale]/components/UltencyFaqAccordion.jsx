"use client";

import { useState } from "react";
import { ULTENCY_FAQS } from "../data/ultencyFaqs";

export default function UltencyFaqAccordion() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <div>
      <div className="space-y-3">
        {ULTENCY_FAQS.map((item, idx) => {
          const key = `ultency-${idx}`;
          const isOpen = openKey === key;
          return (
            <div
              key={key}
              className="overflow-hidden rounded-2xl p-px bg-gradient-to-r from-accent-400 via-sky-blue-500 to-sky-blue-600"
            >
              <div className="rounded-2xl bg-[#132F47]/95 backdrop-blur-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  aria-expanded={isOpen}
                  onClick={() => setOpenKey(isOpen ? null : key)}
                >
                  <span className="text-base md:text-lg font-semibold text-white">
                    {item.q}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-accent-400 transition-transform ${isOpen ? "rotate-90" : ""}`}
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 pb-5 pt-3 text-neutral-300 text-sm md:text-base leading-relaxed md:px-6 md:pb-6">
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

    </div>
  );
}
