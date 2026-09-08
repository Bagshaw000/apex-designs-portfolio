"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms delay before the transition starts once in view */
  delay?: number;
  /** px to rise from */
  y?: number;
  /** also scale in from slightly enlarged — nice for images */
  zoom?: boolean;
  /** viewport fraction that must be visible to trigger */
  threshold?: number;
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

// Runs before paint on the client, falls back to useEffect during SSR.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  zoom = false,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // "ready" = JS has taken over and it's safe to animate.
  // Until then the content renders fully visible (no-JS / pre-hydration safe).
  const [ready, setReady] = useState(false);
  const [shown, setShown] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setReady(false);
      setShown(true);
      return;
    }

    setReady(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);

    // Safety net: if the observer never fires (odd viewport, prerender capture),
    // reveal anyway shortly after mount.
    const t = window.setTimeout(() => setShown(true), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [threshold]);

  const hidden = ready && !shown;

  return (
    <div
      ref={ref}
      className={className}
      style={
        ready
          ? {
              opacity: hidden ? 0 : 1,
              transform: hidden
                ? `translate3d(0, ${y}px, 0) scale(${zoom ? 1.06 : 1})`
                : "none",
              transition: `opacity 0.8s ${EASE} ${delay}ms, transform 1s ${EASE} ${delay}ms`,
              willChange: "opacity, transform",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
