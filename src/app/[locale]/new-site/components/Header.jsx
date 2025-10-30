"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="container relative z-50 flex items-center pt-4">
      <div className="flex-1 justify-between text-white xl:self-center">
        <Link href="/">
          <Image src="/new/new-logo.svg" className=" h-12"
            alt="Scope Prime" width={222} height={20} />
        </Link>
      </div>

      <nav className="hidden grow md:block">
        <ul className="flex justify-center gap-x-12">
          {[
            ["Home", "/"],
            ["About Us", "/about-us"],
            ["Partners", "/partners-with-us"],
            ["Technology", "/technology"],
            ["Faqs", "/faqs"],
            ["Contact", "/contact-us"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link className="text-white block px-2 py-6 text-lg transition hover:text-accent-400" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1 self-center text-right xl:text-center">
        <button
          className="-mt-4 p-0 text-6xl leading-none text-white xl:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((s) => !s)}
        >
          ≡
        </button>
        <Link
          className="hidden whitespace-nowrap rounded border-transparent p-2 text-lg text-accent-400 transition xl:block"
          href="/contact-us"
        >
          Request Demo
        </Link>
      </div>
    </header>
  );
}
