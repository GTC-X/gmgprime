// hooks/useInView.ts
import { useEffect, useRef, useState } from "react";

export function useInView(options) {
  const ref = (useRef < HTMLDivElement) | (null > null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el); // animate once; remove this line to animate every time
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
