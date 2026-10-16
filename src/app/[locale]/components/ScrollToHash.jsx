"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scroll = () => {
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scroll();
    const t = window.setTimeout(scroll, 100);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
