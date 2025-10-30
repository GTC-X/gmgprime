"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  if (!open) return <nav className="xl:hidden" style={{ display: "none" }} />;
  return (
    <nav className="xl:hidden">
      <ul className="flex flex-col">
        {[
          ["Home", "/"],
          ["About Us", "/about-us"],
          ["Partners", "/partners-with-us"],
          ["Technology", "/technology"],
          ["Contact", "/contact-us"],
        ].map(([label, href]) => (
          <li key={href}>
            <Link className="text-white block p-2 px-10 py-6 text-lg transition hover:text-accent-400" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
