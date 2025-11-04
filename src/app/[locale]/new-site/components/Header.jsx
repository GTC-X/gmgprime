"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Partners", "/partners-with-us"],
  ["Technology", "/technology"],
  ["Faqs", "/faqs"],
  ["Contact", "/contact-us"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  // lock body scroll when drawer open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // focus close button for a11y
      closeBtnRef.current?.focus();
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="border border-b border-gray-200/10">
      <header className="container relative z-50 flex items-center justify-between py-2">
        <div className="flex-1 justify-between text-white items-center xl:self-center">
          <Link href="/" aria-label="Scope Prime home">
            <Image src="/new/new-logo.svg" className="h-12" alt="Scope Prime" width={222} height={20} />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden grow md:block">
          <ul className="flex justify-end gap-x-6">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <Link
                  className="text-white block px-2 py-6 text-lg transition hover:text-accent-400"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="flex-1 self-center text-right xl:text-center md:hidden">
          <button
            className="-mt-1 p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400/60"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            {/* hamburger */}
            <span className="sr-only">Open menu</span>
            <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current">
              <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer & overlay */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Drawer panel */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 h-full w-[88%] max-w-[360px] md:hidden transform bg-navy-950/95 border-l border-white/10 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()} // prevent overlay click
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <Link href="/" aria-label="Scope Prime home" onClick={() => setOpen(false)}>
            <Image src="/new/new-logo.svg" alt="Scope Prime" width={120} height={16} />
          </Link>
          <button
            ref={closeBtnRef}
            className="p-2 rounded-md text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-400/60"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            {/* close icon */}
            <svg width="26" height="26" viewBox="0 0 24 24" className="fill-current">
              <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.18 12 2.89 5.71 4.3 4.29l6.29 6.29 6.3-6.29 1.41 1.42Z" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="px-4 py-3">
          <ul className="space-y-1">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center justify-between rounded-lg px-3 py-3 text-base text-white/90 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  <span>{label}</span>
                  {/* chevron */}
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-white/40 group-hover:text-accent-400 transition">
                    <path fill="currentColor" d="M9.29 6.71L13.59 11l-4.3 4.29 1.41 1.42L16.41 12 10.7 6.29 9.29 6.71Z" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

    
      </aside>
    </section>
  );
}
